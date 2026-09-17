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
      className="relative overflow-hidden section-padding"
      style={{ background: "var(--surface-0)" }}
      id="testimonials"
      aria-labelledby="testimonials-heading"
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, var(--accent-subtle) 0%, transparent 60%)",
        }}
      />

      <div
        className="section-container relative z-10"
        style={{ maxWidth: "900px" }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-5">
            <div className="section-eyebrow">
              <span className="section-eyebrow-line" />
              <span className="section-eyebrow-text">Client Stories</span>
            </div>
          </div>
          <h2
            id="testimonials-heading"
            className="font-extrabold tracking-tight"
            style={{
              fontSize: "clamp(2.25rem, 5.5vw, 3.5rem)",
              color: "var(--text-primary)",
              lineHeight: 1.08,
            }}
          >
            What Clients <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div
            className="rounded-2xl p-10 md:p-14 relative overflow-hidden"
            style={{
              background: "var(--surface-1)",
              border: "1px solid var(--border-default)",
            }}
          >
            {/* Top accent */}
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }}
            />

            {/* Quote icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote size={100} style={{ color: "var(--accent)" }} />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                {/* Stars */}
                <div className="flex gap-2 mb-7">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      fill="var(--accent)"
                      style={{ color: "var(--accent)" }}
                    />
                  ))}
                </div>

                {/* Review text */}
                <p
                  className="text-xl md:text-2xl leading-relaxed mb-12 relative z-10"
                  style={{ color: "var(--text-primary)" }}
                >
                  &ldquo;{current.review}&rdquo;
                </p>

                {/* Client info */}
                <div className="flex items-center gap-5">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl shrink-0"
                    style={{
                      background: "var(--accent)",
                      color: "var(--bg-primary)",
                    }}
                  >
                    {current.name.charAt(0)}
                  </div>
                  <div>
                    <div
                      className="font-bold text-xl"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {current.name}
                    </div>
                    <div
                      className="text-base mt-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {current.role}
                      {current.company ? `, ${current.company}` : ""} · {current.location}
                    </div>
                    <div
                      className="text-base mt-1.5 font-semibold"
                      style={{ color: "var(--accent)" }}
                    >
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
                    width: active === i ? "32px" : "12px",
                    height: "12px",
                    background: active === i ? "var(--accent)" : "var(--border-default)",
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
                className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
                style={{
                  background: "var(--surface-1)",
                  border: "1px solid var(--border-default)",
                  color: "var(--text-primary)",
                }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={next}
                id="testimonial-next"
                className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
                style={{
                  background: "var(--accent)",
                  color: "var(--bg-primary)",
                }}
                aria-label="Next testimonial"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
