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
      <div
        className="font-black mb-3 transition-transform duration-300 group-hover:scale-105"
        style={{
          fontSize: "clamp(3.25rem, 7vw, 5rem)",
          color: "var(--text-primary)",
        }}
      >
        <span className="text-gradient">{count}</span>
        <span style={{ color: "var(--accent)" }}>{suffix}</span>
      </div>
      <div
        className="font-bold text-lg md:text-xl mb-2"
        style={{ color: "var(--text-primary)" }}
      >
        {label}
      </div>
      <div
        className="text-base leading-relaxed max-w-[220px] mx-auto"
        style={{ color: "var(--text-muted)" }}
      >
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
      className="relative overflow-hidden"
      style={{
        paddingBlock: "clamp(4rem, 8vw, 6rem)",
        background: "var(--surface-1)",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
      aria-label="Company statistics"
    >
      {/* Background decoration */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, var(--accent-subtle) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="section-container relative z-10">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {stats.map((s, i) => (
            <div key={s.label} className="relative">
              {/* Divider - hidden on mobile and last item */}
              {i < stats.length - 1 && (
                <div
                  className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-24"
                  style={{ background: "var(--border-default)" }}
                />
              )}
              {/* Mobile divider */}
              {i % 2 === 0 && (
                <div
                  className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2 w-px h-16"
                  style={{ background: "var(--border-subtle)" }}
                />
              )}
              <AnimatedStat {...s} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
