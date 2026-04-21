"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold text-primary tracking-tight">
          Awlith 
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</a>
          <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact Us</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="mailto:info@awlith.com"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            info@awlith.com
          </a>
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            Schedule a call
          </a>
        </div>

        <button
          className="md:hidden text-muted-foreground hover:text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</a>
          <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact Us</a>
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg text-center hover:opacity-90 transition-opacity"
          >
            Schedule a call
          </a>
        </div>
      )}
    </nav>
  );
}
