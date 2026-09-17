"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Zap, Moon, Sun, Phone } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Lighting", href: "/lighting" },
  { label: "Experience", href: "/about" },
  { label: "Locations", href: "/locations" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          height: "4.5rem",
          background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--border-subtle)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.3)" : "none",
        }}
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Viswajit Electrical & Lighting Home"
          >
            <div
              className="relative w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-105"
              style={{ background: "var(--accent)" }}
            >
              <Zap size={18} className="text-black" fill="currentColor" />
            </div>
            <div className="leading-none">
              <div
                className="font-bold text-sm md:text-base tracking-tight"
                style={{ color: "var(--text-primary)" }}
              >
                VISWAJIT
              </div>
              <div
                className="font-light tracking-widest hidden sm:block"
                style={{ color: "var(--accent)", fontSize: "0.6rem" }}
              >
                ELECTRICAL &amp; LIGHTING
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative px-4 py-2.5 text-[15px] font-medium transition-all duration-200 rounded-lg"
                  style={{
                    color:
                      pathname === link.href
                        ? "var(--accent)"
                        : "var(--text-secondary)",
                    background:
                      pathname === link.href
                        ? "var(--accent-subtle)"
                        : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-2.5">
            {/* Theme toggle */}
            <button
              id="theme-toggle"
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
              style={{
                border: "1px solid var(--border-default)",
                color: "var(--text-muted)",
                background: "transparent",
              }}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Start Project CTA */}
            <Link
              href="/submit-project"
              className="hidden md:flex btn btn-primary px-5 py-2.5 text-sm items-center gap-2 rounded-xl"
              id="nav-start-project"
            >
              Start Project
            </Link>

            {/* Mobile menu button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: "var(--surface-1)",
                border: "1px solid var(--border-default)",
                color: "var(--text-primary)",
              }}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 lg:hidden"
              style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(6px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed right-0 top-0 bottom-0 w-80 z-40 lg:hidden flex flex-col"
              style={{
                background: "var(--surface-0)",
                borderLeft: "1px solid var(--border-default)",
              }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between p-5"
                style={{ borderBottom: "1px solid var(--border-default)" }}
              >
                <span
                  className="font-bold tracking-widest text-xs uppercase"
                  style={{ color: "var(--accent)" }}
                >
                  MENU
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{
                    background: "var(--surface-1)",
                    color: "var(--text-primary)",
                  }}
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 flex flex-col p-4 gap-1 overflow-y-auto">
                {navLinks.map((link, i) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between py-4 px-4 rounded-xl font-medium text-base transition-all duration-200"
                    style={{
                      color:
                        pathname === link.href
                          ? "var(--accent)"
                          : "var(--text-primary)",
                      background:
                        pathname === link.href
                          ? "var(--accent-subtle)"
                          : "transparent",
                    }}
                  >
                    {link.label}
                    <span
                      style={{
                        color: "var(--accent)",
                        fontSize: "0.7rem",
                        opacity: 0.5,
                      }}
                    >
                      0{i + 1}
                    </span>
                  </Link>
                ))}
              </nav>

              {/* Bottom */}
              <div
                className="p-5 flex flex-col gap-3"
                style={{ borderTop: "1px solid var(--border-default)" }}
              >
                <Link
                  href="/submit-project"
                  className="btn btn-primary w-full py-4 text-base font-semibold rounded-xl"
                  id="mobile-start-project"
                >
                  Start Your Project
                </Link>
                <a
                  href="tel:+919876543210"
                  className="btn btn-secondary w-full py-3.5 text-base font-medium items-center justify-center gap-2 rounded-xl"
                  id="mobile-call-btn"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
