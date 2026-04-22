"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform, useInView } from "framer-motion";

const services = [
  {
    label: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "AI Automation",
    outcome: "Eliminate repetitive work. Accelerate every operation.",
    description: "We design and deploy intelligent automation systems that replace manual bottlenecks with AI-driven workflows — reducing cost, increasing throughput, and operating 24/7.",
    features: ["Robotic Process Automation (RPA)", "Intelligent document processing", "Workflow orchestration", "Predictive analytics & forecasting"],
    large: true,
  },
  {
    label: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
    title: "Custom AI Development",
    outcome: "AI built for your data, your domain, your edge cases.",
    description: "LLM fine-tuning, RAG pipelines, custom model training, and AI APIs — built to your exact specifications, not a generic integration.",
    features: ["LLM fine-tuning & alignment", "RAG system architecture", "Custom model training", "AI API development & deployment"],
    large: true,
  },
  {
    label: "03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    title: "Agentic Systems",
    outcome: "Autonomous agents that reason, act, and adapt.",
    description: "Multi-agent architectures using LangGraph, AutoGen, and custom orchestration — for complex, multi-step reasoning tasks that need zero human intervention.",
    features: ["Multi-agent orchestration", "Tool-use & function calling", "Memory & context management", "Human-in-the-loop systems"],
  },
  {
    label: "04",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "Web & App Development",
    outcome: "Products engineered for performance and scale.",
    description: "Full-stack web and mobile applications built with modern architecture — React, Next.js, cloud-native APIs, and CI/CD pipelines that ship fast and scale reliably.",
    features: ["React / Next.js applications", "REST & GraphQL APIs", "Cloud architecture (AWS, GCP)", "DevOps & CI/CD pipelines"],
  },
  {
    label: "05",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    title: "Blockchain & Web3",
    outcome: "Secure, audited smart contracts from day one.",
    description: "End-to-end Web3 development — from DeFi protocols and NFT platforms to token economies and smart contract security audits.",
    features: ["Solidity / Vyper smart contracts", "DeFi protocol development", "NFT marketplaces", "Smart contract security audits"],
  },
  {
    label: "06",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: "Digital Transformation",
    outcome: "Legacy systems reimagined. AI-first architecture built in.",
    description: "Architecture consulting, system modernization, and AI strategy for enterprises ready to move beyond technical debt and build for the next decade.",
    features: ["AI readiness assessment", "System architecture review", "Technology migration strategy", "Team enablement & training"],
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-60px" });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-80, 80], [4, -4]);
  const rotateY = useTransform(mouseX, [-80, 80], [-4, 4]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative flex flex-col p-7 lg:p-8 rounded-2xl border border-border bg-card hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-default ${
        service.large ? "lg:col-span-1 min-h-[340px]" : "min-h-[300px]"
      }`}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(circle at 50% 0%, #27D4DC1A 0%, transparent 60%)" }}
      />

      {/* Label */}
      <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground/40 uppercase mb-5">
        {service.label}
      </span>

      {/* Icon */}
      <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary/18 group-hover:scale-105 transition-all duration-300">
        {service.icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-2 text-foreground leading-snug">
        {service.title}
      </h3>

      {/* Outcome */}
      <p className="text-xs font-semibold text-primary/80 mb-3 leading-relaxed">
        {service.outcome}
      </p>

      {/* Description — visible on large cards only */}
      {service.large && (
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          {service.description}
        </p>
      )}

      {/* Features */}
      <ul className="mt-auto space-y-2">
        {service.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground/80">
            <svg className="w-3.5 h-3.5 text-primary/70 shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="2.5" fill="currentColor" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  const topRow = services.filter((s) => s.large);
  const bottomRow = services.filter((s) => !s.large);

  return (
    <section id="services" className="section-padding border-t border-border/30">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/15 text-primary text-xs font-semibold tracking-widest uppercase mb-5">
            What We Build
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
            <h2 className="text-4xl lg:text-[52px] font-bold tracking-tight leading-tight max-w-[600px]">
              Intelligent Solutions.<br />
              <span className="text-gradient">Tangible Outcomes.</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed max-w-[380px]">
              End-to-end engineering services that take your product from concept to production — without shortcuts.
            </p>
          </div>
        </motion.div>

        {/* Top row: 2 large cards */}
        <div className="grid lg:grid-cols-2 gap-5 mb-5">
          {topRow.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Bottom row: 4 smaller cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {bottomRow.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i + 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
