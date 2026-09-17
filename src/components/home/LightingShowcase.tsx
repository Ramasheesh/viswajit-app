"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stages = [
  {
    id: "2d",
    label: "DESIGN",
    title: "2D Lighting Plan",
    description:
      "Every project starts with a precision technical 2D lighting layout — fixture placement, circuit routing, lux levels and electrical scheduling. Built in CAD for absolute accuracy.",
    image: "/images/project_2d_plan.jpg",
    tag: "2D PLAN",
    color: "#60a5fa",
  },
  {
    id: "3d",
    label: "VISUALIZE",
    title: "3D Visualization",
    description:
      "Before a single fixture is installed, you see your space exactly as it will look. Photorealistic 3D renders with accurate light simulation — eliminating surprises, building confidence.",
    image: "/images/project_3d_render.jpg",
    tag: "3D RENDER",
    color: "var(--accent)",
  },
  {
    id: "executed",
    label: "EXECUTE",
    title: "Completed Project",
    description:
      "The installed result matches the vision — on time and on budget. Our team executes every detail, from rough-in to final commissioning and handover.",
    image: "/images/project_residential.jpg",
    tag: "INSTALLED",
    color: "#34d399",
  },
];

export default function LightingShowcase() {
  const [active, setActive] = useState("2d");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const current = stages.find((s) => s.id === active) || stages[0];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-zinc-950"
      id="lighting-showcase"
      aria-labelledby="showcase-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(245,158,11,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center mb-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-px bg-amber-400" />
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-amber-400">Our Workflow</span>
            </div>
          </div>
          <h2
            id="showcase-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3"
          >
            Design &rarr; Visualize &rarr; <span className="text-gradient">Execute</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 max-w-xl mx-auto">
            We don&apos;t just install lights. We design, visualize and execute complete lighting systems.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          className="flex justify-center mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex p-1.5 gap-1 rounded-2xl bg-zinc-900 border border-zinc-800">
            {stages.map((stage) => (
              <button
                key={stage.id}
                id={`showcase-tab-${stage.id}`}
                onClick={() => setActive(stage.id)}
                className={`px-5 py-2.5 sm:px-7 sm:py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wider transition-all duration-200 ${
                  active === stage.id
                    ? "bg-amber-500 text-black shadow-md shadow-amber-500/20"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {stage.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-zinc-800 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(180deg, transparent 50%, rgba(5,5,5,0.6) 100%)",
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Stage tag */}
              <div
                className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider"
                style={{
                  background: "rgba(5,5,5,0.8)",
                  backdropFilter: "blur(12px)",
                  border: `1px solid ${current.color}`,
                  color: current.color,
                }}
              >
                {current.tag}
              </div>
            </div>

            {/* Step indicators */}
            <div className="flex justify-center gap-5 mt-6">
              {stages.map((stage, i) => (
                <div key={stage.id} className="flex items-center gap-5">
                  <button
                    onClick={() => setActive(stage.id)}
                    className="flex items-center gap-2.5 group"
                    aria-label={`Switch to ${stage.label}`}
                  >
                    <div
                      className="w-3 h-3 rounded-full transition-all duration-200"
                      style={{
                        background: active === stage.id ? "var(--accent)" : "rgba(255,255,255,0.2)",
                        transform: active === stage.id ? "scale(1.4)" : "scale(1)",
                      }}
                    />
                    <span
                      className={`text-xs sm:text-sm font-semibold transition-colors duration-200 ${
                        active === stage.id ? "text-amber-400" : "text-zinc-500"
                      }`}
                    >
                      {stage.label}
                    </span>
                  </button>
                  {i < stages.length - 1 && (
                    <div className="w-8 h-px bg-zinc-800" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="text-xs sm:text-sm font-bold tracking-widest mb-2 uppercase"
                  style={{ color: current.color }}
                >
                  STAGE — {current.label}
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
                  {current.title}
                </h3>
                <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-6">
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Step list */}
            <div className="space-y-3">
              {stages.map((stage, i) => (
                <button
                  key={stage.id}
                  onClick={() => setActive(stage.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-200 border ${
                    active === stage.id
                      ? "bg-zinc-900 border-amber-500/50 shadow-lg shadow-amber-500/5"
                      : "bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700 opacity-80"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs sm:text-sm font-black shrink-0 ${
                      active === stage.id
                        ? "bg-amber-500 text-black"
                        : "bg-zinc-800 text-zinc-400"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-bold text-sm sm:text-base text-white">
                      {stage.label}
                    </div>
                    <div className="text-xs sm:text-sm text-zinc-400">
                      {stage.title}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/lighting"
                id="showcase-view-more"
                className="inline-flex items-center gap-2 font-semibold text-base text-amber-400 transition-all duration-200 hover:gap-3"
              >
                View 2D &amp; 3D gallery
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
