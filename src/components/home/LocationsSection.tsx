"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { locations } from "@/lib/data/locations";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function LocationsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-zinc-950"
      id="locations"
      aria-labelledby="locations-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 w-full">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-0.5 bg-amber-500 rounded-full" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-400">Where We Work</span>
            </div>
            <h2
              id="locations-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white"
            >
              Areas <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Served</span>
            </h2>
          </div>
          <Link
            href="/locations"
            id="locations-view-all"
            className="inline-flex items-center gap-2 font-semibold text-base sm:text-lg text-amber-400 self-start md:self-auto transition-all duration-200 hover:gap-3 hover:text-amber-300"
          >
            View all locations
            <ArrowRight size={20} />
          </Link>
        </motion.div>

        {/* Locations grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {locations.map((loc) => (
            <motion.div key={loc.id} variants={itemVariants}>
              <Link
                href={`/locations#${loc.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="group block rounded-2xl p-5 md:p-6 bg-zinc-900 border border-zinc-800 transition-all duration-200 hover:-translate-y-1 hover:border-amber-500/40 hover:bg-zinc-800/80 shadow-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <MapPin size={22} className="text-amber-400 group-hover:scale-110 transition-transform" />
                  <span className="text-base font-bold text-amber-400">
                    {loc.projects}+
                  </span>
                </div>
                <h3 className="font-bold text-base md:text-lg text-white mb-1 group-hover:text-amber-400 transition-colors">
                  {loc.name}
                </h3>
                <p className="text-sm font-medium text-zinc-400">
                  projects completed
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          className="mt-12 sm:mt-16 rounded-3xl p-8 sm:p-12 md:p-14 text-center relative overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.12)_0%,transparent_70%)]" />
          
          <div className="relative z-10">
            <p className="text-xs sm:text-sm tracking-widest uppercase mb-3 font-bold text-amber-400">
              Your city not listed?
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              We travel for the right project.
            </h3>
            <p className="text-base sm:text-lg text-zinc-300 mb-8 max-w-xl mx-auto leading-relaxed">
              Contact us to discuss your project location. We have delivered projects across North and Central India.
            </p>
            <Link
              href="/contact"
              id="location-contact"
              className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg bg-amber-500 text-black hover:bg-amber-400 transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-amber-500/20"
            >
              Get in Touch
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
