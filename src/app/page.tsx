"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { services, clients, processSteps } from "@/lib/data";
import { IdeasSection } from "@/components/home/IdeasSection";
import { dataIdeasOne } from "@/components/home/data";


const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Decorative blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-8 text-center py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary rounded-full">
              Event Organizer & Creative Agency
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
            className="text-lg md:text-xl lg:text-2xl text-slate-400 italic mb-3 md:mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            &ldquo;Always There For You&rdquo;
          </motion.p>

          {/* Old */}
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto text-slate-500 text-sm md:text-base lg:text-lg leading-relaxed mb-8 md:mb-10"
          >
            A circle of positive energy with one goal:{" "}
            <span className="text-navy font-semibold">client satisfaction</span>.
            Kami menghadirkan pengalaman event yang tak terlupakan sejak 2015.
          </motion.p> */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto text-slate-500 text-sm md:text-base lg:text-lg leading-relaxed mb-8 md:mb-10"
          >
            We are a circle of positive energy with one
            goal client satisfaction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/portfolio"
              className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              See Our Work
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border-2 border-slate-200 text-navy font-semibold rounded-full hover:border-primary hover:text-primary transition-all duration-300"
            >
              Learn More
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
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
              className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* ============ QUICK ABOUT / TENTANG KAMI============ */}
      {/* <SectionWrapper className="section-padding bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase bg-accent/10 text-accent rounded-full">
            Tentang Kami
          </span>
          <h2
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-navy mb-4 md:mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Lebih dari Sekadar Event Organizer
          </h2>
          <p className="max-w-3xl mx-auto text-slate-500 text-sm md:text-base lg:text-lg leading-relaxed mb-10 md:mb-12">
            Berawal dari agensi digital dengan keahlian dalam desain, web, dan
            multimedia, Autonez Communications telah bertransformasi menjadi
            event organizer dan creative agency yang menggabungkan kekuatan
            digital dengan manajemen event berskala besar.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {[
              { num: "10+", label: "Tahun Pengalaman", desc: "Sejak 2015 melayani klien terbaik Indonesia" },
              { num: "200+", label: "Event Terselenggara", desc: "Brand Activation, MICE, hingga Virtual Events" },
              { num: "50+", label: "Klien Percaya", desc: "BUMN dan perusahaan swasta terkemuka" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500"
              >
                <div className="text-4xl md:text-5xl font-black gradient-text mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  {stat.num}
                </div>
                <div className="text-base font-semibold text-navy mb-1">{stat.label}</div>
                <div className="text-sm text-slate-400">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper> */}

      {/* ============ OUR IDEAS ============ */}
      <SectionWrapper className="bg-white">
        <div className="w-full max-w-7xl mx-auto text-center">
          <IdeasSection imgPos="left" data={dataIdeasOne} />
        </div>
      </SectionWrapper>

      {/* ============ CLIENT EXPERIENCES ============ */}
      <SectionWrapper className="bg-white">
        <div className="w-full max-w-7xl mx-auto px-12">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-navy mb-3 md:mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Our Clients
            </h2>
            <p className="max-w-2xl mx-auto text-slate-500 text-sm md:text-base">
              Dari BUMN hingga perusahaan swasta terkemuka, kami bangga menjadi mitra terpercaya dalam menghadirkan event berkualitas.
            </p>
          </div>
          {/* BUMN */}
          <div className="mb-12">
            <h3 className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-6 text-center">
              BUMN & Institusi
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4"
            >
              {clients.filter((c) => c.category === "BUMN").map((c) => (
                <motion.div key={c.name} variants={itemVariants}
                  className="relative flex items-center justify-center p-3 h-20 rounded-xl bg-white border border-slate-100 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
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
          {/* Swasta */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-6 text-center">
              Perusahaan Swasta
            </h3>
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

      <div className="h-17" /> {/* Spacer */}

      {/* ============ CTA ============ */}
      <SectionWrapper className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="w-full max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Siap Mewujudkan Event Impian Anda?
          </h2>
          <p className="text-base md:text-lg text-white/80 mb-8 md:mb-10 max-w-2xl mx-auto">
            Hubungi kami sekarang dan mari wujudkan circle of positive energy untuk event Anda berikutnya.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 hover:-translate-y-1">
            Hubungi Kami
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
