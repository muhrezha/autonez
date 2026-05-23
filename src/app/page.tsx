"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { IdeasSection } from "@/components/home/IdeasSection";
import { dataIdeasOne } from "@/components/home/data";


export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Decorative blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-8 text-center py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-accent/10 text-accent rounded-full">
              Event Management & Production
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
            className="text-lg md:text-xl lg:text-2xl text-black italic mb-3 md:mb-4"
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
            className="max-w-2xl mx-auto text-sm md:text-base text-black lg:text-lg leading-relaxed mb-8 md:mb-10"
          >
            Bringing positive energy to every project, with a heart for client satisfaction.
          </motion.p>
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
              className="w-1.5 h-1.5 bg-accent rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>


      {/* ============ OUR IDEAS ============ */}
      <SectionWrapper className="bg-white">
        <div className="w-full max-w-7xl mx-auto text-center">
          <IdeasSection imgPos="left" data={dataIdeasOne} />
        </div>
      </SectionWrapper>

      <div className="h-17" /> {/* Spacer */}

      {/* ============ CTA ============ */}
      <SectionWrapper className="section-padding text-white bg-[var(--color-accent)]">
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
