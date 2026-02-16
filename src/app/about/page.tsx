"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { processSteps } from "@/lib/data";

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-36 pb-20 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
                <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
                <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase bg-white/10 rounded-full"
                    >
                        Tentang Kami
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black mb-6"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        Circle of <span className="gradient-text">Positive Energy</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto"
                    >
                        Lebih dari satu dekade menghadirkan pengalaman event yang tak terlupakan dengan semangat energi positif.
                    </motion.p>
                </div>
            </section>

            {/* Story */}
            <SectionWrapper className="section-padding bg-white">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary rounded-full">
                                Sejarah Kami
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                                Dari Digital Agency ke Event Management
                            </h2>
                            <div className="space-y-4 text-slate-500 leading-relaxed">
                                <p>
                                    Autonez Communications didirikan pada tahun 2015 sebagai agensi digital yang berfokus pada desain grafis, pengembangan web, dan produksi multimedia. Dengan fondasi yang kuat di dunia digital, kami kemudian bertransformasi menjadi event organizer dan creative agency yang lengkap.
                                </p>
                                <p>
                                    Keunggulan kami terletak pada integrasi keahlian digital dengan manajemen event — menciptakan pengalaman yang tidak hanya berkesan secara langsung, tetapi juga memiliki dampak digital yang kuat.
                                </p>
                                <p>
                                    Hingga saat ini, kami telah dipercaya oleh berbagai BUMN dan perusahaan swasta terkemuka di Indonesia untuk menyelenggarakan event berskala nasional hingga internasional.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 p-8 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-7xl md:text-8xl font-black gradient-text mb-2" style={{ fontFamily: 'var(--font-heading)' }}>2015</div>
                                    <div className="text-lg font-semibold text-navy">Established</div>
                                    <div className="text-sm text-slate-400 mt-2">Jakarta, Indonesia</div>
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-2xl -z-10" />
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Vision & Philosophy */}
            <SectionWrapper className="section-padding bg-slate-50">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase bg-accent/10 text-accent rounded-full">
                            Filosofi Bisnis
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                            Our Ideas — Visi & Misi
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-xl transition-all duration-500"
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-2xl mb-6">🎯</div>
                            <h3 className="text-xl font-bold text-navy mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Visi</h3>
                            <p className="text-slate-500 leading-relaxed">
                                Menjadi event organizer dan creative agency terdepan di Indonesia yang mengintegrasikan kekuatan digital dan kreativitas untuk menghadirkan pengalaman event yang tak terlupakan dan berdampak positif bagi setiap klien.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-xl transition-all duration-500"
                        >
                            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-2xl mb-6">🌟</div>
                            <h3 className="text-xl font-bold text-navy mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Misi</h3>
                            <ul className="space-y-3 text-slate-500">
                                <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✦</span><span>Menghadirkan circle of positive energy di setiap project</span></li>
                                <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✦</span><span>Mengutamakan kepuasan klien sebagai tujuan utama</span></li>
                                <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✦</span><span>Mengintegrasikan keahlian digital dengan event management</span></li>
                                <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✦</span><span>Berinovasi terus-menerus dalam industri kreatif</span></li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Digital Advantage */}
            <SectionWrapper className="section-padding bg-white">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary rounded-full">
                            Keunggulan Kami
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                            DNA Digital dalam Setiap Event
                        </h2>
                        <p className="max-w-2xl mx-auto text-slate-500">
                            Latar belakang kami di dunia digital memberikan keunggulan unik yang membedakan Autonez dari event organizer lainnya.
                        </p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        {[
                            { icon: "🎨", title: "Design Excellence", desc: "Tim desain berpengalaman yang menghadirkan visual branding event berkelas dunia." },
                            { icon: "🌐", title: "Digital Integration", desc: "Integrasi seamless antara event fisik dan digital untuk reach yang lebih luas." },
                            { icon: "🎥", title: "Multimedia Production", desc: "Produksi konten multimedia berkualitas tinggi untuk mendukung setiap event." },
                        ].map((item, i) => (
                            <motion.div key={i} variants={itemVariants}
                                className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-primary/20 hover:shadow-xl transition-all duration-500 text-center"
                            >
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-lg font-bold text-navy mb-3" style={{ fontFamily: 'var(--font-heading)' }}>{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </SectionWrapper>

            {/* Process Detail */}
            <SectionWrapper className="section-padding bg-navy text-white">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase bg-accent/20 text-accent rounded-full">
                            Proses Kerja Kami
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                            Dari Ide hingga Celebration
                        </h2>
                        <p className="max-w-2xl mx-auto text-slate-400">
                            Setiap event melalui proses terstruktur yang memastikan kualitas terbaik — dan kami percaya, hasil akhirnya bukan sekadar evaluasi, melainkan perayaan bersama.
                        </p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {processSteps.map((step) => (
                            <motion.div key={step.step} variants={itemVariants}
                                className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/30 transition-all duration-500"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl">{step.icon}</div>
                                    <div>
                                        <div className="text-[10px] font-semibold tracking-widest uppercase text-slate-500">Step {step.step}</div>
                                        <div className="text-lg font-bold" style={{ fontFamily: 'var(--font-heading)' }}>{step.title}</div>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </SectionWrapper>
        </>
    );
}
