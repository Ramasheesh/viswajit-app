import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { company } from "@/lib/data/company";
import { timeline } from "@/lib/data/testimonials";

export const metadata: Metadata = {
  title: "About | Viswajit Electrical & Lighting",
  description: "15+ years of professional lighting design and electrical contracting. Our journey, team and values.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ paddingTop: "80px", background: "var(--background)" }}>
      {/* Hero */}
      <div className="relative py-20 md:py-28 overflow-hidden" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div className="absolute inset-0 arch-grid opacity-50" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at top, var(--accent-glow), transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="section-number mb-4">Our Story</div>
          <h1 className="section-title mb-6" style={{ color: "var(--text-primary)" }}>
            About <span className="text-gradient">Viswajit</span>
          </h1>
          <p className="text-base max-w-xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {company.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-6" style={{ color: "var(--text-primary)" }}>
              More than contractors.<br /><span className="text-gradient">Lighting designers.</span>
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              Founded in 2010 as an electrical contracting firm, Viswajit Electrical & Lighting has grown into a complete professional lighting and electrical studio — offering design, visualization and full project execution.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
              Today we work across North India with architects, interior designers, hotel groups, corporate occupiers and private homeowners — bringing the same design rigor and execution precision to every project, regardless of scale.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                { value: `${company.experience}+`, label: "Years" },
                { value: `${company.projectsCompleted}+`, label: "Projects" },
                { value: `${company.locationsServed}+`, label: "Locations" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-black mb-1 text-gradient">{stat.value}</div>
                  <div className="text-xs" style={{ color: "var(--text-muted)" }}>{stat.label}</div>
                </div>
              ))}
            </div>
            <Link href="/submit-project" className="btn-primary inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold">
              Start a Project <ArrowRight size={16} />
            </Link>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <Image src="/images/hero_bg.jpg" alt="Our team at work — architectural lighting project" fill className="object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(8,8,8,0.5), transparent)" }} />
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <h2 className="text-3xl font-black mb-10 text-center" style={{ color: "var(--text-primary)" }}>
            Our <span className="text-gradient">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Design First", desc: "Every project begins with a professionally engineered 2D plan. We never guess — we design." },
              { title: "Technical Excellence", desc: "Our team combines artistic lighting vision with electrical engineering precision. Both matter equally." },
              { title: "Client Partnership", desc: "We work with you, not just for you. Your vision drives every design decision we make." },
            ].map((v) => (
              <div key={v.title} className="p-8 rounded-2xl" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <div className="w-1 h-8 rounded mb-5" style={{ background: "var(--accent)" }} />
                <h3 className="font-black text-lg mb-3" style={{ color: "var(--text-primary)" }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h2 className="text-3xl font-black mb-10" style={{ color: "var(--text-primary)" }}>
            Our <span className="text-gradient">Journey</span>
          </h2>
          <div className="space-y-6">
            {timeline.map((event) => (
              <div
                key={event.year}
                className="flex gap-6 p-6 rounded-xl"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <div className="shrink-0 text-2xl font-black text-gradient">{event.year}</div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: "var(--text-primary)" }}>{event.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
