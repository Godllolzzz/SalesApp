import { Star, Calendar } from 'lucide-react';
import { doNetSuccessStories, dotNetMemberships } from '../helpers/constant';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback } from 'react';

const Reviews = () => {
    const autoplay = Autoplay({ delay: 4000, stopOnInteraction: true });

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: 'start' },
        [autoplay] // remove [autoplay] if you don't want auto-slide
    );

    const reviews = [...doNetSuccessStories, ...doNetSuccessStories, ...doNetSuccessStories]; // just to avoid typo

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    return (
        <section className="py-16 px-4 bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        Success{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">
                            Stories
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-slate-400">
                        Hear from developers who transformed their careers
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative">
                    <div className="overflow-hidden py-4" ref={emblaRef}>
                        <div className="flex gap-6">
                            {reviews.map((review) => (
                                <div
                                    key={review.id}
                                    className="flex-shrink-0 w-full sm:w-[350px] lg:w-[380px]
                    group bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900
                    rounded-2xl p-6 border border-gray-200 dark:border-slate-800
                    shadow-lg dark:shadow-2xl
                    hover:shadow-xl dark:hover:shadow-cyan-500/10
                    hover:border-cyan-500/40 dark:hover:border-cyan-500/30
                    transition-all duration-500 hover:-translate-y-2"
                                >
                                    {/* Avatar + Name + LinkedIn */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="relative">
                                                <div className="w-14 h-14 rounded-full overflow-hidden ring-4 ring-cyan-500/20 dark:ring-cyan-500/30 group-hover:ring-cyan-500 dark:group-hover:ring-cyan-400 transition">
                                                    <img
                                                        src={review.image}
                                                        alt={review.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                                                    {review.name}
                                                </h3>
                                                <p className="text-cyan-600 dark:text-cyan-400 text-sm font-medium">
                                                    {review.role}
                                                </p>
                                            </div>
                                        </div>

                                        <a
                                            href={review.linkedin || '#'}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 transition"
                                        >
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </a>
                                    </div>

                                    {/* Rating + Date */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="w-5 h-5 text-yellow-500 fill-yellow-500"
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-yellow-500 font-semibold text-sm">(5.0)</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-500 dark:text-slate-400 text-sm">
                                            <Calendar className="w-4 h-4" />
                                            <span>{review.date}</span>
                                        </div>
                                    </div>

                                    {/* Training Badge */}
                                    <div className="mb-5">
                                        <span className="inline-block px-4 py-2 bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 text-xs font-semibold rounded-full border border-cyan-200 dark:border-cyan-500/30">
                                            {review.training}
                                        </span>
                                    </div>

                                    {/* Testimonial */}
                                    <p className="text-gray-700 dark:text-slate-300 text-sm leading-relaxed line-clamp-6">
                                        {review.story}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={scrollPrev}
                        className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 
              bg-white/80 dark:bg-slate-800/80 hover:bg-gray-100 dark:hover:bg-slate-700 
              rounded-full flex items-center justify-center backdrop-blur-sm 
              shadow-md border border-gray-200 dark:border-slate-700
              transition-all duration-200"
                    >
                        <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={scrollNext}
                        className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 
              bg-white/80 dark:bg-slate-800/80 hover:bg-gray-100 dark:hover:bg-slate-700 
              rounded-full flex items-center justify-center backdrop-blur-sm 
              shadow-md border border-gray-200 dark:border-slate-700
              transition-all duration-200"
                    >
                        <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Reviews;