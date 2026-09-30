"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar, ExternalLink, CheckCircle2, Activity } from "lucide-react";
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
  // Take featured projects (which now include both finished luxury projects & active ongoing site works)
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28 bg-zinc-950"
      id="featured-projects"
      aria-labelledby="projects-heading"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 w-full">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-widest mb-4">
              <span>Real Works Portfolio</span>
            </div>
            <h2
              id="projects-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight"
            >
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">Projects &amp; Site Works</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              From commissioned luxury living spaces to active live site execution and profile lighting.
            </p>
          </div>
          <Link
            href="/projects"
            id="projects-view-all"
            className="inline-flex items-center gap-2 font-bold text-base text-amber-400 self-start md:self-auto transition-all duration-200 hover:gap-3 hover:text-amber-300"
          >
            View all projects &amp; site works
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        {/* Project grid — Bento style */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {featured.map((project, i) => {
            const isOngoing = project.status === "ongoing";

            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={i === 0 ? "md:col-span-2 lg:col-span-2" : ""}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  id={`project-card-${project.slug}`}
                  className={`group block relative overflow-hidden rounded-sm w-full border border-zinc-800 shadow-2xl transition-all duration-300 hover:border-amber-500/50 hover:shadow-amber-500/10 ${
                    i === 0 ? "h-[440px] sm:h-[500px]" : "h-[380px] sm:h-[440px]"
                  }`}
                >
                  {/* Project Image */}
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes={i === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 transition-opacity duration-300 bg-gradient-to-t from-black via-black/65 to-transparent" />

                  {/* Status & Category Badges */}
                  <div className="absolute top-5 left-5 flex flex-wrap items-center gap-2 z-10">
                    {isOngoing ? (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm text-xs font-bold tracking-wider uppercase bg-amber-500 text-black shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping" />
                        <span>ONGOING SITE WORK</span>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm text-xs font-bold tracking-wider uppercase bg-emerald-500 text-white shadow-md">
                        <CheckCircle2 size={13} />
                        <span>FINISHED WORK</span>
                      </div>
                    )}

                    <div className="px-3 py-1 rounded-sm text-xs font-bold tracking-wider uppercase bg-black/80 backdrop-blur-md border border-white/15 text-amber-400">
                      {project.category}
                    </div>
                  </div>

                  {/* Project info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10 flex flex-col justify-end">
                    {project.currentStage && (
                      <div className="text-xs font-bold text-amber-300 mb-1.5 flex items-center gap-1.5">
                        <Activity size={12} className="animate-pulse text-amber-400" />
                        <span>Milestone: {project.currentStage}</span>
                      </div>
                    )}

                    <h3
                      className={`font-bold mb-3 text-white transition-colors duration-200 group-hover:text-amber-300 leading-snug ${
                        i === 0 ? "text-2xl sm:text-3xl lg:text-4xl font-black" : "text-xl sm:text-2xl font-bold"
                      }`}
                    >
                      {project.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-5 text-sm text-zinc-300 mb-4 font-medium">
                      <span className="flex items-center gap-2">
                        <MapPin size={16} className="text-amber-400 shrink-0" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar size={16} className="text-amber-400 shrink-0" />
                        {project.year}
                      </span>
                    </div>

                    {/* CTA link */}
                    <div className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 transition-all duration-200 group-hover:gap-3 group-hover:text-amber-300">
                      <span>View Case Study &amp; Site Photos</span>
                      <ExternalLink size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
