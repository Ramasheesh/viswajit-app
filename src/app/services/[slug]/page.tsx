import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, ChevronLeft } from "lucide-react";
import { services } from "@/lib/data/services";

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | Viswajit Electrical & Lighting`,
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
      <div className="relative py-20 arch-grid" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at top left, var(--accent-glow), transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/services" className="inline-flex items-center gap-1.5 text-xs font-semibold mb-6" style={{ color: "var(--text-muted)" }}>
            <ChevronLeft size={14} /> All Services
          </Link>
          <div className="section-number mb-4">{service.number}</div>
          <h1 className="section-title mb-4" style={{ color: "var(--text-primary)" }}>
            <span className="text-gradient">{service.title}</span>
          </h1>
          <p className="text-base max-w-xl" style={{ color: "var(--text-secondary)" }}>{service.shortDescription}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {service.image && (
              <div className="relative rounded-2xl overflow-hidden aspect-video">
                <Image src={service.image} alt={service.title} fill className="object-cover" />
              </div>
            )}
            <div>
              <h2 className="text-xl font-black mb-4" style={{ color: "var(--text-primary)" }}>About this Service</h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>{service.description}</p>
            </div>
            <div>
              <h2 className="text-xl font-black mb-4" style={{ color: "var(--text-primary)" }}>What&apos;s Included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((f) => (
                  <div key={f} className="flex items-center gap-3 p-4 rounded-xl" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--accent)" }} />
                    <span className="text-sm" style={{ color: "var(--text-primary)" }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <div className="rounded-2xl p-6 sticky top-24" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
              <h3 className="font-black text-base mb-4" style={{ color: "var(--text-primary)" }}>Start with this service</h3>
              <p className="text-sm mb-5" style={{ color: "var(--text-secondary)" }}>Submit a project inquiry and our team will create a tailored proposal.</p>
              <Link href="/submit-project" className="btn-primary flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm mb-3">
                Submit Project <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-outline flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
