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
                    <span className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest uppercase text-primary bg-primary/8 rounded-full">
                        Our Services
                    </span>
                </motion.div>
            </div>

            <SectionWrapper className="px-12 bg-white">

                {/* What We Do Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="w-full flex flex-col md:flex-row overflow-hidden"
                >
                    {/* Left 60% — white panel: title + illustration */}
                    <div className="w-full md:w-3/5 bg-white flex flex-col justify-center px-8 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
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
                    <div className="w-full md:w-2/5 bg-navy relative overflow-hidden 
                        flex items-center justify-center 
                        py-20 px-6 sm:py-14 sm:px-0 min-h-[400px] sm:min-h-[480px]">
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
                            <div className="absolute right-0 top-0 w-[62%] h-full overflow-hidden shadow-2xl">
                                <Image
                                    src="/event_example_two.jpg"
                                    alt="Studio Production"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Image 2 — floating, left, overlapping */}
                            <div className="absolute left-0 top-8 sm:top-10 w-[55%] h-[78%] overflow-hidden shadow-2xl border-[3px] border-navy">
                                <Image
                                    src="/event_example_three.jpg"
                                    alt="Studio Production"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Event Management Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="w-full flex flex-col md:flex-row overflow-hidden"
                >
                    {/* Left 40% — dark panel: 2 overlapping images floating toward right edge */}
                    <div className="w-full md:w-2/5 relative overflow-hidden min-h-[400px] sm:min-h-[520px]">
                        {/* Background image — full bleed */}
                        <div className="absolute inset-0">
                            <Image
                                src="/event_example_two.jpg"
                                alt="Event Production Background"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-navy/50" />
                        </div>

                        {/* Decorative dark blocks — top right */}
                        <div className="absolute top-0 right-0 z-10 flex gap-1">
                            <div className="w-10 h-16 sm:w-12 sm:h-20 bg-[#3a3a3a]" />
                            <div className="w-5 h-10 sm:w-6 sm:h-12 bg-[#2a2a2a] self-end" />
                        </div>

                        {/* Foreground image — floating toward right edge with white border */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.25 }}
                            className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-5 w-[72%] sm:w-[68%] h-[58%] sm:h-[62%] border-[4px] sm:border-[5px] border-white shadow-2xl overflow-hidden z-20"
                        >
                            <Image
                                src="/event_example_four.jpg"
                                alt="Event Management"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Decorative dark blocks — bottom right */}
                        <div className="absolute bottom-0 right-0 z-10 flex gap-1 items-end">
                            <div className="w-5 h-10 sm:w-6 sm:h-12 bg-[#2a2a2a]" />
                            <div className="w-10 h-16 sm:w-12 sm:h-20 bg-[#3a3a3a]" />
                        </div>
                    </div>

                    {/* Right 60% — white panel: title + bullet list */}
                    <div className="w-full md:w-3/5 bg-white flex flex-col justify-center px-8 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
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

            </SectionWrapper>


            {/* CTA */}
            <SectionWrapper className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white">
                <div className="w-full max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                        Tertarik dengan Layanan Kami?
                    </h2>
                    <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                        Konsultasikan kebutuhan event Anda dengan tim kami. Kami siap membantu mewujudkan visi Anda.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 hover:-translate-y-1"
                    >
                        Hubungi Kami Sekarang
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </SectionWrapper>
        </>
    );
}
