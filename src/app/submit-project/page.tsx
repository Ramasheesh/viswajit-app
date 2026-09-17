"use client";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Upload, X, File, CheckCircle, ArrowRight, Paperclip } from "lucide-react";

const serviceOptions = [
  "2D Lighting Design",
  "3D Lighting Visualization",
  "Electrical Work",
  "Lighting Installation",
  "Material Supply",
  "Turnkey Contracting",
  "Consultation",
  "Maintenance",
];

interface UploadedFile {
  name: string;
  size: number;
  type: string;
  id: string;
}

export default function SubmitProjectPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [dragging, setDragging] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", projectType: "",
    location: "", area: "", startDate: "", budget: "",
    description: "", notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleFiles = useCallback((newFiles: FileList | null) => {
    if (!newFiles) return;
    const added = Array.from(newFiles).map((f) => ({
      name: f.name,
      size: f.size,
      type: f.type,
      id: Math.random().toString(36).slice(2),
    }));
    setFiles((prev) => [...prev, ...added]);
  }, []);

  const removeFile = (id: string) => setFiles((prev) => prev.filter((f) => f.id !== id));

  const toggleService = (s: string) =>
    setSelectedServices((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);

  const formatBytes = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / 1048576).toFixed(1) + " MB";
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.phone.trim()) e.phone = "Required";
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (!form.projectType) e.projectType = "Required";
    if (!form.location.trim()) e.location = "Required";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (!Object.keys(errs).length) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ paddingTop: "80px" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center rounded-2xl p-12"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "var(--accent-glow)", border: "1px solid var(--accent)" }}
          >
            <CheckCircle size={32} style={{ color: "var(--accent)" }} />
          </div>
          <h2 className="text-2xl font-black mb-3" style={{ color: "var(--text-primary)" }}>Project Request Received</h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Thank you. Your project request has been received. Our team will contact you within 2–4 hours to discuss your project.
          </p>
        </motion.div>
      </div>
    );
  }

  const inputStyle = (field: string) => ({
    background: "var(--surface)",
    border: `1px solid ${errors[field] ? "#ef4444" : "var(--border)"}`,
    color: "var(--text-primary)",
  });

  const labelStyle = {
    color: "var(--text-secondary)",
  };

  return (
    <div className="min-h-screen" style={{ paddingTop: "80px", background: "var(--background)" }}>
      {/* Hero */}
      <div className="relative py-16 md:py-24 arch-grid" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at top, var(--accent-glow), transparent 60%)" }}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="section-number mb-4">Start a Project</div>
          <h1 className="section-title mb-4" style={{ color: "var(--text-primary)" }}>
            Tell Us About
            <br />
            <span className="text-gradient">Your Project</span>
          </h1>
          <p className="text-base" style={{ color: "var(--text-secondary)" }}>
            Fill in the details below. Our team will review and contact you within 2–4 hours.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <form onSubmit={handleSubmit} noValidate id="submit-project-form" className="space-y-8">
          {/* Contact */}
          <div className="rounded-2xl p-8" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
            <h2 className="font-black text-lg mb-6" style={{ color: "var(--text-primary)" }}>Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { id: "sp-name", label: "Full Name *", field: "name", type: "text", placeholder: "Your full name" },
                { id: "sp-phone", label: "Phone Number *", field: "phone", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                { id: "sp-email", label: "Email Address", field: "email", type: "email", placeholder: "you@email.com" },
              ].map((f) => (
                <div key={f.field} className={f.id === "sp-name" ? "md:col-span-2" : ""}>
                  <label htmlFor={f.id} className="block text-xs font-semibold mb-1.5 tracking-wide" style={labelStyle}>{f.label}</label>
                  <input
                    id={f.id}
                    type={f.type}
                    placeholder={f.placeholder}
                    value={form[f.field as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.field]: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={inputStyle(f.field)}
                  />
                  {errors[f.field] && <p className="text-xs mt-1 text-red-500">{errors[f.field]}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="rounded-2xl p-8" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
            <h2 className="font-black text-lg mb-6" style={{ color: "var(--text-primary)" }}>Project Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="sp-project-type" className="block text-xs font-semibold mb-1.5 tracking-wide" style={labelStyle}>Project Type *</label>
                <select
                  id="sp-project-type"
                  value={form.projectType}
                  onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={inputStyle("projectType")}
                >
                  <option value="">Select project type</option>
                  {["Residential", "Commercial", "Hospitality", "Retail", "Industrial", "Architectural", "Other"].map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                {errors.projectType && <p className="text-xs mt-1 text-red-500">{errors.projectType}</p>}
              </div>
              <div>
                <label htmlFor="sp-location" className="block text-xs font-semibold mb-1.5 tracking-wide" style={labelStyle}>Project Location *</label>
                <input
                  id="sp-location"
                  type="text"
                  placeholder="City / Area / Pincode"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={inputStyle("location")}
                />
                {errors.location && <p className="text-xs mt-1 text-red-500">{errors.location}</p>}
              </div>
              <div>
                <label htmlFor="sp-area" className="block text-xs font-semibold mb-1.5 tracking-wide" style={labelStyle}>Project Area / Size</label>
                <input id="sp-area" type="text" placeholder="e.g. 2,500 sq ft" value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })} className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={inputStyle("area")} />
              </div>
              <div>
                <label htmlFor="sp-budget" className="block text-xs font-semibold mb-1.5 tracking-wide" style={labelStyle}>Budget Range</label>
                <select id="sp-budget" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={inputStyle("budget")}>
                  <option value="">Select budget range</option>
                  {["Under ₹1 Lakh", "₹1–3 Lakhs", "₹3–7 Lakhs", "₹7–15 Lakhs", "₹15–30 Lakhs", "Above ₹30 Lakhs"].map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="sp-start" className="block text-xs font-semibold mb-1.5 tracking-wide" style={labelStyle}>Preferred Start Date</label>
                <input id="sp-start" type="date" value={form.startDate} onChange={(e) => setForm({ ...form, startDate: e.target.value })} className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={inputStyle("startDate")} />
              </div>
            </div>

            {/* Description */}
            <div className="mt-5">
              <label htmlFor="sp-description" className="block text-xs font-semibold mb-1.5 tracking-wide" style={labelStyle}>Project Description</label>
              <textarea id="sp-description" rows={4} placeholder="Describe your project, requirements, special considerations..." value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none" style={inputStyle("description")} />
            </div>
          </div>

          {/* Required Services */}
          <div className="rounded-2xl p-8" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
            <h2 className="font-black text-lg mb-6" style={{ color: "var(--text-primary)" }}>Required Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {serviceOptions.map((s) => (
                <button
                  key={s}
                  type="button"
                  id={`service-check-${s.replace(/\s+/g, "-").toLowerCase()}`}
                  onClick={() => toggleService(s)}
                  className="text-left px-4 py-3 rounded-xl text-xs font-medium transition-all duration-200"
                  style={{
                    background: selectedServices.includes(s) ? "var(--accent)" : "var(--surface-2)",
                    color: selectedServices.includes(s) ? "#000" : "var(--text-secondary)",
                    border: `1px solid ${selectedServices.includes(s) ? "var(--accent)" : "var(--border)"}`,
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* File Upload */}
          <div className="rounded-2xl p-8" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
            <h2 className="font-black text-lg mb-2" style={{ color: "var(--text-primary)" }}>Upload Files</h2>
            <p className="text-xs mb-6" style={{ color: "var(--text-muted)" }}>
              Floor plans, images, 2D drawings, DWG files, PDFs, ZIP archives
            </p>

            {/* Drop zone */}
            <label
              htmlFor="file-upload"
              className="block cursor-pointer rounded-xl border-2 border-dashed p-10 text-center transition-all duration-200"
              style={{
                borderColor: dragging ? "var(--accent)" : "var(--border)",
                background: dragging ? "var(--accent-glow)" : "var(--background)",
              }}
              onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
              onDragLeave={() => setDragging(false)}
              onDrop={(e) => { e.preventDefault(); setDragging(false); handleFiles(e.dataTransfer.files); }}
            >
              <Upload size={32} className="mx-auto mb-3" style={{ color: "var(--accent)" }} />
              <p className="font-semibold text-sm mb-1" style={{ color: "var(--text-primary)" }}>Drop your project files here</p>
              <p className="text-xs mb-4" style={{ color: "var(--text-muted)" }}>or</p>
              <span
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold"
                style={{ background: "var(--accent)", color: "#000" }}
              >
                <Paperclip size={14} />
                Browse Files
              </span>
              <input
                id="file-upload"
                type="file"
                multiple
                className="sr-only"
                accept=".jpg,.jpeg,.png,.pdf,.dwg,.doc,.docx,.xls,.xlsx,.zip,.rar"
                onChange={(e) => handleFiles(e.target.files)}
              />
            </label>

            {/* File list */}
            {files.length > 0 && (
              <div className="mt-4 space-y-2">
                {files.map((f) => (
                  <div
                    key={f.id}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl"
                    style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
                  >
                    <File size={16} style={{ color: "var(--accent)" }} />
                    <span className="flex-1 text-sm truncate" style={{ color: "var(--text-primary)" }}>{f.name}</span>
                    <span className="text-xs shrink-0" style={{ color: "var(--text-muted)" }}>{formatBytes(f.size)}</span>
                    <button
                      type="button"
                      onClick={() => removeFile(f.id)}
                      className="shrink-0 w-6 h-6 rounded flex items-center justify-center hover:bg-red-500/20 transition-colors"
                      style={{ color: "var(--text-muted)" }}
                      aria-label={`Remove ${f.name}`}
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Notes */}
          <div className="rounded-2xl p-8" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
            <label htmlFor="sp-notes" className="block font-black text-lg mb-4" style={{ color: "var(--text-primary)" }}>Additional Notes</label>
            <textarea id="sp-notes" rows={3} placeholder="Any other information or special requirements..." value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none" style={inputStyle("notes")} />
          </div>

          {/* Submit */}
          <button
            type="submit"
            id="submit-project-btn"
            className="btn-primary w-full flex items-center justify-center gap-3 py-5 rounded-xl font-black text-lg"
          >
            Submit Project Request
            <ArrowRight size={22} />
          </button>

          <p className="text-center text-xs" style={{ color: "var(--text-muted)" }}>
            We respect your privacy. Your information is never shared with third parties.
          </p>
        </form>
      </div>
    </div>
  );
}
