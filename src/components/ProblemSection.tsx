import React from "react";
import { siteConfig } from "../config/siteConfig";
import { AlertCircle, CheckCircle } from "lucide-react";

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-20 bg-[#0c0d0e] relative border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#c5a059]">
            The First Impression Gap
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
            Your business may be great. Your website should look like it.
          </h2>
          <p className="text-base text-neutral-300 leading-relaxed font-normal">
            Your website is often a customer's first impression of your business. If it feels outdated, confusing, or difficult to use on a phone, the quality of your actual work may never get a chance to speak for itself.
          </p>
        </div>

        {/* Before / After Visual Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* BEFORE: Outdated Generic Contractor Site */}
          <div className="bg-[#141618] border border-red-500/20 rounded-md p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-red-950/70 border-b border-l border-red-500/30 px-3 py-1 text-xs font-mono font-bold tracking-wider text-red-400 uppercase">
              BEFORE
            </div>

            <div>
              <div className="flex items-center gap-2 text-red-400 font-semibold text-xs uppercase tracking-wider mb-4">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>The Typical Outdated Website</span>
              </div>

              {/* Visual Representation of Old Clunky Site */}
              <div className="bg-[#1b1e22] border border-white/10 rounded p-4 mb-5 text-neutral-300 opacity-90 select-none">
                <div className="border-b border-neutral-700 pb-2 mb-3 flex items-center justify-between">
                  <div className="text-xs font-bold text-neutral-300">
                    🛠️ Bob's Quality Contracting Inc.
                  </div>
                  <div className="text-[10px] text-neutral-400">Call: 203-xxx-xxxx</div>
                </div>

                <div className="bg-[#262a2f] p-2.5 text-center mb-3 border border-neutral-700">
                  <p className="text-xs font-bold text-neutral-200">
                    "WE DO LAWNS, PATIOS, REMODELING & MORE!"
                  </p>
                  <p className="text-[10px] text-neutral-400 mt-0.5 italic">
                    Serving the local area since 2002.
                  </p>
                </div>

                {/* Problems listed visually */}
                <div className="space-y-1.5 text-xs text-red-300/90 font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="text-red-400">✕</span> Outdated presentation
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-red-400">✕</span> Poor mobile experience
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-red-400">✕</span> Weak calls to action
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-red-400">✕</span> No visible reviews
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-red-400">✕</span> Difficult contact experience
                  </div>
                </div>
              </div>

              <div className="space-y-1 text-xs text-neutral-300">
                <div className="font-semibold text-white">The Cost:</div>
                <p className="text-neutral-400">
                  Visitors judge your credibility in seconds and move on to a competitor whose presentation looks established and trustworthy.
                </p>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/[0.06] text-[11px] text-red-400/80 font-mono">
              Unsubstantiated presentation weakens customer trust
            </div>
          </div>

          {/* AFTER / 1UP: Modern 1UpSites High-Converting Experience */}
          <div className="bg-[#15181b] border border-[#c5a059]/40 rounded-md p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden shadow-xl group">
            <div className="absolute top-0 right-0 bg-[#c5a059]/20 border-b border-l border-[#c5a059]/40 px-3 py-1 text-xs font-mono font-bold tracking-wider text-[#c5a059] uppercase">
              1UP (AFTER)
            </div>

            <div>
              <div className="flex items-center gap-2 text-[#c5a059] font-semibold text-xs uppercase tracking-wider mb-4">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>The Upgraded Standard</span>
              </div>

              {/* Visual Representation of High-End Modern Site */}
              <div className="bg-[#0e1012] border border-[#c5a059]/30 rounded p-4 mb-5 shadow-lg select-none">
                <div className="border-b border-white/[0.08] pb-2 mb-3 flex items-center justify-between">
                  <div className="font-display text-xs font-bold text-white tracking-tight">
                    APEX OUTDOOR ARCHITECTURE
                  </div>
                  <div className="text-[10px] font-semibold text-black bg-[#c5a059] px-2 py-0.5 rounded-sm">
                    {siteConfig.contact.phoneDisplay}
                  </div>
                </div>

                <div className="relative aspect-[16/8] bg-[#1a1c1f] rounded overflow-hidden mb-3 border border-white/5">
                  <img
                    src="/images/portfolio_apex_hardscapes_1791207245088.jpg"
                    alt="Modern hardscape redesign preview"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5">
                    <div>
                      <div className="text-[11px] font-bold text-white">Award-Winning Masonry & Patios</div>
                      <div className="text-[10px] text-neutral-300">Licensed & Insured · Verified Customer Reviews</div>
                    </div>
                  </div>
                </div>

                {/* Improvements listed visually */}
                <div className="grid grid-cols-2 gap-2 text-xs text-neutral-300 font-medium">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <span>✓</span> Premium visual presentation
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <span>✓</span> Clear estimate request
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <span>✓</span> Strong project photography
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <span>✓</span> Prominent reviews
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400 col-span-2">
                    <span>✓</span> Mobile-first experience
                  </div>
                </div>
              </div>

              <div className="space-y-1 text-xs text-neutral-300">
                <div className="font-semibold text-white">The Outcome:</div>
                <p className="text-neutral-400">
                  Customers immediately recognize your craftsmanship and feel confident requesting an estimate without hesitating.
                </p>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/[0.06] text-[11px] text-[#c5a059] font-mono">
              Designed to earn trust before you answer the phone
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
