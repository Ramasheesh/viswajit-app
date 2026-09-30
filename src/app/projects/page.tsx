"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, ArrowRight, Filter, CheckCircle2, Clock, Activity } from "lucide-react";
import { projects } from "@/lib/data/projects";

const statusFilters = [
  { label: "All Works", value: "all" },
  { label: "Completed Works", value: "completed" },
  { label: "Current Ongoing Works", value: "ongoing" },
];

const categoryFilters = ["All Categories", "Residential", "Commercial", "Architectural"];

export default function ProjectsPage() {
  const [activeStatus, setActiveStatus] = useState("all");
  const [activeCategory, setActiveCategory] = useState("All Categories");

  const filtered = projects.filter((p) => {
    const matchesStatus =
      activeStatus === "all" ? true : p.status === activeStatus;
    const matchesCategory =
      activeCategory === "All Categories" ? true : p.category === activeCategory;
    return matchesStatus && matchesCategory;
  });

  const completedCount = projects.filter((p) => p.status === "completed").length;
  const ongoingCount = projects.filter((p) => p.status === "ongoing").length;

  return (
    <div className="min-h-screen" style={{ paddingTop: "80px", background: "var(--background)" }}>
      {/* Hero */}
      <div
        className="relative py-20 md:py-28 arch-grid"
        style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top, var(--accent-glow), transparent 60%)" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="section-number mb-4">Our Real Portfolio</div>
          <h1 className="section-title mb-4" style={{ color: "var(--text-primary)" }}>
            Project <span className="text-gradient">Portfolio &amp; Site Works</span>
          </h1>
          <p className="text-base max-w-2xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Explore our real architectural lighting installations and ongoing on-site electrical contracting.
            From finished luxury residences to active ongoing works in progress.
          </p>

          {/* Quick Metrics */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
              <CheckCircle2 size={14} />
              <span>{completedCount} Finished Works Delivered</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
              <Activity size={14} className="animate-pulse" />
              <span>{ongoingCount} Current Ongoing Projects On-Site</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div
        className="sticky top-18 z-30 py-4 backdrop-blur-xl"
        style={{ background: "var(--glass)", borderBottom: "1px solid var(--border)", top: "72px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Status Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {statusFilters.map((tab) => (
                <button
                  key={tab.value}
                  id={`status-filter-${tab.value}`}
                  onClick={() => setActiveStatus(tab.value)}
                  className="shrink-0 px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-2"
                  style={{
                    background: activeStatus === tab.value ? "var(--accent)" : "var(--surface)",
                    color: activeStatus === tab.value ? "#000" : "var(--text-secondary)",
                    border: `1px solid ${activeStatus === tab.value ? "var(--accent)" : "var(--border)"}`,
                  }}
                >
                  {tab.value === "ongoing" && (
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  )}
                  {tab.value === "completed" && (
                    <CheckCircle2 size={13} className={activeStatus === tab.value ? "text-black" : "text-emerald-400"} />
                  )}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Category Dropdown / Pills */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
              <Filter size={14} style={{ color: "var(--text-muted)", flexShrink: 0 }} />
              {categoryFilters.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer"
                  style={{
                    background: activeCategory === cat ? "var(--surface-2)" : "transparent",
                    color: activeCategory === cat ? "var(--accent)" : "var(--text-muted)",
                    border: `1px solid ${activeCategory === cat ? "rgba(245,158,11,0.3)" : "transparent"}`,
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  id={`project-${project.slug}`}
                  className="group block rounded-2xl overflow-hidden image-reveal h-full flex flex-col"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-106"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-400"
                      style={{ background: "rgba(8,8,8,0.4)" }}
                    />

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4 flex flex-col gap-1.5 items-start z-10">
                      {project.status === "ongoing" ? (
                        <div
                          className="px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg backdrop-blur-md"
                          style={{
                            background: "rgba(245, 158, 11, 0.9)",
                            color: "#000",
                            border: "1px solid rgba(255, 255, 255, 0.4)",
                          }}
                        >
                          <span className="w-2 h-2 rounded-full bg-black animate-ping" />
                          <span>CURRENT ONGOING WORK</span>
                        </div>
                      ) : (
                        <div
                          className="px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg backdrop-blur-md"
                          style={{
                            background: "rgba(16, 185, 129, 0.9)",
                            color: "#fff",
                            border: "1px solid rgba(255, 255, 255, 0.3)",
                          }}
                        >
                          <CheckCircle2 size={13} />
                          <span>FINISHED WORK</span>
                        </div>
                      )}

                      <div
                        className="px-2.5 py-1 rounded-md text-[11px] font-semibold backdrop-blur-md"
                        style={{
                          background: "rgba(8,8,8,0.85)",
                          color: "var(--accent)",
                          border: "1px solid rgba(245,158,11,0.3)",
                        }}
                      >
                        {project.category}
                      </div>
                    </div>

                    {/* Hover Link */}
                    <div
                      className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-center gap-1.5 text-xs font-bold z-10 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md"
                      style={{ color: "var(--accent)" }}
                    >
                      View Case Study &amp; Gallery <ArrowRight size={12} />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {project.currentStage && (
                        <div className="text-xs font-semibold text-amber-400 mb-2 flex items-center gap-1.5">
                          <Clock size={12} />
                          <span>Stage: {project.currentStage}</span>
                        </div>
                      )}
                      <h2
                        className="font-black text-lg mb-2 group-hover:text-amber-400 transition-colors leading-snug"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {project.title}
                      </h2>
                      <p
                        className="text-xs line-clamp-2 mb-4 leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-4 text-xs mb-3" style={{ color: "var(--text-muted)" }}>
                        <span className="flex items-center gap-1">
                          <MapPin size={11} className="text-amber-400" />
                          {project.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={11} className="text-amber-400" />
                          {project.year}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/60">
                        {project.services.slice(0, 3).map((s) => (
                          <span
                            key={s}
                            className="text-[11px] px-2.5 py-0.5 rounded-md font-medium"
                            style={{
                              background: "var(--surface-2)",
                              color: "var(--text-muted)",
                              border: "1px solid var(--border)",
                            }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-24" style={{ color: "var(--text-muted)" }}>
            No projects found matching the selected filters.
          </div>
        )}
      </div>
    </div>
  );
}
