"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { type LucideIcon, MessageSquare, MapPin, PenTool, Layers, FileText, ShoppingBag, Wrench, CheckCircle } from "lucide-react";
import { processSteps } from "@/lib/data/testimonials";

const iconMap: Record<string, LucideIcon> = {
  MessageSquare, MapPin, PenTool, Layers, FileText, ShoppingBag, Wrench, CheckCircle,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function ProcessSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden section-padding"
      id="process"
      aria-labelledby="process-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div
        className="absolute -left-32 top-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--accent-subtle) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-5">
            <div className="section-eyebrow">
              <span className="section-eyebrow-line" />
              <span className="section-eyebrow-text">How It Works</span>
            </div>
          </div>
          <h2
            id="process-heading"
            className="font-extrabold tracking-tight"
            style={{
              fontSize: "clamp(2.25rem, 5.5vw, 3.5rem)",
              color: "var(--text-primary)",
              lineHeight: 1.08,
            }}
          >
            Our <span className="text-gradient">Process</span>
          </h2>
        </motion.div>

        {/* Steps grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {processSteps.map((step, i) => {
            const Icon = iconMap[step.icon] || CheckCircle;
            return (
              <motion.div key={step.number} variants={itemVariants}>
                <div
                  className="rounded-2xl p-8 md:p-10 h-full transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
                  style={{
                    background: "var(--surface-1)",
                    border: "1px solid var(--border-default)",
                  }}
                >
                  {/* Hover gradient */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: "linear-gradient(135deg, rgba(245,158,11,0.07) 0%, transparent 55%)",
                    }}
                  />

                  {/* Hover border */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ border: "1px solid var(--border-accent)" }}
                  />

                  {/* Connector line — visible on lg */}
                  {i < processSteps.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px"
                      style={{ background: "var(--border-default)" }}
                    />
                  )}

                  <div className="relative z-10">
                    {/* Number and icon */}
                    <div className="flex items-center gap-4 mb-7">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center text-base font-black transition-colors duration-300"
                        style={{
                          background: "var(--accent-subtle)",
                          color: "var(--accent)",
                        }}
                      >
                        {step.number}
                      </div>
                      <Icon
                        size={24}
                        style={{ color: "var(--text-muted)" }}
                        className="transition-colors duration-300 group-hover:text-amber-400"
                      />
                    </div>

                    <h3
                      className="font-bold text-xl mb-4"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
