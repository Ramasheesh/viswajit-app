"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const views = [
  {
    id: "2d",
    label: "2D DESIGN",
    title: "Technical Lighting Plans",
    description: "Comprehensive CAD-based lighting layouts with fixture positions, circuit diagrams, lux calculations and electrical scheduling. Every plan is designed for installation accuracy and code compliance.",
    image: "/images/project_2d_plan.jpg",
    color: "#60a5fa",
    features: ["Reflected ceiling plans", "Fixture schedules", "Circuit diagrams", "Lux calculations", "CAD/DWG format"],
  },
  {
    id: "3d",
    label: "3D VISUALIZATION",
    title: "Photorealistic Renders",
    description: "See your space illuminated before a single fixture is installed. Our 3D renders simulate real light behavior — bounce, shadow, color temperature and luminance — with photographic accuracy.",
    image: "/images/project_3d_render.jpg",
    color: "#f59e0b",
    features: ["Photorealistic quality", "Day & night scenarios", "Color temperature", "Material accuracy", "Virtual walkthrough"],
  },
  {
    id: "executed",
    label: "INSTALLED",
    title: "Completed Projects",
    description: "The final installed result. Our projects match the 3D visualization — because we design with execution in mind. Every fixture position, every control system, every detail planned and delivered.",
    image: "/images/project_residential.jpg",
    color: "#34d399",
    features: ["Matches 3D render", "Professional installation", "Tested & commissioned", "Handover documentation", "Ongoing support"],
  },
];

export default function LightingPage() {
  const [active, setActive] = useState("2d");
  const current = views.find((v) => v.id === active) || views[0];

  return (
    <div className="min-h-screen" style={{ paddingTop: "80px", background: "var(--background)" }}>
      {/* Hero */}
      <div className="relative py-20 md:py-28 arch-grid overflow-hidden" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at top, var(--accent-glow), transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="section-number mb-4">2D & 3D Lighting</div>
          <h1 className="section-title mb-4" style={{ color: "var(--text-primary)" }}>
            Design → Visualize → <span className="text-gradient">Execute</span>
          </h1>
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            We transform lighting concepts into precise technical plans and photorealistic visualizations — before a single fixture is installed.
          </p>
        </div>
      </div>

      {/* Tab switcher */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center mb-12">
          <div className="flex p-1.5 gap-1 rounded-2xl" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
            {views.map((v) => (
              <button
                key={v.id}
                id={`lighting-tab-${v.id}`}
                onClick={() => setActive(v.id)}
                className="px-6 py-3 rounded-xl text-xs font-bold tracking-wide transition-all duration-300"
                style={{
                  background: active === v.id ? v.color : "transparent",
                  color: active === v.id ? "#000" : "var(--text-secondary)",
                }}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute top-5 left-5 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest"
                  style={{ background: "rgba(8,8,8,0.8)", border: `1px solid ${current.color}`, color: current.color }}
                >
                  {current.label}
                </div>
              </div>

              {/* Text */}
              <div>
                <div className="font-bold text-xs tracking-widest mb-3" style={{ color: current.color }}>
                  STAGE — {current.label}
                </div>
                <h2 className="text-3xl md:text-4xl font-black mb-5" style={{ color: "var(--text-primary)" }}>
                  {current.title}
                </h2>
                <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
                  {current.description}
                </p>
                <div className="space-y-3">
                  {current.features.map((f) => (
                    <div key={f} className="flex items-center gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: current.color }} />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Gallery */}
        <div className="mt-20">
          <h2 className="text-2xl font-black mb-8" style={{ color: "var(--text-primary)" }}>
            Full Lighting <span className="text-gradient">Gallery</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { src: "/images/project_2d_plan.jpg", label: "2D Plan", color: "#60a5fa" },
              { src: "/images/project_3d_render.jpg", label: "3D Render", color: "#f59e0b" },
              { src: "/images/project_residential.jpg", label: "Installed", color: "#34d399" },
              { src: "/images/project_architectural.jpg", label: "Architectural", color: "#f59e0b" },
              { src: "/images/project_hospitality.jpg", label: "Hospitality", color: "#34d399" },
              { src: "/images/project_exterior.jpg", label: "Exterior", color: "#60a5fa" },
            ].map((item, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden aspect-video group">
                <Image src={item.src} alt={item.label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(8,8,8,0.7) 100%)" }} />
                <div
                  className="absolute bottom-3 left-3 px-2 py-1 rounded text-xs font-bold"
                  style={{ background: "rgba(8,8,8,0.8)", color: item.color, border: `1px solid ${item.color}` }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
