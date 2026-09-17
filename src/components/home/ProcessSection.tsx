"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { type LucideIcon, MessageSquare, MapPin, PenTool, Layers, FileText, ShoppingBag, Wrench, CheckCircle, Sparkles } from "lucide-react";
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
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28 bg-zinc-950"
      id="process"
      aria-labelledby="process-heading"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
      <div
        className="absolute -left-32 top-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 w-full">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-widest mb-4">
            <Sparkles size={15} />
            <span>Methodology</span>
          </div>
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4 leading-tight"
          >
            Our Turnkey <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">Execution Process</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
            From initial concept consultation to photometric commissioning and post-handover support.
          </p>
        </motion.div>

        {/* Steps grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {processSteps.map((step, i) => {
            const Icon = iconMap[step.icon] || CheckCircle;
            return (
              <motion.div key={step.number} variants={itemVariants} className="flex">
                <div className="rounded-3xl p-8 w-full bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 hover:bg-zinc-850/80 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-start group relative overflow-hidden">
                  {/* Connector line — visible on lg */}
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-zinc-800" />
                  )}

                  <div className="relative z-10">
                    {/* Number and icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-black font-mono bg-amber-500 text-black shadow-md shadow-amber-500/20">
                        {step.number}
                      </div>
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-zinc-800/80 text-zinc-400 group-hover:text-amber-400 group-hover:bg-amber-500/15 transition-all">
                        <Icon size={22} />
                      </div>
                    </div>

                    <h3 className="font-bold text-xl mb-3 text-white group-hover:text-amber-300 transition-colors duration-200 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-zinc-300 leading-relaxed">
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
