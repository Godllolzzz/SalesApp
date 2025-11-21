import { useState } from "react";
import Popup from "./PopUp";

function MembershipCard({ membership }) {
  const [ispopupOpen, setIsPopupOpen] = useState(false);
  return (
    <>
      {ispopupOpen && <Popup onClose={() => setIsPopupOpen(false)} courseId={membership.id} />}
      <div className="group relative">
        <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 dark:from-slate-950 dark:via-black dark:to-slate-950 rounded-3xl overflow-hidden shadow-2xl hover:shadow-cyan-500/20 hover:shadow-[0_20px_60px_rgba(6,182,212,0.3)] transition-all duration-500 hover:scale-[1.01] border border-cyan-500/30">
          {/* Discount Badge */}
          <div className="absolute -top-0 -right-0 z-20">
            <div className="bg-gradient-to-br from-cyan-400 to-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-bl-3xl text-lg font-black shadow-xl">
              {membership.discount}
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 pointer-events-none"></div>

          {/* Content Grid - Horizontal Layout */}
          <div className="grid grid-cols-1 md:grid-cols-[480px_1fr] md:gap-8">
            {/* Left Side - Pricing & CTA */}
            <div className="p-6 pt-12 border-r border-slate-700/50">
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-1">
                  {membership.title}
                </h3>
                <div className="flex items-center gap-2 text-slate-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-semibold">Billed Yearly</span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-5">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-black text-white">{membership.priceNow}</span>
                  <span className="text-lg text-slate-500 line-through">{membership.priceWas}</span>
                </div>
                <div className="text-slate-400 text-sm">/year</div>
              </div>

              {/* EMI Option */}
              {membership.emi && (
                <div className="mb-4 p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
                  <div className="text-white text-base font-bold mb-0.5">{membership.emi}</div>
                  <div className="text-cyan-400 text-xs font-semibold">{membership.emiNote}</div>
                  <div className="text-slate-400 text-xs mt-1.5">{membership.processingFee}</div>
                </div>
              )}

              {/* CTA Button */}
              <button onClick={() => setIsPopupOpen(true)} className="cursor-pointer w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl font-bold text-base hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 shadow-lg mb-4">
                {membership.ctaText || 'Start Now'}
              </button>

              {/* Contact for EMI */}
              {membership.emiContact && (
                <div onClick={() => setIsPopupOpen(true)} className="cursor-pointer pt-3 border-t border-slate-700">
                  <a className="text-cyan-400 hover:text-cyan-300 font-bold underline text-center block transition text-xs">
                    {membership.emiContact}
                  </a>
                </div>
              )}
            </div>

            {/* Right Side - What's Included */}
            <div className="p-6 pt-12">
              <h4 className="text-white text-xl font-bold mb-5">What's included</h4>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {membership.sections.map((section, idx) => (
                  <div key={idx} className="space-y-3">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h5 className="text-cyan-400 font-bold text-base">{section.title}</h5>
                    </div>
                    <div className="space-y-2">
                      {section.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start gap-2">
                          <span className="text-cyan-500 mt-1">•</span>
                          <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MembershipCard
