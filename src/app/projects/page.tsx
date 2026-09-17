"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowRight, Filter } from "lucide-react";
import { projects } from "@/lib/data/projects";

const categories = ["All", "Residential", "Commercial", "Architectural", "Hospitality", "Exterior"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

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
          <div className="section-number mb-4">Our Portfolio</div>
          <h1 className="section-title mb-4" style={{ color: "var(--text-primary)" }}>
            Project <span className="text-gradient">Gallery</span>
          </h1>
          <p className="text-base max-w-xl" style={{ color: "var(--text-secondary)" }}>
            A curated selection of our residential, commercial, architectural and hospitality lighting projects.
          </p>
        </div>
      </div>

      {/* Filter */}
      <div
        className="sticky top-18 z-30 py-4 backdrop-blur-xl"
        style={{ background: "var(--glass)", borderBottom: "1px solid var(--border)", top: "72px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <Filter size={14} style={{ color: "var(--text-muted)", flexShrink: 0 }} />
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase()}`}
                onClick={() => setActiveCategory(cat)}
                className="shrink-0 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200"
                style={{
                  background: activeCategory === cat ? "var(--accent)" : "var(--surface)",
                  color: activeCategory === cat ? "#000" : "var(--text-secondary)",
                  border: `1px solid ${activeCategory === cat ? "var(--accent)" : "var(--border)"}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                id={`project-${project.slug}`}
                className="group block rounded-2xl overflow-hidden image-reveal"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
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
                  <div
                    className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{ background: "rgba(8,8,8,0.8)", color: "var(--accent)", border: "1px solid rgba(245,158,11,0.3)" }}
                  >
                    {project.category}
                  </div>
                  <div
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-center gap-1.5 text-xs font-semibold"
                    style={{ color: "var(--accent)" }}
                  >
                    View Case Study <ArrowRight size={12} />
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h2 className="font-black text-base mb-2 group-hover:text-amber-400 transition-colors" style={{ color: "var(--text-primary)" }}>
                    {project.title}
                  </h2>
                  <div className="flex items-center gap-4 text-xs" style={{ color: "var(--text-muted)" }}>
                    <span className="flex items-center gap-1"><MapPin size={10} />{project.location}</span>
                    <span className="flex items-center gap-1"><Calendar size={10} />{project.year}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.services.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{ background: "var(--surface-2)", color: "var(--text-muted)", border: "1px solid var(--border)" }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24" style={{ color: "var(--text-muted)" }}>
            No projects found in this category.
          </div>
        )}
      </div>
    </div>
  );
}
