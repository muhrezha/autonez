import Image from "next/image";
import Link from "next/link";
import { infoPosts } from "@/lib/data";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata = {
    title: "Info — AUTONEZ Communications",
    description: "Berita, insight, dan behind the scene terbaru dari AUTONEZ Communications.",
};

export default function InfoPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-36 pb-20 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
                <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
                <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
                    <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase bg-white/10 rounded-full">
                        Portal Berita
                    </span>
                    <h1
                        className="text-4xl md:text-6xl font-black mb-6"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Info <span className="gradient-text">Terkini</span>
                    </h1>
                    <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
                        Berita terbaru, insight industri, dan behind the scene dari setiap event yang kami wujudkan.
                    </p>
                </div>
            </section>

            {/* News Grid */}
            <SectionWrapper className="section-padding bg-white">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {infoPosts.map((post) => (
                            <Link
                                key={post.id}
                                href={`/info/${post.id}`}
                                className="group flex flex-col rounded-2xl border border-slate-100 overflow-hidden bg-white hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-500"
                            >
                                {/* Thumbnail */}
                                <div className="relative h-56 overflow-hidden bg-slate-100">
                                    <Image
                                        src={post.images[0]}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                    />
                                    {/* Category badge */}
                                    <span className="absolute top-4 left-4 px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-accent text-white rounded-full">
                                        {post.category}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-1 p-6">
                                    {/* Meta */}
                                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                                        <span className="flex items-center gap-1">
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            {post.date}
                                        </span>
                                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                                        <span className="flex items-center gap-1">
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                            {post.author}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h2
                                        className="text-lg font-bold text-navy mb-3 group-hover:text-accent transition-colors leading-snug"
                                        style={{ fontFamily: "var(--font-heading)" }}
                                    >
                                        {post.title}
                                    </h2>

                                    {/* Description */}
                                    <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-5 line-clamp-3">
                                        {post.description}
                                    </p>

                                    {/* CTA */}
                                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent group-hover:gap-2.5 transition-all duration-300">
                                        Baca Selengkapnya
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
}
