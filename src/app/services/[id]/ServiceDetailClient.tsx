"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Service, PortfolioEvent } from "@/lib/data";

interface Props {
    svc: Service;
    prevService: Service | null;
    nextService: Service | null;
    relatedPortfolio: PortfolioEvent[];
}

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1 },
    }),
};

export default function ServiceDetailClient({ svc, prevService, nextService, relatedPortfolio }: Props) {
    return (
        <>
            {/* ── Hero ──────────────────────────────────────────────── */}
            <section className="relative pt-36 pb-24 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
                <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />

                <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <motion.nav
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-sm text-slate-400 mb-10"
                    >
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                        <span>/</span>
                        <span className="text-white">{svc.title}</span>
                    </motion.nav>

                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
                        {/* Icon */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                            className="flex-shrink-0 w-28 h-28 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-6xl shadow-2xl"
                        >
                            {svc.icon}
                        </motion.div>

                        {/* Title & Description */}
                        <div>
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase bg-accent/20 text-accent-light rounded-full"
                            >
                                Layanan Kami
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                {svc.title}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-slate-300 max-w-2xl leading-relaxed"
                            >
                                {svc.description}
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Long Description ──────────────────────────────────── */}
            <section className="section-padding bg-white">
                <div className="w-full max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main text */}
                        <div className="lg:col-span-2">
                            <motion.span
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="text-xs font-bold tracking-widest uppercase text-accent"
                            >
                                Tentang Layanan
                            </motion.span>
                            <motion.h2
                                variants={fadeUp}
                                custom={1}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="text-2xl md:text-3xl font-bold text-navy mt-2 mb-6"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                Mengapa Memilih {svc.title}?
                            </motion.h2>
                            <motion.p
                                variants={fadeUp}
                                custom={2}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="text-slate-500 leading-relaxed text-base"
                            >
                                {svc.longDescription}
                            </motion.p>
                        </div>

                        {/* Highlights sidebar */}
                        <motion.div
                            variants={fadeUp}
                            custom={1}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="rounded-2xl bg-slate-50 border border-slate-100 p-7 h-fit"
                        >
                            <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4">
                                Cakupan Layanan
                            </p>
                            <ul className="flex flex-col gap-3">
                                {svc.highlights.map((h) => (
                                    <li key={h} className="flex items-center gap-3 text-sm text-navy font-medium">
                                        <span className="w-5 h-5 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        {h}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Features ─────────────────────────────────────────── */}
            <section className="section-padding bg-slate-50">
                <div className="w-full max-w-5xl mx-auto">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <span className="text-xs font-bold tracking-widest uppercase text-accent">
                            Keunggulan
                        </span>
                        <h2
                            className="text-2xl md:text-3xl font-bold text-navy mt-2"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Yang Membuat Kami Berbeda
                        </h2>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {svc.features.map((feature, i) => (
                            <motion.div
                                key={feature.title}
                                variants={fadeUp}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="group bg-white rounded-2xl p-7 border border-slate-100 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-400"
                            >
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-2xl mb-4 group-hover:bg-accent/15 transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold text-navy mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Deliverables ─────────────────────────────────────── */}
            <section className="section-padding bg-white">
                <div className="w-full max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <span className="text-xs font-bold tracking-widest uppercase text-accent">
                                Yang Anda Dapatkan
                            </span>
                            <h2
                                className="text-2xl md:text-3xl font-bold text-navy mt-2 mb-4"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                Deliverables Lengkap
                            </h2>
                            <p className="text-slate-500 leading-relaxed">
                                Setiap layanan kami dilengkapi dengan paket komprehensif yang memastikan
                                keberhasilan event Anda dari awal perencanaan hingga evaluasi akhir.
                            </p>
                        </motion.div>

                        <ul className="flex flex-col gap-3">
                            {svc.deliverables.map((item, i) => (
                                <motion.li
                                    key={item}
                                    variants={fadeUp}
                                    custom={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 text-sm font-medium text-navy"
                                >
                                    <span className="w-7 h-7 rounded-full bg-accent text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── Related Portfolio ─────────────────────────────────── */}
            {relatedPortfolio.length > 0 && (
                <section className="section-padding bg-slate-50">
                    <div className="w-full max-w-5xl mx-auto">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10"
                        >
                            <div>
                                <span className="text-xs font-bold tracking-widest uppercase text-accent">
                                    Portfolio Terkait
                                </span>
                                <h2
                                    className="text-2xl md:text-3xl font-bold text-navy mt-2"
                                    style={{ fontFamily: "var(--font-heading)" }}
                                >
                                    Karya Nyata Kami
                                </h2>
                            </div>
                            <Link
                                href="/portfolio"
                                className="text-sm font-semibold text-accent hover:text-accent flex items-center gap-1.5 transition-colors"
                            >
                                Lihat Semua Portfolio
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedPortfolio.map((item, i) => (
                                <motion.div
                                    key={item.id}
                                    variants={fadeUp}
                                    custom={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-xs font-bold tracking-wider uppercase text-accent bg-accent/10 px-3 py-1 rounded-full">
                                            {item.location}
                                        </span>
                                        {/* <span className="text-xs text-slate-400 font-medium">{item.year}</span> */}
                                    </div>
                                    <h3 className="font-bold text-navy mb-1 text-base" style={{ fontFamily: "var(--font-heading)" }}>
                                        {item.title}
                                    </h3>
                                    {/* <p className="text-xs text-accent font-semibold mb-3">{item.client}</p> */}
                                    {/* <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p> */}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ── Prev / Next Navigation ───────────────────────────── */}
            <section className="py-10 bg-white border-t border-slate-100">
                <div className="w-full max-w-5xl mx-auto px-6 lg:px-8 grid grid-cols-2 gap-4">
                    {prevService ? (
                        <Link
                            href={`/services/${prevService.id}`}
                            className="group flex items-center gap-3 p-5 rounded-2xl border border-slate-100 hover:border-accent/20 hover:bg-accent/5 transition-all duration-300"
                        >
                            <svg className="w-5 h-5 text-slate-400 group-hover:text-accent transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>
                            <div>
                                <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Sebelumnya</p>
                                <p className="text-sm font-bold text-navy group-hover:text-accent transition-colors">{prevService.title}</p>
                            </div>
                        </Link>
                    ) : (
                        <div />
                    )}

                    {nextService ? (
                        <Link
                            href={`/services/${nextService.id}`}
                            className="group flex items-center justify-end gap-3 p-5 rounded-2xl border border-slate-100 hover:border-accent/20 hover:bg-accent/5 transition-all duration-300 text-right"
                        >
                            <div>
                                <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Berikutnya</p>
                                <p className="text-sm font-bold text-navy group-hover:text-accent transition-colors">{nextService.title}</p>
                            </div>
                            <svg className="w-5 h-5 text-slate-400 group-hover:text-accent transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    ) : (
                        <div />
                    )}
                </div>
            </section>

            {/* ── CTA ──────────────────────────────────────────────── */}
            <section className="section-padding bg-gradient-to-r from-accent to-accent-light text-white">
                <div className="w-full max-w-4xl mx-auto text-center">
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-5"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Tertarik dengan {svc.title}?
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-lg text-white/80 mb-10 max-w-xl mx-auto"
                    >
                        Konsultasikan kebutuhan event Anda dengan tim kami. Kami siap membantu
                        mewujudkan visi Anda.
                    </motion.p>
                    <motion.div
                        variants={fadeUp}
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-accent font-bold rounded-full hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 hover:-translate-y-1"
                        >
                            Hubungi Kami Sekarang
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
                        >
                            Lihat Layanan Lain
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
