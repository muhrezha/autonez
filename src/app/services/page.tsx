"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";


export default function ServicesPage() {
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