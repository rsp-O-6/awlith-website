import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Awlith Technologies — AI Engineering & Automation",
  description:
    "We build production-grade AI systems, intelligent automation, and custom software for startups and enterprises. Based in Mumbai, serving globally.",
  keywords: [
    "AI automation",
    "custom AI development",
    "agentic workflows",
    "LLM fine-tuning",
    "RAG systems",
    "blockchain development",
    "smart contracts",
    "full-stack development",
    "AI solutions India",
    "Awlith Technologies",
  ],
  openGraph: {
    title: "Awlith Technologies — AI Engineering & Automation",
    description:
      "Production-grade AI automation, agentic workflows, and custom software. Built for scale.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Awlith Technologies — AI Engineering & Automation",
    description: "Production-grade AI automation and custom software. Built for scale.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
