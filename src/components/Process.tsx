"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Scope, audit, and align.",
    description:
      "We study your systems, data, and business constraints. Not a sales call — a real technical deep-dive to identify where AI creates the most leverage and what it will actually take to build.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Design",
    subtitle: "Architecture before code.",
    description:
      "We define the solution architecture, data flows, model selection, and integration strategy. Every decision is documented and reviewed with you before a single line of code is written.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Build",
    subtitle: "Clean code. Tested systems.",
    description:
      "Engineering-first execution — no shortcuts, no duct tape. We build with proper CI/CD, testing, security practices, and documentation. Production-ready from day one.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Scale",
    subtitle: "Deploy, monitor, iterate.",
    description:
      "We don't hand over code and disappear. We oversee deployment, set up monitoring, and stay available for iterations. Your success after launch is part of the contract.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="process" className="section-padding border-t border-border" style={{ background: "#E4F2FB" }}>
      <div className="container-wide" ref={sectionRef}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/15 text-primary text-xs font-semibold tracking-widest uppercase mb-5">
            How We Work
          </div>
          <h2 className="text-4xl lg:text-[52px] font-bold tracking-tight leading-tight mb-4">
            Four Steps to<br />
            <span className="text-gradient">Production-Ready AI.</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-[480px] mx-auto">
            A disciplined process that eliminates guesswork, prevents scope creep, and delivers on time.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {/* Connector line desktop */}
          <div className="hidden lg:block absolute top-11 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-border/60 to-transparent pointer-events-none" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col"
            >
              {/* Step number + icon */}
              <div className="flex items-center gap-3 mb-6">
                <div className="relative flex items-center justify-center w-11 h-11 rounded-xl border border-primary/50 bg-primary/15 text-primary shrink-0 z-10">
                  {step.icon}
                  {/* Ring */}
                  <div className="absolute inset-0 rounded-xl border border-primary/20 scale-150 opacity-40" />
                </div>
                <span className="text-[11px] font-bold tracking-[0.2em] text-muted-foreground/60 uppercase">
                  Step {step.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-1.5 text-foreground">{step.title}</h3>
              <p className="text-sm font-semibold text-primary/70 mb-3">{step.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
