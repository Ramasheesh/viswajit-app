"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Calendar, MapPin, Phone, ArrowRight, CheckCircle } from "lucide-react";

export default function SiteVisitCTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    date: "",
    projectType: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\D/g, "")))
      e.phone = "Valid phone required";
    if (!form.location.trim()) e.location = "Location required";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden section-padding"
      style={{ background: "var(--surface-0)" }}
      id="site-visit"
      aria-labelledby="site-visit-heading"
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 30% 50%, var(--accent-subtle) 0%, transparent 55%)",
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="section-eyebrow">
              <span className="section-eyebrow-line" />
              <span className="section-eyebrow-text">Book a Visit</span>
            </div>

            <h2
              id="site-visit-heading"
              className="font-extrabold tracking-tight mb-7"
              style={{
                fontSize: "clamp(2.25rem, 5.5vw, 3.5rem)",
                color: "var(--text-primary)",
                lineHeight: 1.08,
              }}
            >
              Book a Free
              <br />
              <span className="text-gradient">Site Visit</span>
            </h2>
            <p
              className="text-xl leading-relaxed mb-10"
              style={{ color: "var(--text-muted)" }}
            >
              On-site assessment for lighting and electrical requirements. Our team visits your space, understands your vision, and prepares a detailed proposal — at no charge.
            </p>
            <div className="space-y-5">
              {[
                { icon: Calendar, text: "Available Monday – Saturday" },
                { icon: MapPin, text: "Across 50+ locations in North India" },
                { icon: Phone, text: "Response within 2 hours" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-5 text-lg"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "var(--accent-subtle)", color: "var(--accent)" }}
                  >
                    <item.icon size={20} />
                  </div>
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
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

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-6">
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center"
                    style={{ background: "var(--accent-subtle)" }}
                  >
                    <CheckCircle size={48} style={{ color: "var(--accent)" }} />
                  </div>
                  <h3
                    className="font-bold text-2xl"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Request Received!
                  </h3>
                  <p className="text-lg" style={{ color: "var(--text-muted)" }}>
                    Our team will contact you within 2 hours to confirm your site visit.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-6"
                  id="site-visit-form"
                >
                  <h3
                    className="font-bold text-2xl mb-8"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Request Site Visit
                  </h3>

                  {[
                    {
                      id: "sv-name",
                      label: "Full Name",
                      field: "name",
                      type: "text",
                      placeholder: "Your name",
                    },
                    {
                      id: "sv-phone",
                      label: "Phone Number",
                      field: "phone",
                      type: "tel",
                      placeholder: "+91 98765 43210",
                    },
                    {
                      id: "sv-location",
                      label: "Project Location",
                      field: "location",
                      type: "text",
                      placeholder: "City / Area",
                    },
                  ].map((f) => (
                    <div key={f.field}>
                      <label
                        htmlFor={f.id}
                        className="block text-base font-semibold mb-2.5"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {f.label}
                      </label>
                      <input
                        id={f.id}
                        type={f.type}
                        placeholder={f.placeholder}
                        value={form[f.field as keyof typeof form]}
                        onChange={(e) =>
                          setForm({ ...form, [f.field]: e.target.value })
                        }
                        className="w-full px-5 py-4 rounded-xl text-base outline-none transition-all duration-200"
                        style={{
                          background: "var(--surface-0)",
                          border: `1px solid ${errors[f.field] ? "#ef4444" : "var(--border-default)"}`,
                          color: "var(--text-primary)",
                          fontSize: "1rem",
                        }}
                      />
                      {errors[f.field] && (
                        <p className="text-sm mt-2 text-red-400">
                          {errors[f.field]}
                        </p>
                      )}
                    </div>
                  ))}

                  <div>
                    <label
                      htmlFor="sv-date"
                      className="block text-base font-semibold mb-2.5"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Preferred Date
                    </label>
                    <input
                      id="sv-date"
                      type="date"
                      value={form.date}
                      onChange={(e) =>
                        setForm({ ...form, date: e.target.value })
                      }
                      className="w-full px-5 py-4 rounded-xl text-base outline-none transition-all duration-200"
                      style={{
                        background: "var(--surface-0)",
                        border: "1px solid var(--border-default)",
                        color: "var(--text-primary)",
                        fontSize: "1rem",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    id="site-visit-submit"
                    className="w-full flex items-center justify-center gap-3 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: "var(--accent)",
                      color: "var(--bg-primary)",
                      boxShadow: "0 4px 24px rgba(245,158,11,0.35)",
                    }}
                  >
                    Request Site Visit
                    <ArrowRight size={22} />
                  </button>

                  <p
                    className="text-center text-base"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Or{" "}
                    <Link
                      href="/submit-project"
                      className="font-semibold transition-colors duration-200"
                      style={{ color: "var(--accent)" }}
                    >
                      submit a full project inquiry
                    </Link>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
