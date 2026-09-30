import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "The Luminary Grand Residence",
    slug: "luminary-grand-residence",
    location: "Gomti Nagar Extension, Lucknow, UP",
    category: "Residential",
    status: "completed",
    year: 2024,
    featured: true,
    description:
      "A 5,200 sq ft luxury residence featuring an integrated architectural lighting system: custom 3D floral relief backlit art wall, multi-tier crystal chandelier, traditional brass jhula swing suspension with ambient perimeter coves, and smart mood scenes.",
    services: [
      "2D Lighting Design",
      "3D Visualization",
      "Architectural Lighting",
      "Interior Lighting",
      "Turnkey Electrical Installation",
    ],
    coverImage: "/images/luxury_living_room_completed.jpg",
    gallery: [
      "/images/luxury_living_room_completed.jpg",
      "/images/living_room_tv_wall_completed.jpg",
      "/images/3d_floral_wall_mural.jpg",
      "/images/living_room_ceiling_cove.jpg",
      "/images/mural_wall_cove_commissioning.jpg",
    ],
    twoDImages: ["/images/project_2d_plan.jpg"],
    threeDImages: ["/images/mural_wall_cove_commissioning.jpg"],
    completedImages: [
      "/images/luxury_living_room_completed.jpg",
      "/images/living_room_tv_wall_completed.jpg",
      "/images/3d_floral_wall_mural.jpg",
      "/images/living_room_ceiling_cove.jpg",
    ],
    executionImages: [
      "/images/ongoing_curved_cove_wiring.jpg",
      "/images/ongoing_wall_profile_lighting.jpg",
    ],
    client: "Private Luxury Residence",
    area: "5,200 sq ft",
    timeline: "10 Weeks",
    challenge:
      "Achieving uniform, shadowless edge-lighting around the deeply sculpted 3D floral plaster mural while engineering heavy-duty ceiling structural reinforcement for the solid brass swing and multi-tiered crystal chandelier.",
    lightingConcept:
      "Layered golden warmth (2700K - 3000K). Perimeter cove uplighting establishes a soft indirect ceiling float, 15-degree anti-glare recessed spotlights accentuate artwork, and warm amber wall sconces provide evening intimacy.",
    execution:
      "Full turnkey electrical contract: ceiling framing, hidden aluminum LED extrusion channels, low-voltage driver housing in accessible service panels, and zero-flicker phase-dimming automation.",
  },
  {
    id: "2",
    title: "Skyline Penthouse & Circular Dome Lounge",
    slug: "skyline-penthouse-dome-lounge",
    location: "Noida Expressway, NCR",
    category: "Residential",
    status: "completed",
    year: 2024,
    featured: true,
    description:
      "High-rise luxury penthouse illuminated for panoramic night vistas and serene private retreats. Features a dramatic circular recessed dome cove with ambient halo, ornamental brass swing, and an architectural floating bed with floor-wash glow.",
    services: [
      "Interior Lighting",
      "Floating Bed LED Engineering",
      "Smart Dimming",
      "Electrical Contracting",
    ],
    coverImage: "/images/circular_dome_cove_swing_night.jpg",
    gallery: [
      "/images/circular_dome_cove_swing_night.jpg",
      "/images/bedroom_floating_bed_led.jpg",
      "/images/circular_dome_living_room.jpg",
      "/images/modern_circular_ring_fixture.jpg",
    ],
    twoDImages: ["/images/project_2d_plan.jpg"],
    threeDImages: ["/images/modern_circular_ring_fixture.jpg"],
    completedImages: [
      "/images/circular_dome_cove_swing_night.jpg",
      "/images/bedroom_floating_bed_led.jpg",
      "/images/circular_dome_living_room.jpg",
      "/images/modern_circular_ring_fixture.jpg",
    ],
    executionImages: ["/images/ongoing_curved_cove_wiring.jpg"],
    client: "Private Penthouse",
    area: "4,400 sq ft",
    timeline: "8 Weeks",
    challenge:
      "Preventing window reflection glare against massive floor-to-ceiling glass balconies while maintaining dramatic architectural focal points like the circular dome and floating master bed.",
    lightingConcept:
      "Indirect radial cove lighting in the lounge creates a soft celestial dome. In the master suite, floating plinth perimeter LEDs (CRI 95+, 3000K) create an ethereal levitating bed effect paired with vertical fluted wall grazers.",
    execution:
      "Precision radius profile bends, custom CNC-milled floating bed base channels, and multi-scene wireless smart controls with smooth dusk-to-dawn scenes.",
  },
  {
    id: "3",
    title: "Urban Gallery Continuous Profile Corridor",
    slug: "urban-gallery-profile-corridor",
    location: "Vipul Tech Square, Lucknow, UP",
    category: "Commercial",
    status: "ongoing",
    currentStage: "Recessed Profile Extrusions & Circuit Routing",
    year: 2026,
    featured: true,
    description:
      "CURRENT ONGOING SITE WORK: Precision architectural continuous linear profile lighting traversing walls and ceilings at sharp geometric angles. Designed to guide movement through corporate reception and executive exhibition galleries.",
    services: [
      "Geometric Profile Lighting",
      "Commercial Electrical",
      "On-Site Execution",
      "Photometric Balancing",
    ],
    coverImage: "/images/ongoing_corridor_linear_profile.jpg",
    gallery: [
      "/images/ongoing_corridor_linear_profile.jpg",
      "/images/ongoing_wall_profile_lighting.jpg",
      "/images/ongoing_curved_cove_wiring.jpg",
    ],
    twoDImages: ["/images/project_2d_plan.jpg"],
    threeDImages: ["/images/ongoing_corridor_linear_profile.jpg"],
    completedImages: [],
    executionImages: [
      "/images/ongoing_corridor_linear_profile.jpg",
      "/images/ongoing_wall_profile_lighting.jpg",
      "/images/ongoing_curved_cove_wiring.jpg",
    ],
    client: "Corporate Design Studio",
    area: "3,200 sq ft",
    timeline: "In Progress (Week 5 of 8)",
    challenge:
      "Executing millimeter-precise 45° and 90° miter joins across gypsum ceiling-to-wall drywall planes with zero light leaks, dark spots, or shadow dips along continuous 18-meter profile runs.",
    lightingConcept:
      "A dynamic geometric architectural ribbon. High-density COB LED strip (240 LEDs/m) inside deep black anodized aluminum profiles with frosted opal diffusers delivering seamless dot-free luminance at 4000K natural white.",
    execution:
      "Site status: drywall groove grooving completed, aluminum extrusions securely anchored, drivers routed to centralized low-voltage ventilation racks, live photometric continuity verified.",
  },
  {
    id: "4",
    title: "Acoustic Baffle Studio & Suspended Louvre Ceiling",
    slug: "acoustic-baffle-studio-ongoing",
    location: "Cyber City, Gurugram / Lucknow",
    category: "Commercial",
    status: "ongoing",
    currentStage: "Wooden Louvre Suspension & Pendant Drop Rough-In",
    year: 2026,
    featured: true,
    description:
      "CURRENT ONGOING SITE WORK: Turnkey electrical contracting and architectural ceiling lighting integration within an acoustic solid timber baffle ceiling system for a premier creative studio and conference floor.",
    services: [
      "Louvre Ceiling Lighting",
      "Turnkey Electrical",
      "Suspended Task Illumination",
      "Cable Trunking Management",
    ],
    coverImage: "/images/ongoing_wooden_rafter_ceiling.jpg",
    gallery: [
      "/images/ongoing_wooden_rafter_ceiling.jpg",
      "/images/ongoing_wooden_baffle_linear_led.jpg",
      "/images/ongoing_island_counter_lighting.jpg",
    ],
    twoDImages: ["/images/project_2d_plan.jpg"],
    threeDImages: ["/images/ongoing_wooden_baffle_linear_led.jpg"],
    completedImages: [],
    executionImages: [
      "/images/ongoing_wooden_rafter_ceiling.jpg",
      "/images/ongoing_wooden_baffle_linear_led.jpg",
      "/images/ongoing_island_counter_lighting.jpg",
    ],
    client: "Creative Workspace & Conference Suite",
    area: "4,800 sq ft",
    timeline: "In Progress (Week 6 of 9)",
    challenge:
      "Balancing sound-absorbing wooden baffle aesthetics with rigorous workstation photometrics (500 Lux target at desktop level) while concealing all heavy-gauge cabling within narrow rafter channels.",
    lightingConcept:
      "Dual-tier lighting: continuous slim-line LED channels nestled between timber baffles provide diffuse ambient illumination, complemented by direct downward task pendants over collaborative breakout islands.",
    execution:
      "Site status: primary timber structure hung, profile housings wired to isolated DALI dimmable ballasts, pendant drop points calibrated using laser leveling, pre-commissioning lux checks underway.",
  },
  {
    id: "5",
    title: "Modernist Kitchen & Dining Pavilion",
    slug: "modernist-kitchen-dining-pavilion",
    location: "Civil Lines, Kanpur, UP",
    category: "Residential",
    status: "completed",
    year: 2024,
    featured: false,
    description:
      "Complete architectural illumination for an open-concept luxury kitchen and dining pavilion. Highlights include warm under-cabinet floor wash lighting that floats the cabinetry, illuminated display cabinets, and glare-free task downlights.",
    services: [
      "Modular Kitchen Lighting",
      "Floor Skirting Wash",
      "Dining Cove Lighting",
      "High-CRI Task Fixtures",
    ],
    coverImage: "/images/modular_kitchen_skirting_led.jpg",
    gallery: [
      "/images/modular_kitchen_skirting_led.jpg",
      "/images/dining_room_partition_lighting.jpg",
      "/images/modern_circular_ring_fixture.jpg",
    ],
    twoDImages: ["/images/project_2d_plan.jpg"],
    threeDImages: ["/images/modular_kitchen_skirting_led.jpg"],
    completedImages: [
      "/images/modular_kitchen_skirting_led.jpg",
      "/images/dining_room_partition_lighting.jpg",
      "/images/modern_circular_ring_fixture.jpg",
    ],
    executionImages: [],
    client: "Private Residence",
    area: "1,800 sq ft",
    timeline: "5 Weeks",
    challenge:
      "Eliminating harsh shadows across granite kitchen countertops while providing spill-proof, IP65-rated moisture-resistant low-voltage LED tracks along floor baseboards.",
    lightingConcept:
      "High-CRI (>97) task downlights ensure natural food preparation colors, while skirting-level 2800K LED wash creates a dramatic floating sensation across the floor at night without disturbing restful adjacent spaces.",
    execution:
      "Turnkey execution: waterproof LED channels with silicon diffusion sleeves, hidden miniature magnetic transformers, and dedicated touch scene controllers for 'Cooking', 'Dining', and 'Night Path'.",
  },
  {
    id: "6",
    title: "The Royal Atrium & Grand Chandelier Villa",
    slug: "royal-atrium-grand-chandelier",
    location: "Cantt Road, Lucknow, UP",
    category: "Architectural",
    status: "completed",
    year: 2023,
    featured: false,
    description:
      "Double-height ceiling architectural lighting design featuring an awe-inspiring tiered crystal chandelier, solid brass heirloom swing rigging, and concealed perimeter cove light troughs.",
    services: [
      "Double-Height Ceiling Lighting",
      "Chandelier Hoist Engineering",
      "Architectural Lighting",
      "Structural Load Rigging",
    ],
    coverImage: "/images/double_height_chandelier_swing.jpg",
    gallery: [
      "/images/double_height_chandelier_swing.jpg",
      "/images/living_room_ceiling_cove.jpg",
      "/images/mural_wall_cove_commissioning.jpg",
    ],
    twoDImages: ["/images/project_2d_plan.jpg"],
    threeDImages: ["/images/double_height_chandelier_swing.jpg"],
    completedImages: [
      "/images/double_height_chandelier_swing.jpg",
      "/images/living_room_ceiling_cove.jpg",
    ],
    executionImages: ["/images/ongoing_curved_cove_wiring.jpg"],
    client: "Heritage Family Villa",
    area: "6,500 sq ft",
    timeline: "12 Weeks",
    challenge:
      "Rigging a 45-kg multi-tier crystal chandelier to a 22-foot high ceiling with an internal motorized hoist for safe relamping, alongside structural load anchoring for a functional solid brass swing.",
    lightingConcept:
      "High-illumination crystal refraction paired with warm perimeter ceiling trough lighting (2700K) to soften vertical volume and prevent a cavernous feeling in the double-height space.",
    execution:
      "Structural steel ceiling reinforcement installed, motorized lowering winch wired, DMX-controlled lighting scenes programmed, and all electrical connections certified by chartered electrical inspectors.",
  },
];
