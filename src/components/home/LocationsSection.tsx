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
      className="relative overflow-hidden section-padding"
      id="locations"
      aria-labelledby="locations-heading"
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
              <span className="section-eyebrow-text">Where We Work</span>
            </div>
            <h2
              id="locations-heading"
              className="font-extrabold tracking-tight"
              style={{
                fontSize: "clamp(2.25rem, 5.5vw, 3.5rem)",
                color: "var(--text-primary)",
                lineHeight: 1.08,
              }}
            >
              Areas <span className="text-gradient">Served</span>
            </h2>
          </div>
          <Link
            href="/locations"
            id="locations-view-all"
            className="inline-flex items-center gap-2.5 font-semibold text-lg self-start md:self-auto transition-all duration-200 hover:gap-4"
            style={{ color: "var(--accent)" }}
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
                className="group block rounded-xl p-5 md:p-6 transition-all duration-200 hover:-translate-y-1"
                style={{
                  background: "var(--surface-1)",
                  border: "1px solid var(--border-default)",
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <MapPin size={20} style={{ color: "var(--accent)" }} />
                  <span
                    className="text-base font-bold"
                    style={{ color: "var(--accent)" }}
                  >
                    {loc.projects}+
                  </span>
                </div>
                <h3
                  className="font-bold text-base md:text-lg mb-1 transition-colors duration-200"
                  style={{ color: "var(--text-primary)" }}
                >
                  {loc.name}
                </h3>
                <p className="text-sm md:text-base" style={{ color: "var(--text-muted)" }}>
                  projects
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          className="mt-14 rounded-2xl p-10 md:p-16 text-center relative overflow-hidden"
          style={{
            background: "var(--surface-1)",
            border: "1px solid var(--border-default)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, var(--accent-subtle) 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10">
            <p
              className="text-sm tracking-[0.15em] uppercase mb-4 font-bold"
              style={{ color: "var(--accent)" }}
            >
              Your city not listed?
            </p>
            <h3
              className="font-extrabold mb-5"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "var(--text-primary)",
                lineHeight: 1.1,
              }}
            >
              We travel for the right project.
            </h3>
            <p
              className="text-lg mb-10 max-w-lg mx-auto"
              style={{ color: "var(--text-muted)" }}
            >
              Contact us to discuss your project location. We have delivered projects across North and Central India.
            </p>
            <Link
              href="/contact"
              id="location-contact"
              className="inline-flex items-center gap-2.5 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "var(--accent)",
                color: "var(--bg-primary)",
                boxShadow: "0 4px 24px rgba(245,158,11,0.35)",
              }}
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
