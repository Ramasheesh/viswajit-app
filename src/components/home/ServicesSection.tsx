"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
  const featuredServices = services.slice(0, 4);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28 bg-zinc-950"
      id="services"
      aria-labelledby="services-heading"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(245,158,11,0.08) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

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
              <span>What We Do</span>
            </div>
            <h2
              id="services-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight"
            >
              Our Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">Services</span>
            </h2>
          </div>
          <Link
            href="/services"
            id="services-view-all"
            className="inline-flex items-center gap-2 font-bold text-base text-amber-400 self-start md:self-auto transition-all duration-200 hover:gap-3 hover:text-amber-300"
          >
            View all services
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        {/* Services grid with Card Images */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {featuredServices.map((service) => {
            const Icon = iconMap[service.icon] || Zap;
            return (
              <motion.div key={service.id} variants={itemVariants} className="flex">
                <Link
                  href={`/services/${service.slug}`}
                  id={`service-card-${service.slug}`}
                  className="group flex flex-col justify-between rounded-sm p-5 sm:p-6 w-full bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 hover:bg-zinc-850/80 transition-all duration-300 hover:-translate-y-1.5 shadow-xl"
                >
                  <div>
                    {/* Card Image preview */}
                    <div className="relative h-44 sm:h-48 w-full rounded-sm overflow-hidden mb-5 bg-black border border-white/5">
                      <Image
                        src={service.image || "/images/project_architectural.jpg"}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                      
                      {/* Floating number badge on image */}
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-sm text-xs font-mono font-bold bg-black/80 backdrop-blur-md border border-white/15 text-amber-400">
                        {service.number}
                      </div>

                      {/* Icon badge floating bottom-right */}
                      <div className="absolute bottom-3 right-3 w-10 h-10 rounded-sm flex items-center justify-center bg-zinc-900/90 backdrop-blur-md border border-white/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-all">
                        <Icon size={18} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-xl mb-2.5 text-white transition-colors duration-200 group-hover:text-amber-300 leading-snug">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* CTA Footer */}
                  <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-sm font-bold text-amber-400 group-hover:text-amber-300">
                    <span>Explore service</span>
                    <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
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
