"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { timeline } from "@/lib/data/testimonials";

export default function ExperienceTimeline() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-zinc-950"
      id="timeline"
      aria-labelledby="timeline-heading"
    >
      {/* Background */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-8 h-px bg-amber-400" />
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-amber-400">Our Journey</span>
          </div>
          <h2
            id="timeline-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white"
          >
            15 Years of <span className="text-gradient">Excellence</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500 to-transparent"
            style={{ transformOrigin: "top" }}
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
          />

          <div className="space-y-8 sm:space-y-10">
            {timeline.map((event, i) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 pl-12 md:pl-0 ${
                    i % 2 === 0 ? "md:pr-14 md:text-right" : "md:pl-14"
                  }`}
                >
                  <div className="inline-block px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wider mb-2.5 bg-amber-500/10 border border-amber-500/30 text-amber-400">
                    {event.year}
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-white">
                    {event.title}
                  </h3>
                  <p
                    className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-md"
                    style={{
                      marginLeft: i % 2 !== 0 ? 0 : "auto",
                    }}
                  >
                    {event.description}
                  </p>
                </div>

                {/* Center dot */}
                <div className="absolute left-5 md:left-1/2 top-2 -translate-x-1/2 flex items-center justify-center">
                  <div className="w-3.5 h-3.5 rounded-full border-2 bg-black border-amber-400" />
                  {i === timeline.length - 1 && (
                    <div className="absolute w-5 h-5 rounded-full bg-amber-400/20 border border-amber-400 animate-ping" />
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
