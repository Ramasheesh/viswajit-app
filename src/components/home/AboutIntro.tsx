"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const capabilities = [
  "2D Lighting Design & Planning",
  "3D Photorealistic Visualization",
  "Architectural & Interior Lighting",
  "Complete Electrical Contracting",
  "Turnkey Project Delivery",
  "Post-Project Maintenance",
];

export default function AboutIntro() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden section-padding"
      id="about-intro"
      aria-labelledby="about-intro-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div
        className="absolute -right-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--accent-subtle) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="section-eyebrow">
              <span className="section-eyebrow-line" />
              <span className="section-eyebrow-text">About Us</span>
            </div>

            <h2
              id="about-intro-heading"
              className="font-extrabold tracking-tight mb-8"
              style={{
                fontSize: "clamp(2.25rem, 5.5vw, 3.5rem)",
                color: "var(--text-primary)",
                lineHeight: 1.08,
              }}
            >
              We don&apos;t just
              <br />
              <span className="text-gradient">install lights.</span>
              <br />
              We design space.
            </h2>

            <p
              className="text-xl leading-relaxed mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              From concept to installation, we transform spaces through intelligent lighting design and precision electrical execution.
            </p>
            <p
              className="text-lg leading-relaxed mb-12"
              style={{ color: "var(--text-muted)" }}
            >
              Trusted by architects, interior designers, builders and property owners across North India,
              Viswajit Electrical &amp; Lighting is a complete professional lighting and electrical contractor
              — combining design studio expertise with certified on-ground execution.
            </p>

            {/* Capabilities */}
            <div className="flex flex-wrap gap-3 mb-12">
              {capabilities.map((cap) => (
                <div
                  key={cap}
                  className="flex items-center gap-2.5 text-sm md:text-base px-4 py-2.5 rounded-full"
                  style={{
                    background: "var(--surface-1)",
                    border: "1px solid var(--border-default)",
                    color: "var(--text-secondary)",
                  }}
                >
                  <CheckCircle size={15} style={{ color: "var(--accent)" }} />
                  {cap}
                </div>
              ))}
            </div>

            <Link
              href="/about"
              id="about-learn-more"
              className="inline-flex items-center gap-2.5 font-bold text-lg transition-all duration-200 hover:gap-4"
              style={{ color: "var(--accent)" }}
            >
              Learn our story
              <ArrowRight size={20} />
            </Link>
          </motion.div>

          {/* Right — Brand card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div
              className="rounded-2xl p-10 md:p-12 relative overflow-hidden"
              style={{
                background: "var(--surface-1)",
                border: "1px solid var(--border-default)",
              }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: "linear-gradient(90deg, var(--accent), transparent)" }}
              />

              {/* Corner glow */}
              <div
                className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />

              <div className="relative z-10">
                {/* Big number */}
                <div className="mb-12">
                  <div
                    className="font-black leading-none mb-3"
                    style={{
                      fontSize: "clamp(5rem, 10vw, 7rem)",
                      background: "linear-gradient(135deg, var(--accent-light), var(--accent))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    15+
                  </div>
                  <div
                    className="font-bold text-2xl md:text-3xl"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Years of Excellence
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-8">
                  {[
                    {
                      title: "Design-First Approach",
                      desc: "Every project starts with a 2D plan and 3D visualization before a single wire is laid.",
                    },
                    {
                      title: "Certified Execution",
                      desc: "Our installation team is trained, certified and supervised on every project site.",
                    },
                    {
                      title: "Full-Cycle Service",
                      desc: "Consultation → Design → Material → Installation → Testing → Maintenance.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-5 group">
                      <div
                        className="w-1.5 rounded-full shrink-0 transition-all duration-300 group-hover:w-2"
                        style={{
                          background: "linear-gradient(180deg, var(--accent), var(--accent-dark))",
                          minHeight: "3.5rem",
                        }}
                      />
                      <div>
                        <div
                          className="font-bold text-lg mb-2"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {item.title}
                        </div>
                        <div
                          className="text-base leading-relaxed"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
