"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const differentiators = [
  {
    title: "Engineering-first culture",
    description: "We don't outsource or cut corners. Every engineer who writes your code is accountable to your outcome.",
  },
  {
    title: "AI in production, not demos",
    description: "We've deployed AI systems that run in real business environments — not polished prototypes that break under load.",
  },
  {
    title: "Full-stack, zero handoffs",
    description: "One team covers AI, backend, frontend, cloud, and Web3. No coordination overhead, no gap between teams.",
  },
  {
    title: "Founder-led delivery",
    description: "Every project is run by the founders. You have direct access to the engineers who actually build your system.",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered", sublabel: "Across AI, Web3, and Custom Software" },
  { value: "3+", label: "Years in AI Engineering", sublabel: "Since before the LLM wave" },
  { value: "40+", label: "Satisfied Clients", sublabel: "Startups to Enterprise" },
  { value: "100%", label: "Founder Involvement", sublabel: "On every engagement" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding border-t border-border/30">
      <div className="container-wide" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/15 text-primary text-xs font-semibold tracking-widest uppercase mb-6">
                Who We Are
              </div>
              <h2 className="text-4xl lg:text-[50px] font-bold tracking-tight leading-tight mb-6">
                Built by engineers.<br />
                <span className="text-gradient">Driven by outcomes.</span>
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-5">
                Awlith Technologies is a Mumbai-based AI and software engineering company. We partner with startups and enterprises to deliver systems that actually work in production — not polished prototypes that collapse under real-world conditions.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-10">
                We operate with a founder-led delivery model: the engineers who speak to you are the ones who write your code. No account managers, no outsourced execution, no excuses.
              </p>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground text-sm font-semibold rounded-xl hover:opacity-90 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                Work with us
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>

            {/* Differentiators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-14 space-y-5"
            >
              {differentiators.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -12 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-0.5">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Stats */}
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.92, y: 16 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="p-6 rounded-2xl border border-border bg-card hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
                >
                  <div className="text-4xl font-bold text-gradient mb-2 leading-none">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-1 leading-snug">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground/70 leading-snug">
                    {stat.sublabel}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 p-5 rounded-2xl border border-border/40 bg-card/50 flex items-start gap-4"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4.5 h-4.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground mb-0.5">
                  Mumbai, India — Serving globally
                </div>
                <div className="text-xs text-muted-foreground leading-relaxed">
                  Office No 156, Evershine Mall, Malad West, Mumbai 400064
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
