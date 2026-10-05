import React from "react";
import { siteConfig } from "../config/siteConfig";
import { ArrowUpRight, ArrowDown, ShieldCheck, Smartphone, CheckCircle } from "lucide-react";

interface HeroProps {
  onOpenReview: () => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReview, onViewWork }) => {
  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Architectural Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none opacity-20">
        <div className="absolute top-10 left-1/4 w-[450px] h-[300px] bg-[#c5a059]/15 blur-[120px] rounded-full" />
        <div className="absolute top-20 right-1/4 w-[350px] h-[250px] bg-white/[0.03] blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Positioning Copy */}
          <div className="lg:col-span-7 space-y-7">
            {/* Subtle editorial kicker */}
            <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-semibold text-[#c5a059]">
              <span>{siteConfig.contact.serviceArea}</span>
              <span className="text-white/30" aria-hidden="true">/</span>
              <span>Level Up Your Online Presence</span>
            </div>

            {/* Oversized Major Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] text-balance">
              Your business deserves a website that’s a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-[#c5a059]">
                level above.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl font-normal">
              {siteConfig.subTagline}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenReview}
                className="px-7 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-[#c5a059] hover:bg-[#d8b268] active:scale-[0.98] transition-all rounded-sm shadow-lg hover:shadow-[0_0_25px_rgba(197,160,89,0.3)] flex items-center justify-center gap-2 cursor-pointer hover-lift"
              >
                <span>{siteConfig.cta.primary.label}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onViewWork}
                className="px-7 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/25 transition-all rounded-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{siteConfig.cta.secondary.label}</span>
                <ArrowDown className="w-4 h-4 text-neutral-400" />
              </button>
            </div>

            {/* Subtle Trust Line */}
            <div className="pt-2 border-t border-white/[0.06] flex items-center gap-2 text-xs sm:text-sm text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-[#c5a059] shrink-0" />
              <span>{siteConfig.trustLine}</span>
            </div>
          </div>

          {/* Right Column: Layered Browser & Device Mockup Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Ambient Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#c5a059]/20 to-white/5 rounded-lg blur-xl opacity-40" />

              {/* Main Desktop Mockup Frame */}
              <div className="relative bg-[#141618] border border-white/10 rounded-md shadow-2xl overflow-hidden">
                {/* Browser Chrome Header */}
                <div className="bg-[#1c1f23] px-4 py-2.5 border-b border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="text-[11px] font-mono text-neutral-400 bg-[#121416] px-3 py-0.5 rounded border border-white/5 truncate max-w-[200px]">
                    apexhardscapes-ct.com
                  </div>
                  <div className="w-4" />
                </div>

                {/* Hero Showcase Image */}
                <div className="relative aspect-[16/10] bg-[#1a1c1e] overflow-hidden group">
                  <img
                    src="/images/hero_agency_showcase_1791207233978.jpg"
                    alt="Custom contractor website design mockup showcase"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  {/* Overlaid UI Highlights */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="font-semibold tracking-wide drop-shadow-md">
                      Apex Hardscapes & Outdoor Living
                    </span>
                    <span className="text-[#c5a059] font-mono text-[11px] drop-shadow-md">
                      Concept Showcase
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Element 1: Non-quantitative Value Indicator (MOBILE OPTIMIZED) */}
              <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-[#181a1d] border border-white/15 px-3.5 py-2.5 rounded shadow-xl hidden sm:block">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-sm bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center shrink-0">
                    <Smartphone className="w-3.5 h-3.5 text-[#c5a059]" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium">Standard</div>
                    <div className="text-xs font-semibold text-white">MOBILE OPTIMIZED</div>
                  </div>
                </div>
              </div>

              {/* Floating Element 2: Non-quantitative Value Indicator (BUILT TO CONVERT) */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-[#181a1d] border border-white/15 px-3 py-2 rounded shadow-xl hidden sm:block">
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-4 h-4 text-[#c5a059]" />
                  <span className="text-white font-semibold tracking-wide text-[11px] uppercase">
                    BUILT TO CONVERT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
