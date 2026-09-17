"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { type LucideIcon, ArrowRight, PenTool, Layers, Building2, Home, Zap, Key, BarChart3, Wrench } from "lucide-react";
import { services } from "@/lib/data/services";

const iconMap: Record<string, LucideIcon> = {
  PenTool, Layers, Building2, Home, Zap, Key, BarChart3, Wrench,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function ServicesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden section-padding"
      style={{ background: "var(--surface-0)" }}
      id="services"
      aria-labelledby="services-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, var(--accent-subtle) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

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
              <span className="section-eyebrow-text">What We Do</span>
            </div>
            <h2
              id="services-heading"
              className="font-extrabold tracking-tight"
              style={{
                fontSize: "clamp(2.25rem, 5.5vw, 3.5rem)",
                color: "var(--text-primary)",
                lineHeight: 1.08,
              }}
            >
              Our <span className="text-gradient">Services</span>
            </h2>
          </div>
          <Link
            href="/services"
            id="services-view-all"
            className="inline-flex items-center gap-2.5 font-semibold text-lg self-start md:self-auto transition-all duration-200 hover:gap-4"
            style={{ color: "var(--accent)" }}
          >
            View all services
            <ArrowRight size={20} />
          </Link>
        </motion.div>

        {/* Services grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Zap;
            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Link
                  href={`/services/${service.slug}`}
                  id={`service-card-${service.slug}`}
                  className="group block rounded-2xl p-8 md:p-10 h-full transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                  style={{
                    background: "var(--surface-1)",
                    border: "1px solid var(--border-default)",
                  }}
                >
                  {/* Hover gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: "linear-gradient(135deg, rgba(245,158,11,0.08) 0%, transparent 60%)",
                    }}
                  />

                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    style={{ background: "linear-gradient(90deg, var(--accent), transparent)" }}
                  />

                  {/* Hover border */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ border: "1px solid var(--border-accent)" }}
                  />

                  {/* Number */}
                  <div
                    className="text-xs font-bold tracking-[0.15em] mb-6"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {service.number}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-7 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: "var(--accent-subtle)",
                      color: "var(--accent)",
                    }}
                  >
                    <Icon size={28} />
                  </div>

                  {/* Title */}
                  <h3
                    className="font-bold text-xl mb-4 transition-colors duration-200"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-base leading-relaxed mb-6 line-clamp-3"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {service.shortDescription}
                  </p>

                  {/* CTA */}
                  <div
                    className="flex items-center gap-2.5 text-base font-semibold transition-all duration-200 group-hover:gap-4"
                    style={{ color: "var(--accent)" }}
                  >
                    Learn more
                    <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
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
