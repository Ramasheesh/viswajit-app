"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Sparkles, Filter, Layers } from "lucide-react";

const views = [
  {
    id: "2d",
    label: "2D DESIGN",
    title: "Technical CAD Lighting Plans",
    description:
      "Comprehensive CAD-based lighting layouts with precise fixture positions, circuit diagrams, lux calculations and electrical scheduling. Every plan is engineered for absolute installation accuracy and code compliance.",
    image: "/images/project_2d_plan.jpg",
    color: "#60a5fa",
    features: [
      "Reflected ceiling plans",
      "Fixture schedules & beam angles",
      "Circuit layouts & conduit mapping",
      "Dialux lux level calculations",
      "CAD/DWG format delivery",
    ],
  },
  {
    id: "3d",
    label: "3D VISUALIZATION",
    title: "Photorealistic Light Simulations",
    description:
      "See your space illuminated before a single fixture is installed. Our 3D simulations calculate real light behavior — bounce, shadow, color temperature and lux distribution — with photographic accuracy.",
    image: "/images/mural_wall_cove_commissioning.jpg",
    color: "#f59e0b",
    features: [
      "Photorealistic render quality",
      "Day & night illumination scenarios",
      "Accurate 2700K - 4000K color temperatures",
      "Glare (UGR < 19) validation",
      "Virtual walkthrough presentation",
    ],
  },
  {
    id: "executed",
    label: "INSTALLED",
    title: "Completed Projects & Turnkey Execution",
    description:
      "The final installed result delivered on-site. Our physical installations match the 3D visualization — because we design with certified master electricians, laser-aligned fixtures, and full commissioning sign-off.",
    image: "/images/luxury_living_room_completed.jpg",
    color: "#34d399",
    features: [
      "100% matches design & render",
      "Licensed master electrician installation",
      "Fully tested & photometric audited",
      "Turnkey handover documentation",
      "Ongoing AMC warranty support",
    ],
  },
];

const allLightingGallery = [
  {
    src: "/images/luxury_living_room_completed.jpg",
    label: "Completed: Luxury Living Room & Crystal Chandelier",
    category: "Residential & Living",
    color: "#34d399",
  },
  {
    src: "/images/living_room_tv_wall_completed.jpg",
    label: "Completed: Media Lounge TV Wall & Brass Swing",
    category: "Residential & Living",
    color: "#34d399",
  },
  {
    src: "/images/3d_floral_wall_mural.jpg",
    label: "Completed: Sculpted 3D Floral Wall Art & Sconces",
    category: "Accent Walls & Murals",
    color: "#34d399",
  },
  {
    src: "/images/mural_wall_cove_commissioning.jpg",
    label: "Completed: 3D Art Wall & Ceiling Cove Calibration",
    category: "Accent Walls & Murals",
    color: "#34d399",
  },
  {
    src: "/images/living_room_ceiling_cove.jpg",
    label: "Completed: Contoured Ceiling Cove & Chandelier",
    category: "Luxury Ceilings & Coves",
    color: "#34d399",
  },
  {
    src: "/images/circular_dome_cove_swing_night.jpg",
    label: "Completed: Circular Dome Halo & Brass Swing (Night)",
    category: "Luxury Ceilings & Coves",
    color: "#34d399",
  },
  {
    src: "/images/circular_dome_living_room.jpg",
    label: "Completed: Circular Dome Balcony Lounge (Day)",
    category: "Luxury Ceilings & Coves",
    color: "#34d399",
  },
  {
    src: "/images/bedroom_floating_bed_led.jpg",
    label: "Completed: Master Floating Bed Plinth & Headboard LED",
    category: "Kitchen & Bedroom",
    color: "#34d399",
  },
  {
    src: "/images/modular_kitchen_skirting_led.jpg",
    label: "Completed: Modular Kitchen Floor Skirting LED Wash",
    category: "Kitchen & Bedroom",
    color: "#34d399",
  },
  {
    src: "/images/dining_room_partition_lighting.jpg",
    label: "Completed: Dining Suite with Glass Cabinet Lighting",
    category: "Residential & Living",
    color: "#34d399",
  },
  {
    src: "/images/double_height_chandelier_swing.jpg",
    label: "Completed: Double-Height Atrium Chandelier Rigging",
    category: "Luxury Ceilings & Coves",
    color: "#34d399",
  },
  {
    src: "/images/modern_circular_ring_fixture.jpg",
    label: "Completed: Designer Multi-Ring Circular Luminaire",
    category: "Luxury Ceilings & Coves",
    color: "#34d399",
  },
  {
    src: "/images/ongoing_corridor_linear_profile.jpg",
    label: "Completed Installation: Geometric Profile Corridor",
    category: "Linear Profile Lighting",
    color: "#34d399",
  },
  {
    src: "/images/ongoing_wooden_rafter_ceiling.jpg",
    label: "Completed Installation: Wooden Louvre Baffle Ceiling",
    category: "Linear Profile Lighting",
    color: "#34d399",
  },
  {
    src: "/images/ongoing_wooden_baffle_linear_led.jpg",
    label: "Completed Installation: Baffle Ceiling Linear LED Channel",
    category: "Linear Profile Lighting",
    color: "#34d399",
  },
  {
    src: "/images/ongoing_wall_profile_lighting.jpg",
    label: "Completed Installation: Fluted Wall Recessed Profile",
    category: "Linear Profile Lighting",
    color: "#34d399",
  },
  {
    src: "/images/ongoing_island_counter_lighting.jpg",
    label: "Completed Installation: Collaborative Island Counter Lighting",
    category: "Linear Profile Lighting",
    color: "#34d399",
  },
  {
    src: "/images/ongoing_curved_cove_wiring.jpg",
    label: "Completed Installation: Curved Tray Ceiling Cove Illumination",
    category: "Luxury Ceilings & Coves",
    color: "#34d399",
  },
  {
    src: "/images/project_2d_plan.jpg",
    label: "Technical Design: 2D CAD Reflected Ceiling Plan",
    category: "Technical 2D CAD",
    color: "#60a5fa",
  },
];

