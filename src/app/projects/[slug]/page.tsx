import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MapPin, Calendar, ArrowRight, ChevronLeft, Ruler } from "lucide-react";
import { projects } from "@/lib/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title}`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen" style={{ paddingTop: "80px", background: "var(--background)" }}>
      {/* Hero image */}
      <div className="relative h-[60vh] min-h-[400px]">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(8,8,8,0.3) 0%, rgba(8,8,8,0.8) 100%)" }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 max-w-7xl mx-auto">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold mb-6"
            style={{ color: "rgba(250,249,247,0.6)" }}
          >
            <ChevronLeft size={14} />
            All Projects
          </Link>
          <div
            className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold mb-3"
            style={{ background: "rgba(245,158,11,0.2)", border: "1px solid var(--accent)", color: "var(--accent)" }}
          >
            {project.category}
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-5 text-sm" style={{ color: "rgba(250,249,247,0.7)" }}>
            <span className="flex items-center gap-1.5"><MapPin size={14} />{project.location}</span>
            <span className="flex items-center gap-1.5"><Calendar size={14} />{project.year}</span>
            {project.area && <span className="flex items-center gap-1.5"><Ruler size={14} />{project.area}</span>}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-black mb-4" style={{ color: "var(--text-primary)" }}>Project Overview</h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>{project.description}</p>
            </section>

            {project.challenge && (
              <section>
                <h2 className="text-2xl font-black mb-4" style={{ color: "var(--text-primary)" }}>The Challenge</h2>
                <div className="p-6 rounded-xl" style={{ background: "var(--surface)", border: "1px solid var(--border)", borderLeft: "3px solid var(--accent)" }}>
                  <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>{project.challenge}</p>
                </div>
              </section>
            )}

            {project.lightingConcept && (
              <section>
                <h2 className="text-2xl font-black mb-4" style={{ color: "var(--text-primary)" }}>Lighting Concept</h2>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>{project.lightingConcept}</p>
              </section>
            )}

            {/* 2D Images */}
            {project.twoDImages.length > 0 && (
              <section>
                <h2 className="text-2xl font-black mb-4" style={{ color: "var(--text-primary)" }}>
                  2D Lighting Plan
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {project.twoDImages.map((img, i) => (
                    <div key={i} className="relative rounded-xl overflow-hidden aspect-[4/3]">
                      <Image src={img} alt={`2D Lighting Plan ${i + 1}`} fill className="object-cover" />
                      <div className="absolute top-3 left-3 px-2 py-1 rounded text-xs font-bold" style={{ background: "rgba(8,8,8,0.8)", color: "#60a5fa" }}>2D PLAN</div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 3D Images */}
            {project.threeDImages.length > 0 && (
              <section>
                <h2 className="text-2xl font-black mb-4" style={{ color: "var(--text-primary)" }}>3D Visualization</h2>
                <div className="grid grid-cols-1 gap-4">
                  {project.threeDImages.map((img, i) => (
                    <div key={i} className="relative rounded-xl overflow-hidden aspect-[4/3]">
                      <Image src={img} alt={`3D Visualization ${i + 1}`} fill className="object-cover" />
                      <div className="absolute top-3 left-3 px-2 py-1 rounded text-xs font-bold" style={{ background: "rgba(8,8,8,0.8)", color: "var(--accent)" }}>3D RENDER</div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {project.execution && (
              <section>
                <h2 className="text-2xl font-black mb-4" style={{ color: "var(--text-primary)" }}>Execution</h2>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>{project.execution}</p>
              </section>
            )}

            {/* Gallery */}
            <section>
              <h2 className="text-2xl font-black mb-4" style={{ color: "var(--text-primary)" }}>Project Gallery</h2>
              <div className="grid grid-cols-2 gap-4">
                {project.gallery.map((img, i) => (
                  <div key={i} className="relative rounded-xl overflow-hidden aspect-video">
                    <Image src={img} alt={`${project.title} — gallery ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project details */}
            <div className="rounded-2xl p-6 sticky top-24" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
              <div className="absolute top-0 left-0 right-0 h-px rounded-t-2xl" style={{ background: "linear-gradient(90deg, var(--accent), transparent)" }} />
              <h3 className="font-black text-base mb-5" style={{ color: "var(--text-primary)" }}>Project Details</h3>
              <div className="space-y-4">
                {[
                  { label: "Location", value: project.location },
                  { label: "Year", value: String(project.year) },
                  { label: "Category", value: project.category },
                  ...(project.area ? [{ label: "Area", value: project.area }] : []),
                  ...(project.timeline ? [{ label: "Timeline", value: project.timeline }] : []),
                  ...(project.client ? [{ label: "Client", value: project.client }] : []),
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-0.5">
                    <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>{item.label}</span>
                    <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Services */}
              <div className="mt-5 pt-5" style={{ borderTop: "1px solid var(--border)" }}>
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>Services Provided</span>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.services.map((s) => (
                    <span key={s} className="text-xs px-2 py-1 rounded-full" style={{ background: "var(--accent-glow)", color: "var(--accent)", border: "1px solid rgba(245,158,11,0.3)" }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 pt-5 space-y-3" style={{ borderTop: "1px solid var(--border)" }}>
                <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Have a similar project?</p>
                <Link
                  href="/submit-project"
                  className="btn-primary flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm"
                >
                  Start Your Project
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* More projects */}
        {others.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-black mb-8" style={{ color: "var(--text-primary)" }}>More Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {others.map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.slug}`}
                  className="group rounded-2xl overflow-hidden"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image src={p.coverImage} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-black text-base mb-1 group-hover:text-amber-400 transition-colors" style={{ color: "var(--text-primary)" }}>{p.title}</h3>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>{p.location} · {p.year}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
