import React, { useState } from "react";
import { siteConfig } from "../config/siteConfig";
import { Check, ArrowUpRight, ArrowRight, ShieldCheck } from "lucide-react";

interface PricingSectionProps {
  onOpenReview: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenReview }) => {
  const [showCareModal, setShowCareModal] = useState(false);

  return (
    <section id="pricing" className="py-20 bg-[#0c0d0e] relative border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#c5a059]">
            Upfront Investment Architecture
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
            Choose the level that fits your business.
          </h2>
          <p className="text-base text-neutral-300 leading-relaxed font-normal">
            Every build is a fixed-price investment with zero surprises. You own 100% of your website upon completion.
          </p>
        </div>

        {/* 3 Streamlined Pricing Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {siteConfig.pricing.map((pkg) => (
            <div
              key={pkg.id}
              className={`p-6 sm:p-7 bg-[#131518] rounded-sm flex flex-col justify-between relative transition-all duration-300 ${
                pkg.recommended
                  ? "border-2 border-[#c5a059] shadow-[0_0_25px_rgba(197,160,89,0.2)] bg-[#15181c]"
                  : "border border-white/10 hover:border-white/20"
              }`}
            >
              {pkg.badge && (
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-xs uppercase ${
                      pkg.recommended
                        ? "bg-[#c5a059] text-black"
                        : "bg-white/10 text-neutral-300 border border-white/10"
                    }`}
                  >
                    {pkg.badge}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400">
                    {pkg.pricePeriod}
                  </span>
                </div>
              )}

              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  {pkg.name}
                </h3>
                <p className="text-xs text-neutral-400 mt-1 min-h-[32px] leading-relaxed">
                  {pkg.tagline}
                </p>

                {/* Price Display */}
                <div className="my-4 pb-4 border-b border-white/10">
                  <div className="font-mono text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    {pkg.price}
                  </div>
                  <div className="text-[11px] font-mono text-neutral-400 mt-0.5">
                    Fixed fee · All deliverables included
                  </div>
                </div>

                {/* ~5 Core Bullets */}
                <div className="space-y-2">
                  <ul className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-neutral-200">
                        <Check className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-4 border-t border-white/[0.06]">
                <button
                  onClick={onOpenReview}
                  className={`w-full py-3 text-xs font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    pkg.recommended
                      ? "bg-[#c5a059] hover:bg-[#d8b268] text-black shadow-md hover-lift"
                      : "bg-white/5 hover:bg-white/10 text-white border border-white/15"
                  }`}
                >
                  <span>Select {pkg.name} Package</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Compact 1Up Care Horizontal Strip */}
        <div className="mt-8 p-6 bg-[#14161a] border border-white/10 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-sm bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-sm font-bold text-white">
                  1Up Care — Starting at $129/month
                </span>
              </div>
              <p className="text-xs text-neutral-400">
                Hosting. Maintenance. Updates. Backups. Support.
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowCareModal(true)}
            className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#c5a059]/40 text-neutral-200 hover:text-white rounded-xs text-xs font-bold uppercase tracking-wider transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <span>EXPLORE 1Up CARE</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#c5a059]" />
          </button>
        </div>

        {/* 1Up Care Modal */}
        {showCareModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fadeIn"
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-[#121417] border border-white/15 rounded-md max-w-lg w-full p-6 text-neutral-200 shadow-2xl space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    1Up Care Maintenance & Support
                  </h3>
                  <div className="text-xs text-[#c5a059] font-mono">
                    Starting at $129/month · Cancel or pause anytime
                  </div>
                </div>
                <button
                  onClick={() => setShowCareModal(false)}
                  className="text-neutral-400 hover:text-white p-1 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed">
                We keep your site fast, current, secure, and performing after launch so you can stay focused in the field.
              </p>

              <div className="space-y-2 text-xs">
                {siteConfig.siteCare.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-neutral-200">
                    <Check className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setShowCareModal(false)}
                  className="text-xs text-neutral-400 hover:text-white"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setShowCareModal(false);
                    onOpenReview();
                  }}
                  className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-black bg-[#c5a059] hover:bg-[#d8b268] rounded-xs"
                >
                  Inquire About 1Up Care
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
