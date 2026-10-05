import React, { useState } from "react";
import { siteConfig } from "../config/siteConfig";
import { Layers, Smartphone, FileText, Search, Sparkles, Cloud, ArrowRight, Check } from "lucide-react";

interface ServicesSectionProps {
  onOpenReview: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenReview }) => {
  const [showFullDetailsModal, setShowFullDetailsModal] = useState(false);

  const serviceIcons: Record<string, React.ReactNode> = {
    "custom-design": <Layers className="w-5 h-5 text-[#c5a059]" />,
    "mobile-optimization": <Smartphone className="w-5 h-5 text-[#c5a059]" />,
    "lead-systems": <FileText className="w-5 h-5 text-[#c5a059]" />,
    "local-seo": <Search className="w-5 h-5 text-[#c5a059]" />,
    "copy-content": <Sparkles className="w-5 h-5 text-[#c5a059]" />,
    "hosting-support": <Cloud className="w-5 h-5 text-[#c5a059]" />,
  };

  return (
    <section id="services" className="py-20 bg-[#0e1012] relative border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#c5a059]">
            Full-Spectrum Digital Infrastructure
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
            Everything you need to level up your online presence.
          </h2>
          <p className="text-base text-neutral-300 leading-relaxed font-normal">
            We build websites tailored specifically to how homeowners and local customers research, evaluate, and hire trade services.
          </p>
        </div>

        {/* 6 Concise Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.coreServices.map((service, idx) => (
            <div
              key={service.id}
              className="p-6 bg-[#131518] border border-white/[0.08] hover:border-[#c5a059]/40 transition-all duration-200 rounded-sm flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-sm bg-[#1a1d20] border border-white/10 flex items-center justify-center">
                    {serviceIcons[service.id]}
                  </div>
                  <span className="font-mono text-xs text-neutral-500 font-bold">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display text-base font-bold text-white group-hover:text-[#c5a059] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Services Link */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowFullDetailsModal(true)}
            className="px-6 py-3 bg-[#141619] hover:bg-[#1a1d22] border border-white/10 hover:border-[#c5a059]/40 text-neutral-200 hover:text-white rounded-xs text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>Explore All Services & Deliverables</span>
            <ArrowRight className="w-4 h-4 text-[#c5a059]" />
          </button>
        </div>

        {/* Full Services Modal */}
        {showFullDetailsModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fadeIn"
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-[#121417] border border-white/15 rounded-md max-w-2xl w-full max-h-[85vh] flex flex-col text-neutral-200 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#16181b]">
                <h3 className="font-display text-lg font-bold text-white">
                  All Core Website Deliverables
                </h3>
                <button
                  onClick={() => setShowFullDetailsModal(false)}
                  className="text-neutral-400 hover:text-white p-1 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-4 text-xs text-neutral-300">
                <p className="text-neutral-300 text-sm">
                  Every 1UpSites project includes clean code, responsive layout architecture, direct phone dialing, and essential SEO setup.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    "Custom responsive design (iPhone, Android, Desktop)",
                    "Single-tap click-to-call phone headers",
                    "Frictionless 60-second estimate request form",
                    "Google Reviews and customer trust embed",
                    "High-resolution project gallery layout",
                    "Schema.org LocalBusiness structured data",
                    "Clear, persuasive copywriting written for you",
                    "Fast edge cloud hosting & automatic SSL",
                    "Town-level local service SEO structure",
                    "Google Analytics & event conversion tracking",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2 bg-[#181a1e] rounded-xs border border-white/[0.04]">
                      <Check className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-6 py-3 border-t border-white/10 bg-[#16181b] flex items-center justify-between">
                <button
                  onClick={() => setShowFullDetailsModal(false)}
                  className="text-xs text-neutral-400 hover:text-white"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setShowFullDetailsModal(false);
                    onOpenReview();
                  }}
                  className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-black bg-[#c5a059] hover:bg-[#d8b268] rounded-xs"
                >
                  Get A Free Review
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
