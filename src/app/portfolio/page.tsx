"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import {
    portfolioEvents,
    portfolioCategories,
    type PortfolioCategory,
} from "@/lib/data";

export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("All");

    const filteredEvents =
        activeCategory === "All"
            ? portfolioEvents
            : portfolioEvents.filter((e) => e.category === activeCategory);

    return (
        <>

            {/* Portfolio Grid */}
            <SectionWrapper className="section-padding bg-white">
                <div className="w-full max-w-7xl mx-auto">
                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {portfolioCategories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                                    : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-navy"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Events Grid */}
                    <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence mode="popLayout">
                            {filteredEvents.map((event) => (
                                <motion.div
                                    key={event.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <Link
                                        href={`/portfolio/${event.id}`}
                                        className="group relative rounded-2xl bg-white border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 block"
                                    >
                                        {/* Visual Header */}
                                        <div className="h-44 relative overflow-hidden">
                                            <Image
                                                src={event.image}
                                                alt={event.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-white/20 text-white rounded-full backdrop-blur-sm">
                                                    {event.category}
                                                </span>
                                            </div>
                                            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <div className="text-[10px] font-bold tracking-widest uppercase text-primary mb-2">
                                                {event.client}
                                            </div>
                                            <h3 className="text-lg font-bold text-navy mb-3 group-hover:text-primary transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                                                {event.title}
                                            </h3>
                                            <p className="text-sm text-slate-500 leading-relaxed mb-4">
                                                {event.description}
                                            </p>
                                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:gap-2.5 transition-all duration-300">
                                                Lihat Detail
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </span>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredEvents.length === 0 && (
                        <div className="text-center py-20">
                            <div className="text-5xl mb-4">🔍</div>
                            <p className="text-slate-400 text-lg">Belum ada event di kategori ini.</p>
                        </div>
                    )}
                </div>
            </SectionWrapper>
        </>
    );
}
