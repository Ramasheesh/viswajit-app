import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import AboutIntro from "@/components/home/AboutIntro";
import ServicesSection from "@/components/home/ServicesSection";
import LightingShowcase from "@/components/home/LightingShowcase";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ProcessSection from "@/components/home/ProcessSection";
import ExperienceTimeline from "@/components/home/ExperienceTimeline";
import LocationsSection from "@/components/home/LocationsSection";
import Testimonials from "@/components/home/Testimonials";
import ContactSection from "@/components/home/ContactSection";
import WhyUs from "@/components/home/WhyUs";
import SiteVisitCTA from "@/components/home/SiteVisitCTA";

export const metadata: Metadata = {
  title: "Bright spark  Electrical & Lighting | Professional Lighting Design & Electrical Contractor",
  description:
    "Expert lighting design, 2D planning, 3D visualization and turnkey electrical contracting across North India. Design. Visualize. Execute.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutIntro />
      <ServicesSection />
      <LightingShowcase />
      <FeaturedProjects />
      <WhyUs />
      <ProcessSection />
      <ExperienceTimeline />
      <LocationsSection />
      <Testimonials />
      <SiteVisitCTA />
      <ContactSection />
    </>
  );
}
