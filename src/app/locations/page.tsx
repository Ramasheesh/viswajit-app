import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { locations } from "@/lib/data/locations";

export const metadata: Metadata = {
  title: "Locations | Bright spark  Electrical & Lighting",
  description: "We serve 50+ locations across North India. Find our service areas including Lucknow, Kanpur, Delhi, Noida, Gurgaon, Jaipur and more.",
};

export default function LocationsPage() {
  return (
    <div className="min-h-screen" style={{ paddingTop: "80px", background: "var(--background)" }}>
      {/* Hero */}
      <div className="relative py-20 md:py-28 arch-grid" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at top, var(--accent-glow), transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="section-number mb-4">Service Areas</div>
          <h1 className="section-title mb-4" style={{ color: "var(--text-primary)" }}>
            Areas <span className="text-gradient">We Serve</span>
          </h1>
          <p className="text-base max-w-xl" style={{ color: "var(--text-secondary)" }}>
            Delivering professional lighting design and electrical contracting across 50+ locations in North and Central India.
          </p>
        </div>
      </div>

      {/* Map placeholder */}
      <div
        className="relative h-64 md:h-80 overflow-hidden"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div
          className="absolute inset-0 arch-grid"
          style={{ background: "var(--surface)" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-3">🗺️</div>
            <p className="text-sm font-semibold" style={{ color: "var(--text-secondary)" }}>
              Mumbai & Navi Mumbai
            </p>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              Interactive map — connect Google Maps for live data
            </p>
          </div>
        </div>
        {/* City dots overlay */}
        {locations.slice(0, 5).map((loc, i) => (
          <div
            key={loc.id}
            className="absolute w-3 h-3 rounded-full animate-glow-pulse"
            style={{
              background: "var(--accent)",
              top: `${25 + i * 10}%`,
              left: `${30 + i * 8}%`,
              boxShadow: "0 0 12px var(--accent)",
            }}
          />
        ))}
      </div>

      {/* Locations grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {locations.map((loc) => (
            <div
              key={loc.id}
              id={loc.name.toLowerCase().replace(/\s+/g, "-")}
              className="rounded-2xl p-7 transition-all duration-300 hover:border-amber-500/40 hover:-translate-y-1"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--accent-glow)", color: "var(--accent)" }}>
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h2 className="font-black text-lg" style={{ color: "var(--text-primary)" }}>{loc.name}</h2>
                    <span className="text-xs font-bold" style={{ color: "var(--accent)" }}>{loc.projects}+ projects</span>
                  </div>
                </div>
                {loc.available && (
                  <span className="flex items-center gap-1 text-xs px-2 py-1 rounded-full" style={{ background: "rgba(52, 211, 153, 0.1)", color: "#34d399", border: "1px solid rgba(52,211,153,0.3)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    Active
                  </span>
                )}
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>{loc.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {loc.services.map((s) => (
                  <span key={s} className="text-xs px-2 py-1 rounded-full" style={{ background: "var(--surface-2)", color: "var(--text-muted)", border: "1px solid var(--border)" }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-10 text-center relative overflow-hidden" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, var(--accent-glow), transparent 70%)" }} />
          <div className="relative z-10">
            <h2 className="text-2xl font-black mb-3" style={{ color: "var(--text-primary)" }}>
              Your city not listed?
            </h2>
            <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: "var(--text-secondary)" }}>
              We travel for the right project. Contact us to discuss your location and requirements.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold">
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
