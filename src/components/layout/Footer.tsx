import Link from "next/link";
import { Zap, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { company } from "@/lib/data/company";
import { services } from "@/lib/data/services";

const socialLinks = [
  { href: company.socialLinks.instagram, label: "Instagram", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
  { href: company.socialLinks.facebook, label: "Facebook", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
  { href: company.socialLinks.linkedin, label: "LinkedIn", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
  { href: company.socialLinks.youtube, label: "YouTube", icon: "M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        paddingTop: "clamp(3rem, 7vw, 5rem)",
        paddingBottom: "1.75rem",
        background: "var(--surface-0)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, var(--accent-subtle) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="section-container relative z-10">
        {/* Top section — 4-column natural grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-10 mb-14">

          {/* Brand */}
          <div className="md:col-span-2 xl:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "var(--accent)" }}
              >
                <Zap size={20} className="text-black" fill="currentColor" />
              </div>
              <div className="leading-none">
                <div
                  className="font-bold text-base tracking-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  VISWAJIT
                </div>
                <div
                  className="font-light tracking-widest"
                  style={{ color: "var(--accent)", fontSize: "0.6rem" }}
                >
                  ELECTRICAL &amp; LIGHTING
                </div>
              </div>
            </Link>
            <p
              className="text-base leading-relaxed mb-7 max-w-xs"
              style={{ color: "var(--text-muted)" }}
            >
              {company.description}
            </p>
            {/* Social links */}
            <div className="flex gap-2.5">
              {socialLinks
                .filter((s) => s.href)
                .map((social) => (
                  <a
                    key={social.label}
                    href={social.href!}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:border-amber-500/40"
                    style={{
                      background: "var(--surface-1)",
                      border: "1px solid var(--border-default)",
                      color: "var(--text-muted)",
                    }}
                  >
                    <svg
                      width="15"
                      height="15"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3
              className="font-bold text-xs tracking-[0.18em] uppercase mb-6"
              style={{ color: "var(--accent)" }}
            >
              Services
            </h3>
            <ul className="flex flex-col gap-3.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="animated-underline text-base transition-colors duration-200"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3
              className="font-bold text-xs tracking-[0.18em] uppercase mb-6"
              style={{ color: "var(--accent)" }}
            >
              Company
            </h3>
            <ul className="flex flex-col gap-3.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "2D & 3D Lighting", href: "/lighting" },
                { label: "Locations", href: "/locations" },
                { label: "Contact", href: "/contact" },
                { label: "Submit Project", href: "/submit-project" },
                { label: "Digital Card", href: "/visiting-card" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="animated-underline text-base transition-colors duration-200"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="font-bold text-xs tracking-[0.18em] uppercase mb-6"
              style={{ color: "var(--accent)" }}
            >
              Contact
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="flex items-start gap-3.5 text-base transition-colors duration-200 hover:text-white"
                style={{ color: "var(--text-muted)" }}
              >
                <Phone size={16} className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-start gap-3.5 text-base transition-colors duration-200 hover:text-white"
                style={{ color: "var(--text-muted)" }}
              >
                <Mail size={16} className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />
                {company.email}
              </a>
              <div
                className="flex items-start gap-3.5 text-base"
                style={{ color: "var(--text-muted)" }}
              >
                <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />
                {company.address}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-7">
              <Link
                href="/submit-project"
                className="animated-underline inline-flex items-center gap-2 text-base font-semibold"
                style={{ color: "var(--accent)" }}
              >
                Start a project
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--border-subtle)" }}
        >
          <p
            className="text-xs font-light tracking-widest uppercase text-center sm:text-left"
            style={{ color: "var(--text-muted)", letterSpacing: "0.15em" }}
          >
            &ldquo;Designed to illuminate. Engineered to perform.&rdquo;
          </p>
          <div
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            <span>&copy; {year} Viswajit Electrical &amp; Lighting</span>
            <span className="hidden sm:block" style={{ color: "var(--border-default)" }}>|</span>
            <div className="flex gap-5">
              <Link href="/privacy" className="animated-underline">
                Privacy
              </Link>
              <Link href="/terms" className="animated-underline">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
