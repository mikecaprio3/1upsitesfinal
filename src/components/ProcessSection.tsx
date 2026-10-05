import React from "react";
import { siteConfig } from "../config/siteConfig";

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-[#0c0d0e] relative border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#c5a059]">
            The 4-Step Process
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
            A straightforward process built for busy business owners.
          </h2>
          <p className="text-base text-neutral-300 leading-relaxed font-normal">
            No endless committee meetings or 40-page questionnaires. We do the heavy lifting while you stay focused on running your company.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {siteConfig.process.map((step) => (
            <div
              key={step.step}
              className="bg-[#131518] border border-white/[0.08] p-6 rounded-sm flex flex-col justify-between group hover:border-[#c5a059]/40 transition-colors"
            >
              <div className="space-y-3">
                <span className="font-mono text-2xl font-bold text-[#c5a059] block border-b border-white/[0.06] pb-2">
                  {step.step}
                </span>

                <h3 className="font-display text-lg font-bold text-white tracking-wide">
                  {step.name}
                </h3>

                <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                  {step.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
