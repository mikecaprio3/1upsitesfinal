import React, { useState } from "react";
import { siteConfig } from "../config/siteConfig";
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Send, AlertCircle, FileSearch } from "lucide-react";

export const FreeReviewSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    websiteUrl: "",
    industry: "Landscaping & Hardscaping",
    cityState: "Fairfield County, CT",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Full name is required.";
    if (!formData.businessName.trim()) errors.businessName = "Business name is required.";
    if (!formData.email.trim() || !formData.email.includes("@")) {
      errors.email = "A valid business email is required.";
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      errors.phone = "A valid phone number is required.";
    }
    if (!formData.websiteUrl.trim()) {
      errors.websiteUrl = "Please provide your website URL (or enter 'none' if you don't have one).";
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    // Simulate review dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="review" className="py-24 bg-[#0a0b0c] relative border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Value Proposition & Audit Breakdown */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs uppercase tracking-widest font-semibold text-[#c5a059]">
              Complimentary Strategic Assessment
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
              Ready to level up your website?
            </h2>

            <p className="text-base text-neutral-300 leading-relaxed font-normal">
              Send us your current website and we’ll show you the biggest opportunities to improve your design, credibility, mobile experience, and conversion potential.
            </p>

            {/* What our audit covers */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-semibold">
                What our personal review examines:
              </div>

              <div className="space-y-2.5">
                {[
                  {
                    title: "First-Impression Credibility",
                    desc: "Does your homepage immediately justify top-tier contractor rates?",
                  },
                  {
                    title: "Mobile Friction & Tap-to-Call",
                    desc: "Are phone numbers easy to find on an iPhone, or do leads get lost?",
                  },
                  {
                    title: "Estimate Funnel Simplicity",
                    desc: "Is your quote form converting or scaring away busy homeowners?",
                  },
                  {
                    title: "Trust Signals & Google Reviews",
                    desc: "Are your reviews and licenses placed where hiring decisions happen?",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-[#131518] border border-white/[0.06] rounded-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white">{item.title}</div>
                      <div className="text-[11px] text-neutral-400">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Copy Guarantee */}
            <div className="p-4 bg-[#14171a] border border-[#c5a059]/20 rounded-xs flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#c5a059] shrink-0" />
              <p className="text-xs text-neutral-300">
                <strong className="text-white font-semibold">No pressure. No obligation. </strong>
                Just straightforward feedback from senior digital designers who understand local service businesses.
              </p>
            </div>
          </div>

          {/* Right Column: High-Fidelity Lead Form */}
          <div className="lg:col-span-7 bg-[#141619] border border-white/10 rounded-sm p-6 sm:p-10 shadow-2xl relative">
            {submitted ? (
              <div className="py-12 text-center space-y-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/40 flex items-center justify-center mx-auto text-[#c5a059]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    Review Request Received
                  </h3>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Our senior team is reviewing <strong className="text-[#c5a059]">{formData.businessName}</strong>. We will email your custom video breakdown within 24 business hours.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={`tel:${siteConfig.contact.phoneTel}`}
                    className="text-xs font-semibold text-neutral-300 hover:text-white"
                  >
                    Need faster response? Call: {siteConfig.contact.phoneDisplay}
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        businessName: "",
                        phone: "",
                        email: "",
                        websiteUrl: "",
                        industry: "Landscaping & Hardscaping",
                        cityState: "Fairfield County, CT",
                        message: "",
                      });
                    }}
                    className="text-xs text-[#c5a059] hover:underline cursor-pointer"
                  >
                    Submit another review request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-white/[0.08] pb-4">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    Request Your Free Website Review
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Fill out the form below. Takes less than 60 seconds.
                  </p>
                </div>

                {/* 2-Column Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-300">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Michael Caprio"
                      className="w-full bg-[#1b1e22] border border-white/10 focus:border-[#c5a059] focus:outline-none rounded-xs px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 transition-colors"
                    />
                    {formErrors.name && (
                      <p className="text-[11px] text-red-400">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Business Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-300">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Apex Hardscapes LLC"
                      className="w-full bg-[#1b1e22] border border-white/10 focus:border-[#c5a059] focus:outline-none rounded-xs px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 transition-colors"
                    />
                    {formErrors.businessName && (
                      <p className="text-[11px] text-red-400">{formErrors.businessName}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full bg-[#1b1e22] border border-white/10 focus:border-[#c5a059] focus:outline-none rounded-xs px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 transition-colors"
                    />
                    {formErrors.email && (
                      <p className="text-[11px] text-red-400">{formErrors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-300">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="203-444-5273"
                      className="w-full bg-[#1b1e22] border border-white/10 focus:border-[#c5a059] focus:outline-none rounded-xs px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 transition-colors"
                    />
                    {formErrors.phone && (
                      <p className="text-[11px] text-red-400">{formErrors.phone}</p>
                    )}
                  </div>

                  {/* Current Website URL */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-xs font-semibold text-neutral-300">
                      Current Website URL (or write "No Website") *
                    </label>
                    <input
                      type="text"
                      value={formData.websiteUrl}
                      onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                      placeholder="www.yourcompany.com"
                      className="w-full bg-[#1b1e22] border border-white/10 focus:border-[#c5a059] focus:outline-none rounded-xs px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 transition-colors"
                    />
                    {formErrors.websiteUrl && (
                      <p className="text-[11px] text-red-400">{formErrors.websiteUrl}</p>
                    )}
                  </div>

                  {/* Industry Select */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-300">
                      Industry / Primary Trade
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full bg-[#1b1e22] border border-white/10 focus:border-[#c5a059] focus:outline-none rounded-xs px-3.5 py-2.5 text-xs text-white transition-colors"
                    >
                      {siteConfig.industries.map((ind) => (
                        <option key={ind.id} value={ind.title} className="bg-[#1b1e22] text-white">
                          {ind.title}
                        </option>
                      ))}
                      <option value="Other Trade" className="bg-[#1b1e22] text-white">
                        Other Trade / Local Business
                      </option>
                    </select>
                  </div>

                  {/* City / State */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-300">
                      Primary Service Town / State
                    </label>
                    <input
                      type="text"
                      value={formData.cityState}
                      onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                      placeholder="e.g. Stamford, CT"
                      className="w-full bg-[#1b1e22] border border-white/10 focus:border-[#c5a059] focus:outline-none rounded-xs px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 transition-colors"
                    />
                  </div>

                  {/* Optional Message */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-xs font-semibold text-neutral-300">
                      Optional: What is your #1 goal or frustration with your current website?
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. We want to stop bidding on $3k jobs and start attracting $25k+ full outdoor living projects."
                      className="w-full bg-[#1b1e22] border border-white/10 focus:border-[#c5a059] focus:outline-none rounded-xs px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 transition-colors resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-[#c5a059] hover:bg-[#d8b268] active:scale-[0.99] transition-all rounded-xs cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(197,160,89,0.35)] flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Analyzing & Submitting...</span>
                    ) : (
                      <>
                        <span>GET MY FREE WEBSITE REVIEW</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Subtext */}
                <p className="text-[11px] text-center text-neutral-400">
                  Your information is kept 100% confidential. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
