"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ArrowRight, Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { company } from "@/lib/data/company";

export default function ContactSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden section-padding"
      id="contact"
      aria-labelledby="contact-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--accent-subtle) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="section-container relative z-10">
        {/* CTA Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-5">
            <div className="section-eyebrow">
              <span className="section-eyebrow-line" />
              <span className="section-eyebrow-text">Get In Touch</span>
            </div>
          </div>
          <h2
            id="contact-heading"
            className="font-extrabold tracking-tight mb-6"
            style={{
              fontSize: "clamp(2.25rem, 5.5vw, 3.5rem)",
              color: "var(--text-primary)",
              lineHeight: 1.08,
            }}
          >
            Let&apos;s Light Your
            <br />
            <span className="text-gradient">Next Project.</span>
          </h2>
          <p
            className="text-xl max-w-2xl mx-auto mb-12"
            style={{ color: "var(--text-secondary)" }}
          >
            Ready to transform your space? Start with a consultation. Our team will guide you from concept to completion.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              id="contact-call-btn"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "var(--accent)",
                color: "var(--bg-primary)",
                boxShadow: "0 4px 24px rgba(245,158,11,0.35)",
              }}
            >
              <Phone size={22} />
              Call Now
            </a>
            <a
              href={`https://wa.me/${company.whatsapp}`}
              id="contact-whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: "#25D366", color: "#fff" }}
            >
              <MessageCircle size={22} />
              WhatsApp
            </a>
            <Link
              href="/submit-project"
              id="contact-submit-project"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.1)",
                color: "var(--text-primary)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              Submit Project
              <ArrowRight size={22} />
            </Link>
          </div>
        </motion.div>

        {/* Contact info cards */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { icon: Phone, label: "Phone", value: company.phone, href: `tel:${company.phone.replace(/\s/g, "")}` },
            { icon: MessageCircle, label: "WhatsApp", value: company.phone, href: `https://wa.me/${company.whatsapp}` },
            { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
            { icon: MapPin, label: "Office", value: company.address, href: "#" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 group"
              style={{
                background: "var(--surface-1)",
                border: "1px solid var(--border-default)",
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "var(--accent-subtle)",
                  color: "var(--accent)",
                }}
              >
                <item.icon size={24} />
              </div>
              <div
                className="text-xs font-bold tracking-[0.12em] uppercase mb-3"
                style={{ color: "var(--text-muted)" }}
              >
                {item.label}
              </div>
              <div
                className="text-base md:text-lg font-medium transition-colors duration-200 line-clamp-2"
                style={{ color: "var(--text-primary)" }}
              >
                {item.value}
              </div>
            </a>
          ))}
        </motion.div>

        {/* Working hours */}
        <motion.div
          className="mt-10 flex items-center justify-center gap-3 text-lg"
          style={{ color: "var(--text-muted)" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Clock size={22} style={{ color: "var(--accent)" }} />
          {company.workingHours}
        </motion.div>
      </div>
    </section>
  );
}
