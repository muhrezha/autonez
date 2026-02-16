"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PortfolioEvent } from "@/lib/data";

interface Props {
    event: PortfolioEvent;
    prevEvent: PortfolioEvent | null;
    nextEvent: PortfolioEvent | null;
    relatedEvents: PortfolioEvent[];
}

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1 },
    }),
};

const CATEGORY_COLORS: Record<string, string> = {
    "Brand Activation": "from-orange-500 to-amber-400",
    MICE: "from-blue-600 to-indigo-500",
    "Virtual Event": "from-violet-600 to-purple-400",
    Awarding: "from-yellow-500 to-amber-300",
    Sports: "from-green-600 to-emerald-400",
    "Special Event": "from-pink-600 to-rose-400",
    All: "from-slate-600 to-slate-400",
};

export default function PortfolioDetailClient({ event, prevEvent, nextEvent, relatedEvents }: Props) {
    const gradientClass = CATEGORY_COLORS[event.category] ?? "from-primary to-primary-dark";

    return (
        <>
            {/* ── Hero ──────────────────────────────────────────────── */}
            <section className="relative pt-36 pb-24 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
                {/* Big year watermark */}
                <div
                    className="absolute bottom-0 right-8 text-[180px] font-black leading-none opacity-5 text-white select-none"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    {event.year}
                </div>

                <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <motion.nav
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-sm text-slate-400 mb-10"
                    >
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
                        <span>/</span>
                        <span className="text-white">{event.title}</span>
                    </motion.nav>

                    {/* Category + Year badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 mb-5"
                    >
                        <span className={`px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full bg-gradient-to-r ${gradientClass} text-white`}>
                            {event.category}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">{event.year}</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        {event.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="text-primary-light font-semibold text-base mb-3"
                    >
                        {event.client}
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-300 max-w-2xl leading-relaxed"
                    >
                        {event.description}
                    </motion.p>

                    {/* Stats row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap gap-6 mt-10 pt-10 border-t border-white/10"
                    >
                        {event.stats.map((stat) => (
                            <div key={stat.label}>
                                <div className="text-2xl md:text-3xl font-black text-white" style={{ fontFamily: "var(--font-heading)" }}>
                                    {stat.value}
                                </div>
                                <div className="text-xs text-slate-400 font-medium mt-0.5">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── Challenge & Solution ──────────────────────────────── */}
            <section className="section-padding bg-white">
                <div className="w-full max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-10">
                        {/* Challenge */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="rounded-2xl bg-slate-50 border border-slate-100 p-8"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center text-lg">
                                    ⚡
                                </div>
                                <h2 className="text-lg font-bold text-navy" style={{ fontFamily: "var(--font-heading)" }}>
                                    Tantangan
                                </h2>
                            </div>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                {event.challenge}
                            </p>
                        </motion.div>

                        {/* Solution */}
                        <motion.div
                            variants={fadeUp}
                            custom={1}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="rounded-2xl bg-primary/5 border border-primary/10 p-8"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg">
                                    💡
                                </div>
                                <h2 className="text-lg font-bold text-navy" style={{ fontFamily: "var(--font-heading)" }}>
                                    Solusi Kami
                                </h2>
                            </div>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                {event.solution}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Highlights & Scope ───────────────────────────────── */}
            <section className="section-padding bg-slate-50">
                <div className="w-full max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-10">
                        {/* Key Highlights */}
                        <div className="lg:col-span-2">
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="mb-8"
                            >
                                <span className="text-xs font-bold tracking-widest uppercase text-primary">
                                    Hasil & Pencapaian
                                </span>
                                <h2
                                    className="text-2xl md:text-3xl font-bold text-navy mt-2"
                                    style={{ fontFamily: "var(--font-heading)" }}
                                >
                                    Key Highlights
                                </h2>
                            </motion.div>
                            <ul className="flex flex-col gap-4">
                                {event.highlights.map((h, i) => (
                                    <motion.li
                                        key={h}
                                        variants={fadeUp}
                                        custom={i}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        className="flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-100 shadow-sm"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                                            {String(i + 1).padStart(2, "0")}
                                        </div>
                                        <p className="text-sm font-medium text-navy leading-relaxed">{h}</p>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Services Used */}
                        <motion.div
                            variants={fadeUp}
                            custom={1}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <span className="text-xs font-bold tracking-widest uppercase text-primary">
                                Layanan yang Digunakan
                            </span>
                            <h2
                                className="text-2xl font-bold text-navy mt-2 mb-6"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                Scope of Work
                            </h2>
                            <div className="flex flex-col gap-3">
                                {event.scope.map((svc) => (
                                    <div
                                        key={svc}
                                        className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                                        <span className="text-sm font-semibold text-navy">{svc}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6">
                                <Link
                                    href="/services"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                                >
                                    Lihat Detail Layanan
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Related Events ───────────────────────────────────── */}
            {relatedEvents.length > 0 && (
                <section className="section-padding bg-white">
                    <div className="w-full max-w-5xl mx-auto">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10"
                        >
                            <div>
                                <span className="text-xs font-bold tracking-widest uppercase text-primary">
                                    Kategori Serupa
                                </span>
                                <h2
                                    className="text-2xl md:text-3xl font-bold text-navy mt-2"
                                    style={{ fontFamily: "var(--font-heading)" }}
                                >
                                    Event Terkait
                                </h2>
                            </div>
                            <Link
                                href="/portfolio"
                                className="text-sm font-semibold text-primary hover:text-primary-dark flex items-center gap-1.5 transition-colors"
                            >
                                Semua Portfolio
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedEvents.map((item, i) => (
                                <motion.div
                                    key={item.id}
                                    variants={fadeUp}
                                    custom={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <Link
                                        href={`/portfolio/${item.id}`}
                                        className="group block rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
                                    >
                                        {/* Mini visual header */}
                                        <div className="h-32 bg-gradient-to-br from-navy via-navy-light to-primary/80 relative">
                                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-4xl font-black opacity-20 text-white" style={{ fontFamily: "var(--font-heading)" }}>
                                                    {item.year}
                                                </span>
                                            </div>
                                            <div className="absolute top-3 left-3">
                                                <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase bg-white/20 text-white rounded-full backdrop-blur-sm">
                                                    {item.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-5 bg-white">
                                            <p className="text-[10px] font-bold tracking-widest uppercase text-primary mb-1">{item.client}</p>
                                            <h3 className="text-base font-bold text-navy group-hover:text-primary transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                                                {item.title}
                                            </h3>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ── Prev / Next Navigation ───────────────────────────── */}
            <section className="py-10 bg-slate-50 border-t border-slate-100">
                <div className="w-full max-w-5xl mx-auto px-6 lg:px-8 grid grid-cols-2 gap-4">
                    {prevEvent ? (
                        <Link
                            href={`/portfolio/${prevEvent.id}`}
                            className="group flex items-center gap-3 p-5 rounded-2xl border border-slate-200 bg-white hover:border-primary/20 hover:bg-primary/5 transition-all duration-300"
                        >
                            <svg className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>
                            <div>
                                <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Sebelumnya</p>
                                <p className="text-sm font-bold text-navy group-hover:text-primary transition-colors line-clamp-1">{prevEvent.title}</p>
                                <p className="text-[11px] text-primary font-medium">{prevEvent.client}</p>
                            </div>
                        </Link>
                    ) : (
                        <div />
                    )}

                    {nextEvent ? (
                        <Link
                            href={`/portfolio/${nextEvent.id}`}
                            className="group flex items-center justify-end gap-3 p-5 rounded-2xl border border-slate-200 bg-white hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 text-right"
                        >
                            <div>
                                <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Berikutnya</p>
                                <p className="text-sm font-bold text-navy group-hover:text-primary transition-colors line-clamp-1">{nextEvent.title}</p>
                                <p className="text-[11px] text-primary font-medium">{nextEvent.client}</p>
                            </div>
                            <svg className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    ) : (
                        <div />
                    )}
                </div>
            </section>

            {/* ── CTA ──────────────────────────────────────────────── */}
            <section className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white">
                <div className="w-full max-w-4xl mx-auto text-center">
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-5"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Ingin Membuat Event Serupa?
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-lg text-white/80 mb-10 max-w-xl mx-auto"
                    >
                        Ceritakan visi event Anda kepada kami. Tim kreatif kami siap mewujudkannya
                        menjadi pengalaman yang tak terlupakan.
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
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 hover:-translate-y-1"
                        >
                            Konsultasi Gratis
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <Link
                            href="/portfolio"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
                        >
                            Kembali ke Portfolio
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
