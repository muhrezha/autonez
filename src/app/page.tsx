"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { IdeasSection } from "@/components/home/IdeasSection";
import { dataIdeasOne } from "@/components/home/data";
import { portfolioEvents, clients } from "@/lib/data";

const equipmentSlides = [
    { src: "/services/handling/photo_area.jpeg", label: "Custom-Built Booth", category: "Booth" },
    { src: "/services/handling/stages.jpeg", label: "Main Stage Structure", category: "Stage" },
    { src: "/services/handling/stages_2.jpeg", label: "Outdoor Stage", category: "Stage" },
    { src: "/services/handling/backdrop.jpeg", label: "Custom Branded Backdrop", category: "Backdrop" },
    { src: "/services/handling/gates.jpeg", label: "Professional Sound System", category: "Gate" },
    { src: "/services/handling/kerangka_panggung.JPG", label: "Architectural Lighting", category: "Stage" },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HomePage() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

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
            {/* ============ HOME (HERO) ============ */}
            <section id="home" className="relative min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

                <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-8 text-center py-20 md:py-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-accent/10 text-accent rounded-full">
                            Event Management & Production
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-navy mb-4 md:mb-6 tracking-tight"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        AUTONEZ{" "}
                        <span className="gradient-text">COMMUNICATIONS</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl lg:text-2xl text-black italic mb-3 md:mb-4"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        &ldquo;Always There For You&rdquo;
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="max-w-2xl mx-auto text-sm md:text-base text-black lg:text-lg leading-relaxed mb-8 md:mb-10"
                    >
                        Bringing positive energy to every project, with a heart for client satisfaction.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2"
                >
                    <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                            className="w-1.5 h-1.5 bg-accent rounded-full mt-2"
                        />
                    </div>
                </motion.div>
            </section>

            {/* ============ OUR IDEAS ============ */}
            <SectionWrapper className="bg-white">
                <div className="w-full max-w-7xl mx-auto text-center">
                    <IdeasSection imgPos="left" data={dataIdeasOne} />
                </div>
            </SectionWrapper>

            {/* ============ ABOUT ============ */}
            <section id="about">
                <SectionWrapper className="section-padding bg-white">
                    <div className="w-full max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div>
                                <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase bg-accent/10 text-accent rounded-full">
                                    About us
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                                    Autonez Communications
                                </h2>
                                <div className="space-y-4 text-black leading-relaxed">
                                    <p>
                                        Since 2015, Autonez Communications has been a leading force in the <strong>Event Management and Production</strong> industry. We offer a comprehensive <strong>One-Stop Solution</strong>, streamlining the complex process of event planning into a single, seamless experience.
                                        Our expertise spans from conceptualizing innovative ideas to delivering flawless execution. We take pride in our in-house production capabilities, providing custom-built booths, stages, and high-quality backdrops. Equipped with professional sound, lighting, and premium LED technology, alongside curated talent management, we ensure every element of your event is handled with precision.
                                        At Autonez, we are more than just consultants—we are a team fueled by positive energy and a shared vision. Our mission is simple: To achieve absolute client satisfaction by delivering excellence that stands above the rest.
                                    </p>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square rounded-3xl bg-gradient-to-br from-accent/10 via-accent/5 to-accent/5 p-8 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-7xl md:text-8xl font-black gradient-text mb-2" style={{ fontFamily: 'var(--font-heading)' }}>2015</div>
                                        <div className="text-lg font-semibold text-navy">Established</div>
                                        <div className="text-sm text-slate-400 mt-2">Jakarta, Indonesia</div>
                                    </div>
                                </div>
                                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-2xl -z-10" />
                                <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-2xl -z-10" />
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* ============ SERVICES ============ */}
            <section id="services">
                <div className="w-full max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-12 mb-8"
                    />
                </div>

                <SectionWrapper className="px-0 md:px-12 bg-white">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="w-full flex flex-col md:flex-row overflow-hidden"
                    >
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

                        <div className="w-full md:w-3/5 bg-white relative overflow-hidden flex items-center justify-center py-20 px-0 sm:py-14 sm:px-0 min-h-[400px] sm:min-h-[480px]">
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                className="relative w-full h-[400px] sm:h-[360px] lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <Image
                                    src="/services/image_right.png"
                                    alt="Studio Production"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                    <div className="w-full h-[1px] my-10" />

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="w-full flex flex-col md:flex-row overflow-hidden"
                    >
                        <div className="w-full md:w-3/5 bg-white relative overflow-hidden flex items-center justify-center py-20 px-0 sm:py-14 sm:px-0 min-h-[400px] sm:min-h-[480px]">

                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                className="relative w-full h-[400px] sm:h-[360px] lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <Image
                                    src="/services/image_left.png"
                                    alt="Studio Production"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>

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

                                <div className="flex gap-2 sm:gap-3 mt-10 sm:mt-12 justify-end">
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-accent" />
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-accent" />
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-accent" />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </SectionWrapper>

                <div className="w-full h-[1px] my-10 pb-8" />

                <SectionWrapper className="w-full">
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

                <SectionWrapper className="px-0 bg-white overflow-hidden py-0">
                    <div className="w-full">
                        <div className="flex flex-col lg:flex-row">
                            <div
                                className="w-full lg:w-[60%] relative pl-2 md:pl-6 lg:pl-8"
                                onMouseEnter={() => setIsPaused(true)}
                                onMouseLeave={() => setIsPaused(false)}
                            >
                                <div className="relative h-[400px] sm:h-[520px] overflow-hidden rounded-2xl shadow-2xl">
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
                                            <div className="absolute top-5 left-5">
                                                <span className="px-3 py-1 bg-accent text-white text-xs font-bold tracking-widest uppercase">
                                                    {equipmentSlides[activeSlide].category}
                                                </span>
                                            </div>
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

                                    <div className="absolute top-5 right-5 bg-black/50 backdrop-blur-sm text-white text-sm font-mono px-3 py-1 tabular-nums">
                                        {String(activeSlide + 1).padStart(2, "0")}&nbsp;/&nbsp;{String(equipmentSlides.length).padStart(2, "0")}
                                    </div>

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

                                <div className="flex gap-2 justify-center py-6 bg-white">
                                    {equipmentSlides.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setActiveSlide(i)}
                                            aria-label={`Slide ${i + 1}`}
                                            className={`transition-all duration-300 rounded-full ${i === activeSlide
                                                ? "w-8 h-2 bg-accent"
                                                : "w-2 h-2 bg-gray-300 hover:bg-gray-500"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="w-full lg:w-[40%] px-8 lg:px-14 py-10 lg:py-0 flex flex-col justify-center">
                                <motion.div
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.65 }}
                                >
                                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">
                                        Available for your event
                                    </p>
                                    <ul className="space-y-6">
                                        {[
                                            { title: "Custom-built Booths" },
                                            { title: "Stages" },
                                            { title: "Backdrops" },
                                            { title: "Professional Sound, Lighting, and Premium LED Videotron Technology" },
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
                                                <span className="text-gray-700 font-medium text-base sm:text-lg leading-snug group-hover:text-gray-900 transition-colors duration-200">
                                                    {item.title}
                                                </span>
                                            </motion.li>
                                        ))}
                                    </ul>
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
            </section>

            {/* ============ PORTFOLIO ============ */}
            <section id="portfolio">
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
                        <div>
                            <h2 className="text-sm font-bold tracking-widest uppercase text-black mb-6 text-center">
                                Private Companies
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

                <SectionWrapper className="section-padding bg-white">
                    <div className="w-full max-w-7xl mx-auto">
                        <div className="text-center mb-12 mt-16 md:mt-6 md:mb-16">
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-accent)' }}>
                                Our Events
                            </h2>
                        </div>

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
                                            <div className="h-44 relative overflow-hidden">
                                                <Image
                                                    src={event.image}
                                                    alt={event.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />
                                                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300" />
                                            </div>
                                            <div className="p-6">
                                                <div className="text-[10px] font-bold tracking-widest uppercase text-accent mb-2">
                                                    {event.location}
                                                </div>
                                                <h3 className="text-lg font-bold text-navy mb-3 group-hover:text-accent transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                                                    {event.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </SectionWrapper>
            </section>

            {/* ============ CTA (before footer) ============ */}
            <SectionWrapper className="section-padding text-white bg-[var(--color-accent)]">
                <div className="w-full max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                        Ready to Create Unforgettable Moments?
                    </h2>
                    <p className="text-base md:text-lg font-bold text-white/80 mb-8 md:mb-10 max-w-2xl mx-auto">
                        Let&apos;s collaborate to bring positive energy and success to every detail of your event. Discuss your ideas with us today.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-accent font-bold rounded-full hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 hover:-translate-y-1">
                        Start Your Free Consultation
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
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
