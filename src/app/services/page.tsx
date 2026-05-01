"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { services } from "@/lib/data";
import Link from "next/link";

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ServicesPage() {
    return (
        <>

            {/* Section Header */}
            <SectionWrapper className="section-padding bg-white">
                <div className="w-full max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <span className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest uppercase text-primary bg-primary/8 rounded-full">
                            Informasi Kontak
                        </span>
                        <h2
                            className="text-3xl md:text-4xl font-black text-navy mb-4"
                            style={{ fontFamily: 'var(--font-heading)' }}
                        >
                            Saluran Komunikasi Resmi
                        </h2>
                        <p className="text-slate-500 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
                            Hubungi kami melalui saluran di bawah ini. Tim kami akan merespons dengan cepat dan profesional.
                        </p>
                    </motion.div>
                </div>
            </SectionWrapper>


            {/* Services Detail */}
            <SectionWrapper className="section-padding bg-white">
                <div className="w-full max-w-6xl mx-auto">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col gap-8"
                    >
                        {services.map((svc, i) => (
                            <motion.div
                                key={svc.id}
                                variants={itemVariants}
                                className="group relative rounded-3xl border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700"
                            >
                                <div className={`flex flex-col lg:flex-row ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                                    {/* Icon/Visual Side */}
                                    <div className="lg:w-72 flex-shrink-0 bg-gradient-to-br from-slate-50 to-white flex items-center justify-center p-10 lg:p-12">
                                        <div className="text-center">
                                            <div className="text-7xl mb-4 group-hover:scale-110 transition-transform duration-500">
                                                {svc.icon}
                                            </div>
                                            <div className="text-[10px] font-bold tracking-widest uppercase text-slate-400">
                                                Service {String(i + 1).padStart(2, "0")}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                                        <h2
                                            className="text-2xl md:text-3xl font-bold text-navy mb-4 group-hover:text-primary transition-colors"
                                            style={{ fontFamily: 'var(--font-heading)' }}
                                        >
                                            {svc.title}
                                        </h2>
                                        <p className="text-slate-500 leading-relaxed mb-6">
                                            {svc.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {svc.highlights.map((h) => (
                                                <span
                                                    key={h}
                                                    className="px-4 py-2 text-xs font-medium bg-slate-50 text-slate-600 rounded-full group-hover:bg-primary/5 group-hover:text-primary transition-colors duration-300"
                                                >
                                                    {h}
                                                </span>
                                            ))}
                                        </div>
                                        {/* <Link
                                            href={`/services/${svc.id}`}
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors group/link"
                                        >
                                            Lihat Detail Layanan
                                            <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </Link> */}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
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
