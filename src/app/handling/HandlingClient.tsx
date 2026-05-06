"use client";

import { useState, useMemo } from "react";

type Item = { id: string; title: string; quantity: string; subcategory: string };
type Section = { category: string; icon: string; color: string; badge: string; items: Item[] };

export default function HandlingClient({ sections: initialSections }: { sections: Section[] }) {
    const [search, setSearch] = useState("");

    const sections = useMemo(() => {
        if (!search.trim()) return initialSections;
        const q = search.trim().toLowerCase();
        return initialSections
            .map((s) => ({
                ...s,
                items: s.items.filter(
                    (i) =>
                        i.title.toLowerCase().includes(q) ||
                        i.subcategory.toLowerCase().includes(q)
                ),
            }))
            .filter((s) => s.items.length > 0);
    }, [search, initialSections]);

    const totalShown = sections.reduce((acc, s) => acc + s.items.length, 0);

    return (
        <>
            {/* Search */}
            <div className="relative max-w-lg mx-auto mb-10">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                    </svg>
                </div>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Cari nama peralatan..."
                    className="w-full pl-12 pr-10 py-3.5 rounded-2xl border border-slate-200 bg-slate-50 text-sm text-navy placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                />
                {search && (
                    <button
                        onClick={() => setSearch("")}
                        className="absolute inset-y-0 right-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                )}
            </div>

            {/* Sections */}
            {sections.length === 0 ? (
                <div className="text-center py-20">
                    <p className="text-5xl mb-4">🔍</p>
                    <p className="text-slate-400 text-lg font-medium">Peralatan tidak ditemukan.</p>
                    <p className="text-slate-300 text-sm mt-1">Coba kata kunci lain.</p>
                </div>
            ) : (
                <div className="space-y-12">
                    {sections.map((section) => (
                        <div key={section.category}>
                            <div className="flex items-center gap-3 mb-5">
                                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center text-xl flex-shrink-0`}>
                                    {section.icon}
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-navy" style={{ fontFamily: "var(--font-heading)" }}>
                                        {section.category}
                                    </h2>
                                    <p className="text-xs text-slate-400">{section.items.length} item</p>
                                </div>
                                <div className="flex-1 h-px bg-slate-100 ml-2" />
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                                {section.items.map((item) => (
                                    <div
                                        key={item.id}
                                        className="group rounded-2xl bg-white border border-slate-100 overflow-hidden hover:shadow-lg hover:border-slate-200 hover:-translate-y-0.5 transition-all duration-200"
                                    >
                                        <div className={`h-24 bg-gradient-to-br ${section.color} flex items-center justify-center text-3xl`}>
                                            {section.icon}
                                        </div>
                                        <div className="p-3">
                                            <span className={`inline-block text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full mb-1.5 ${section.badge}`}>
                                                {item.subcategory}
                                            </span>
                                            <h3 className="text-xs font-semibold text-navy leading-snug mb-1.5 line-clamp-2 group-hover:text-primary transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                                                {item.title}
                                            </h3>
                                            <p className="text-[11px] text-slate-400 font-medium">{item.quantity}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    {search && (
                        <p className="text-center text-sm text-slate-400 pt-2">
                            Ditemukan <span className="font-semibold text-navy">{totalShown}</span> peralatan untuk &ldquo;{search}&rdquo;
                        </p>
                    )}
                </div>
            )}
        </>
    );
}