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
      className="relative overflow-hidden section-padding"
      id="lighting-showcase"
      aria-labelledby="showcase-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, var(--accent-subtle) 0%, transparent 60%)",
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
              <span className="section-eyebrow-text">Our Workflow</span>
            </div>
          </div>
          <h2
            id="showcase-heading"
            className="font-extrabold tracking-tight mb-6"
            style={{
              fontSize: "clamp(2.25rem, 5.5vw, 3.5rem)",
              color: "var(--text-primary)",
              lineHeight: 1.08,
            }}
          >
            Design &rarr; Visualize &rarr; <span className="text-gradient">Execute</span>
          </h2>
          <p
            className="text-xl max-w-2xl mx-auto"
            style={{ color: "var(--text-muted)" }}
          >
            We don&apos;t just install lights. We design, visualize and execute complete lighting systems.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          className="flex justify-center mb-14"
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div
            className="flex p-2 gap-1.5 rounded-2xl"
            style={{
              background: "var(--surface-1)",
              border: "1px solid var(--border-default)",
            }}
          >
            {stages.map((stage) => (
              <button
                key={stage.id}
                id={`showcase-tab-${stage.id}`}
                onClick={() => setActive(stage.id)}
                className="px-7 py-3.5 rounded-xl text-sm font-bold tracking-widest transition-all duration-200"
                style={{
                  background: active === stage.id ? "var(--accent)" : "transparent",
                  color: active === stage.id ? "var(--bg-primary)" : "var(--text-muted)",
                }}
              >
                {stage.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
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
                      background: "linear-gradient(180deg, transparent 50%, rgba(5,5,5,0.5) 100%)",
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Stage tag */}
              <div
                className="absolute top-5 left-5 px-4 py-2 rounded-full text-sm font-bold tracking-widest"
                style={{
                  background: "rgba(5,5,5,0.7)",
                  backdropFilter: "blur(12px)",
                  border: `1px solid ${current.color}`,
                  color: current.color,
                }}
              >
                {current.tag}
              </div>
            </div>

            {/* Step indicators */}
            <div className="flex justify-center gap-6 mt-7">
              {stages.map((stage, i) => (
                <div key={stage.id} className="flex items-center gap-6">
                  <button
                    onClick={() => setActive(stage.id)}
                    className="flex items-center gap-2.5 group"
                    aria-label={`Switch to ${stage.label}`}
                  >
                    <div
                      className="w-3 h-3 rounded-full transition-all duration-200"
                      style={{
                        background: active === stage.id ? "var(--accent)" : "var(--border-default)",
                        transform: active === stage.id ? "scale(1.5)" : "scale(1)",
                      }}
                    />
                    <span
                      className="text-sm font-medium transition-colors duration-200"
                      style={{
                        color: active === stage.id ? "var(--accent)" : "var(--text-muted)",
                      }}
                    >
                      {stage.label}
                    </span>
                  </button>
                  {i < stages.length - 1 && (
                    <div className="w-10 h-px" style={{ background: "var(--border-default)" }} />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <div
                  className="text-sm font-bold tracking-[0.15em] mb-5 uppercase"
                  style={{ color: current.color }}
                >
                  STAGE — {current.label}
                </div>
                <h3
                  className="font-extrabold mb-7"
                  style={{
                    fontSize: "clamp(2rem, 5vw, 3rem)",
                    color: "var(--text-primary)",
                    lineHeight: 1.1,
                  }}
                >
                  {current.title}
                </h3>
                <p
                  className="text-xl leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Step list */}
            <div className="mt-10 space-y-4">
              {stages.map((stage, i) => (
                <button
                  key={stage.id}
                  onClick={() => setActive(stage.id)}
                  className="w-full flex items-center gap-5 p-5 rounded-xl text-left transition-all duration-200"
                  style={{
                    background: active === stage.id ? "var(--surface-1)" : "transparent",
                    border: `1px solid ${active === stage.id ? stage.color : "var(--border-default)"}`,
                    opacity: active === stage.id ? 1 : 0.6,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black shrink-0"
                    style={{
                      background: active === stage.id ? stage.color : "var(--surface-2)",
                      color: active === stage.id ? "var(--bg-primary)" : "var(--text-muted)",
                    }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-bold text-lg" style={{ color: "var(--text-primary)" }}>
                      {stage.label}
                    </div>
                    <div className="text-base" style={{ color: "var(--text-muted)" }}>
                      {stage.title}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/lighting"
                id="showcase-view-more"
                className="inline-flex items-center gap-2.5 font-bold text-lg transition-all duration-200 hover:gap-4"
                style={{ color: "var(--accent)" }}
              >
                View 2D &amp; 3D gallery
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
