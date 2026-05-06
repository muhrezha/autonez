"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { contactInfo } from "@/lib/data";

const channels = [
    {
        id: "whatsapp",
        label: "WhatsApp",
        value: contactInfo.whatsapp,
        description: "Respons cepat di hari kerja",
        href: `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`,
        external: true,
        colorFrom: "#25D366",
        colorTo: "#128C7E",
        bgClass: "from-green-50 to-emerald-50",
        borderClass: "border-green-200",
        labelClass: "text-green-700",
        icon: (
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
        ),
    },
    {
        id: "email",
        label: "Email",
        value: contactInfo.email,
        description: "Untuk keperluan resmi & dokumen",
        href: `mailto:${contactInfo.email}`,
        external: false,
        colorFrom: "#1E40AF",
        colorTo: "#1D4ED8",
        bgClass: "from-blue-50 to-indigo-50",
        borderClass: "border-blue-200",
        labelClass: "text-blue-700",
        icon: (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        id: "instagram",
        label: "Instagram",
        value: contactInfo.instagram,
        description: "Ikuti portofolio & update terbaru",
        href: "https://instagram.com/autonez.communications",
        external: true,
        colorFrom: "#C026D3",
        colorTo: "#DB2777",
        bgClass: "from-purple-50 to-pink-50",
        borderClass: "border-purple-200",
        labelClass: "text-purple-700",
        icon: (
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
        ),
    },
    {
        id: "address",
        label: "Lokasi",
        value: contactInfo.address,
        description: "Kantor pusat operasional",
        href: null,
        external: false,
        colorFrom: "#1E3A5F",
        colorTo: "#1E40AF",
        bgClass: "from-slate-50 to-blue-50",
        borderClass: "border-slate-200",
        labelClass: "text-slate-600",
        icon: (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
];

export default function ContactPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-36 pb-24 bg-white overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.025)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 w-full max-w-3xl mx-auto px-6 lg:px-8 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-accent/8 border border-accent/15 text-accent rounded-full"
                    >
                        LET&apos;S TALK
                    </motion.span>
                    {/* <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black mb-6 leading-tight text-navy"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        Mari Berkolaborasi <br className="hidden md:block" />
                        <span className="gradient-text">Bersama Kami</span>
                    </motion.h1> */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-base md:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed"
                    >
                        Have an exciting idea or need help with your next event? We’re here to support you every step of the way. Feel free to reach out through your preferred channel..
                    </motion.p>
                </div>
            </section>

            {/* Contact Info */}
            <SectionWrapper className="section-padding bg-white">
                <div className="w-full max-w-5xl mx-auto">

                    {/* Section Header */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <span className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest uppercase text-accent bg-accent/8 rounded-full">
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
                    </motion.div> */}

                    {/* Channel Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {channels.map((ch, i) => {
                            const inner = (
                                <motion.div
                                    key={ch.id}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    className={`group relative flex items-start gap-5 p-6 rounded-2xl bg-gradient-to-br ${ch.bgClass} border ${ch.borderClass} ${ch.href ? "hover:shadow-xl hover:-translate-y-1 cursor-pointer" : ""} transition-all duration-300`}
                                >
                                    {/* Icon */}
                                    <div
                                        className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300"
                                        style={{ background: `linear-gradient(135deg, ${ch.colorFrom}, ${ch.colorTo})` }}
                                    >
                                        {ch.icon}
                                    </div>

                                    {/* Text */}
                                    <div className="min-w-0 flex-1">
                                        <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${ch.labelClass}`}>
                                            {ch.label}
                                        </div>
                                        <div className="text-base font-bold text-navy truncate mb-1">
                                            {ch.value}
                                        </div>
                                        {/* <div className="text-xs text-slate-400 leading-relaxed">
                                            {ch.description}
                                        </div> */}
                                    </div>

                                    {/* Arrow for clickable cards */}
                                    {ch.href && (
                                        <div className="flex-shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    )}
                                </motion.div>
                            );

                            return ch.href ? (
                                <a
                                    key={ch.id}
                                    href={ch.href}
                                    target={ch.external ? "_blank" : undefined}
                                    rel={ch.external ? "noopener noreferrer" : undefined}
                                >
                                    {inner}
                                </a>
                            ) : (
                                <div key={ch.id}>{inner}</div>
                            );
                        })}
                    </div>

                    {/* Divider */}
                    <div className="my-0 border-t border-slate-100" />

                    {/* Business Hours */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-br from-navy to-navy-light rounded-2xl px-8 py-8 text-white"
                    >
                        <div className="flex-shrink-0 text-center md:text-left">
                            <div className="w-14 h-14 mx-auto md:mx-0 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-1">Jam Operasional</div>
                            <div className="text-xl font-black" style={{ fontFamily: 'var(--font-heading)' }}>Senin – Jumat</div>
                            <div className="text-accent font-bold text-lg">08.00 – 17.00 WIB</div>
                        </div>

                        <div className="hidden md:block w-px h-20 bg-white/15" />

                        <div className="flex-1 text-center md:text-left">
                            <p className="text-slate-300 text-sm leading-relaxed mb-5">
                                Di luar jam kerja? Anda tetap bisa menghubungi kami melalui WhatsApp. Pesan akan dibalas pada hari kerja berikutnya.
                            </p>
                            <a
                                href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2.5 px-6 py-3 bg-white text-navy font-bold rounded-xl text-sm hover:bg-accent hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Mulai Percakapan
                            </a>
                        </div>
                    </motion.div> */}
                </div>
            </SectionWrapper>

            {/* Map */}
            <section className="h-72 bg-slate-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-navy/5 to-accent/5 flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-navy/10 flex items-center justify-center">
                            <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div className="text-lg font-black text-navy" style={{ fontFamily: 'var(--font-heading)' }}>Jakarta, Indonesia</div>
                        <div className="text-sm text-slate-400 mt-1 tracking-wide">Autonez Communications — Kantor Pusat</div>
                    </div>
                </div>
            </section>
        </>
    );
}
