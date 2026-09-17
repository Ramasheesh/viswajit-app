import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Award, ShieldCheck, Users, CheckCircle2 } from "lucide-react";
import { company } from "@/lib/data/company";
import { timeline } from "@/lib/data/testimonials";

export const metadata: Metadata = {
  title: "About | Viswajit Electrical & Lighting",
  description:
    "15+ years of professional architectural lighting design and electrical contracting. Our journey, team and engineering values.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Hero Header */}
      <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 bg-zinc-950 border-b border-zinc-800/80 overflow-hidden">
        {/* Ambient glows and grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.14),transparent_70%)] pointer-events-none blur-2xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-6 text-xs sm:text-sm font-bold uppercase tracking-widest">
            <Sparkles size={15} />
            <span>Our Heritage &amp; Vision</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">Viswajit</span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-300 max-w-3xl leading-relaxed">
            {company.description}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        {/* Mission & Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              More than contractors. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                Architectural lighting designers.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-4">
              Founded in 2010 as an electrical contracting firm, Viswajit Electrical &amp; Lighting has grown into a comprehensive lighting and electrical engineering studio — offering end-to-end design, photorealistic Dialux visualization, and certified on-ground turnkey execution.
            </p>
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-8">
              Today we partner with prominent architects, interior designers, corporate developers, luxury hoteliers, and private estate owners across North India. We bring the same scientific photometrics and execution rigor to every space, regardless of complexity.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 p-6 sm:p-7 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl mb-8">
              {[
                { value: `${company.experience}+`, label: "Years Experience" },
                { value: `${company.projectsCompleted}+`, label: "Projects Done" },
                { value: `${company.locationsServed}+`, label: "Cities Served" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl sm:text-4xl font-black text-amber-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-zinc-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/submit-project"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-base sm:text-lg bg-amber-500 text-black hover:bg-amber-400 shadow-xl shadow-amber-500/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              Start a Project
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Right Image Display */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[1/1] border border-zinc-800 shadow-2xl">
              <Image
                src="/images/hero_bg.jpg"
                alt="Our team at work — architectural lighting installation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
              
              {/* Overlay pill */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-zinc-950/90 backdrop-blur-md border border-zinc-800 text-white flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">Certified Master Electricians</div>
                  <div className="text-xs text-zinc-400">Govt. Licensed &amp; Supervised On-Site</div>
                </div>
                <CheckCircle2 size={24} className="text-amber-400 shrink-0" />
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-3 text-xs sm:text-sm font-bold uppercase tracking-widest">
              Core Principles
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Award,
                title: "Design-First Engineering",
                desc: "Every project begins with a photometrically engineered 2D plan and Dialux simulation. We never guess — we design with precision.",
              },
              {
                icon: ShieldCheck,
                title: "Certified Execution",
                desc: "Artistic lighting vision backed by electrical safety standards, IP ratings, zero-glare comfort (UGR < 19), and tested load balancing.",
              },
              {
                icon: Users,
                title: "Client Partnership",
                desc: "Direct coordination with architects, builders, and property owners from early blueprints through to post-handover maintenance.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="group p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/40 hover:bg-zinc-850 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-amber-500/10 text-amber-400 mb-6 group-hover:scale-105 transition-transform">
                    <v.icon size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Milestone Journey Timeline */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-3 text-xs sm:text-sm font-bold uppercase tracking-widest">
              Milestones
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Journey</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
            {timeline.map((event) => (
              <div
                key={event.year}
                className="flex items-start gap-6 p-6 sm:p-7 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/30 transition-all shadow-lg"
              >
                <div className="shrink-0 text-3xl font-black text-amber-400 font-mono">
                  {event.year}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                    {event.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
