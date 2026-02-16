"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { InfoPost } from "@/lib/data";

interface Props {
    post: InfoPost;
    prevPost: InfoPost | null;
    nextPost: InfoPost | null;
}

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
    }),
};

export default function InfoDetailClient({ post, prevPost, nextPost }: Props) {
    const [activeIdx, setActiveIdx] = useState(0);
    const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

    const goTo = (idx: number) => {
        setDirection(idx > activeIdx ? 1 : -1);
        setActiveIdx(idx);
    };

    const goPrev = () => {
        if (activeIdx > 0) goTo(activeIdx - 1);
    };

    const goNext = () => {
        if (activeIdx < post.images.length - 1) goTo(activeIdx + 1);
    };

    const slideVariants = {
        enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
        center: { x: 0, opacity: 1, transition: { duration: 0.45, ease: "easeInOut" } },
        exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0, transition: { duration: 0.35 } }),
    };

    // Render content paragraphs
    const paragraphs = post.content.split("\n\n").filter(Boolean);

    return (
        <>
            {/* Hero */}
            <section className="relative pt-36 pb-16 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-8 text-white">
                    {/* Breadcrumb */}
                    <motion.nav
                        custom={0}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="flex items-center gap-2 text-sm text-slate-400 mb-6"
                    >
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/info" className="hover:text-white transition-colors">Info</Link>
                        <span>/</span>
                        <span className="text-white truncate max-w-xs">{post.title}</span>
                    </motion.nav>

                    {/* Category */}
                    <motion.div custom={1} initial="hidden" animate="visible" variants={fadeUp}>
                        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase bg-primary/80 rounded-full">
                            {post.category}
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        custom={2}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="text-3xl md:text-5xl font-black mb-6 leading-tight"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        {post.title}
                    </motion.h1>

                    {/* Meta */}
                    <motion.div
                        custom={3}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="flex flex-wrap items-center gap-4 text-sm text-slate-300"
                    >
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {post.date}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-slate-500" />
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            {post.author}
                        </span>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="bg-white py-16">
                <div className="w-full max-w-4xl mx-auto px-6 lg:px-8">
                    {/* Image Slider */}
                    <motion.div
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="mb-12"
                    >
                        <div className="relative rounded-2xl overflow-hidden bg-slate-100 aspect-video shadow-xl shadow-slate-200/60">
                            {/* Slides */}
                            <AnimatePresence custom={direction} mode="popLayout">
                                <motion.div
                                    key={activeIdx}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={post.images[activeIdx]}
                                        alt={`${post.title} — foto ${activeIdx + 1}`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 896px"
                                        priority={activeIdx === 0}
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Prev / Next buttons */}
                            {post.images.length > 1 && (
                                <>
                                    <button
                                        onClick={goPrev}
                                        disabled={activeIdx === 0}
                                        aria-label="Foto sebelumnya"
                                        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm hover:bg-black/60 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={goNext}
                                        disabled={activeIdx === post.images.length - 1}
                                        aria-label="Foto berikutnya"
                                        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm hover:bg-black/60 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </>
                            )}

                            {/* Counter badge */}
                            <span className="absolute bottom-3 right-3 z-10 px-3 py-1 text-xs font-semibold bg-black/50 text-white rounded-full backdrop-blur-sm">
                                {activeIdx + 1} / {post.images.length}
                            </span>
                        </div>

                        {/* Thumbnail dots */}
                        {post.images.length > 1 && (
                            <div className="flex items-center justify-center gap-3 mt-4">
                                {post.images.map((img, i) => (
                                    <button
                                        key={i}
                                        onClick={() => goTo(i)}
                                        aria-label={`Lihat foto ${i + 1}`}
                                        className="relative rounded-lg overflow-hidden border-2 transition-all duration-300 focus:outline-none"
                                        style={{
                                            width: 56,
                                            height: 40,
                                            borderColor: i === activeIdx ? "var(--color-primary)" : "transparent",
                                            opacity: i === activeIdx ? 1 : 0.55,
                                        }}
                                    >
                                        <Image
                                            src={img}
                                            alt={`Thumbnail ${i + 1}`}
                                            fill
                                            className="object-cover"
                                            sizes="56px"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </motion.div>

                    {/* Description intro */}
                    <motion.p
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-lg text-slate-600 leading-relaxed font-medium border-l-4 border-primary pl-5 mb-10"
                    >
                        {post.description}
                    </motion.p>

                    {/* Article body */}
                    <div className="space-y-6">
                        {paragraphs.map((para, i) => (
                            <motion.p
                                key={i}
                                custom={i + 2}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="text-slate-600 leading-relaxed text-base"
                            >
                                {para}
                            </motion.p>
                        ))}
                    </div>
                </div>
            </section>

            {/* Prev / Next Navigation */}
            {(prevPost || nextPost) && (
                <section className="bg-slate-50 border-t border-slate-100 py-12">
                    <div className="w-full max-w-4xl mx-auto px-6 lg:px-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {prevPost ? (
                                <Link
                                    href={`/info/${prevPost.id}`}
                                    className="group flex items-center gap-4 p-5 rounded-2xl border border-slate-200 bg-white hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                                >
                                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-slate-100 group-hover:bg-primary/10 transition-colors">
                                        <svg className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-1">Sebelumnya</div>
                                        <div className="text-sm font-semibold text-navy group-hover:text-primary transition-colors truncate">
                                            {prevPost.title}
                                        </div>
                                    </div>
                                </Link>
                            ) : (
                                <div />
                            )}
                            {nextPost ? (
                                <Link
                                    href={`/info/${nextPost.id}`}
                                    className="group flex items-center gap-4 p-5 rounded-2xl border border-slate-200 bg-white hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 sm:flex-row-reverse sm:text-right"
                                >
                                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-slate-100 group-hover:bg-primary/10 transition-colors">
                                        <svg className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-1">Berikutnya</div>
                                        <div className="text-sm font-semibold text-navy group-hover:text-primary transition-colors truncate">
                                            {nextPost.title}
                                        </div>
                                    </div>
                                </Link>
                            ) : (
                                <div />
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="bg-gradient-to-r from-navy to-primary py-16">
                <div className="w-full max-w-3xl mx-auto px-6 lg:px-8 text-center text-white">
                    <h2
                        className="text-2xl md:text-3xl font-black mb-4"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Ingin bekerja sama dengan kami?
                    </h2>
                    <p className="text-slate-300 mb-8">
                        Hubungi tim AUTONEZ dan wujudkan event impian Anda bersama kami.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/contact"
                            className="px-6 py-3 bg-white text-navy font-bold rounded-full hover:bg-slate-100 transition-colors text-sm"
                        >
                            Hubungi Kami
                        </Link>
                        <Link
                            href="/info"
                            className="px-6 py-3 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors text-sm"
                        >
                            ← Kembali ke Info
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
