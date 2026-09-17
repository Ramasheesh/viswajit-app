"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  const current = testimonials[active];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-zinc-950"
      id="testimonials"
      aria-labelledby="testimonials-heading"
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(245,158,11,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center mb-2">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-px bg-amber-400" />
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-amber-400">Client Stories</span>
            </div>
          </div>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white"
          >
            What Clients <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative"
        >
          <div className="rounded-3xl p-8 sm:p-12 relative overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl">
            {/* Top accent */}
            <div
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"
            />

            {/* Quote icon */}
            <div className="absolute top-8 right-8 opacity-10 pointer-events-none">
              <Quote size={80} className="text-amber-400" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Stars */}
                <div className="flex gap-1.5 mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 relative z-10 text-white font-medium">
                  &ldquo;{current.review}&rdquo;
                </p>

                {/* Client info */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-xl shrink-0 bg-amber-500 text-black shadow-lg shadow-amber-500/20">
                    {current.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-lg sm:text-xl text-white">
                      {current.name}
                    </div>
                    <div className="text-sm sm:text-base text-zinc-400">
                      {current.role}
                      {current.company ? `, ${current.company}` : ""} · {current.location}
                    </div>
                    <div className="text-sm font-semibold text-amber-400 mt-1">
                      {current.projectType}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: active === i ? "28px" : "10px",
                    height: "10px",
                    background: active === i ? "#f59e0b" : "rgba(255,255,255,0.2)",
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                id="testimonial-prev"
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 bg-zinc-900 border border-zinc-800 text-white hover:border-zinc-700"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                id="testimonial-next"
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 bg-amber-500 text-black hover:bg-amber-400 shadow-md shadow-amber-500/20"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
