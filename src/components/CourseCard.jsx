
import { useState } from "react";
import Popup from "./PopUp";

function CourseCard({ course }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      {isPopupOpen && <Popup onClose={() => setIsPopupOpen(false)} courseId={course.id} />}
      <div className="group relative h-full">
        <div
          className={`
            relative 
            bg-gradient-to-br ${course.gradient || "from-cyan-600 via-blue-600 to-indigo-700"} 
            overflow-hidden rounded-2xl shadow-lg hover:shadow-xl 
            transition-all duration-400 hover:scale-[1.03] 
            border border-white/20 h-full flex flex-col
          `}
        >
          {/* Featured Badge */}
          {/* {course.featured && (
            <div className="absolute top-2 right-2 z-10">
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-md animate-pulse">
                MOST POPULAR
              </span>
            </div>
          )} */}

          {/* Main Content */}
          <div className="p-4 md:p-5 flex flex-col flex-grow">
            {/* Level + Discount */}
            <div className="flex justify-between items-start mb-4">
              <span className="px-3 py-1 bg-white/20 backdrop-blur text-white text-xs font-semibold rounded-full">
                {course.level}
              </span>
              <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-bold rounded-full">
                {course.discount}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 line-clamp-2">
              {course.title}
            </h3>

            {/* Short Description */}
            <p className="text-white/85 text-sm mb-4 line-clamp-3 flex-grow">
              {course.description}
            </p>

            {/* Highlights (max 4 shown) */}
            <ul className="space-y-2 mb-5">
              {course.highlights.slice(0, 4).map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-white/90 text-xs">
                  <svg className="w-4 h-4 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {/* Price + CTA */}
            <div className="flex items-end justify-between mt-auto pt-4 border-t border-white/20">
              <div>
                <div className="text-white/70 text-xs line-through">{course.priceWas}</div>
                <div className="text-2xl font-bold text-white">{course.priceNow}</div>
              </div>
              <button
                onClick={() => setIsPopupOpen(true)}
                className="px-6 py-2.5 bg-white text-slate-900 rounded-lg font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm"
              >
                Enroll Now
              </button>
            </div>
          </div>

          {/* Tech Icons – Bottom Bar */}
          <div className="flex justify-center gap-3 p-3 bg-white/10 border-t border-white/10 flex-wrap">
            {course.icons.map((icon, i) => (
              <div
                key={i}
                className="w-12 h-12 p-2 bg-white/80 rounded-xl hover:scale-110 transition-transform"
              >
                <img src={icon} alt="" className="w-full h-full object-contain drop-shadow" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseCard;