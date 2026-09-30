import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, ChevronLeft, CheckCircle2, ShieldCheck, Layers, Sparkles } from "lucide-react";
import { services } from "@/lib/data/services";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | Bright spark  Electrical & Lighting`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <div className="min-h-screen" style={{ paddingTop: "80px", background: "var(--background)" }}>
      {/* Hero */}
      <div
        className="relative py-20 arch-grid"
        style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at top left, var(--accent-glow), transparent 60%)" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-semibold mb-6 hover:text-amber-400 transition-colors"
            style={{ color: "var(--text-muted)" }}
          >
            <ChevronLeft size={14} /> Back to All Services
          </Link>
          <div className="section-number mb-4">{service.number} — Service Specialization</div>
          <h1 className="section-title mb-4" style={{ color: "var(--text-primary)" }}>
            <span className="text-gradient">{service.title}</span>
          </h1>
          <p className="text-base max-w-2xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {service.shortDescription}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Featured Image */}
            {service.image && (
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-black border border-zinc-800 shadow-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-black/80 backdrop-blur-md text-amber-400 border border-amber-500/30">
                    Primary Service Visual
                  </span>
                </div>
              </div>
            )}

            {/* About the service */}
            <section>
              <h2 className="text-2xl font-black mb-4" style={{ color: "var(--text-primary)" }}>
                About this Service
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {service.description}
              </p>
            </section>

            {/* What's Included */}
            <section>
              <h2 className="text-2xl font-black mb-4" style={{ color: "var(--text-primary)" }}>
                What&apos;s Included &amp; Technical Scope
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {service.features.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800 bg-zinc-900/60"
                  >
                    <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                    <span className="text-sm font-semibold text-zinc-200">{f}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Dedicated Completed Works Delivered Section */}
            {service.completedWorks && service.completedWorks.length > 0 && (
              <section className="pt-6 border-t border-zinc-800">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                      <Sparkles size={14} />
                      <span>On-Site Portfolio</span>
                    </div>
                    <h2 className="text-2xl font-black text-white">
                      Completed Works Delivered for this Service
                    </h2>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
                    {service.completedWorks.length} Verified Installations
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {service.completedWorks.map((work, idx) => (
                    <div
                      key={idx}
                      className="group rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/70 hover:border-amber-500/40 transition-all duration-300"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-black">
                        <Image
                          src={work.image}
                          alt={work.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded text-[11px] font-bold bg-black/85 backdrop-blur-md text-amber-400 border border-amber-500/30">
                          {work.category}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-sm text-white group-hover:text-amber-400 transition-colors">
                          {work.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div
              className="rounded-2xl p-6 sticky top-24"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ background: "linear-gradient(90deg, var(--accent), transparent)" }}
              />
              <h3 className="font-black text-lg mb-2 text-white">
                Start with {service.title}
              </h3>
              <p className="text-sm mb-6 text-zinc-400 leading-relaxed">
                Submit your project drawings or schedule a direct site consultation with our engineering team.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
                  <span>Certified Turnkey Execution</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <Layers size={16} className="text-amber-400 shrink-0" />
                  <span>Dialux Validated Lux Calculations</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                  <span>Dedicated Project Manager</span>
                </div>
              </div>

              <Link
                href="/submit-project"
                className="btn-primary flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm mb-3"
              >
                Submit Project Inquiry <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="btn-outline flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm"
              >
                Schedule Site Visit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
