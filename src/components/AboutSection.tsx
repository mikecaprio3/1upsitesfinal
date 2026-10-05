import React, { useState } from "react";
import { siteConfig } from "../config/siteConfig";
import { Quote, ArrowUpRight, Shield, User } from "lucide-react";

interface AboutSectionProps {
  onOpenReview: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenReview }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="py-20 bg-[#0c0d0e] relative border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Founder Photo Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-xs sm:max-w-sm lg:max-w-none">
              <div className="relative bg-[#141619] border border-white/10 rounded-sm overflow-hidden p-2 shadow-2xl">
                <div className="aspect-square relative overflow-hidden rounded-xs bg-[#1a1c1e] flex items-center justify-center">
                  {!imageError ? (
                    <img
                      src={siteConfig.founder.image}
                      alt={siteConfig.founder.name}
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover transition-all duration-500"
                      style={{ objectPosition: "center 30%" }}
                    />
                  ) : (
                    /* Minimalist temporary placeholder labeled MICHAEL CAPRIO PHOTO as instructed */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#15171a] border border-white/5 space-y-2">
                      <div className="w-12 h-12 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059]">
                        <User className="w-6 h-6" />
                      </div>
                      <div className="font-mono text-xs font-bold text-white tracking-wider">
                        MICHAEL CAPRIO PHOTO
                      </div>
                      <div className="text-[11px] text-neutral-400">
                        Founder & Lead Designer
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-4">
                    <div>
                      <div className="font-display text-base font-bold text-white">
                        {siteConfig.founder.name}
                      </div>
                      <div className="text-xs text-[#c5a059] font-mono">
                        {siteConfig.founder.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote card */}
              <div className="absolute -bottom-4 -right-3 sm:-right-4 bg-[#181a1e] border border-[#c5a059]/30 p-3 rounded-sm shadow-xl max-w-[240px] hidden sm:block">
                <div className="flex items-start gap-2">
                  <Quote className="w-4 h-4 text-[#c5a059] shrink-0 opacity-80" />
                  <p className="text-[11px] text-neutral-200 italic font-medium leading-relaxed">
                    "{siteConfig.founder.statement}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission & Real Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <div className="text-xs uppercase tracking-widest font-semibold text-[#c5a059]">
              Direct Founder Craftsmanship
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
              Great businesses shouldn’t look average online.
            </h2>

            <div className="space-y-3.5 text-neutral-300 leading-relaxed text-sm font-normal">
              <p>
                <strong className="text-white font-semibold">1UpSites was built around a simple idea: </strong>
                a strong business deserves an online presence that reflects the quality of the work behind it.
              </p>

              <p>
                I created 1UpSites to help local business owners upgrade that first impression without dealing with bloated agency processes, confusing tech jargon, or overpriced retainers. You work directly with me to build a clean, high-performing website that earns trust and wins customers.
              </p>

              <p>
                When a customer visits your site, they cannot see your trucks or meet your crew. They only see your digital storefront. We make sure that first impression looks as good as the work you do.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={onOpenReview}
                className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-black bg-[#c5a059] hover:bg-[#d8b268] transition-colors rounded-sm cursor-pointer shadow-sm flex items-center gap-1.5 hover-lift"
              >
                <span>Request Free Website Review</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${siteConfig.contact.phoneTel}`}
                className="text-xs font-semibold text-neutral-300 hover:text-white transition-colors"
              >
                Or call Michael directly: <span className="text-[#c5a059]">{siteConfig.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
