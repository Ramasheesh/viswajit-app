"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Zap, Moon, Sun, Phone, ArrowRight } from "lucide-react";
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
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
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

  // When mounted, accurately reflect theme state; default to dark for initial SSR
  const isDark = mounted ? theme === "dark" : true;

  // Header background:
  // In Light Mode: always clean, crisp white glass with subtle border and shadow
  // In Dark Mode: transparent at top, dark glass when scrolled
  const headerBgClass = isDark
    ? scrolled
      ? "bg-zinc-950/90 border-b border-zinc-800/80 backdrop-blur-xl shadow-lg shadow-black/25"
      : "bg-transparent border-b border-transparent"
    : "bg-white/95 border-b border-zinc-200/90 backdrop-blur-xl shadow-md shadow-zinc-900/5";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${headerBgClass}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            id="navbar-logo"
            className="flex items-center gap-3.5 group shrink-0"
            aria-label="Bright Spark Electrical Home"
          >
            <div className="w-10 h-10 rounded-xl gap-2 flex items-center justify-center bg-amber-500 text-black shadow-md shadow-amber-500/20 transition-transform duration-200 group-hover:scale-105 shrink-0">
              <Zap size={20} fill="currentColor" />
            </div>
            <div className="flex flex-col justify-center">
              <span
                className={`font-black text-base sm:text-lg tracking-tight leading-none transition-colors duration-200 ${isDark ? "text-white" : "text-black font-black"
                  }`}
              >
                BRIGHT SPARK
              </span>
              <span
                className={`text-[10px] font-extrabold tracking-widest mt-1 leading-none transition-colors duration-200 ${isDark ? "text-amber-400" : "text-amber-700 font-black"
                  }`}
              >
                ELECTRICAL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-sm text-sm tracking-wide transition-all duration-200 whitespace-nowrap group ${isActive
                    ? isDark
                      ? "text-amber-300 bg-amber-500/15 border border-amber-400/40 font-bold shadow-xs shadow-amber-500/10"
                      : "text-amber-950 bg-amber-100 border border-amber-400/80 font-black shadow-xs"
                    : isDark
                      ? "text-zinc-200 font-semibold hover:text-white hover:bg-zinc-800/80 border border-transparent hover:border-zinc-700/80"
                      : "text-zinc-950 font-bold hover:text-black hover:bg-zinc-200/80 border border-transparent hover:border-zinc-300"
                    }`}
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    {isActive && (
                      <span className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-amber-400" : "bg-amber-600"} animate-pulse shrink-0`} />
                    )}
                    <span>{link.label}</span>
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Theme Toggle Button */}
            <button
              id="theme-toggle"
              onClick={toggleTheme}
              type="button"
              className={`w-10 h-10 rounded-sm flex items-center justify-center transition-all duration-200 active:scale-95 shrink-0 cursor-pointer ${isDark
                ? "border border-zinc-800 bg-zinc-900/90 text-amber-400 hover:border-amber-500/50 hover:bg-zinc-800 shadow-sm"
                : "border border-zinc-300 bg-zinc-100 text-zinc-950 hover:border-zinc-400 hover:bg-zinc-200 hover:text-black shadow-sm font-bold"
                }`}
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
              title={`Switch to ${isDark ? "light" : "dark"} mode`}
            >
              {isDark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-zinc-950" />}
            </button>

            {/* Start Project CTA Button */}
            <Link
              href="/submit-project"
              id="nav-start-project"
              className="hidden md:inline-flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-sm font-extrabold text-sm tracking-wide bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 bg-[length:200%_auto] hover:bg-right text-black border border-amber-300/50 shadow-md shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 whitespace-nowrap shrink-0 group relative overflow-hidden"
            >
              {/* High-end light sweep sheen on hover */}
              <span className="absolute inset-0 w-1/2 h-full bg-white/25 skew-x-12 -translate-x-full group-hover:translate-x-[350%] transition-transform duration-700 ease-out pointer-events-none" />

              <span className="leading-none relative z-10 font-bold">Start Project</span>
              <ArrowRight size={16} className="shrink-0 relative z-10 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              type="button"
              className={`lg:hidden w-10 h-10 rounded-sm flex items-center justify-center transition-all duration-200 shrink-0 cursor-pointer ${isDark
                ? "border border-zinc-800 bg-zinc-900 text-white hover:border-zinc-700 hover:bg-zinc-800"
                : "border border-zinc-200 bg-zinc-100 text-zinc-800 hover:border-zinc-300 hover:bg-zinc-200 hover:text-zinc-950 shadow-sm"
                }`}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50 lg:hidden bg-black/75 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-over Drawer */}
            <motion.div
              className={`fixed right-0 top-0 bottom-0 w-80 max-w-[85vw] z-50 lg:hidden flex flex-col shadow-2xl transition-colors duration-200 ${isDark
                ? "bg-zinc-950 border-l border-zinc-800 text-white"
                : "bg-white border-l border-zinc-200 text-zinc-900"
                }`}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
            >
              {/* Drawer Header */}
              <div
                className={`flex items-center justify-between p-6 border-b transition-colors ${isDark ? "border-zinc-800" : "border-zinc-200"
                  }`}
              >
                <span
                  className={`font-extrabold tracking-widest text-xs uppercase ${isDark ? "text-amber-400" : "text-amber-600"
                    }`}
                >
                  Navigation
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  type="button"
                  className={`w-9 h-9 rounded-sm flex items-center justify-center transition-all cursor-pointer ${isDark
                    ? "bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
                    : "bg-zinc-100 border border-zinc-200 text-zinc-700 hover:text-zinc-950 hover:bg-zinc-200"
                    }`}
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 flex flex-col p-5 gap-1.5 overflow-y-auto">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center justify-between py-3.5 px-4 rounded-sm text-base transition-all duration-200 ${isActive
                        ? isDark
                          ? "bg-amber-500/15 text-amber-300 border border-amber-500/30 font-bold"
                          : "bg-amber-100 text-amber-950 border border-amber-400/80 font-black"
                        : isDark
                          ? "text-zinc-200 font-semibold hover:bg-zinc-900 hover:text-white"
                          : "text-zinc-950 font-bold hover:bg-zinc-100 hover:text-black"
                        }`}
                    >
                      <span>{link.label}</span>
                      <span
                        className={`text-xs font-mono ${isDark ? "text-amber-400/50" : "text-amber-600/70"
                          }`}
                      >
                        0{i + 1}
                      </span>
                    </Link>
                  );
                })}
              </nav>

              {/* Drawer Bottom Actions */}
              <div
                className={`p-6 border-t flex flex-col gap-3.5 transition-colors ${isDark
                  ? "border-zinc-800 bg-zinc-950/60"
                  : "border-zinc-200 bg-zinc-50/70"
                  }`}
              >
                <Link
                  href="/submit-project"
                  id="mobile-start-project"
                  className="w-full py-3.5 px-6 rounded-sm font-extrabold text-base text-center bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-black border border-amber-300/50 hover:bg-amber-400 shadow-lg shadow-amber-500/25 active:scale-95 transition-all leading-normal whitespace-nowrap flex items-center justify-center gap-2"
                >
                  <span>Start Your Project</span>
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="tel:+918108382618"
                  id="mobile-call-btn"
                  className={`w-full py-3.5 px-5 rounded-sm font-bold text-base text-center border flex items-center justify-center gap-2.5 transition-all whitespace-nowrap ${isDark
                    ? "bg-zinc-900 border-zinc-800 text-white hover:bg-zinc-800"
                    : "bg-white border-zinc-200 text-zinc-900 hover:bg-zinc-100 shadow-sm"
                    }`}
                >
                  <Phone size={18} className={isDark ? "text-amber-400" : "text-amber-600"} />
                  <span>Call Us Directly</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
