import React, { useState } from "react";
import { siteConfig, PortfolioProject } from "../config/siteConfig";
import { ArrowUpRight, ArrowRight, Monitor, Smartphone } from "lucide-react";

interface PortfolioSectionProps {
  onSelectProject: (project: PortfolioProject) => void;
  onOpenReview: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onSelectProject,
  onOpenReview,
}) => {
  const [showAllWork, setShowAllWork] = useState(false);

  // By default, display 3 primary projects on homepage
  const displayedProjects = showAllWork
    ? siteConfig.portfolio
    : siteConfig.portfolio.slice(0, 3);

  return (
    <section id="work" className="py-20 bg-[#0c0d0e] relative border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs uppercase tracking-widest font-semibold text-[#c5a059]">
              Selected Concept Projects
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
              Websites built to put your business a level above.
            </h2>
            <p className="text-base text-neutral-300 leading-relaxed font-normal">
              Every project is engineered around one core outcome: leveling up your visual authority so homeowners and commercial clients feel immediate confidence in your capability.
            </p>
          </div>

          <div className="text-xs font-mono text-neutral-400 self-start md:self-end">
            All showcase projects clearly labeled as concept architecture.
          </div>
        </div>

        {/* Portfolio 3-Item Grid (or full 6 when expanded) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#131518] border border-white/[0.08] hover:border-[#c5a059]/40 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 group hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
            >
              <div>
                {/* Visual Preview Container */}
                <div className="relative aspect-[16/10] bg-[#1a1c1f] overflow-hidden">
                  <img
                    src={project.heroImage}
                    alt={`${project.title} showcase`}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                  {/* Top Concept Badge & Device Affordance */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-[#c5a059] bg-[#0c0d0e]/90 px-2 py-0.5 rounded-xs border border-[#c5a059]/30">
                      {project.badge}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] text-white/80 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-xs">
                      <Monitor className="w-3 h-3 text-[#c5a059]" />
                      <span>+</span>
                      <Smartphone className="w-3 h-3 text-[#c5a059]" />
                    </div>
                  </div>

                  {/* Overlaid Industry Summary */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-[11px] text-[#c5a059] font-mono uppercase tracking-wider font-semibold">
                      {project.industry}
                    </div>
                    <div className="text-xs text-neutral-300 truncate">
                      {project.location}
                    </div>
                  </div>
                </div>

                {/* Content Card Body */}
                <div className="p-5 space-y-3">
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-[#c5a059] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Design Objective Block (No fake numbers) */}
                  <div className="p-3 bg-[#181a1e] border border-white/[0.06] rounded-xs space-y-1">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#c5a059] font-bold">
                      Design Objective
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                      {project.designObjective}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Interactive CTA Trigger */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onSelectProject(project)}
                  className="w-full py-2.5 px-3 bg-white/[0.03] hover:bg-[#c5a059] hover:!text-black group-hover:border-[#c5a059]/30 border border-white/10 transition-all rounded-xs text-xs font-semibold uppercase tracking-wider text-neutral-300 flex items-center justify-between cursor-pointer"
                >
                  <span>View Project Breakdown</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Work Link / Toggle */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAllWork(!showAllWork)}
            className="px-6 py-3 bg-[#141619] hover:bg-[#1a1d22] border border-white/10 hover:border-[#c5a059]/40 text-neutral-200 hover:text-white rounded-xs text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>{showAllWork ? "Show Fewer Projects" : "View All Work"}</span>
            <ArrowRight className="w-4 h-4 text-[#c5a059]" />
          </button>
        </div>
      </div>
    </section>
  );
};
