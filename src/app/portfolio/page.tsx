"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import {
    portfolioEvents,
    // portfolioCategories,
    // type PortfolioCategory,
} from "@/lib/data";

import { services, clients, processSteps } from "@/lib/data";


const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function PortfolioPage() {
    // const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("All");
    const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

    // const filteredEvents =
    //     activeCategory === "All"
    //         ? portfolioEvents
    //         : portfolioEvents.filter((e) => e.category === activeCategory);

    return (
        <>
            <SectionWrapper className="mt-10 bg-white"> </SectionWrapper>


            {/* ============ CLIENT EXPERIENCES ============ */}
            <SectionWrapper className="bg-white">
                <div className="w-full max-w-7xl mx-auto px-12">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-accent)' }}>
                            Our Clients
                        </h2>
                        <p className="max-w-2xl mx-auto text-black text-sm md:text-base">
                            From state-owned enterprises to leading private companies, we are proud to be a trusted partner in delivering high-quality events.
                        </p>
                    </div>
                    {/* BUMN */}
                    <div className="mb-12">
                        <h2 className="text-sm font-bold tracking-widest uppercase text-black mb-6 text-center">
                            Government & Public Institutions
                        </h2>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4"
                        >
                            {clients.filter((c) => c.category === "BUMN").map((c) => (
                                <motion.div key={c.name} variants={itemVariants}
                                    className="relative flex items-center justify-center p-3 h-20 rounded-xl bg-white border border-slate-100 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group"
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={c.logo}
                                            alt={c.name}
                                            fill
                                            className="object-contain mix-blend-multiply"
                                            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 14vw"
                                        />
                                    </div>
                                    <span className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[calc(100%+6px)] z-20 whitespace-nowrap rounded-md bg-navy px-2.5 py-1 text-xs font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                                        {c.name}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                    {/* Swasta */}
                    <div>
                        <h2 className="text-sm font-bold tracking-widest uppercase text-black mb-6 text-center">
                            ⁠⁠Private Companies
                        </h2>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4"
                        >
                            {clients.filter((c) => c.category === "Swasta").map((c) => (
                                <motion.div key={c.name} variants={itemVariants}
                                    className="relative flex items-center justify-center p-3 h-20 rounded-xl bg-white border border-slate-100 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group"
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={c.logo}
                                            alt={c.name}
                                            fill
                                            className="object-contain mix-blend-multiply"
                                            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 12vw"
                                        />
                                    </div>
                                    <span className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[calc(100%+6px)] z-20 whitespace-nowrap rounded-md bg-navy px-2.5 py-1 text-xs font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                                        {c.name}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Portfolio Grid */}
            <SectionWrapper className="section-padding bg-white">
                <div className="w-full max-w-7xl mx-auto">
                    {/* Filter Tabs */}
                    {/* <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {portfolioCategories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                    ? "bg-accent text-white shadow-lg shadow-accent/25"
                                    : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-navy"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div> */}

                    <div className="text-center mb-12 mt-16 md:mt-6 md:mb-16">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-accent)' }}>
                            Our Events
                        </h2>
                    </div>

                    {/* Events Grid */}
                    <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence mode="popLayout">
                            {portfolioEvents.map((event) => (
                                <motion.div
                                    key={event.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div
                                        onClick={() => setSelectedImage({ src: event.image, alt: event.title })}
                                        className="group relative rounded-2xl bg-white border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 hover:-translate-y-1 block cursor-pointer"
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
                                            {/* <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-white/20 text-white rounded-full backdrop-blur-sm">
                                                    {event.location}
                                                </span>
                                            </div> */}
                                            <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300" />
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <div className="text-[10px] font-bold tracking-widest uppercase text-accent mb-2">
                                                {event.location}
                                            </div>
                                            <h3 className="text-lg font-bold text-navy mb-3 group-hover:text-accent transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                                                {event.title}
                                            </h3>
                                            {/* <p className="text-sm text-slate-500 leading-relaxed mb-4">
                                                {event.description}
                                            </p> */}
                                            {/* <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent group-hover:gap-2.5 transition-all duration-300">
                                                Lihat Detail
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </span> */}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* {filteredEvents.length === 0 && (
                        <div className="text-center py-20">
                            <div className="text-5xl mb-4">🔍</div>
                            <p className="text-slate-400 text-lg">Belum ada event di kategori ini.</p>
                        </div>
                    )} */}
                </div>
            </SectionWrapper>

            {/* Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors duration-200"
                            aria-label="Close"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="relative w-full max-w-4xl max-h-[90vh] aspect-video"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                fill
                                className="object-contain"
                                sizes="100vw"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
