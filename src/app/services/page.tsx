"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";

const equipmentSlides = [
    { src: "/services/image_right.png", label: "Custom-Built Booth", category: "Booth" },
    { src: "/services/image_right.png", label: "Exhibition Booth", category: "Booth" },
    { src: "/services/image_left.png", label: "Main Stage Structure", category: "Stage" },
    { src: "/services/image_left.png", label: "Outdoor Stage", category: "Stage" },
    { src: "/services/what_we_do.png", label: "Premium Backdrop", category: "Backdrop" },
    { src: "/services/what_we_do.png", label: "Custom Branded Backdrop", category: "Backdrop" },
    { src: "/services/image_right.png", label: "LED Videotron Wall", category: "LED Screen" },
    { src: "/services/image_right.png", label: "Panoramic LED Screen", category: "LED Screen" },
    { src: "/services/image_left.png", label: "Professional Sound System", category: "Audio" },
    { src: "/services/what_we_do.png", label: "Architectural Lighting", category: "Lighting" },
];


export default function ServicesPage() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = useCallback(() => {
        setActiveSlide(prev => (prev + 1) % equipmentSlides.length);
    }, []);

    const prevSlide = useCallback(() => {
        setActiveSlide(prev => (prev - 1 + equipmentSlides.length) % equipmentSlides.length);
    }, []);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(nextSlide, 3500);
        return () => clearInterval(timer);
    }, [isPaused, nextSlide]);

    return (
        <>
            {/* Section Header */}
            <div className="w-full max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12 mb-8"
                >
                    {/* <span className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest uppercase text-accent bg-accent/8 rounded-full">
                        Our Services
                    </span> */}
                </motion.div>
            </div>

            <SectionWrapper className="px-0 md:px-12 bg-white">
                {/* What We Do Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="w-full flex flex-col md:flex-row overflow-hidden"
                >
                    {/* Left 60% — white panel: title + illustration */}
                    <div className="w-full md:w-2/5 bg-white flex flex-col justify-center px-8 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="flex items-center gap-3 mb-6 sm:mb-8">
                                <div className="w-8 sm:w-10 h-[2px] bg-gray-900 flex-shrink-0" />
                                <h2
                                    className="text-3xl sm:text-4xl lg:text-5xl font-bold"
                                    style={{ fontFamily: "var(--font-heading)" }}
                                >
                                    What{" "}
                                    <span className="text-accent">We Do ?</span>
                                </h2>
                            </div>
                            <div className="flex justify-center mt-4">
                                <Image
                                    src="/services/what_we_do.png"
                                    alt="What We Do Illustration"
                                    width={480}
                                    height={420}
                                    className="object-contain w-full max-w-[480px] max-h-[360px] sm:max-h-[420px]"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right 40% — dark panel: 2 overlapping studio photos */}
                    <div className="w-full md:w-3/5 bg-navy relative overflow-hidden
                        flex items-center justify-center
                        py-20 px-0 sm:py-14 sm:px-0 min-h-[400px] sm:min-h-[480px]">
                        {/* Decorative accent lines top-right */}
                        <div className="absolute top-6 right-6 flex flex-col items-end gap-[6px]">
                            <div className="w-12 h-[3px] bg-accent" />
                            <div className="w-7 h-[3px] bg-accent" />
                        </div>
                        {/* Decorative accent line bottom-right */}
                        <div className="absolute bottom-6 right-6">
                            <div className="w-12 h-[3px] bg-accent" />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="relative w-full h-[400px] sm:h-[360px] lg:h-[400px]"
                        >
                            {/* Image 1 — main, right */}
                            <div className="absolute right-0 top-0 w-[100%] h-full overflow-hidden shadow-2xl">
                                <Image
                                    src="/services/image_right.png"
                                    alt="Studio Production"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                <div className="w-full h-[1px] my-10" />

                {/* Event Management Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="w-full flex flex-col md:flex-row overflow-hidden"
                >
                    {/* Left 60% — white panel: title + illustration */}
                    <div className="w-full md:w-3/5 bg-navy relative overflow-hidden
                        flex items-center justify-center
                        py-20 px-0 sm:py-14 sm:px-0 min-h-[400px] sm:min-h-[480px]">
                        {/* Decorative accent lines top-right */}
                        <div className="absolute top-6 right-6 flex flex-col items-end gap-[6px]">
                            <div className="w-12 h-[3px] bg-accent" />
                            <div className="w-7 h-[3px] bg-accent" />
                        </div>
                        {/* Decorative accent line bottom-right */}
                        <div className="absolute bottom-6 right-6">
                            <div className="w-12 h-[3px] bg-accent" />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="relative w-full h-[400px] sm:h-[360px] lg:h-[400px]"
                        >
                            {/* Image 1 — main, right */}
                            <div className="absolute right-0 top-0 w-[100%] h-full overflow-hidden shadow-2xl">
                                <Image
                                    src="/services/image_left.png"
                                    alt="Studio Production"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right 40% — dark panel: 2 overlapping studio photos */}
                    <div className="w-full md:w-2/5 bg-white flex flex-col justify-center px-8 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <h2
                                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                Event <span className="text-accent">Management</span>
                            </h2>
                            <div className="w-20 sm:w-24 h-[3px] bg-accent mb-8 sm:mb-10" />

                            <ul className="space-y-4 sm:space-y-5">
                                {[
                                    "BRAND ACTIVATION",
                                    "MEETING INCENTIVE CONVENTION EXHIBITION",
                                    "SPECIAL EVENT",
                                    "VIRTUAL EVENT",
                                    "PRODUCTIONS HANDLING",
                                ].map((item, i) => (
                                    <motion.li
                                        key={item}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.45, delay: 0.08 * i }}
                                        className="flex items-center gap-4"
                                    >
                                        <span className="w-5 h-5 sm:w-6 sm:h-6 bg-accent flex-shrink-0" />
                                        <span className="text-gray-800 font-semibold tracking-widest text-sm sm:text-base uppercase">
                                            {item}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>

                            {/* 3 yellow squares — bottom right decoration */}
                            <div className="flex gap-2 sm:gap-3 mt-10 sm:mt-12 justify-end">
                                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-accent" />
                                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-accent" />
                                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-accent" />
                            </div>





                        </motion.div>
                    </div>
                </motion.div>

            </SectionWrapper >

            <div className="w-full h-[1px] my-10 pb-8" />

            <SectionWrapper className="w-full">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="px-0 md:px-0 pt-0 pb-0"
                >
                    <div className="w-full max-w-7xl mx-auto px-6">
                        <div className="text-center md:mb-16">
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold md:mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                                Productions Handling
                            </h2>
                        </div>
                    </div>
                </motion.div>
            </SectionWrapper>

            {/* ============ Equipment for Rent Section ============ */}
            <SectionWrapper className="px-0 bg-[var(--color-navy)] overflow-hidden py-0">
                <div className="w-full">
                    {/* Header */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="px-8 md:px-16 pt-16 pb-10"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-[2px] bg-accent" />
                            <span className="text-accent text-xs font-bold tracking-widest uppercase">Equipment for Rent</span>
                        </div>
                        <h2
                            className="text-4xl sm:text-5xl font-bold text-white"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Our <span className="text-accent">Rental</span> Equipment
                        </h2>
                    </motion.div> */}

                    {/* Row: Slider (left) + Text (right) */}
                    <div className="flex flex-col lg:flex-row">

                        {/* Slider */}
                        <div
                            className="w-full lg:w-[60%] relative"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            <div className="relative h-[400px] sm:h-[520px] overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeSlide}
                                        initial={{ opacity: 0, scale: 1.04 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.97 }}
                                        transition={{ duration: 0.55, ease: "easeInOut" }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={equipmentSlides[activeSlide].src}
                                            alt={equipmentSlides[activeSlide].label}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] via-black/20 to-transparent" />

                                        {/* Category tag */}
                                        <div className="absolute top-5 left-5">
                                            <span className="px-3 py-1 bg-accent text-white text-xs font-bold tracking-widest uppercase">
                                                {equipmentSlides[activeSlide].category}
                                            </span>
                                        </div>

                                        {/* Slide label */}
                                        <div className="absolute bottom-8 left-6 right-16">
                                            <motion.p
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.2 }}
                                                className="text-white text-xl sm:text-2xl font-bold"
                                                style={{ fontFamily: "var(--font-heading)" }}
                                            >
                                                {equipmentSlides[activeSlide].label}
                                            </motion.p>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Slide counter */}
                                <div className="absolute top-5 right-5 bg-black/50 backdrop-blur-sm text-white text-sm font-mono px-3 py-1 tabular-nums">
                                    {String(activeSlide + 1).padStart(2, "0")}&nbsp;/&nbsp;{String(equipmentSlides.length).padStart(2, "0")}
                                </div>

                                {/* Arrows */}
                                <button
                                    onClick={prevSlide}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-accent transition-all duration-200 flex items-center justify-center text-white backdrop-blur-sm"
                                    aria-label="Previous"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-accent transition-all duration-200 flex items-center justify-center text-white backdrop-blur-sm"
                                    aria-label="Next"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>

                            {/* Dot indicators */}
                            <div className="flex gap-2 justify-center py-6 bg-[var(--color-navy)]">
                                {equipmentSlides.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveSlide(i)}
                                        aria-label={`Slide ${i + 1}`}
                                        className={`transition-all duration-300 rounded-full ${i === activeSlide
                                            ? "w-8 h-2 bg-accent"
                                            : "w-2 h-2 bg-white/25 hover:bg-white/50"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Text panel */}
                        <div className="w-full lg:w-[40%] px-8 lg:px-14 py-10 lg:py-0 flex flex-col justify-center">
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.65 }}
                            >
                                <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-6">
                                    Available for your event
                                </p>

                                <ul className="space-y-6">
                                    {[
                                        { title: "Custom-built Booths", icon: "▪" },
                                        { title: "Stages", icon: "▪" },
                                        { title: "Backdrops", icon: "▪" },
                                        { title: "Professional Sound, Lighting, and Premium LED Videotron Technology", icon: "▪" },
                                    ].map((item, i) => (
                                        <motion.li
                                            key={item.title}
                                            initial={{ opacity: 0, x: 30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.45, delay: 0.1 * i }}
                                            className="flex items-start gap-4 group"
                                        >
                                            <span className="w-2 h-2 rounded-sm bg-accent flex-shrink-0 mt-2 group-hover:scale-125 transition-transform duration-200" />
                                            <span className="text-white/85 font-medium text-base sm:text-lg leading-snug group-hover:text-white transition-colors duration-200">
                                                {item.title}
                                            </span>
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* Decorative accent bars */}
                                <div className="flex items-center gap-2 mt-12">
                                    <div className="w-10 h-[3px] bg-accent" />
                                    <div className="w-5 h-[3px] bg-accent/50" />
                                    <div className="w-2 h-[3px] bg-accent/25" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            <div className="w-full h-[1px] my-10" />

            {/* ============ CTA ============ */}
            <SectionWrapper className="section-padding pt-10 md:pt-16 lg:pt-24 text-white bg-[var(--color-accent)]">
                <div className="w-full max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                        Ready to Create Unforgettable Moments?
                    </h2>
                    <p className="text-base md:text-lg font-bold text-white/80 mb-8 md:mb-10 max-w-2xl mx-auto">
                        Let’s collaborate to bring positive energy and success to every detail of your event. Discuss your ideas with us today.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-accent font-bold rounded-full hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 hover:-translate-y-1">
                        Start Your Free Consultation
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </SectionWrapper>
        </>
    );
}