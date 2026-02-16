"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
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
            {/* Hero */}
            <section className="relative pt-36 pb-20 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
                <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
                <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase bg-white/10 rounded-full"
                    >
                        Event Experience
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black mb-6"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        Portfolio <span className="gradient-text">Kami</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto"
                    >
                        Jelajahi koleksi event yang telah kami selenggarakan untuk klien-klien terbaik di Indonesia.
                    </motion.p>
                </div>
            </section>

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
                                        <div className="h-44 bg-gradient-to-br from-navy via-navy-light to-primary/80 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="text-4xl font-black opacity-20 text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                                                    {event.year}
                                                </div>
                                            </div>
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
