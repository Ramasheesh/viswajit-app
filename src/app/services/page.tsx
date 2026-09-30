import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, PenTool, Layers, Building2, Home, Zap, Key, BarChart3, Wrench, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services | Bright spark  Electrical & Lighting",
  description:
    "Professional 2D lighting design, 3D visualization, architectural lighting, interior lighting, electrical contracting and turnkey project services across North India.",
};

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  PenTool,
  Layers,
  Building2,
  Home,
  Zap,
  Key,
  BarChart3,
  Wrench,
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen" style={{ paddingTop: "80px", background: "var(--background)" }}>
      {/* Hero */}
      <div
        className="relative py-20 md:py-28 arch-grid"
        style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at top, var(--accent-glow), transparent 60%)" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="section-number mb-4">What We Do</div>
          <h1 className="section-title mb-4" style={{ color: "var(--text-primary)" }}>
            Our <span className="text-gradient">Services &amp; Capabilities</span>
          </h1>
          <p className="text-base max-w-xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            From precision 2D lighting engineering and photorealistic 3D simulations to turnkey on-site electrical execution and lifelong maintenance.
          </p>
        </div>
      </div>

      {/* Services list */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon] || Zap;
          return (
            <div
              key={service.id}
              className="rounded-2xl overflow-hidden transition-all duration-300 hover:border-amber-500/40 border"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Main Hero Image */}
                {service.image && (
                  <div className={`relative min-h-[300px] lg:min-h-full lg:col-span-5 bg-black ${i % 2 !== 0 ? "lg:order-last" : ""}`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(180deg, transparent 40%, rgba(8,8,8,0.7) 100%)" }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/80 backdrop-blur-md text-amber-400 border border-amber-500/30">
                        {service.number} — SERVICE
                      </span>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className={`p-8 md:p-10 flex flex-col justify-between ${service.image ? "lg:col-span-7" : "lg:col-span-12"}`}>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: "var(--accent-glow)", color: "var(--accent)" }}
                      >
                        <Icon size={18} />
                      </div>
                      <span className="text-xs font-bold tracking-widest uppercase text-amber-400">
                        Bright Spark Expertise
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black mb-3" style={{ color: "var(--text-primary)" }}>
                      {service.title}
                    </h2>
                    <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                      {service.description}
                    </p>

                    {/* Features list */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((f) => (
                        <span
                          key={f}
                          className="text-xs px-3 py-1.5 rounded-full"
                          style={{
                            background: "var(--surface-2)",
                            color: "var(--text-secondary)",
                            border: "1px solid var(--border)",
                          }}
                        >
                          {f}
                        </span>
                      ))}
                    </div>

                    {/* Completed Works Thumbnail Row */}
                    {service.completedWorks && service.completedWorks.length > 0 && (
                      <div className="pt-4 border-t border-zinc-800 mb-6">
                        <div className="text-xs font-bold text-zinc-400 mb-3 flex items-center gap-1.5">
                          <CheckCircle2 size={13} className="text-emerald-400" />
                          <span>Delivered Works in this Category:</span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                          {service.completedWorks.slice(0, 3).map((work, idx) => (
                            <div
                              key={idx}
                              className="group relative rounded-lg overflow-hidden aspect-[4/3] bg-black border border-zinc-800"
                            >
                              <Image
                                src={work.image}
                                alt={work.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                              <span className="absolute bottom-1.5 left-1.5 right-1.5 text-[10px] font-bold text-white truncate">
                                {work.title}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 font-bold text-sm group text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      Explore Full Service &amp; Completed Works
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div
          className="rounded-2xl p-10 text-center relative overflow-hidden"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, var(--accent-glow), transparent 70%)" }}
          />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-black mb-3 text-white">
              Ready to execute your lighting or electrical project?
            </h2>
            <p className="text-sm mb-6 text-zinc-300 max-w-lg mx-auto">
              Tell us about your architectural drawings or site requirements and we&apos;ll prepare a photometric design and turnkey quotation.
            </p>
            <Link
              href="/submit-project"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold"
            >
              Start Your Project Consultation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
