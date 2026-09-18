"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Award, Users, Eye, Zap, CheckCircle, Clock, Sparkles, HeartHandshake,
} from "lucide-react";

const reasons = [
  { icon: Award, title: "Photometric Design", desc: "Every project starts with an engineered 2D layout and Dialux calculations — zero guesswork." },
  { icon: Users, title: "15+ Years Experience", desc: "Over 250+ delivered projects across North India. Our engineers have mastered every architectural nuance." },
  { icon: Zap, title: "Design + Execution", desc: "Single-source accountability. We bridge the gap between design studio and electrical execution." },
  { icon: CheckCircle, title: "Premium Material Spec", desc: "We exclusively specify high-CRI (95+), IP-rated fixtures and tested cabling from top global manufacturers." },
  { icon: Eye, title: "Supervised Contracting", desc: "Our licensed senior electrical engineers supervise every conduit, fixture angle, and load balance on-site." },
  { icon: Sparkles, title: "Transparent Engineering", desc: "Detailed BOQs, clear lux targets, and scheduled milestones. No surprises, no hidden overheads." },
  { icon: Clock, title: "Turnkey Timelines", desc: "We align with interior designers and civil contractors to execute strictly within agreed handover dates." },
  { icon: HeartHandshake, title: "Post-Handover Care", desc: "Complete warranty documentation, photometric sign-offs, and ongoing support long after lights turn on." },
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
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28 bg-zinc-950"
      id="why-us"
      aria-labelledby="why-us-heading"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

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
            <span>Why Choose Viswajit</span>
          </div>
          <h2
            id="why-us-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4 leading-tight"
          >
            Why Leading Architects &amp; Owners <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
              Trust Our Studio
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
            Combining design studio sensitivity with rigorous on-ground electrical contracting.
          </p>
        </motion.div>

        {/* Reasons grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {reasons.map((reason) => (
            <motion.div key={reason.title} variants={itemVariants} className="flex">
              <div className="rounded-sm p-7 sm:p-8 w-full bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 hover:bg-zinc-850/80 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-start group">
                <div className="w-14 h-14 rounded-sm flex items-center justify-center mb-6 bg-amber-500/15 text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                  <reason.icon size={26} />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white group-hover:text-amber-300 transition-colors duration-200 leading-snug">
                  {reason.title}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
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
