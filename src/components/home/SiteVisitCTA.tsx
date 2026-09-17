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
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-zinc-950"
      id="site-visit"
      aria-labelledby="site-visit-heading"
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 30% 50%, rgba(245,158,11,0.08) 0%, transparent 55%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-amber-400" />
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-amber-400">Book a Visit</span>
            </div>

            <h2
              id="site-visit-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight"
            >
              Book a Free <span className="text-gradient">Site Visit</span>
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-8">
              On-site assessment for lighting and electrical requirements. Our team visits your space, understands your vision, and prepares a detailed proposal — at no charge.
            </p>
            <div className="space-y-4">
              {[
                { icon: Calendar, text: "Available Monday – Saturday" },
                { icon: MapPin, text: "Across 50+ locations in North India" },
                { icon: Phone, text: "Response within 2 hours" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3.5 text-base text-zinc-200"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-amber-500/10 text-amber-400">
                    <item.icon size={18} />
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
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="rounded-3xl p-7 sm:p-10 relative overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl">
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-transparent"
              />

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-amber-500/10 text-amber-400">
                    <CheckCircle size={36} />
                  </div>
                  <h3 className="font-bold text-xl sm:text-2xl text-white">
                    Request Received!
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-400 max-w-xs">
                    Our team will contact you within 2 hours to confirm your site visit.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-4"
                  id="site-visit-form"
                >
                  <h3 className="font-bold text-xl sm:text-2xl text-white mb-5">
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
                        className="block text-sm font-semibold text-zinc-300 mb-1.5"
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
                        className="w-full px-4 py-3 rounded-xl text-base outline-none transition-all duration-200 bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 focus:border-amber-400"
                        style={{
                          borderColor: errors[f.field] ? "#ef4444" : undefined,
                        }}
                      />
                      {errors[f.field] && (
                        <p className="text-xs mt-1 text-red-400">
                          {errors[f.field]}
                        </p>
                      )}
                    </div>
                  ))}

                  <div>
                    <label
                      htmlFor="sv-date"
                      className="block text-sm font-semibold text-zinc-300 mb-1.5"
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
                      className="w-full px-4 py-3 rounded-xl text-base outline-none transition-all duration-200 bg-zinc-950 border border-zinc-800 text-white focus:border-amber-400"
                    />
                  </div>

                  <button
                    type="submit"
                    id="site-visit-submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 sm:py-4 rounded-xl font-bold text-base transition-all duration-200 hover:-translate-y-0.5 bg-amber-500 text-black hover:bg-amber-400 shadow-lg shadow-amber-500/25 mt-3"
                  >
                    Request Site Visit
                    <ArrowRight size={18} />
                  </button>

                  <p className="text-center text-sm text-zinc-400 pt-2">
                    Or{" "}
                    <Link
                      href="/submit-project"
                      className="font-semibold text-amber-400 hover:underline"
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
