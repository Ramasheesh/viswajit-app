"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const capabilities = [
  "2D Lighting Design & CAD Planning",
  "3D Photorealistic Dialux Simulation",
  "Architectural & Façade Illumination",
  "Complete Electrical Contracting",
  "Turnkey Execution & Commissioning",
  "Post-Installation Safety Audits",
];

export default function AboutIntro() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28 bg-zinc-950"
      id="about-intro"
      aria-labelledby="about-intro-heading"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
      <div
        className="absolute -right-40 top-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-5 text-xs sm:text-sm font-bold uppercase tracking-widest">
              <Sparkles size={15} />
              <span>About Viswajit</span>
            </div>

            <h2
              id="about-intro-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight mb-6"
            >
              We don&apos;t just install fixtures.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
                We engineer illumination.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-200 leading-relaxed mb-4">
              From architectural blueprint to the final luminous atmosphere, we transform spaces through rigorous lighting photometrics and certified electrical contracting.
            </p>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-8">
              Trusted by architects, interior designers, property developers, and luxury homeowners across North India,
              Viswajit Electrical &amp; Lighting delivers turnkey solutions combining dedicated studio design with licensed, safety-audited on-site execution.
            </p>

            {/* Capabilities badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              {capabilities.map((cap) => (
                <div
                  key={cap}
                  className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-zinc-200 px-4 py-2.5 rounded-sm bg-zinc-900 border border-zinc-800 shadow-sm hover:border-amber-500/40 transition-colors"
                >
                  <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              id="about-learn-more"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-sm font-bold text-base bg-amber-500 text-black hover:bg-amber-400 shadow-xl shadow-amber-500/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              Learn Our Full Story
              <ArrowRight size={20} />
            </Link>
          </motion.div>

          {/* Right Column: Studio Excellence Card */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-sm p-8 sm:p-10 relative overflow-hidden bg-zinc-900 border border-zinc-700/80 shadow-2xl">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-600" />

              {/* Corner ambient glow */}
              <div
                className="absolute -bottom-24 -right-24 w-52 h-52 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(245,158,11,0.18) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />

              <div className="relative z-10">
                {/* Big Experience Milestone */}
                <div className="mb-8">
                  <div className="font-black text-6xl sm:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 leading-none mb-2">
                    15+
                  </div>
                  <div className="font-extrabold text-2xl text-white">
                    Years of Excellence
                  </div>
                  <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-400 mt-1">
                    Delivered Across North India
                  </div>
                </div>

                {/* Core Workflow Pillars */}
                <div className="space-y-6">
                  {[
                    {
                      title: "Design-First Engineering",
                      desc: "2D CAD layouts and 3D Dialux raytracing validate beam angles, lux levels, and glare (UGR < 19) before physical wiring.",
                    },
                    {
                      title: "Certified Master Execution",
                      desc: "Govt-licensed electrical engineers ensure flawless load balancing, premium conduits, and code compliance on every site.",
                    },
                    {
                      title: "Turnkey Accountability",
                      desc: "One dedicated partner for consultation, procurement, installation, photometric commissioning, and warranty support.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 group">
                      <div className="w-1.5 rounded-full shrink-0 bg-gradient-to-b from-amber-400 to-amber-600 self-stretch" />
                      <div>
                        <div className="font-bold text-base sm:text-lg text-white mb-1 group-hover:text-amber-300 transition-colors">
                          {item.title}
                        </div>
                        <div className="text-sm text-zinc-300 leading-relaxed">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
