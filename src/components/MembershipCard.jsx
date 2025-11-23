import { useState } from "react";
import Popup from "./PopUp";

function MembershipCard({ membership }) {
  const [ispopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      {ispopupOpen && <Popup onClose={() => setIsPopupOpen(false)} courseId={membership.id} />}

      <div className="max-w-4xl mx-auto">
        <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 dark:from-slate-950 dark:via-black dark:to-slate-950 rounded-3xl overflow-hidden shadow-2xl hover:shadow-cyan-500/20 hover:shadow-[0_20px_60px_rgba(6,182,212,0.3)] transition-all duration-500 hover:scale-[1.01] border border-cyan-500/30">

          {/* Discount Badge */}
          <div className="absolute -top-0 -right-0 z-20">
            <div className="bg-gradient-to-br from-cyan-400 to-blue-600 text-white px-6 py-1 rounded-bl-3xl text-lg font-black shadow-xl">
              {membership.discount}
            </div>
          </div>

          {/* Original Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 relative">

            {/* Light Vertical Divider - Only on Desktop */}
            <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-cyan-500/20 -translate-x-1/2"></div>

            {/* LEFT - Pricing */}
            <div className="p-6 sm:p-8 text-left">
              <h3 className="text-2xl sm:text-3xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                {membership.title}
              </h3>

              <div className="my-4">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <span className="text-4xl font-black text-white">{membership.priceNow}</span>
                  <span className="text-lg text-slate-500 line-through">{membership.priceWas}</span>
                </div>
                <p className="text-slate-400 text-xs mt-1 flex items-center justify-center md:justify-start gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  Billed Yearly
                </p>
              </div>

              <button
                onClick={() => setIsPopupOpen(true)}
                className="w-full max-w-[260px] mx-auto md:mx-0 px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-full font-bold text-base hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                {membership.ctaText || "Subscribe Now"}
              </button>

              {membership.emi && (
                <div className="mt-5 text-center md:text-left text-sm">
                  <p className="text-xl font-bold text-white">₹X/month</p>
                  <p className="text-cyan-400 font-medium">*Flexible EMI options available</p>
                  <p className="text-slate-400 text-xs mt-1">Processing Fee: ₹999 (One-time)</p>
                  <button onClick={() => setIsPopupOpen(true)} className="mt-2 text-cyan-400 hover:text-cyan-300 font-bold underline text-xs">
                    Contact for EMI options
                  </button>
                </div>
              )}
            </div>

            {/* RIGHT - What's Included */}
            <div className="p-6 sm:p-8 pt-8 sm:pt-8">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-5">What's included</h4>

              <div className="space-y-3 sm:space-y-4">
                {membership.sections.map((section, idx) => (
                  <div key={idx}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h5 className="text-base font-bold text-cyan-400">{section.title}</h5>
                    </div>

                    <ul className="space-y-1.5 ml-12 text-sm text-slate-300">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 leading-snug">
                          <span className="text-cyan-500">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MembershipCard;