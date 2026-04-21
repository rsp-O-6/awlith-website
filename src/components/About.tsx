export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              We build for the{" "}
              <span className="text-primary">builders</span> of tomorrow
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Awlith Technologies is a full-spectrum engineering company based in Mumbai, India. We partner with startups and enterprises to deliver AI automations, Web3 products, and custom software—engineered for performance, security, and scale.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From predictive ML models to DeFi protocols and cloud-native apps, we handle the full stack so you can focus on building your vision.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity text-sm"
            >
              Work with us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🤖", title: "AI & Automation", desc: "ML models, NLP, RPA" },
              { icon: "⛓️", title: "Blockchain", desc: "Smart contracts, DeFi, NFTs" },
              { icon: "💻", title: "Custom Software", desc: "Web, mobile, cloud" },
              { icon: "🔐", title: "Security First", desc: "Audits & compliance" },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="font-semibold text-sm mb-1">{item.title}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
