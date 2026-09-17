"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Award, Users, Eye, Zap, CheckCircle, Clock, Sparkles, HeartHandshake,
} from "lucide-react";

const reasons = [
  { icon: Award, title: "Professional Design", desc: "Every project starts with a professionally engineered 2D plan — not guesswork." },
  { icon: Users, title: "Experienced Team", desc: "15+ years, 250+ projects. Our team has seen and solved it all." },
  { icon: Zap, title: "Design + Execution", desc: "One team handles design and installation. No miscommunication, no finger-pointing." },
  { icon: CheckCircle, title: "Quality Materials", desc: "We only use certified, tested fixtures and cables from reputable suppliers." },
  { icon: Eye, title: "On-Site Supervision", desc: "Our engineers are on-site through every critical phase of installation." },
  { icon: Sparkles, title: "Transparent Process", desc: "Detailed quotes, clear timelines, no hidden costs. You always know what's happening." },
  { icon: Clock, title: "Timely Execution", desc: "We respect your schedule. Projects are planned and executed on agreed timelines." },
  { icon: HeartHandshake, title: "Post-Project Support", desc: "We don't disappear after handover. Maintenance, tweaks and support — we're here." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
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

export default function WhyUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden section-padding"
      style={{ background: "var(--surface-0)" }}
      id="why-us"
      aria-labelledby="why-us-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

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
              <span className="section-eyebrow-text">Why Choose Us</span>
            </div>
          </div>
          <h2
            id="why-us-heading"
            className="font-extrabold tracking-tight"
            style={{
              fontSize: "clamp(2.25rem, 5.5vw, 3.5rem)",
              color: "var(--text-primary)",
              lineHeight: 1.08,
            }}
          >
            Why Clients <span className="text-gradient">Choose Us</span>
          </h2>
        </motion.div>

        {/* Reasons grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {reasons.map((reason) => (
            <motion.div key={reason.title} variants={itemVariants}>
              <div
                className="rounded-2xl p-8 md:p-10 h-full transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
                style={{
                  background: "var(--surface-1)",
                  border: "1px solid var(--border-default)",
                }}
              >
                {/* Hover border glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ border: "1px solid var(--border-accent)" }}
                />

                {/* Hover gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.06) 0%, transparent 60%)" }}
                />

                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "var(--accent-subtle)",
                    color: "var(--accent)",
                  }}
                >
                  <reason.icon size={28} />
                </div>
                <h3
                  className="font-bold text-xl mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  {reason.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
