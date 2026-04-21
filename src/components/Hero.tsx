"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "3+", label: "Years in AI" },
  { value: "40+", label: "Clients" },
];

const headlineWords = ["We", "Build", "AI", "That", "Runs", "in", "Production."];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-[68px]">
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, #27D4DC28 0%, #1687B510 55%, transparent 72%)",
            filter: "blur(80px)",
            animation: "aurora-shift 14s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, #1687B520 0%, #0BBFC810 55%, transparent 75%)",
            filter: "blur(70px)",
            animation: "aurora-shift-b 18s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, #0BBFC814 0%, transparent 70%)",
            filter: "blur(50px)",
            animation: "glow-pulse 9s ease-in-out infinite",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#1687B510 1px, transparent 1px), linear-gradient(90deg, #1687B510 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#EEF7FF] to-transparent" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-6 items-center min-h-[calc(100vh-68px)] py-14 lg:py-0">

          {/* ── LEFT: Text ── */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full border border-primary/40 bg-primary/15 text-primary text-[11px] font-bold tracking-widest uppercase mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              AI &amp; Technology Solutions
            </motion.div>

            <div className="mb-5">
              <h1 className="text-[40px] sm:text-[52px] lg:text-[62px] xl:text-[72px] font-bold tracking-tight leading-[1.06]">
                {headlineWords.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.65, delay: 0.2 + i * 0.075, ease: [0.22, 1, 0.36, 1] }}
                    className={`inline-block mr-[0.2em] ${
                      word === "AI" || word === "Production." ? "text-gradient" : "text-foreground"
                    }`}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-[500px] mb-8"
            >
              From intelligent automation to agentic workflows — Awlith engineers AI that
              integrates with your business, scales with your growth, and delivers results
              from day one.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm font-bold rounded-xl glow-btn hover:-translate-y-0.5 hover:opacity-95 transition-all duration-200"
              >
                Start a Project
                <svg
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-border text-foreground/80 text-sm font-semibold rounded-xl hover:border-primary/50 hover:bg-primary/8 hover:text-foreground transition-all duration-200"
              >
                Explore Services
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.15 }}
              className="flex items-center gap-6 sm:gap-10 border-t border-border/40 pt-7"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + i * 0.08 }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-gradient leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: AI Dashboard Visual ── */}
          <div className="flex items-center justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.82 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[480px] lg:h-[480px]"
              style={{ animation: "float-y 9s ease-in-out infinite" }}
            >
              <AIEngineVisual />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5"
      >
        <span className="text-[9px] text-muted-foreground/40 tracking-[0.22em] uppercase font-semibold">Scroll</span>
        <div className="w-px h-7 bg-gradient-to-b from-border/50 to-transparent" />
      </motion.div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════
   AI ENGINE DASHBOARD VISUAL
   Glassmorphism main card + 4 satellite info cards.
   Replaces the old orbital SVG diagram.
