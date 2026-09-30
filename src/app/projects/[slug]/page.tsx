import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  MapPin,
  Calendar,
  ArrowRight,
  ChevronLeft,
  Ruler,
  CheckCircle2,
  Clock,
  Activity,
  Layers,
  Wrench,
  ShieldCheck,
} from "lucide-react";
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
    title: `${project.title} | Bright Spark Electrical & Lighting`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== slug).slice(0, 2);

  const isOngoing = project.status === "ongoing";

  return (
    <div className="min-h-screen" style={{ paddingTop: "80px", background: "var(--background)" }}>
      {/* Hero Image */}
      <div className="relative h-[65vh] min-h-[440px] bg-black">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(8,8,8,0.3) 0%, rgba(8,8,8,0.88) 100%)" }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-7xl mx-auto z-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold mb-6 hover:text-amber-400 transition-colors"
            style={{ color: "rgba(250,249,247,0.7)" }}
          >
            <ChevronLeft size={14} />
            Back to All Works &amp; Projects
          </Link>

          {/* Status and Category badges */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {isOngoing ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-black shadow-lg">
                <span className="w-2 h-2 rounded-full bg-black animate-ping" />
                CURRENT ONGOING SITE WORK
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500 text-white shadow-lg">
                <CheckCircle2 size={13} />
                FINISHED &amp; COMMISSIONED WORK
              </span>
            )}
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md"
              style={{
                background: "rgba(8,8,8,0.75)",
                border: "1px solid rgba(245,158,11,0.3)",
                color: "var(--accent)",
              }}
            >
              {project.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-5 text-sm font-medium" style={{ color: "rgba(250,249,247,0.85)" }}>
            <span className="flex items-center gap-1.5">
              <MapPin size={15} className="text-amber-400" />
              {project.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={15} className="text-amber-400" />
              {project.year}
            </span>
            {project.area && (
              <span className="flex items-center gap-1.5">
                <Ruler size={15} className="text-amber-400" />
                {project.area}
              </span>
            )}
            {project.currentStage && (
              <span className="flex items-center gap-1.5 text-amber-300">
                <Activity size={15} className="animate-pulse text-amber-400" />
                {project.currentStage}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Ongoing Live Status Banner (if ongoing) */}
            {isOngoing && (
              <div
                className="p-6 rounded-2xl border relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(245,158,11,0.1) 0%, rgba(8,8,8,0.9) 100%)",
                  borderColor: "rgba(245,158,11,0.35)",
                }}
              >
                <div className="flex items-center gap-2.5 text-amber-400 font-bold text-sm tracking-wider uppercase mb-2">
                  <Activity size={16} className="animate-pulse" />
                  <span>Live Site Execution In Progress</span>
                </div>
                <h2 className="text-xl font-black text-white mb-2">
                  Active Milestone: {project.currentStage}
                </h2>
                <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                  This project is actively being executed on site by our certified engineering team.
                  All rough-in conduit paths, load balancing panels, and laser-aligned profile housings
                  are undergoing rigorous stage inspections.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-amber-500/20 text-xs">
                  <div>
                    <span className="text-zinc-500 block">CAD Photometrics</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 size={11} /> 100% Validated
                    </span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block">Rough-In Wiring</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 size={11} /> Complete
                    </span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block">Fixture Handover</span>
                    <span className="text-amber-400 font-bold flex items-center gap-1">
                      <Clock size={11} /> On Schedule
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Overview */}
            <section>
              <h2 className="text-2xl font-black mb-4" style={{ color: "var(--text-primary)" }}>
                Project Overview
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {project.description}
              </p>
            </section>

            {/* Challenge */}
            {project.challenge && (
              <section>
                <h2 className="text-2xl font-black mb-4" style={{ color: "var(--text-primary)" }}>
                  Engineering Challenge
                </h2>
                <div
                  className="p-6 rounded-xl"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderLeft: "3px solid var(--accent)",
                  }}
                >
                  <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {project.challenge}
                  </p>
                </div>
              </section>
            )}

            {/* Lighting Concept */}
            {project.lightingConcept && (
              <section>
                <h2 className="text-2xl font-black mb-4" style={{ color: "var(--text-primary)" }}>
                  Lighting Concept &amp; Photometrics
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {project.lightingConcept}
                </p>
              </section>
            )}

            {/* Execution Details */}
            {project.execution && (
              <section>
                <h2 className="text-2xl font-black mb-4" style={{ color: "var(--text-primary)" }}>
                  {isOngoing ? "Current Site Execution" : "Execution & Handover"}
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {project.execution}
                </p>
              </section>
            )}

            {/* Site Execution Photos (if ongoing or executionImages available) */}
            {project.executionImages && project.executionImages.length > 0 && (
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-black" style={{ color: "var(--text-primary)" }}>
                    On-Site Execution Photos
                  </h2>
                  <span className="text-xs px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold">
                    Real Site Progress
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.executionImages.map((img, i) => (
                    <div key={i} className="relative rounded-xl overflow-hidden aspect-[4/3] bg-black border border-zinc-800">
                      <Image
                        src={img}
                        alt={`${project.title} on-site execution step ${i + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-[11px] font-bold text-amber-400 border border-amber-500/30">
                        Site Execution Shot #{i + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 2D CAD Plan */}
            {project.twoDImages.length > 0 && (
              <section>
                <h2 className="text-2xl font-black mb-4" style={{ color: "var(--text-primary)" }}>
                  2D CAD Technical Lighting Plan
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {project.twoDImages.map((img, i) => (
                    <div key={i} className="relative rounded-xl overflow-hidden aspect-[16/10] bg-black border border-zinc-800">
                      <Image
                        src={img}
                        alt={`2D Lighting Plan ${i + 1}`}
                        fill
                        className="object-cover hover:scale-103 transition-transform duration-500"
                      />
                      <div
                        className="absolute top-3 left-3 px-3 py-1 rounded-sm text-xs font-bold"
                        style={{ background: "rgba(8,8,8,0.85)", color: "#60a5fa", border: "1px solid rgba(96,165,250,0.3)" }}
                      >
                        CAD / PHOTOMETRIC LAYOUT
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Complete Project Gallery */}
            <section>
              <h2 className="text-2xl font-black mb-4" style={{ color: "var(--text-primary)" }}>
                {isOngoing ? "Ongoing Progress Gallery" : "Finished Project Gallery"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.gallery.map((img, i) => (
                  <div key={i} className="relative rounded-xl overflow-hidden aspect-[4/3] bg-black border border-zinc-800">
                    <Image
                      src={img}
                      alt={`${project.title} gallery photo ${i + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div
              className="rounded-2xl p-6 sticky top-24"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ background: isOngoing ? "var(--accent)" : "linear-gradient(90deg, #10b981, #f59e0b)" }}
              />

              {/* Status Header */}
              <div className="mb-5 pb-4 border-b border-zinc-800">
                <span className="text-xs font-bold tracking-widest uppercase text-zinc-500 block mb-1">
                  Project Status
                </span>
                {isOngoing ? (
                  <div className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-400">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                    <span>In-Progress Execution</span>
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-400">
                    <CheckCircle2 size={16} />
                    <span>Completed &amp; Handed Over</span>
                  </div>
                )}
              </div>

              <h3 className="font-black text-base mb-5" style={{ color: "var(--text-primary)" }}>
                Project Specifications
              </h3>

              <div className="space-y-4">
                {[
                  { label: "Location", value: project.location },
                  { label: "Year", value: String(project.year) },
                  { label: "Category", value: project.category },
                  ...(project.area ? [{ label: "Area / Scope", value: project.area }] : []),
                  ...(project.timeline ? [{ label: "Timeline", value: project.timeline }] : []),
                  ...(project.client ? [{ label: "Client Type", value: project.client }] : []),
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-0.5">
                    <span className="text-[11px] font-bold tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Services Provided */}
              <div className="mt-5 pt-5" style={{ borderTop: "1px solid var(--border)" }}>
                <span className="text-[11px] font-bold tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
                  Scope of Services
                </span>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.services.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-md font-medium"
                      style={{
                        background: "var(--accent-glow)",
                        color: "var(--accent)",
                        border: "1px solid rgba(245,158,11,0.3)",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quality & Safety Assurance */}
              <div className="mt-5 pt-4 space-y-2 border-t border-zinc-800 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-emerald-400 shrink-0" />
                  <span>Govt. Licensed Electrical Installation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers size={14} className="text-amber-400 shrink-0" />
                  <span>Dialux Tested Lux Levels</span>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 pt-5 space-y-3" style={{ borderTop: "1px solid var(--border)" }}>
                <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                  Need a similar lighting plan or site execution?
                </p>
                <Link
                  href="/submit-project"
                  className="btn-primary flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm"
                >
                  Start Your Consultation
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* More Projects */}
        {others.length > 0 && (
          <div className="mt-20 pt-12 border-t border-zinc-800">
            <h2 className="text-2xl font-black mb-8" style={{ color: "var(--text-primary)" }}>
              More Featured Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {others.map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.slug}`}
                  className="group rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/60 hover:border-amber-500/40 transition-all duration-300"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={p.coverImage}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      {p.status === "ongoing" ? (
                        <span className="px-2.5 py-1 rounded text-[11px] font-bold bg-amber-500 text-black">
                          ONGOING WORK
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 rounded text-[11px] font-bold bg-emerald-500 text-white">
                          FINISHED WORK
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-black text-base mb-1 group-hover:text-amber-400 transition-colors" style={{ color: "var(--text-primary)" }}>
                      {p.title}
                    </h3>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                      {p.location} · {p.year}
                    </p>
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
