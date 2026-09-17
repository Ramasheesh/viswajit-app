"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

function AnimatedStat({ value, suffix, label, description }: StatProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const started = useRef(false);

  useEffect(() => {
    if (inView && !started.current) {
      started.current = true;
      const duration = 2000;
      const steps = 50;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center group">
      <div className="text-4xl sm:text-5xl lg:text-6xl font-black mb-2 transition-transform duration-300 group-hover:scale-105 text-white">
        <span className="text-gradient">{count}</span>
        <span className="text-amber-400">{suffix}</span>
      </div>
      <div className="font-bold text-base sm:text-lg mb-1.5 text-white">
        {label}
      </div>
      <div className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-[240px] mx-auto">
        {description}
      </div>
    </div>
  );
}

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const stats: StatProps[] = [
    { value: 15, suffix: "+", label: "Years Experience", description: "Trusted expertise since 2010" },
    { value: 250, suffix: "+", label: "Projects Delivered", description: "Residential, commercial & beyond" },
    { value: 50, suffix: "+", label: "Locations Served", description: "Across North & Central India" },
    { value: 100, suffix: "%", label: "Client Satisfaction", description: "Design · Execute · Deliver" },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-12 sm:py-14 md:py-16 border-y border-zinc-800/80 bg-zinc-950"
      aria-label="Company statistics"
    >
      {/* Background decoration */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(245,158,11,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {stats.map((s, i) => (
            <div key={s.label} className="relative">
              {/* Divider - hidden on mobile and last item */}
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-zinc-800" />
              )}
              {/* Mobile divider */}
              {i % 2 === 0 && (
                <div className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-zinc-800/60" />
              )}
              <AnimatedStat {...s} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
