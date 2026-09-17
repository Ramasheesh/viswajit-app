"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data/projects";

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function FeaturedProjects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden section-padding"
      id="featured-projects"
      aria-labelledby="projects-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-15" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="section-eyebrow">
              <span className="section-eyebrow-line" />
              <span className="section-eyebrow-text">Our Work</span>
            </div>
            <h2
              id="projects-heading"
              className="font-extrabold tracking-tight"
              style={{
                fontSize: "clamp(2.25rem, 5.5vw, 3.5rem)",
                color: "var(--text-primary)",
                lineHeight: 1.08,
              }}
            >
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>
          <Link
            href="/projects"
            id="projects-view-all"
            className="inline-flex items-center gap-2.5 font-semibold text-lg self-start md:self-auto transition-all duration-200 hover:gap-4"
            style={{ color: "var(--accent)" }}
          >
            View all projects
            <ArrowRight size={20} />
          </Link>
        </motion.div>

        {/* Project grid — Bento style */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={i === 0 ? "md:col-span-2 lg:col-span-2" : ""}
            >
              <Link
                href={`/projects/${project.slug}`}
                id={`project-card-${project.slug}`}
                className="group block relative overflow-hidden rounded-2xl h-full"
                style={{
                  aspectRatio: i === 0 ? "16/9" : "4/3",
                  minHeight: i === 0 ? "380px" : "300px",
                }}
              >
                {/* Image */}
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes={i === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                />

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(180deg, transparent 20%, rgba(5,5,5,0.65) 55%, rgba(5,5,5,0.95) 100%)",
                  }}
                />

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(245,158,11,0.1)" }}
                />

                {/* Category badge */}
                <div
                  className="absolute top-5 left-5 px-4 py-2 rounded-full text-sm font-bold tracking-widest uppercase"
                  style={{
                    background: "rgba(5,5,5,0.7)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "var(--accent)",
                  }}
                >
                  {project.category}
                </div>

                {/* Project info */}
                <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
                  <h3
                    className="font-extrabold mb-3 transition-transform duration-300 group-hover:-translate-y-1"
                    style={{
                      fontSize: i === 0 ? "clamp(1.5rem, 3vw, 2.25rem)" : "clamp(1.25rem, 2.5vw, 1.75rem)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {project.title}
                  </h3>

                  <div
                    className="flex items-center gap-5 text-base mb-4"
                    style={{ color: "rgba(250,250,250,0.7)" }}
                  >
                    <span className="flex items-center gap-2">
                      <MapPin size={16} />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar size={16} />
                      {project.year}
                    </span>
                  </div>

                  {/* CTA - visible on hover */}
                  <div
                    className="flex items-center gap-2.5 text-base font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                    style={{ color: "var(--accent)" }}
                  >
                    View Project <ExternalLink size={18} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
