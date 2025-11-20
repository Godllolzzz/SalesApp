import { useState } from "react";
import Popup from "./PopUp";

function CourseCard({ course }) {
  const [ispopupOpen, setIsPopupOpen] = useState(false);
  return (
    <>
      {ispopupOpen && <Popup onClose={() => setIsPopupOpen(false)} courseId={course.id} />}
      <div className="group relative">
        <div className={`relative bg-linear-to-br ${course.gradient} overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-white/20`}>
          {/* Featured Badge */}
          {course.featured && (
            <div className="absolute top-0 right-0 z-20">
              <div className="bg-linear-to-r from-amber-400 to-orange-500 text-white px-6 py-2 rounded-full text-xs font-bold shadow-lg animate-pulse">
                ⭐ MOST POPULAR
              </div>
            </div>
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent pointer-events-none"></div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_180px]">
            {/* Main Content */}
            <div className="p-8 relative z-10">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full border border-white/30">
                  {course.level}
                </span>
                <div className="inline-block px-4 py-2 bg-linear-to-r from-orange-500 to-red-600 text-white text-sm font-black rounded-full shadow-lg border-2 border-white/30">
                  {course.discount}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                {course.title}
              </h3>
              <p className="text-white/90 text-base mb-6 leading-relaxed">
                {course.description}
              </p>

              {/* Highlights */}
              <div className="space-y-3 mb-8">
                {course.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white/95 font-medium text-sm">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Price & CTA */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/20">
                <div className="flex flex-col">
                  <span className="text-white/70 text-sm line-through mb-1">{course.priceWas}</span>
                  <span className="text-white text-3xl font-black">{course.priceNow}</span>
                </div>
                <button onClick={() => setIsPopupOpen(true)} className="cursor-pointer px-8 py-3.5 bg-white dark:bg-slate-100 text-slate-900 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg">
                  Enroll Now
                </button>
              </div>
            </div>

            {/* Tech Icons Column */}
            <div className="hidden md:flex flex-col items-center justify-center gap-6 p-6 bg-white/20 backdrop-blur-sm border-l border-white/10">
              {course.icons.map((icon, index) => (
                <div
                  key={index}
                  className={`w-20 h-20 p-4 backdrop-blur-sm rounded-2xl hover:scale-110 transition-all duration-300 ${index === 0 ? 'animate-float' : index === 1 ? 'animate-float-delay' : 'animate-float-slow'
                    }`}
                >
                  <img
                    src={icon}
                    alt="Technology icon"
                    className="w-full h-full object-contain drop-shadow-[4px_4px_0px_rgba(0,0,0,0.3)]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Tech Icons */}
          <div className="md:hidden flex justify-center gap-4 p-6 border-t border-white/10 bg-white/20 backdrop-blur-sm">
            {course.icons.map((icon, index) => (
              <div
                key={index}
                className={`w-16 h-16 p-2 backdrop-blur-sm rounded-2xl hover:scale-110 transition-all duration-300 ${index === 0 ? 'animate-float' : index === 1 ? 'animate-float-delay' : 'animate-float-slow'
                  }`}
              >
                <img
                  src={icon}
                  alt="Technology icon"
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseCard
