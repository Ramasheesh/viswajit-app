import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    id: "1",
    number: "01",
    title: "2D Lighting Design",
    slug: "2d-lighting-design",
    shortDescription: "Precise technical lighting plans for every space.",
    description:
      "We create comprehensive 2D lighting layouts including floor plans, fixture placement, circuit routing and electrical scheduling. Every plan is engineered for optimal light distribution, energy efficiency and code compliance.",
    icon: "PenTool",
    image: "/images/project_2d_plan.jpg",
    features: [
      "Reflected ceiling plans",
      "Fixture schedules",
      "Circuit layouts",
      "Lux level calculations",
      "CAD drawings",
      "DWG format delivery",
    ],
    completedWorks: [
      {
        title: "2D Reflected Ceiling & Circuit CAD Plan",
        image: "/images/project_2d_plan.jpg",
        category: "Technical CAD",
      },
      {
        title: "Contoured False Ceiling Cove & Fixture Layout",
        image: "/images/living_room_ceiling_cove.jpg",
        category: "Ceiling Plan",
      },
      {
        title: "Double-Height Atrium Rigging & Layout Design",
        image: "/images/double_height_chandelier_swing.jpg",
        category: "Atrium Layout",
      },
    ],
  },
  {
    id: "2",
    number: "02",
    title: "3D Lighting Visualization",
    slug: "3d-lighting-visualization",
    shortDescription: "See your lighting before a single fixture is installed.",
    description:
      "Photorealistic 3D simulations that calculate light bounce, color temperature, beam angles and lux distribution before materials are purchased or installed. Eliminate guesswork and make confident design decisions.",
    icon: "Layers",
    image: "/images/mural_wall_cove_commissioning.jpg",
    features: [
      "Photorealistic renders",
      "Day/night visualization",
      "Material & color accuracy",
      "Virtual walkthroughs",
      "Revision rounds",
      "HD image delivery",
    ],
    completedWorks: [
      {
        title: "3D Ceiling Cove & Lighting Calibration",
        image: "/images/mural_wall_cove_commissioning.jpg",
        category: "Simulation",
      },
      {
        title: "Curved Cove Ceiling Photometrics & Testing",
        image: "/images/ongoing_curved_cove_wiring.jpg",
        category: "Cove Testing",
      },
      {
        title: "Modern Circular Ring Cluster Luminaire Simulation",
        image: "/images/modern_circular_ring_fixture.jpg",
        category: "Raytracing",
      },
    ],
  },
  {
    id: "3",
    number: "03",
    title: "Architectural Lighting",
    slug: "architectural-lighting",
    shortDescription: "Facades, structures and accent features illuminated to perfection.",
    description:
      "Precision architectural lighting for building facades, structural elements, art walls and custom ceiling systems. We craft illumination that defines form, highlights texture and creates dramatic presence after dark.",
    icon: "Building2",
    image: "/images/3d_floral_wall_mural.jpg",
    features: [
      "Backlit 3D relief art wall illumination",
      "Custom ceiling trough lighting",
      "Structural chandelier rigging",
      "Waterproof IP65+ linear profiles",
      "Smart scene dimming controls",
      "Anti-glare architectural optics",
    ],
    completedWorks: [
      {
        title: "Sculpted 3D Floral Wall Art with Warm LED Sconces",
        image: "/images/3d_floral_wall_mural.jpg",
        category: "Art Wall",
      },
      {
        title: "Double-Height Crystal Chandelier & Solid Brass Rigging",
        image: "/images/double_height_chandelier_swing.jpg",
        category: "High Ceiling",
      },
      {
        title: "Acoustic Wooden Baffle Ceiling Illumination",
        image: "/images/ongoing_wooden_rafter_ceiling.jpg",
        category: "Architectural Ceiling",
      },
      {
        title: "Recessed Wall Grazer Profile Light",
        image: "/images/ongoing_wall_profile_lighting.jpg",
        category: "Wall Profile",
      },
    ],
  },
  {
    id: "4",
    number: "04",
    title: "Interior Lighting",
    slug: "interior-lighting",
    shortDescription: "Transforming interiors through light, atmosphere and design.",
    description:
      "From luxury residences to high-end hospitality, we design and install interior lighting that creates mood, defines space and enhances architecture. Combining ambient, task and accent lighting layers for perfect results.",
    icon: "Home",
    image: "/images/luxury_living_room_completed.jpg",
    features: [
      "Residential luxury interiors",
      "Bespoke crystal chandeliers",
      "Floating bed under-glow illumination",
      "Curated dining ambient lighting",
      "Layered lighting design",
      "Dimmer & scene control systems",
    ],
    completedWorks: [
      {
        title: "Luxury Living Room with Crystal Chandelier & Floral Wall",
        image: "/images/luxury_living_room_completed.jpg",
        category: "Living Room",
      },
      {
        title: "Entertainment Media Lounge with TV Wall & Brass Swing",
        image: "/images/living_room_tv_wall_completed.jpg",
        category: "Media Lounge",
      },
      {
        title: "Floating Bed Plinth Glow & Fluted Headboard LED",
        image: "/images/bedroom_floating_bed_led.jpg",
        category: "Master Bedroom",
      },
      {
        title: "Dining Pavilion with Illuminated Display & Timber Partition",
        image: "/images/dining_room_partition_lighting.jpg",
        category: "Dining Room",
      },
    ],
  },
  {
    id: "5",
    number: "05",
    title: "Electrical Contracting",
    slug: "electrical-contracting",
    shortDescription: "Complete electrical installation by certified professionals.",
    description:
      "End-to-end electrical installation for residential and commercial projects. From wiring and panels to distribution boards and safety systems — executed with precision and full compliance to standards.",
    icon: "Zap",
    image: "/images/ongoing_wooden_rafter_ceiling.jpg",
    features: [
      "Full project wiring & conduit",
      "Distribution panels & load balancing",
      "Safety systems & earthing",
      "Power outlets & circuit routing",
      "Low-voltage driver enclosures",
      "Inspection & certification",
    ],
    completedWorks: [
      {
        title: "Turnkey Ceiling Wiring & Suspended Drop Cable Management",
        image: "/images/ongoing_wooden_rafter_ceiling.jpg",
        category: "Site Wiring",
      },
      {
        title: "Wooden Baffle Linear Profile Conduit Installation",
        image: "/images/ongoing_wooden_baffle_linear_led.jpg",
        category: "Conduit & Channel",
      },
      {
        title: "Fluted Wall Panel Electrical Rough-In & Driver Integration",
        image: "/images/ongoing_wall_profile_lighting.jpg",
        category: "Panel Electrical",
      },
      {
        title: "Curved Cove Tray Wiring & Fan Distribution Circuit",
        image: "/images/ongoing_curved_cove_wiring.jpg",
        category: "Cove Electrical",
      },
    ],
  },
  {
    id: "6",
    number: "06",
    title: "Turnkey Projects",
    slug: "turnkey-projects",
    shortDescription: "Design to handover — we manage every stage.",
    description:
      "Complete turnkey delivery: design, material procurement, installation, testing and handover. One team, one point of contact, zero coordination stress for the client.",
    icon: "Key",
    image: "/images/living_room_tv_wall_completed.jpg",
    features: [
      "End-to-end project management",
      "Material sourcing & certification",
      "On-site master electrician supervision",
      "Strict quality & photometric control",
      "Testing & commissioning sign-off",
      "Comprehensive client handover",
    ],
    completedWorks: [
      {
        title: "Full Turnkey Living & Media Lounge Handover",
        image: "/images/living_room_tv_wall_completed.jpg",
        category: "Complete Turnkey",
      },
      {
        title: "Circular Dome Ambient Halo & Heirloom Brass Swing Suite",
        image: "/images/circular_dome_cove_swing_night.jpg",
        category: "Turnkey Lounge",
      },
      {
        title: "Modular Kitchen Skirting Floor Wash Lighting",
        image: "/images/modular_kitchen_skirting_led.jpg",
        category: "Modular Kitchen",
      },
      {
        title: "Studio Presentation Island Counter & Baffle Ceiling",
        image: "/images/ongoing_island_counter_lighting.jpg",
        category: "Commercial Turnkey",
      },
    ],
  },
  {
    id: "7",
    number: "07",
    title: "Commercial Projects",
    slug: "commercial-projects",
    shortDescription: "Large-scale electrical & lighting for commercial spaces.",
    description:
      "We handle large-scale commercial lighting and electrical projects for offices, retail, hospitality and institutional facilities — delivering professional results on time and within budget.",
    icon: "BarChart3",
    image: "/images/ongoing_corridor_linear_profile.jpg",
    features: [
      "Corporate offices & conference rooms",
      "Gallery & corridor continuous profiles",
      "Acoustic baffle ceiling integration",
      "DALI smart scene automation",
      "Energy efficient LED retrofits",
      "Certified project management",
    ],
    completedWorks: [
      {
        title: "Continuous Geometric Linear Profile Corridor",
        image: "/images/ongoing_corridor_linear_profile.jpg",
        category: "Gallery Corridor",
      },
      {
        title: "Corporate Baffle Ceiling with Integrated Linear LED Extrusions",
        image: "/images/ongoing_wooden_baffle_linear_led.jpg",
        category: "Conference Suite",
      },
      {
        title: "Studio Collaborative Counter with Overhead Louvre Lights",
        image: "/images/ongoing_island_counter_lighting.jpg",
        category: "Breakout Zone",
      },
      {
        title: "Designer Interlocking Ring Cluster Office Fixture",
        image: "/images/modern_circular_ring_fixture.jpg",
        category: "Boardroom Luminaire",
      },
    ],
  },
  {
    id: "8",
    number: "08",
    title: "Maintenance & Support",
    slug: "maintenance-support",
    shortDescription: "Ongoing support to keep your lighting performing perfectly.",
    description:
      "Annual maintenance contracts, emergency call-outs, fixture replacement, photometric recalibration and system upgrades. We keep your investment performing at its best, long after project completion.",
    icon: "Wrench",
    image: "/images/circular_dome_living_room.jpg",
    features: [
      "Annual maintenance contracts (AMC)",
      "Prompt emergency response",
      "LED driver & fixture replacement",
      "Smart scene recalibration",
      "Safety & earthing audits",
      "Energy efficiency upgrades",
    ],
    completedWorks: [
      {
        title: "Balcony Lounge Dome Ceiling Maintenance & Scene Tuning",
        image: "/images/circular_dome_living_room.jpg",
        category: "Residential Support",
      },
      {
        title: "Nightscape Horizon Brass Swing Ambient Calibration",
        image: "/images/circular_dome_cove_swing_night.jpg",
        category: "Scene Programming",
      },
      {
        title: "Luxury Living Room Chandelier & Cove Annual Inspection",
        image: "/images/living_room_ceiling_cove.jpg",
        category: "Chandelier Servicing",
      },
      {
        title: "Kitchen Skirting Waterproof LED Track Maintenance",
        image: "/images/modular_kitchen_skirting_led.jpg",
        category: "LED Channel Audit",
      },
    ],
  },
];
