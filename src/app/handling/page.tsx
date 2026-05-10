"use client";

import SectionWrapper from "@/components/SectionWrapper";
import HandlingClient from "./HandlingClient";
import sectionsData from "@/data/handling.json";

type Item = { id: string; title: string; quantity: string; subcategory: string };
type Section = { category: string; icon: string; color: string; badge: string; items: Item[] };

const sections = sectionsData as Section[];

export default function HandlingPage() {

    return (
        <SectionWrapper className="section-padding bg-white">
            <div className="w-full max-w-7xl mx-auto min-h-screen">

                {/* Header */}
                <div className="text-center mt-8 mb-10">
                    <span className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest uppercase text-accent bg-accent/8 rounded-full">
                        Equipment Rental
                    </span>
                    <h1
                        className="text-4xl sm:text-5xl font-bold text-navy mb-4"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Production <span className="text-accent">Handling</span>
                    </h1>
                    <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
                        Daftar lengkap peralatan produksi event yang tersedia untuk disewa.
                    </p>
                </div>

                {/* Client Component hanya handle search */}
                <HandlingClient sections={sections} />
            </div>
        </SectionWrapper>
    );
}