const techStack = [
  { label: "Python", icon: "🐍" },
  { label: "TensorFlow", icon: "◈" },
  { label: "OpenAI", icon: "◎" },
  { label: "LangChain", icon: "⬡" },
  { label: "React", icon: "⚛" },
  { label: "Next.js", icon: "▲" },
  { label: "TypeScript", icon: "TS" },
  { label: "FastAPI", icon: "⚡" },
  { label: "AWS", icon: "☁" },
  { label: "Docker", icon: "⬛" },
  { label: "PostgreSQL", icon: "◉" },
  { label: "Solidity", icon: "◆" },
  { label: "LlamaIndex", icon: "🦙" },
  { label: "AutoGen", icon: "⟳" },
];

export default function LogoStrip() {
  const doubled = [...techStack, ...techStack];

  return (
    <div className="relative py-7 border-y border-border overflow-hidden" style={{ background: "#DAEEF8" }}>
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div
        className="flex items-center gap-0 whitespace-nowrap"
        style={{ animation: "marquee 28s linear infinite" }}
      >
        {doubled.map((tech, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2.5 mx-6 px-4 py-2 rounded-full border border-border/40 bg-background/40 text-sm font-medium text-muted-foreground/70 hover:text-muted-foreground hover:border-primary/30 transition-colors duration-200 cursor-default"
          >
            <span className="text-base leading-none text-primary/60 font-mono">
              {tech.icon}
            </span>
            <span className="tracking-wide">{tech.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
