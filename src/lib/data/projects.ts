import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "The Grand Residency",
    slug: "grand-residency",
    location: "Lucknow, UP",
    category: "Residential",
    year: 2024,
    featured: true,
    description:
      "A 4,200 sq ft luxury villa with a complete lighting design system — from concept through 2D planning, 3D visualization and full installation. The brief was simple: warmth, drama and architectural precision.",
    services: ["2D Lighting Design", "3D Visualization", "Interior Lighting", "Electrical Installation"],
    coverImage: "/images/project_residential.jpg",
    gallery: ["/images/project_residential.jpg", "/images/project_3d_render.jpg"],
    twoDImages: ["/images/project_2d_plan.jpg"],
    threeDImages: ["/images/project_3d_render.jpg"],
    completedImages: ["/images/project_residential.jpg"],
    client: "Private Residence",
    area: "4,200 sq ft",
    timeline: "8 Weeks",
    challenge:
      "The client wanted dramatic warmth without losing architectural clarity. The double-height living area required a lighting system that would work both for everyday living and entertaining.",
    lightingConcept:
      "We designed a three-layer system: warm amber cove lighting for ambient, directional recessed for task, and precise accent spotlights to highlight the architectural staircase and artwork.",
    execution:
      "All fixtures were pre-tested and positioned using our 3D model as reference. The installation team worked in phases, completing rough-in first, then trim installation and commissioning.",
  },
  {
    id: "2",
    title: "Nexus Corporate HQ",
    slug: "nexus-corporate-hq",
    location: "Noida, UP",
    category: "Commercial",
    year: 2024,
    featured: true,
    description:
      "A 12,000 sq ft corporate headquarters with architectural ceiling lighting, open-plan workstation lighting and a dramatic reception installation. Smart controls throughout.",
    services: ["2D Lighting Design", "3D Visualization", "Commercial Electrical", "Turnkey"],
    coverImage: "/images/project_commercial.jpg",
    gallery: ["/images/project_commercial.jpg", "/images/project_2d_plan.jpg"],
    twoDImages: ["/images/project_2d_plan.jpg"],
    threeDImages: ["/images/project_3d_render.jpg"],
    completedImages: ["/images/project_commercial.jpg"],
    client: "Nexus Corp Ltd",
    area: "12,000 sq ft",
    timeline: "14 Weeks",
    challenge:
      "Balancing premium aesthetics with functional task lighting across open-plan workstations while maintaining energy efficiency targets of 8W/sq ft maximum.",
    lightingConcept:
      "Architectural linear LED systems define the ceiling geometry. Cool-white task lighting with individual dimmer control for workstations. Warm accent zones for meeting rooms and reception.",
    execution:
      "Turnkey execution: panel upgrades, circuit routing, fixture installation and DALI smart control commissioning delivered in 14 weeks on schedule.",
  },
  {
    id: "3",
    title: "Marble Arch Hotel Facade",
    slug: "marble-arch-hotel-facade",
    location: "Lucknow, UP",
    category: "Architectural",
    year: 2023,
    featured: true,
    description:
      "Complete exterior architectural lighting for a 5-star hotel facade. Stone uplighting, colonnade accent lighting and dramatic entrance feature — all controlled via smart building system.",
    services: ["Architectural Lighting", "Exterior Lighting", "Electrical Installation"],
    coverImage: "/images/project_architectural.jpg",
    gallery: ["/images/project_architectural.jpg", "/images/project_exterior.jpg"],
    twoDImages: ["/images/project_2d_plan.jpg"],
    threeDImages: ["/images/project_3d_render.jpg"],
    completedImages: ["/images/project_architectural.jpg"],
    client: "Marble Arch Hotels",
    area: "Facade: 3,800 sq ft",
    timeline: "10 Weeks",
    challenge:
      "IP65-rated installation on heritage-inspired stone facade requiring custom bracket fabrication and fully concealed cable routing without damaging the stone finish.",
    lightingConcept:
      "Warm 2700K uplighting to enhance the stone texture. Cool-white accent for modern glass sections. Automated dusk-to-dawn switching with dimming for late-night energy saving.",
    execution:
      "Custom stainless steel brackets fabricated and powder-coated to match facade. All cabling concealed within existing architectural joints. 18-month maintenance contract included.",
  },
  {
    id: "4",
    title: "The Amber Restaurant",
    slug: "amber-restaurant",
    location: "Kanpur, UP",
    category: "Hospitality",
    year: 2023,
    featured: false,
    description:
      "An intimate fine dining restaurant where lighting tells the story. Backlit onyx bar, bespoke pendant clusters and directional accent lighting create drama at every table.",
    services: ["Interior Lighting", "3D Visualization", "Electrical Installation"],
    coverImage: "/images/project_hospitality.jpg",
    gallery: ["/images/project_hospitality.jpg", "/images/project_3d_render.jpg"],
    twoDImages: ["/images/project_2d_plan.jpg"],
    threeDImages: ["/images/project_3d_render.jpg"],
    completedImages: ["/images/project_hospitality.jpg"],
    client: "Amber Hospitality Group",
    area: "2,800 sq ft",
    timeline: "6 Weeks",
    challenge:
      "Creating theatrical drama while maintaining practical light levels for dining and service operations. The client wanted 'cinematic' without 'dark and difficult to see'.",
    lightingConcept:
      "Four distinct zones: the bar (backlit onyx at 80-100 lux), dining tables (pendant downlights at 120 lux), display shelves (accent LED strips at 200 lux) and entrance (feature wall at 60 lux).",
    execution:
      "All pendant positions coordinated with ceiling structural members. The backlit bar panel installed with custom LED matrix for even illumination across the full onyx slab.",
  },
  {
    id: "5",
    title: "Skyview Luxury Residence",
    slug: "skyview-luxury-residence",
    location: "Gurgaon, Haryana",
    category: "Residential",
    year: 2024,
    featured: false,
    description:
      "High-rise penthouse lighting design with panoramic city views. The lighting was designed to complement — not compete with — the spectacular skyline visible from every room.",
    services: ["2D Lighting Design", "3D Visualization", "Interior Lighting", "Electrical Installation"],
    coverImage: "/images/project_3d_render.jpg",
    gallery: ["/images/project_3d_render.jpg", "/images/project_residential.jpg"],
    twoDImages: ["/images/project_2d_plan.jpg"],
    threeDImages: ["/images/project_3d_render.jpg"],
    completedImages: ["/images/project_3d_render.jpg"],
    client: "Private Residence",
    area: "5,600 sq ft",
    timeline: "12 Weeks",
    challenge:
      "The massive floor-to-ceiling windows created significant glare challenges. Lighting had to be invisible during the day and perfectly balanced against the city glow at night.",
    lightingConcept:
      "Fully dimmable LED system with automated scenes. Flush ceiling fixtures only — no pendants. Linear cove lighting to wash walls from above. DALI-controlled for full scene management.",
    execution:
      "Full Lutron Homeworks installation with iPad/phone control. Each room programmed with 4 pre-set scenes: Day, Evening, Night and Away. 3-month handover and training included.",
  },
  {
    id: "6",
    title: "Royal Garden Landscape",
    slug: "royal-garden-landscape",
    location: "Jaipur, Rajasthan",
    category: "Exterior",
    year: 2022,
    featured: false,
    description:
      "Comprehensive landscape and exterior lighting for a 1.2-acre estate. Tree uplighting, pathway systems, water feature lighting and secure perimeter lighting integrated seamlessly.",
    services: ["Architectural Lighting", "Exterior Lighting", "Electrical Installation"],
    coverImage: "/images/project_exterior.jpg",
    gallery: ["/images/project_exterior.jpg", "/images/project_architectural.jpg"],
    twoDImages: ["/images/project_2d_plan.jpg"],
    threeDImages: ["/images/project_3d_render.jpg"],
    completedImages: ["/images/project_exterior.jpg"],
    client: "Private Estate",
    area: "1.2 acres",
    timeline: "8 Weeks",
    challenge:
      "IP67 underground wiring across 1.2 acres with zero trenching visibility after completion. Fully automated control for a client who travels frequently.",
    lightingConcept:
      "Warm 3000K uplighting on specimen trees. Cool 4000K for pathways and security zones. Underwater LED for the main reflecting pool. All on timer and phone app control.",
    execution:
      "All underground cabling in armoured conduit at 600mm depth. Junction boxes in disguised landscape boxes. Fully automated timer system with phone override installed and tested.",
  },
];
