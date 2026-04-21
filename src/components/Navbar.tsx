"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-2xl border-b border-border/50 shadow-2xl shadow-primary/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-[68px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group select-none">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0 group-hover:shadow-lg group-hover:shadow-primary/40 transition-shadow duration-300">
              <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 text-primary-foreground">
                <path
                  d="M10 2L4 5.5V12.5L10 16L16 12.5V5.5L10 2Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 2V16M4 5.5L16 12.5M16 5.5L4 12.5"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeOpacity="0.5"
                />
              </svg>
            </div>
            <span className="text-[17px] font-bold tracking-tight">
              Awlith<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 group rounded-lg hover:bg-primary/5"
              >
                {link.label}
                <span className="absolute bottom-1.5 left-4 right-4 h-px bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="mailto:info@awlith.com"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors font-mono tracking-wide"
            >
              info@awlith.com
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-px"
            >
              Get in touch
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-border/60 text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-[#E8F7FC]/80 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-[68px] left-4 right-4 z-50 bg-card/95 backdrop-blur-2xl border border-border/60 rounded-2xl shadow-2xl shadow-primary/15 md:hidden overflow-hidden"
            >
              <div className="p-5 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.05 }}
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-3 rounded-xl text-base font-medium text-foreground/80 hover:text-foreground hover:bg-primary/5 transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <div className="mt-3 pt-3 border-t border-border/50 flex flex-col gap-2">
                  <a
                    href="mailto:info@awlith.com"
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-2.5 text-sm text-muted-foreground text-center font-mono"
                  >
                    info@awlith.com
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="px-5 py-3 text-sm font-semibold bg-primary text-primary-foreground rounded-xl text-center hover:opacity-90 transition-opacity"
                  >
                    Get in touch
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
