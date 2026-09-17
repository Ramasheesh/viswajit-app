"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone, MessageCircle, Mail, Globe,
  Download, Share2, Contact, Zap, MapPin, ChevronRight
} from "lucide-react";
import { company } from "@/lib/data/company";

export default function VisitingCardPage() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden"
      style={{ paddingTop: "100px", background: "var(--background)" }}
    >
      {/* Background grid & glow */}
      <div className="absolute inset-0 arch-grid opacity-40" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--accent-glow), transparent 70%)", filter: "blur(60px)" }}
      />

      <div className="relative z-10 w-full max-w-md">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="section-number mb-3">Digital Card</div>
          <h1 className="text-3xl md:text-4xl font-black" style={{ color: "var(--text-primary)" }}>
            Professional <span className="text-gradient">Business Card</span>
          </h1>
        </div>

        {/* Card flip container */}
        <div
          className="w-full cursor-pointer select-none mb-8"
          style={{ perspective: "1200px", height: "220px" }}
          onClick={() => setFlipped(!flipped)}
          role="button"
          aria-label="Flip card to see back"
        >
          <motion.div
            className="relative w-full h-full"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
          >
            {/* FRONT */}
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden light-sweep"
              style={{
                backfaceVisibility: "hidden",
                background: "linear-gradient(135deg, #111111 0%, #1a1a1a 50%, #0f0f0f 100%)",
                border: "1px solid rgba(245,158,11,0.3)",
                boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 40px rgba(245,158,11,0.1)",
              }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(90deg, var(--accent), transparent)" }} />

              <div className="p-8 h-full flex flex-col justify-between relative z-10">
                <div className="flex items-center justify-between">
                  {/* Logo */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--accent)" }}>
                      <Zap size={16} className="text-black" fill="currentColor" />
                    </div>
                    <div>
                      <div className="font-black text-xs tracking-tight text-white">VISWAJIT</div>
                      <div className="font-light tracking-widest text-amber-400" style={{ fontSize: "0.5rem" }}>ELECTRICAL & LIGHTING</div>
                    </div>
                  </div>
                  {/* Glow orb */}
                  <div className="w-12 h-12 rounded-full animate-glow-pulse" style={{ background: "radial-gradient(circle, rgba(245,158,11,0.4), transparent)" }} />
                </div>

                <div>
                  <h2 className="text-xl font-black text-white mb-0.5">Viswajit Kumar</h2>
                  <p className="text-xs font-light tracking-wide text-amber-400 mb-3">Lighting & Electrical Contractor</p>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    2D Lighting Design · 3D Visualization · Electrical Contracting
                  </p>

                  <div className="flex gap-4 mt-4 text-xs text-neutral-400">
                    <span className="flex items-center gap-1">
                      <Phone size={10} style={{ color: "var(--accent)" }} />
                      {company.phone}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* BACK */}
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden"
              style={{
                backfaceVisibility: "hidden",
                rotateY: "180deg",
                background: "linear-gradient(135deg, #1a1a00 0%, #111100 50%, #0f0f00 100%)",
                border: "1px solid rgba(245,158,11,0.4)",
                boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 40px rgba(245,158,11,0.15)",
              } as React.CSSProperties}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }} />

              <div className="p-8 h-full flex gap-6 relative z-10">
                {/* Left — company info */}
                <div className="flex-1">
                  <h3 className="font-black text-sm text-white mb-1">VISWAJIT</h3>
                  <p className="text-amber-400 font-light tracking-widest mb-4" style={{ fontSize: "0.5rem" }}>DESIGN · VISUALIZE · EXECUTE</p>
                  <div className="space-y-2 text-xs text-neutral-400">
                    {[
                      "2D Lighting Design",
                      "3D Visualization",
                      "Electrical Contracting",
                      "Turnkey Projects",
                      "Maintenance",
                    ].map((s) => (
                      <div key={s} className="flex items-center gap-1.5">
                        <ChevronRight size={10} style={{ color: "var(--accent)" }} />
                        {s}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right — QR placeholder */}
                <div className="flex flex-col items-center justify-between">
                  <div
                    className="w-20 h-20 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.3)" }}
                  >
                    <div className="grid grid-cols-3 gap-0.5">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="w-4 h-4 rounded-sm" style={{ background: i % 2 === 0 ? "var(--accent)" : "transparent" }} />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-neutral-500">Scan to visit</p>
                  <div className="flex gap-2">
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" className="text-neutral-500 hover:text-amber-400 transition-colors cursor-pointer"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" className="text-neutral-500 hover:text-amber-400 transition-colors cursor-pointer"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" className="text-neutral-500 hover:text-amber-400 transition-colors cursor-pointer"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Flip hint */}
        <p className="text-center text-xs mb-10" style={{ color: "var(--text-muted)" }}>
          Tap card to flip
        </p>

        {/* Action buttons */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <a
            href={`tel:${company.phone.replace(/\s/g, "")}`}
            id="card-call-btn"
            className="flex flex-col items-center gap-2 py-4 rounded-xl font-semibold text-xs"
            style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
          >
            <Phone size={20} style={{ color: "var(--accent)" }} />
            Call
          </a>
          <a
            href={`https://wa.me/${company.whatsapp}`}
            id="card-whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 py-4 rounded-xl font-semibold text-xs"
            style={{ background: "#25D366", color: "#fff" }}
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>
          <a
            href={`mailto:${company.email}`}
            id="card-email-btn"
            className="flex flex-col items-center gap-2 py-4 rounded-xl font-semibold text-xs"
            style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
          >
            <Mail size={20} style={{ color: "var(--accent)" }} />
            Email
          </a>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <button
            id="card-save-btn"
            className="flex flex-col items-center gap-2 py-4 rounded-xl font-semibold text-xs"
            style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
          >
            <Contact size={20} style={{ color: "var(--accent)" }} />
            Save Contact
          </button>
          <button
            id="card-download-btn"
            className="flex flex-col items-center gap-2 py-4 rounded-xl font-semibold text-xs"
            style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
          >
            <Download size={20} style={{ color: "var(--accent)" }} />
            Download
          </button>
          <button
            id="card-share-btn"
            onClick={() => { if (navigator.share) navigator.share({ title: "Viswajit Electrical", url: window.location.href }); }}
            className="flex flex-col items-center gap-2 py-4 rounded-xl font-semibold text-xs btn-primary"
          >
            <Share2 size={20} />
            Share
          </button>
        </div>

        {/* Contact details */}
        <div
          className="mt-8 rounded-2xl p-6 space-y-3"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          {[
            { icon: Phone, label: company.phone },
            { icon: Mail, label: company.email },
            { icon: Globe, label: "viswajitelectrical.com" },
            { icon: MapPin, label: company.address },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
              <item.icon size={15} style={{ color: "var(--accent)", flexShrink: 0 }} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
