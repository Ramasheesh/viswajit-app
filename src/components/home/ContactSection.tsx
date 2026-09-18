"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ArrowRight, Phone, MessageCircle, Mail, MapPin, Clock, Sparkles } from "lucide-react";
import { company } from "@/lib/data/company";

export default function ContactSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const contactCards = [
    {
      icon: Phone,
      label: "Direct Consultation",
      value: company.phone,
      sub: "Available Mon – Sat, 9am – 8pm",
      action: "Call directly",
      href: `tel:${company.phone.replace(/\s/g, "")}`,
    },
    {
      icon: MessageCircle,
      label: "Instant WhatsApp",
      value: company.whatsapp,
      sub: "Fast response for design inquiries",
      action: "Chat on WhatsApp",
      href: `https://wa.me/${company.whatsapp}`,
    },
    {
      icon: Mail,
      label: "Email Desk",
      value: company.email,
      sub: "Send drawings & project RFPs",
      action: "Send an email",
      href: `mailto:${company.email}`,
    },
    {
      icon: MapPin,
      label: "Design Studio",
      value: "Civil Lines, Lucknow",
      sub: "Uttar Pradesh – 226001 (By Appointment)",
      action: "Visit studio",
      href: "/contact#map",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28 bg-zinc-950"
      id="contact"
      aria-labelledby="contact-heading"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(245,158,11,0.1) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 w-full">
        {/* Centered CTA Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-widest mb-4">
            <Sparkles size={15} />
            <span>Start Your Lighting Journey</span>
          </div>

          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-5 leading-tight"
          >
            Let&apos;s Illuminate Your <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
              Next Masterpiece.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-8 max-w-xl mx-auto">
            Consult directly with our certified lighting designers and electrical engineers for luxury residences, commercial spaces, and façade projects.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              id="contact-call-btn"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-sm font-bold text-base bg-amber-500 text-black hover:bg-amber-400 shadow-xl shadow-amber-500/25 transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
            >
              <Phone size={18} />
              <span>Call Consultation Line</span>
            </a>
            <a
              href={`https://wa.me/${company.whatsapp}`}
              id="contact-whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-sm font-bold text-base bg-[#25D366] text-white hover:bg-[#20ba59] shadow-lg shadow-[#25D366]/20 transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
            >
              <MessageCircle size={18} />
              <span>Chat on WhatsApp</span>
            </a>
            <Link
              href="/submit-project"
              id="contact-submit-project"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-sm font-bold text-base bg-zinc-900 text-white border border-zinc-700 hover:bg-zinc-800 transition-all duration-200 hover:-translate-y-0.5 shadow-md active:scale-95"
            >
              <span>Submit Project RFP</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>

        {/* 4 Professional Contact Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {contactCards.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex flex-col justify-between p-7 rounded-sm bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 hover:bg-zinc-850/80 transition-all duration-300 hover:-translate-y-1.5 shadow-xl"
            >
              <div>
                <div className="w-14 h-14 rounded-sm flex items-center justify-center mb-6 bg-amber-500/15 text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                  <item.icon size={24} />
                </div>
                
                <div className="text-xs font-bold tracking-widest uppercase text-amber-400 mb-2">
                  {item.label}
                </div>

                <div className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-2 break-words leading-snug">
                  {item.value}
                </div>

                <div className="text-xs text-zinc-400 leading-relaxed">
                  {item.sub}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-amber-400 group-hover:text-amber-300">
                <span>{item.action}</span>
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </motion.div>

        {/* Operating hours footer */}
        <motion.div
          className="mt-12 flex items-center justify-center gap-2.5 text-sm text-zinc-400"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Clock size={18} className="text-amber-400" />
          <span>Operating Hours: {company.workingHours} · Site Visits Across North India</span>
        </motion.div>
      </div>
    </section>
  );
}
