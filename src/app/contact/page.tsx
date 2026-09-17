"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { company } from "@/lib/data/company";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", workType: "", location: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.phone.trim()) e.phone = "Required";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (!Object.keys(errs).length) setSubmitted(true);
  };

  return (
    <div className="min-h-screen" style={{ paddingTop: "80px", background: "var(--background)" }}>
      {/* Hero */}
      <div className="relative py-20 md:py-28 arch-grid" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at top, var(--accent-glow), transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="section-number mb-4">Get In Touch</div>
          <h1 className="section-title mb-4" style={{ color: "var(--text-primary)" }}>
            Let&apos;s Light Your <span className="text-gradient">Next Project.</span>
          </h1>
          <p className="text-base max-w-lg" style={{ color: "var(--text-secondary)" }}>
            Ready to start? Send us a message, call directly, or WhatsApp us. We respond within 2 hours.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — contact info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black" style={{ color: "var(--text-primary)" }}>Contact Information</h2>

            {[
              { icon: Phone, label: "Phone", value: company.phone, href: `tel:${company.phone.replace(/\s/g, "")}`, action: "Call Now" },
              { icon: MessageCircle, label: "WhatsApp", value: company.phone, href: `https://wa.me/${company.whatsapp}`, action: "Message Us" },
              { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}`, action: "Send Email" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                id={`contact-info-${item.label.toLowerCase()}`}
                className="flex items-center gap-5 p-5 rounded-xl transition-all duration-300 hover:border-amber-500/40 hover:-translate-y-0.5 group"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--accent-glow)", color: "var(--accent)" }}>
                  <item.icon size={22} />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold tracking-widest uppercase mb-0.5" style={{ color: "var(--text-muted)" }}>{item.label}</div>
                  <div className="font-semibold" style={{ color: "var(--text-primary)" }}>{item.value}</div>
                </div>
                <div className="text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--accent)" }}>
                  {item.action} →
                </div>
              </a>
            ))}

            <div className="p-5 rounded-xl" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
              <div className="flex items-start gap-3 mb-3">
                <MapPin size={18} style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "var(--text-muted)" }}>Office Address</div>
                  <div className="text-sm" style={{ color: "var(--text-primary)" }}>{company.address}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} style={{ color: "var(--accent)", flexShrink: 0 }} />
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase mb-0.5" style={{ color: "var(--text-muted)" }}>Working Hours</div>
                  <div className="text-sm" style={{ color: "var(--text-primary)" }}>{company.workingHours}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — quick form */}
          <div>
            <div className="rounded-2xl p-8" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }} />

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <CheckCircle size={48} style={{ color: "var(--accent)" }} />
                  <h3 className="font-black text-xl" style={{ color: "var(--text-primary)" }}>Message Received!</h3>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>We&apos;ll get back to you within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate id="contact-form" className="space-y-5">
                  <h2 className="font-black text-xl mb-6" style={{ color: "var(--text-primary)" }}>Request a Callback</h2>

                  {[
                    { id: "c-name", label: "Full Name *", field: "name", type: "text", placeholder: "Your name" },
                    { id: "c-phone", label: "Phone Number *", field: "phone", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                    { id: "c-location", label: "Project Location", field: "location", type: "text", placeholder: "City / Area" },
                  ].map((f) => (
                    <div key={f.field}>
                      <label htmlFor={f.id} className="block text-xs font-semibold mb-1.5 tracking-wide" style={{ color: "var(--text-secondary)" }}>{f.label}</label>
                      <input
                        id={f.id}
                        type={f.type}
                        placeholder={f.placeholder}
                        value={form[f.field as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [f.field]: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                        style={{
                          background: "var(--background)",
                          border: `1px solid ${errors[f.field] ? "#ef4444" : "var(--border)"}`,
                          color: "var(--text-primary)",
                        }}
                      />
                      {errors[f.field] && <p className="text-xs mt-1 text-red-500">{errors[f.field]}</p>}
                    </div>
                  ))}

                  <div>
                    <label htmlFor="c-work-type" className="block text-xs font-semibold mb-1.5 tracking-wide" style={{ color: "var(--text-secondary)" }}>Work Type</label>
                    <select
                      id="c-work-type"
                      value={form.workType}
                      onChange={(e) => setForm({ ...form, workType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{ background: "var(--background)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
                    >
                      <option value="">Select work type</option>
                      {["2D Lighting Design", "3D Visualization", "Interior Lighting", "Architectural Lighting", "Electrical Work", "Turnkey Project", "Consultation"].map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="c-message" className="block text-xs font-semibold mb-1.5 tracking-wide" style={{ color: "var(--text-secondary)" }}>Message</label>
                    <textarea
                      id="c-message"
                      rows={4}
                      placeholder="Briefly describe your project or requirement..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                      style={{ background: "var(--background)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit-btn"
                    className="btn-primary w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold"
                  >
                    Request Callback
                    <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
