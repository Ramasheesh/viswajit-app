import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, PenTool, Layers, Building2, Home, Zap, Key, BarChart3, Wrench } from "lucide-react";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services | Bright spark  Electrical & Lighting",
  description: "Professional 2D lighting design, 3D visualization, architectural lighting, interior lighting, electrical contracting and turnkey project services.",
};

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  PenTool, Layers, Building2, Home, Zap, Key, BarChart3, Wrench,
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen" style={{ paddingTop: "80px", background: "var(--background)" }}>
      {/* Hero */}
      <div className="relative py-20 md:py-28 arch-grid" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at top, var(--accent-glow), transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="section-number mb-4">What We Do</div>
          <h1 className="section-title mb-4" style={{ color: "var(--text-primary)" }}>
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-base max-w-xl" style={{ color: "var(--text-secondary)" }}>
            From 2D lighting plans to complete turnkey electrical execution — everything under one roof.
          </p>
        </div>
      </div>

      {/* Services list */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon] || Zap;
          return (
            <div
              key={service.id}
              className="rounded-2xl overflow-hidden transition-all duration-300 hover:border-amber-500/30"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3">
                {/* Image */}
                {service.image && (
                  <div className={`relative aspect-video md:aspect-auto ${i % 2 !== 0 ? "md:order-last" : ""}`}>
                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, transparent, var(--surface) 100%)" }} />
                  </div>
                )}
                {/* Content */}
                <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--accent-glow)", color: "var(--accent)" }}>
                      <Icon size={18} />
                    </div>
                    <span className="text-xs font-bold tracking-widest" style={{ color: "var(--text-muted)" }}>{service.number}</span>
                  </div>
                  <h2 className="text-2xl font-black mb-3" style={{ color: "var(--text-primary)" }}>{service.title}</h2>
                  <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((f) => (
                      <span key={f} className="text-xs px-3 py-1.5 rounded-full" style={{ background: "var(--surface-2)", color: "var(--text-secondary)", border: "1px solid var(--border)" }}>
                        {f}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 font-semibold group"
                    style={{ color: "var(--accent)" }}
                  >
                    Learn more <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-2xl p-10 text-center relative overflow-hidden" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, var(--accent-glow), transparent 70%)" }} />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-black mb-3" style={{ color: "var(--text-primary)" }}>
              Ready to start your project?
            </h2>
            <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>Tell us about your requirements and we&apos;ll prepare a detailed proposal.</p>
            <Link href="/submit-project" className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold">
              Start Your Project <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