══════════════════════════════════════════════════════ */
function AIEngineVisual() {
  const waveY = [28, 20, 26, 12, 28, 6, 18, 24, 10, 28, 16, 6, 22, 12, 28, 18, 8, 24, 16, 28, 22];
  const wavePoints = waveY.map((y, i) => `${i * 10},${y}`).join(" ");

  return (
    <div className="relative w-full h-full select-none">
      {/* Soft glow behind card */}
      <div
        className="absolute inset-[10%] rounded-3xl pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, #0BBFC822 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      {/* ── MAIN CARD ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 14 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-[10%] rounded-2xl border border-primary/20 bg-white/80 backdrop-blur-xl shadow-2xl shadow-primary/10 p-4 flex flex-col overflow-hidden"
      >
        {/* Top accent stripe */}
        <div className="absolute top-0 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        {/* Inner gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/4 rounded-2xl pointer-events-none" />

        {/* Header */}
        <div className="relative flex items-center gap-2 mb-3 shrink-0">
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center shrink-0">
            <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
              <path d="M8 1L1 5v6l7 4 7-4V5L8 1z" stroke="white" strokeWidth="1.3" strokeLinejoin="round" />
              <path d="M8 1v10M1 5l7 4 7-4" stroke="white" strokeWidth="0.8" strokeOpacity="0.5" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-bold text-foreground leading-none">AI Engine</p>
            <p className="text-[9px] font-semibold mt-0.5 flex items-center gap-1" style={{ color: "#16a34a" }}>
              <span
                className="w-1.5 h-1.5 rounded-full inline-block shrink-0"
                style={{ backgroundColor: "#22c55e", animation: "node-breathe 2s ease-in-out infinite" }}
              />
              Live · Processing
            </p>
          </div>
          <span className="text-[8px] text-muted-foreground/50 font-mono shrink-0">v2.4</span>
        </div>

        {/* Waveform strip */}
        <div className="relative h-9 mb-3 shrink-0 rounded-lg overflow-hidden bg-primary/5">
          <svg viewBox="0 0 200 28" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="wg" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#27D4DC" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#0BBFC8" stopOpacity="1" />
                <stop offset="100%" stopColor="#1687B5" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <polyline
              points={wavePoints}
              fill="none"
              stroke="url(#wg)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ animation: "glow-pulse 2.5s ease-in-out infinite" }}
            />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-transparent to-white/30 pointer-events-none" />
        </div>

        {/* Metrics grid */}
        <div className="relative grid grid-cols-3 gap-1.5 shrink-0">
          {[
            { label: "Tasks", value: "1.2k" },
            { label: "Speed", value: "18ms" },
            { label: "Acc.", value: "98%" },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-lg bg-primary/6 border border-primary/10 p-1.5 text-center"
            >
              <div className="text-[11px] font-bold text-foreground">{m.value}</div>
              <div className="text-[8px] text-muted-foreground mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="relative mt-3 shrink-0">
          <div className="flex justify-between text-[8px] text-muted-foreground/70 mb-1">
            <span>Model Load</span><span>94%</span>
          </div>
          <div className="h-1 rounded-full bg-primary/10 overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "94%" }}
              transition={{ duration: 1.4, delay: 0.9, ease: "easeOut" }}
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, #0BBFC8, #1687B5)" }}
            />
          </div>
        </div>

        {/* Live request log */}
        <div className="relative mt-3 space-y-1.5 flex-1 overflow-hidden">
          {[
            { op: "summarize_doc", ms: "94ms" },
            { op: "classify_intent", ms: "12ms" },
            { op: "generate_report", ms: "210ms" },
          ].map((item, i) => (
            <motion.div
              key={item.op}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1.2 + i * 0.13 }}
              className="flex items-center gap-2 rounded-md bg-primary/4 px-2 py-1"
            >
              <div className="w-1 h-1 rounded-full bg-primary/60 shrink-0" />
              <span className="text-[8px] font-mono text-foreground/65 flex-1 truncate">{item.op}</span>
              <span className="text-[8px] font-mono text-primary shrink-0">{item.ms}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── SATELLITE: top-right — Active Agents ── */}
      <motion.div
        initial={{ opacity: 0, x: 14, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, delay: 1.05 }}
        className="absolute top-[3%] right-[0%] flex items-center gap-2 rounded-xl border border-primary/20 bg-white/90 backdrop-blur-md shadow-lg shadow-primary/8 px-2.5 py-1.5"
      >
        <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3 text-primary">
            <circle cx="6" cy="4" r="2" stroke="currentColor" strokeWidth="1.1" />
            <path d="M2 10.5c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <p className="text-[11px] font-bold text-foreground leading-none">24</p>
          <p className="text-[8px] text-muted-foreground">Agents</p>
        </div>
      </motion.div>

      {/* ── SATELLITE: bottom-left — Automation ── */}
      <motion.div
        initial={{ opacity: 0, x: -14, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-[3%] left-[0%] flex items-center gap-2 rounded-xl border border-accent/20 bg-white/90 backdrop-blur-md shadow-lg shadow-accent/8 px-2.5 py-1.5"
      >
        <div className="w-6 h-6 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
          <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3 text-accent">
            <path d="M10 6A4 4 0 112 6" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
            <path d="M8.8 3.2l1.4 1.4-1.4 1.4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p className="text-[11px] font-bold text-foreground leading-none">Auto</p>
          <p className="text-[8px] text-muted-foreground">Workflows</p>
        </div>
      </motion.div>

      {/* ── SATELLITE: top-left — Model badge ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, delay: 1.35 }}
        className="absolute top-[17%] left-[-3%] rounded-lg border border-border/50 bg-white/80 backdrop-blur-sm px-2 py-1"
      >
        <p className="text-[7.5px] font-mono text-muted-foreground/75 whitespace-nowrap">
          GPT-4o · Claude · Llama
        </p>
      </motion.div>

      {/* ── SATELLITE: bottom-right — Mini bar chart ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, delay: 1.55 }}
        className="absolute bottom-[17%] right-[-3%] rounded-lg border border-border/50 bg-white/80 backdrop-blur-sm px-2 py-1.5 flex items-center gap-1.5"
      >
        <div className="flex items-end gap-0.5 h-4">
          {[4, 7, 5, 9, 6, 10, 8].map((h, i) => (
            <div
              key={i}
              className="w-1 rounded-sm"
              style={{
                height: `${h * 1.5}px`,
                background: i === 5 ? "#0BBFC8" : i === 6 ? "#1687B5" : "#C5E4F5",
              }}
            />
          ))}
        </div>
        <p className="text-[8px] font-mono font-bold" style={{ color: "#0BBFC8" }}>+18%</p>
      </motion.div>
    </div>
  );
}
