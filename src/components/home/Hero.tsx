"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Layers, Compass, CheckCircle2, Sparkles } from "lucide-react";

const previewModes = [
  {
    id: "3d",
    tab: "3D Visualization",
    title: "Photorealistic 3D Lighting Render",
    desc: "Simulate lux levels, warm colour temperatures & beam angles before physical installation.",
    image: "/images/project_3d_render.jpg",
    badge: "3000K Architectural Warm",
    stat1: "480 Lux",
    stat1Label: "Avg. Illuminance",
    stat2: "CRI 98+",
    stat2Label: "Colour Rendering",
  },
  {
    id: "2d",
    tab: "2D CAD & Photometrics",
    title: "Dialux Photometric Engineering",
    desc: "Complete electrical load distribution, conduit mapping and glare control (UGR < 19).",
    image: "/images/project_2d_plan.jpg",
    badge: "Dialux CAD Validated",
    stat1: "UGR < 19",
    stat1Label: "Anti-Glare Rating",
    stat2: "100% Load",
    stat2Label: "Safe Distribution",
  },
  {
    id: "execution",
    tab: "On-Site Execution",
    title: "Certified Turnkey Contracting",
    desc: "Master licensed electricians, laser-aligned fixtures, and full post-commissioning sign-off.",
    image: "/images/project_architectural.jpg",
    badge: "Turnkey Completed",
    stat1: "IP65 Rated",
    stat1Label: "Weather & Moisture",
    stat2: "100% Tested",
    stat2Label: "Safety Audited",
  },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const tabsScrollRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (!tabsScrollRef.current) return;
    const activeButton = tabsScrollRef.current.children[activeTab] as HTMLElement | undefined;
    if (activeButton) {
      activeButton.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, [activeTab]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      heroRef.current.style.setProperty("--mouse-x", `${x}%`);
      heroRef.current.style.setProperty("--mouse-y", `${y}%`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const currentPreview = previewModes[activeTab];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 sm:py-28 lg:py-32 w-full bg-zinc-950"
      aria-label="Hero — Architectural Lighting and Engineering"
      style={{
        "--mouse-x": "50%",
        "--mouse-y": "50%",
      } as React.CSSProperties}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/hero_bg.jpg"
          alt="Architectural lighting interior background"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
        {/* Deep contrast gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/92 to-zinc-950/75 dark-hero-gradient-r" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-zinc-950 dark-hero-gradient-b" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
        {/* Mouse glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(245,158,11,0.12) 0%, transparent 45%)`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full">
          {/* Left Hero Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow badge */}
            <motion.div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-700 dark:text-amber-400 mb-6 font-bold shadow-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles size={16} className="text-amber-600 dark:text-amber-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-bold tracking-wider uppercase">
                Architectural Lighting &amp; Turnkey Electrical
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08] mb-6 text-zinc-950 dark:text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Lighting That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 dark:from-amber-300 dark:via-amber-100 dark:to-amber-400 drop-shadow-[0_2px_18px_rgba(245,158,11,0.2)]">
                Defines Space.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg sm:text-xl text-zinc-800 dark:text-zinc-100 leading-relaxed mb-8 max-w-xl font-medium dark:font-normal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              We design, simulate, and execute turnkey architectural lighting for luxury residences, commercial landmarks, and institutional spaces.
              <span className="block mt-2 text-zinc-700 dark:text-zinc-300 text-base sm:text-lg font-normal">
                Precision 2D CAD engineering, photorealistic 3D Dialux calculations, and certified on-site contracting.
              </span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                href="/submit-project"
                id="hero-start-project"
                className="inline-flex items-center justify-center gap-3 px-8 sm:px-9 py-4 rounded-sm font-bold text-base sm:text-lg leading-normal whitespace-nowrap bg-amber-500 text-black hover:bg-amber-400 transition-all duration-200 hover:-translate-y-0.5 shadow-xl shadow-amber-500/25 active:scale-95"
              >
                <span>Start Your Project</span>
                <ArrowRight size={20} className="shrink-0" />
              </Link>
              <Link
                href="/projects"
                id="hero-explore-projects"
                className="inline-flex items-center justify-center gap-3 px-8 sm:px-9 py-4 rounded-sm font-bold text-base sm:text-lg leading-normal whitespace-nowrap bg-zinc-100 text-zinc-950 border border-zinc-300 hover:bg-zinc-200 dark:bg-zinc-900/90 dark:text-zinc-100 dark:border-zinc-700/80 dark:hover:bg-zinc-800 dark:hover:text-white transition-all duration-200 hover:-translate-y-0.5 shadow-md active:scale-95"
              >
                <span>Explore Projects</span>
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              className="flex flex-wrap items-center gap-3 sm:gap-3.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {[
                { label: "Dialux Photometrics", icon: Compass },
                { label: "3D Photorealistic Simulation", icon: Layers },
                { label: "Certified Master Electricians", icon: CheckCircle2 },
              ].map((item) => (
                <div
                  key={item.label}
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-sm bg-zinc-100 border border-zinc-300 text-zinc-900 dark:bg-zinc-900/90 dark:border-zinc-700/80 dark:text-zinc-100 text-xs sm:text-sm font-semibold shadow-sm whitespace-nowrap"
                >
                  <item.icon size={16} className="text-amber-600 dark:text-amber-300 shrink-0" />
                  <span>{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: High-End Interactive Lighting Showcase */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end w-full mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="w-full max-w-[480px] rounded-sm overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700/80 shadow-2xl relative">
              {/* Interactive Tabs with Horizontal Scroll */}
              <div className="relative bg-zinc-100 dark:bg-zinc-950/90 border-b border-zinc-200 dark:border-zinc-800">
                {/* Horizontal Scroll Track */}
                <div
                  ref={tabsScrollRef}
                  className="flex items-center gap-2 p-2.5 overflow-x-auto scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:bg-amber-500/40 hover:[&::-webkit-scrollbar-thumb]:bg-amber-500/80 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-zinc-200 dark:[&::-webkit-scrollbar-track]:bg-zinc-950/80 [scrollbar-width:thin] [scrollbar-color:rgba(245,158,11,0.4)_transparent]"
                >
                  {previewModes.map((mode, idx) => (
                    <button
                      key={mode.id}
                      onClick={(e) => {
                        setActiveTab(idx);
                        e.currentTarget.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
                      }}
                      className={`shrink-0 py-2 px-4 rounded-sm text-xs sm:text-sm font-bold transition-all text-center whitespace-nowrap cursor-pointer snap-start select-none ${activeTab === idx
                        ? "bg-amber-500 text-black shadow-md shadow-amber-500/25 ring-1 ring-amber-400"
                        : "text-zinc-700 hover:text-zinc-950 hover:bg-zinc-200 bg-zinc-200/80 border border-zinc-300 dark:text-zinc-200 dark:hover:text-white dark:hover:bg-zinc-800/80 dark:bg-zinc-900/80 dark:border-zinc-700/70"
                        }`}
                    >
                      {mode.tab}
                    </button>
                  ))}
                </div>

                {/* Sub-bar with navigation arrows and stage counter */}
                <div className="flex items-center justify-between px-3 py-1.5 bg-zinc-100/90 dark:bg-zinc-950/60 border-t border-zinc-200 dark:border-zinc-800/50 text-[11px] text-zinc-600 dark:text-zinc-300 font-medium">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 animate-pulse" />
                    <span>Scroll or switch mode ({activeTab + 1}/{previewModes.length})</span>
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => {
                        const nextIdx = (activeTab - 1 + previewModes.length) % previewModes.length;
                        setActiveTab(nextIdx);
                      }}
                      className="p-1 rounded-sm bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:border-amber-500/40 transition-all cursor-pointer"
                      aria-label="Previous mode"
                      title="Previous mode"
                    >
                      <ChevronLeft size={13} />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const nextIdx = (activeTab + 1) % previewModes.length;
                        setActiveTab(nextIdx);
                      }}
                      className="p-1 rounded-sm bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:border-amber-500/40 transition-all cursor-pointer"
                      aria-label="Next mode"
                      title="Next mode"
                    >
                      <ChevronRight size={13} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Preview Image with transition */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPreview.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={currentPreview.image}
                      alt={currentPreview.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 480px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                    {/* Tag badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-sm text-xs font-bold bg-black/80 backdrop-blur-md border border-amber-500/40 text-amber-400 keep-white">
                      {currentPreview.badge}
                    </div>

                    {/* Metric pill */}
                    <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-sm text-xs font-bold bg-zinc-900/90 backdrop-blur-md border border-zinc-700 text-white keep-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                      Live Stage Preview
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Floating Left/Right Navigation Arrows on Image */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveTab((prev) => (prev - 1 + previewModes.length) % previewModes.length);
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-sm bg-black/70 hover:bg-amber-500 hover:text-black text-white keep-white backdrop-blur-md border border-white/15 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg active:scale-95 z-20"
                  aria-label="Previous preview"
                >
                  <ChevronLeft size={16} className="text-white keep-white" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveTab((prev) => (prev + 1) % previewModes.length);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-sm bg-black/70 hover:bg-amber-500 hover:text-black text-white keep-white backdrop-blur-md border border-white/15 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg active:scale-95 z-20"
                  aria-label="Next preview"
                >
                  <ChevronRight size={16} className="text-white keep-white" />
                </button>
              </div>

              {/* Card Technical Specs Info */}
              <div className="p-6 sm:p-7 bg-white dark:bg-zinc-900">
                <h3 className="text-xl font-bold text-zinc-950 dark:text-white mb-2 leading-snug">
                  {currentPreview.title}
                </h3>
                <p className="text-sm text-zinc-700 dark:text-zinc-200 mb-6 leading-relaxed font-medium dark:font-normal">
                  {currentPreview.desc}
                </p>

                {/* Live Photometrics Row */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <div className="p-3.5 rounded-sm bg-zinc-50 dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800/80">
                    <div className="text-lg sm:text-xl font-black text-amber-600 dark:text-amber-300">
                      {currentPreview.stat1}
                    </div>
                    <div className="text-xs font-bold text-zinc-600 dark:text-zinc-300 mt-0.5">
                      {currentPreview.stat1Label}
                    </div>
                  </div>
                  <div className="p-3.5 rounded-sm bg-zinc-50 dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800/80">
                    <div className="text-lg sm:text-xl font-black text-zinc-950 dark:text-white">
                      {currentPreview.stat2}
                    </div>
                    <div className="text-xs font-bold text-zinc-600 dark:text-zinc-300 mt-0.5">
                      {currentPreview.stat2Label}
                    </div>
                  </div>
                </div>

                {/* Link to 3D showcase */}
                <div className="mt-5 pt-4 flex items-center justify-between border-t border-zinc-200 dark:border-zinc-800/60">
                  <span className="text-xs font-medium text-zinc-600 dark:text-zinc-300">
                    Experience full 3D interactive views
                  </span>
                  <Link
                    href="/lighting"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-600 hover:text-amber-700 dark:text-amber-300 dark:hover:text-amber-200 transition-colors"
                  >
                    View 3D Demo
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 pointer-events-none"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs tracking-widest uppercase font-semibold text-zinc-500">
          Scroll Down
        </span>
        <ChevronDown size={18} className="text-amber-400" />
      </motion.div>
    </section>
  );
}
