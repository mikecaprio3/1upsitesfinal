import React, { useEffect } from "react";
import { PortfolioProject, siteConfig } from "../config/siteConfig";
import { X, CheckCircle2, ArrowUpRight, Shield } from "lucide-react";

interface CaseStudyModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onOpenReview: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onOpenReview,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-3xl bg-[#121417] border border-white/15 rounded-md shadow-2xl overflow-hidden my-8 text-neutral-200">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#16191c]">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono font-bold tracking-wider text-[#c5a059] bg-[#c5a059]/10 px-2.5 py-0.5 rounded-xs border border-[#c5a059]/30">
              {project.badge}
            </span>
            <span className="text-xs text-neutral-400 font-medium">
              {project.industry} · {project.location}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Title */}
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <div className="p-4 bg-[#181b1f] border border-white/10 rounded-xs space-y-1">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#c5a059] font-bold">
                Design Objective:
              </div>
              <p className="text-sm text-neutral-200 leading-relaxed font-normal">
                {project.designObjective}
              </p>
            </div>
          </div>

          {/* Hero Showcase Mockup */}
          <div className="relative aspect-[16/9] w-full rounded overflow-hidden border border-white/10 bg-neutral-900 group">
            <img
              src={project.heroImage}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#16181b] border border-white/[0.08] p-4 rounded-xs space-y-1.5">
              <div className="text-xs font-mono uppercase tracking-wider text-red-400 font-semibold">
                The Challenge
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                {project.challenge}
              </p>
            </div>

            <div className="bg-[#16181b] border border-white/[0.08] p-4 rounded-xs space-y-1.5">
              <div className="text-xs font-mono uppercase tracking-wider text-[#c5a059] font-semibold">
                Strategic Design Solution
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Scope of Work Deliverables */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
              Project Architecture:
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-neutral-300">
              {project.scope.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Block */}
          <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-neutral-400">
              Want a similar clean, high-converting website for your business?
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenReview();
              }}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-[#c5a059] hover:bg-[#d8b268] transition-colors rounded-sm cursor-pointer whitespace-nowrap flex items-center justify-center gap-1.5"
            >
              <span>Get Free Website Review</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
