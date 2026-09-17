"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { timeline } from "@/lib/data/testimonials";

export default function ExperienceTimeline() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden section-padding"
      style={{ background: "var(--surface-0)" }}
      id="timeline"
      aria-labelledby="timeline-heading"
    >
      {/* Background */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--accent-subtle) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          className="mb-14 md:mb-18"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow mb-5">
            <span className="section-eyebrow-line" />
            <span className="section-eyebrow-text">Our Journey</span>
          </div>
          <h2
            id="timeline-heading"
            className="font-extrabold tracking-tight"
            style={{
              fontSize: "clamp(2.25rem, 5.5vw, 3.5rem)",
              color: "var(--text-primary)",
              lineHeight: 1.08,
            }}
          >
            15 Years of <span className="text-gradient">Excellence</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px"
            style={{
              background: "linear-gradient(180deg, var(--accent) 0%, transparent 100%)",
              transformOrigin: "top",
            }}
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
          />

          <div className="space-y-12">
            {timeline.map((event, i) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className={`relative flex items-start gap-8 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 pl-14 md:pl-0 ${
                    i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                  }`}
                >
                  <div
                    className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-4"
                    style={{
                      background: "var(--accent-subtle)",
                      border: "1px solid var(--border-accent)",
                      color: "var(--accent)",
                    }}
                  >
                    {event.year}
                  </div>
                  <h3
                    className="font-bold text-xl mb-3"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {event.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed max-w-xs"
                    style={{
                      color: "var(--text-muted)",
                      marginLeft: i % 2 !== 0 ? 0 : "auto",
                    }}
                  >
                    {event.description}
                  </p>
                </div>

                {/* Center dot */}
                <div className="absolute left-5 md:left-1/2 top-2 -translate-x-1/2 flex items-center justify-center">
                  <div
                    className="w-4 h-4 rounded-full border-2"
                    style={{
                      background: "var(--bg-primary)",
                      borderColor: "var(--accent)",
                    }}
                  />
                  {i === timeline.length - 1 && (
                    <div
                      className="absolute w-6 h-6 rounded-full animate-pulse-glow"
                      style={{
                        background: "var(--accent-glow)",
                        border: "1px solid var(--accent)",
                      }}
                    />
                  )}
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