const galleryCategories = [
  "All Completed Works",
  "Luxury Ceilings & Coves",
  "Accent Walls & Murals",
  "Linear Profile Lighting",
  "Residential & Living",
  "Kitchen & Bedroom",
  "Technical 2D CAD",
];

export default function LightingPage() {
  const [active, setActive] = useState("2d");
  const [activeGalleryCat, setActiveGalleryCat] = useState("All Completed Works");

  const current = views.find((v) => v.id === active) || views[0];

  const filteredGallery =
    activeGalleryCat === "All Completed Works"
      ? allLightingGallery
      : allLightingGallery.filter((item) => item.category === activeGalleryCat);

  return (
    <div className="min-h-screen" style={{ paddingTop: "80px", background: "var(--background)" }}>
      {/* Hero */}
      <div
        className="relative py-20 md:py-28 arch-grid overflow-hidden"
        style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at top, var(--accent-glow), transparent 60%)" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="section-number mb-4">Complete Lighting Engineering</div>
          <h1 className="section-title mb-4" style={{ color: "var(--text-primary)" }}>
            Design → Visualize → <span className="text-gradient">Execute</span>
          </h1>
          <p className="text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            We transform architectural drawings into photometric calculations and deliver turnkey completed lighting installations.
            Browse our full gallery of 19 verified project installations and technical plans.
          </p>

          <div className="flex justify-center items-center gap-3 mt-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
              <CheckCircle2 size={13} />
              <span>All 19 Works &amp; Layouts Documented</span>
            </span>
          </div>
        </div>
      </div>

      {/* Tab switcher for 3-step workflow */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center mb-12">
          <div
            className="flex p-1.5 gap-1 rounded-2xl"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            {views.map((v) => (
              <button
                key={v.id}
                id={`lighting-tab-${v.id}`}
                onClick={() => setActive(v.id)}
                className="px-6 py-3 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer"
                style={{
                  background: active === v.id ? v.color : "transparent",
                  color: active === v.id ? "#000" : "var(--text-secondary)",
                }}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Step Interactive View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-black border border-zinc-800 shadow-2xl">
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute top-5 left-5 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest backdrop-blur-md"
                  style={{
                    background: "rgba(8,8,8,0.85)",
                    border: `1px solid ${current.color}`,
                    color: current.color,
                  }}
                >
                  {current.label}
                </div>
              </div>

              {/* Text */}
              <div>
                <div className="font-bold text-xs tracking-widest mb-3 uppercase" style={{ color: current.color }}>
                  STAGE — {current.label}
                </div>
                <h2 className="text-3xl md:text-4xl font-black mb-5" style={{ color: "var(--text-primary)" }}>
                  {current.title}
                </h2>
                <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
                  {current.description}
                </p>
                <div className="space-y-3">
                  {current.features.map((f) => (
                    <div key={f} className="flex items-center gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: current.color }} />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Complete 19-Work Gallery Showcase */}
        <div className="mt-24 pt-12 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                <Sparkles size={14} />
                <span>Complete Real Works Archive</span>
              </div>
              <h2 className="text-3xl font-black text-white">
                All Completed Works &amp; Design <span className="text-gradient">Gallery</span>
              </h2>
              <p className="text-zinc-400 text-sm mt-1">
                Every project image captured from completed residential ceilings, art walls, custom profiles, and technical CAD plans.
              </p>
            </div>

            {/* Total Badge */}
            <div className="text-xs px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 font-bold self-start md:self-auto">
              Showing {filteredGallery.length} of {allLightingGallery.length} Works
            </div>
          </div>

          {/* Gallery Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
            <Filter size={14} className="text-zinc-500 shrink-0 mr-1" />
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveGalleryCat(cat)}
                className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeGalleryCat === cat
                    ? "bg-amber-500 text-black shadow-md shadow-amber-500/20"
                    : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Full Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredGallery.map((item, i) => (
                <motion.div
                  key={item.src + i}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl overflow-hidden aspect-[4/3] group bg-black border border-zinc-800 hover:border-amber-500/40 transition-all duration-300 shadow-xl"
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover group-hover:scale-106 transition-transform duration-600"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded text-[11px] font-bold bg-black/80 backdrop-blur-md text-amber-400 border border-amber-500/30">
                    {item.category}
                  </div>

                  {/* Title & Status */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 uppercase tracking-wider mb-1">
                      <CheckCircle2 size={11} />
                      <span>Verified Completed Work</span>
                    </div>
                    <div className="font-bold text-sm text-white leading-snug drop-shadow-md">
                      {item.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
