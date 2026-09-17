import type { Testimonial, TimelineEvent, ProcessStep } from "@/lib/types";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Arun Sharma",
    role: "Homeowner",
    location: "Lucknow",
    projectType: "Luxury Residence — Interior Lighting",
    rating: 5,
    review:
      "The 3D visualization completely changed how we made decisions. We could see exactly how the lighting would look before spending a rupee on material. The final installation exceeded even the render. Absolutely world-class team.",
  },
  {
    id: "2",
    name: "Priya Mehta",
    role: "Director",
    company: "Nexus Corp Ltd",
    location: "Noida",
    projectType: "Corporate Headquarters — Turnkey",
    rating: 5,
    review:
      "Delivered a 12,000 sq ft office lighting project on time and budget. The quality of their 2D planning meant zero rework on site. Our employees love the lighting — it genuinely improves the workspace. Professional from day one.",
  },
  {
    id: "3",
    name: "Rajiv Kapoor",
    role: "Hotel Owner",
    company: "Marble Arch Hotels",
    location: "Lucknow",
    projectType: "Hotel Facade — Architectural Lighting",
    rating: 5,
    review:
      "Our hotel facade now stops people in their tracks at night. The lighting design completely transformed the property's presence on the street. Guests comment on it constantly. The execution was flawless — zero snags.",
  },
  {
    id: "4",
    name: "Sneha Agarwal",
    role: "Interior Designer",
    location: "Delhi",
    projectType: "Residential Project — 2D & 3D Design",
    rating: 5,
    review:
      "I've worked with several lighting consultants but none match their combination of design sophistication and technical execution. The 3D visualizations they produce are genuinely impressive. My clients are always wowed. Highly recommended for premium projects.",
  },
  {
    id: "5",
    name: "Mohammed Farouk",
    role: "Restaurant Owner",
    company: "The Amber Restaurant",
    location: "Kanpur",
    projectType: "Fine Dining — Interior Lighting",
    rating: 5,
    review:
      "The atmosphere they created in our restaurant is exactly what fine dining should feel like. Intimate, dramatic, warm. We've had food critics comment on the lighting specifically. It's part of the guest experience now.",
  },
];

export const timeline: TimelineEvent[] = [
  {
    year: "2010",
    title: "Founded — Electrical Contracting",
    description:
      "Started as a professional electrical contracting firm serving residential and small commercial projects across Lucknow.",
  },
  {
    year: "2013",
    title: "Professional Lighting Division",
    description:
      "Expanded into dedicated professional lighting services. Began working with architects and interior designers on high-end residential projects.",
  },
  {
    year: "2016",
    title: "2D Lighting Design",
    description:
      "Launched full 2D lighting design capability with dedicated CAD team. Started offering complete lighting layout plans as a standalone service.",
  },
  {
    year: "2019",
    title: "3D Visualization Studio",
    description:
      "Added 3D lighting visualization — photorealistic renders showing clients exactly how their lighting will look. Game-changing for client confidence.",
  },
  {
    year: "2022",
    title: "Commercial & Hospitality Expansion",
    description:
      "Scaled up commercial project capabilities. Major hotel, office and retail projects across North India. Team grew to 35+ professionals.",
  },
  {
    year: "2026",
    title: "Full-Service Lighting Studio",
    description:
      "Complete end-to-end lighting and electrical studio — design, visualization, material, installation, commissioning and maintenance. 250+ projects delivered.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation",
    description: "We understand your vision, requirements and space.",
    icon: "MessageSquare",
  },
  {
    number: "02",
    title: "Site Visit",
    description: "On-site assessment of the space, structure and requirements.",
    icon: "MapPin",
  },
  {
    number: "03",
    title: "2D Lighting Plan",
    description: "Comprehensive technical lighting layout with fixture placement.",
    icon: "PenTool",
  },
  {
    number: "04",
    title: "3D Visualization",
    description: "Photorealistic 3D renders showing exactly how it will look.",
    icon: "Layers",
  },
  {
    number: "05",
    title: "Quotation",
    description: "Detailed, transparent quote with material and labour breakdown.",
    icon: "FileText",
  },
  {
    number: "06",
    title: "Material Selection",
    description: "Quality-approved fixtures, cables and components sourced.",
    icon: "ShoppingBag",
  },
  {
    number: "07",
    title: "Installation",
    description: "Professional installation by our certified team, supervised on-site.",
    icon: "Wrench",
  },
  {
    number: "08",
    title: "Testing & Handover",
    description: "Full commissioning, testing and documented handover to client.",
    icon: "CheckCircle",
  },
];
