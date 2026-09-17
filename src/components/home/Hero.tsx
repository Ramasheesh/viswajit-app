"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Play } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

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

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero — Lighting that defines space"
      style={{
        "--mouse-x": "50%",
        "--mouse-y": "50%",
      } as React.CSSProperties}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero_bg.jpg"
          alt="Premium architectural interior with dramatic lighting design"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
        {/* Gradient overlays */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(180deg, rgba(5,5,5,0.8) 0%, rgba(5,5,5,0.45) 40%, rgba(5,5,5,0.92) 100%),
              linear-gradient(90deg, rgba(5,5,5,0.9) 0%, rgba(5,5,5,0.35) 55%, rgba(5,5,5,0.7) 100%)
            `,
          }}
        />
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-20" />
        {/* Mouse-reactive light */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(245,158,11,0.12) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated light beams */}
        <motion.div
          className="absolute top-0 left-[15%] w-px h-full"
          style={{
            background: "linear-gradient(180deg, transparent 0%, var(--accent) 50%, transparent 100%)",
            opacity: 0.2,
          }}
          animate={{ opacity: [0.1, 0.3, 0.1], scaleY: [0.9, 1, 0.9] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-0 left-[35%] w-px h-full"
          style={{
            background: "linear-gradient(180deg, transparent 0%, var(--accent) 50%, transparent 100%)",
            opacity: 0.15,
          }}
          animate={{ opacity: [0.05, 0.2, 0.05], scaleY: [0.95, 1, 0.95] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-0 left-[55%] w-px h-full"
          style={{
            background: "linear-gradient(180deg, transparent 0%, var(--accent) 50%, transparent 100%)",
            opacity: 0.15,
          }}
          animate={{ opacity: [0.08, 0.25, 0.08], scaleY: [0.92, 1, 0.92] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div
          className="absolute top-0 left-[75%] w-px h-full"
          style={{
            background: "linear-gradient(180deg, transparent 0%, var(--accent) 50%, transparent 100%)",
            opacity: 0.1,
          }}
          animate={{ opacity: [0.05, 0.15, 0.05], scaleY: [0.96, 1, 0.96] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />

        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 right-1/5 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(245,158,11,0.14) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{ y: [0, -25, 0], x: [0, 15, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
          animate={{ y: [0, 20, 0], x: [0, -12, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Main content */}
      <div className="section-container relative z-10" style={{ paddingTop: "8rem", paddingBottom: "5rem" }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="lg:col-span-7">
            {/* Label */}
            <motion.div
              className="inline-flex items-center gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="w-10 h-px" style={{ background: "var(--accent)" }} />
              <span
                className="text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: "var(--accent)" }}
              >
                Professional Lighting &amp; Electrical Contractor
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="font-extrabold leading-[0.9] tracking-tight mb-8"
              style={{
                fontSize: "clamp(3.5rem, 9vw, 7rem)",
                color: "var(--text-primary)",
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              LIGHTING
              <br />
              <span className="text-gradient">THAT</span>
              <br />
              DEFINES
              <br />
              <span className="text-gradient-subtle">SPACE.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl leading-relaxed mb-10 max-w-xl"
              style={{ color: "rgba(250,250,250,0.8)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Professional Lighting Design, Electrical Engineering &amp; Turnkey Contracting.
              <span className="hidden md:inline"> 2D planning, 3D visualization, expert execution.</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <Link
                href="/projects"
                id="hero-explore-projects"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "var(--accent)",
                  color: "var(--bg-primary)",
                  boxShadow: "0 4px 28px rgba(245,158,11,0.35)",
                }}
              >
                Explore Projects
                <ArrowRight size={22} />
              </Link>
              <Link
                href="/submit-project"
                id="hero-start-project"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "var(--text-primary)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                Start Your Project
              </Link>
              <Link
                href="/lighting"
                id="hero-view-3d"
                className="inline-flex items-center gap-3 px-6 py-4 rounded-xl font-semibold text-base transition-all duration-300"
                style={{ color: "var(--accent)", border: "1px solid rgba(245,158,11,0.35)" }}
              >
                <Play size={18} fill="currentColor" />
                <span className="hidden sm:inline">View 3D Lighting</span>
                <span className="sm:hidden">3D</span>
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex flex-wrap items-center gap-5 md:gap-8"
              style={{ color: "rgba(250,250,250,0.55)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {["2D Design", "3D Visualization", "Electrical Execution"].map((item, i) => (
                <span key={item} className="flex items-center gap-4 text-sm md:text-base">
                  {i > 0 && (
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "var(--accent)" }}
                    />
                  )}
                  <span className="tracking-wide font-medium">{item}</span>
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right side — Stats card */}
          <motion.div
            className="lg:col-span-5 hidden lg:flex justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Main stats card */}
              <div
                className="rounded-2xl p-10 md:p-12 relative overflow-hidden"
                style={{
                  minWidth: "360px",
                  maxWidth: "440px",
                  background: "rgba(18,18,18,0.85)",
                  backdropFilter: "blur(28px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
                }}
              >
                {/* Glow accent */}
                <div
                  className="absolute -top-24 -right-24 w-56 h-56 rounded-full pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, rgba(245,158,11,0.22) 0%, transparent 70%)",
                    filter: "blur(35px)",
                  }}
                />

                <div className="relative z-10">
                  <div
                    className="text-sm font-bold tracking-[0.2em] uppercase mb-10"
                    style={{ color: "var(--accent)" }}
                  >
                    Trusted Since 2010
                  </div>

                  <div className="grid grid-cols-2 gap-8 md:gap-10">
                    {[
                      { value: "15+", label: "Years Experience" },
                      { value: "250+", label: "Projects Delivered" },
                      { value: "50+", label: "Locations Served" },
                      { value: "100%", label: "Client Satisfaction" },
                    ].map((stat) => (
                      <div key={stat.label}>
                        <div
                          className="font-black leading-none mb-2.5"
                          style={{
                            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                            color: "var(--text-primary)",
                          }}
                        >
                          {stat.value}
                        </div>
                        <div
                          className="text-sm md:text-base font-medium"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    className="mt-10 pt-8 flex items-center gap-5"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "rgba(245,158,11,0.18)" }}
                    >
                      <Play size={20} style={{ color: "var(--accent)" }} fill="currentColor" />
                    </div>
                    <div>
                      <div className="text-base font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                        View Our Work
                      </div>
                      <div className="text-sm" style={{ color: "var(--text-muted)" }}>
                        See 2D &amp; 3D projects
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -top-5 -left-5 px-5 py-3 rounded-full text-sm font-bold flex items-center gap-2"
                style={{
                  background: "var(--accent)",
                  color: "var(--bg-primary)",
                  boxShadow: "0 8px 32px rgba(245,158,11,0.45)",
                }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for Projects
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span
          className="text-xs tracking-[0.25em] uppercase font-medium"
          style={{ color: "rgba(250,250,250,0.45)" }}
        >
          Scroll
        </span>
        <ChevronDown size={20} style={{ color: "var(--accent)" }} />
      </motion.div>
    </section>
  );
}
