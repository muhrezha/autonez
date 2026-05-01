"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { portfolioEvents as initialData, portfolioCategories } from "@/lib/data";
import type { PortfolioEvent, PortfolioCategory } from "@/lib/data";

type Row = PortfolioEvent & { active: boolean };

const seed: Row[] = initialData.map((p) => ({ ...p, active: true }));

const PER_PAGE = 5;

// Get unique years from data for the year picker
const allYears = Array.from(new Set(initialData.map((e) => e.year))).sort((a, b) => b - a);

export default function DashboardPortofolioPage() {
    const [rows, setRows] = useState<Row[]>(seed);
    const [search, setSearch] = useState("");
    const [filterCategory, setFilterCategory] = useState<PortfolioCategory | "All">("All");
    const [categorySearch, setCategorySearch] = useState("");
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [filterYear, setFilterYear] = useState<number | null>(null);
    const [yearOpen, setYearOpen] = useState(false);
    const [page, setPage] = useState(1);

    const [editId, setEditId] = useState<string | null>(null);
    const [editTitle, setEditTitle] = useState("");
    const [editDesc, setEditDesc] = useState("");
    const [editClient, setEditClient] = useState("");
    const [showCreate, setShowCreate] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [newClient, setNewClient] = useState("");
    const [newDesc, setNewDesc] = useState("");
    const [newYear, setNewYear] = useState<string>(String(new Date().getFullYear()));
    const [newCategory, setNewCategory] = useState<PortfolioCategory>("MICE");
    const [newCatOpen, setNewCatOpen] = useState(false);
    const [newCatSearch, setNewCatSearch] = useState("");
    const [createErrors, setCreateErrors] = useState<Record<string, string>>({});
    const [, setCreateSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const categoryRef = useRef<HTMLDivElement>(null);
    const yearRef = useRef<HTMLDivElement>(null);
    const loadingTimerRef = useRef<NodeJS.Timeout | null>(null);

    // Close dropdowns on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (categoryRef.current && !categoryRef.current.contains(e.target as Node)) setCategoryOpen(false);
            if (yearRef.current && !yearRef.current.contains(e.target as Node)) setYearOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    // Simulate API loading delay
    const simulateLoading = () => {
        setIsLoading(true);
        if (loadingTimerRef.current) clearTimeout(loadingTimerRef.current);
        loadingTimerRef.current = setTimeout(() => setIsLoading(false), 1000);
    };

    // Cleanup timer on unmount
    useEffect(() => {
        return () => {
            if (loadingTimerRef.current) clearTimeout(loadingTimerRef.current);
        };
    }, []);

    const filteredCategories = portfolioCategories.filter(
        (c) => c.toLowerCase().includes(categorySearch.toLowerCase())
    );

    const filtered = useMemo(() => {
        return rows.filter((r) => {
            const matchSearch =
                r.title.toLowerCase().includes(search.toLowerCase()) ||
                r.client.toLowerCase().includes(search.toLowerCase());
            const matchCategory = filterCategory === "All" || r.category === filterCategory;
            const matchYear = filterYear === null || r.year === filterYear;
            return matchSearch && matchCategory && matchYear;
        });
    }, [rows, search, filterCategory, filterYear]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
    const safePage = Math.min(page, totalPages);
    const paginated = filtered.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);


    const toggleActive = (id: string) =>
        setRows((prev) => prev.map((r) => (r.id === id ? { ...r, active: !r.active } : r)));

    const deleteRow = (id: string) =>
        setRows((prev) => prev.filter((r) => r.id !== id));

    const openEdit = (row: Row) => {
        setEditId(row.id);
        setEditTitle(row.title);
        setEditDesc(row.description);
        setEditClient(row.client);
    };

    const saveEdit = () => {
        setRows((prev) =>
            prev.map((r) => (r.id === editId ? { ...r, title: editTitle, description: editDesc, client: editClient } : r))
        );
        setEditId(null);
    };

    const validateCreate = () => {
        const errors: Record<string, string> = {};
        if (!newTitle.trim()) errors.title = "Judul event wajib diisi";
        if (!newClient.trim()) errors.client = "Nama klien wajib diisi";
        const parsedYear = parseInt(newYear);
        if (!newYear.trim()) errors.year = "Tahun wajib diisi";
        else if (isNaN(parsedYear) || parsedYear < 2000 || parsedYear > 3000) errors.year = "Tahun harus antara 2000–3000";
        if (!newDesc.trim()) errors.desc = "Deskripsi wajib diisi";
        return errors;
    };

    const clearCreateError = (field: string) => {
        if (createErrors[field]) {
            setCreateErrors((prev) => { const next = { ...prev }; delete next[field]; return next; });
        }
    };

    const createRow = () => {
        setCreateSubmitted(true);
        const errors = validateCreate();
        setCreateErrors(errors);
        if (Object.keys(errors).length > 0) return;

        const id = `porto-${Date.now()}`;
        setRows((prev) => [
            {
                id,
                title: newTitle,
                client: newClient,
                category: newCategory,
                year: parseInt(newYear),
                date: "",
                image: "",
                description: newDesc,
                challenge: "",
                solution: "",
                highlights: [],
                scope: [],
                stats: [],
                active: true,
            },
            ...prev,
        ]);
        setNewTitle("");
        setNewClient("");
        setNewDesc("");
        setNewYear(String(new Date().getFullYear()));
        setNewCategory("MICE");
        setNewCatOpen(false);
        setNewCatSearch("");
        setCreateErrors({});
        setCreateSubmitted(false);
        setShowCreate(false);
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-black text-navy" style={{ fontFamily: "var(--font-heading)" }}>Kelola Portofolio</h1>
                    <p className="text-sm text-slate-500">Manage event dan proyek portofolio.</p>
                </div>
                <button
                    onClick={() => setShowCreate(true)}
                    className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                    Tambah
                </button>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-end gap-3 mb-4">
                {/* Search */}
                <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Pencarian</label>
                    <input
                        type="text"
                        placeholder="Cari judul atau klien..."
                        value={search}
                        onChange={(e) => { setSearch(e.target.value); setPage(1); simulateLoading(); }}
                        className="w-56 px-4 py-2 text-sm border border-slate-200 rounded-lg bg-white hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    />
                </div>

                {/* Category dropdown with search */}
                <div ref={categoryRef} className="relative">
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Kategori</label>
                    <button
                        onClick={() => { setCategoryOpen(!categoryOpen); setYearOpen(false); }}
                        className="flex items-center gap-2 w-48 px-4 py-2 text-sm border border-slate-200 rounded-lg bg-white hover:border-slate-300 transition-colors text-left"
                    >
                        <span className={`flex-1 truncate ${filterCategory === "All" ? "text-slate-400" : "text-navy"}`}>{filterCategory === "All" ? "Semua Kategori" : filterCategory}</span>
                        <svg className={`w-4 h-4 text-slate-400 transition-transform ${categoryOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {categoryOpen && (
                        <div className="absolute z-20 mt-1 w-56 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden">
                            <div className="p-2 border-b border-slate-100">
                                <input
                                    type="text"
                                    placeholder="Cari kategori..."
                                    value={categorySearch}
                                    onChange={(e) => setCategorySearch(e.target.value)}
                                    className="w-full px-3 py-1.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30"
                                    autoFocus
                                />
                            </div>
                            <div className="max-h-48 overflow-y-auto py-1">
                                {filteredCategories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => { setFilterCategory(cat); setCategoryOpen(false); setCategorySearch(""); setPage(1); simulateLoading(); }}
                                        className={`w-full text-left px-4 py-2 text-sm transition-colors ${filterCategory === cat ? "bg-primary/10 text-primary font-medium" : "text-slate-600 hover:bg-slate-50"}`}
                                    >
                                        {cat === "All" ? "Semua Kategori" : cat}
                                    </button>
                                ))}
                                {filteredCategories.length === 0 && (
                                    <div className="px-4 py-3 text-sm text-slate-400 text-center">Tidak ditemukan</div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Year picker */}
                <div ref={yearRef} className="relative">
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Tahun</label>
                    <button
                        onClick={() => { setYearOpen(!yearOpen); setCategoryOpen(false); }}
                        className="flex items-center gap-2 w-36 px-4 py-2 text-sm border border-slate-200 rounded-lg bg-white hover:border-slate-300 transition-colors text-left"
                    >
                        <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className={`flex-1 ${filterYear === null ? "text-slate-400" : "text-navy"}`}>{filterYear ?? "Semua"}</span>
                        <svg className={`w-4 h-4 text-slate-400 transition-transform ${yearOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {yearOpen && (
                        <div className="absolute z-20 mt-1 w-36 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden">
                            <div className="max-h-48 overflow-y-auto py-1">
                                <button
                                    onClick={() => { setFilterYear(null); setYearOpen(false); setPage(1); simulateLoading(); }}
                                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${filterYear === null ? "bg-primary/10 text-primary font-medium" : "text-slate-600 hover:bg-slate-50"}`}
                                >
                                    Semua
                                </button>
                                {allYears.map((yr) => (
                                    <button
                                        key={yr}
                                        onClick={() => { setFilterYear(yr); setYearOpen(false); setPage(1); simulateLoading(); }}
                                        className={`w-full text-left px-4 py-2 text-sm transition-colors ${filterYear === yr ? "bg-primary/10 text-primary font-medium" : "text-slate-600 hover:bg-slate-50"}`}
                                    >
                                        {yr}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Reset filters */}
                {(filterCategory !== "All" || filterYear !== null || search) && (
                    <button
                        onClick={() => { setFilterCategory("All"); setFilterYear(null); setSearch(""); setPage(1); simulateLoading(); }}
                        className="px-3 py-2 text-xs font-medium text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                        Reset Filter
                    </button>
                )}
            </div>

            {/* Create modal */}
            {showCreate && (
                <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl">
                        <h2 className="text-lg font-bold text-navy mb-4">Tambah Portofolio Baru</h2>
                        <div className="space-y-3">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Judul Event"
                                    value={newTitle}
                                    onChange={(e) => { setNewTitle(e.target.value); clearCreateError("title"); }}
                                    className={`w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 ${createErrors.title ? "border-red-400 focus:ring-red-200" : "border-slate-200"}`}
                                />
                                {createErrors.title && <p className="mt-1 text-xs text-red-500">{createErrors.title}</p>}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Nama Klien"
                                    value={newClient}
                                    onChange={(e) => { setNewClient(e.target.value); clearCreateError("client"); }}
                                    className={`w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 ${createErrors.client ? "border-red-400 focus:ring-red-200" : "border-slate-200"}`}
                                />
                                {createErrors.client && <p className="mt-1 text-xs text-red-500">{createErrors.client}</p>}
                            </div>
                            <div>
                                <input
                                    type="number"
                                    placeholder="Tahun"
                                    value={newYear}
                                    onChange={(e) => { setNewYear(e.target.value); clearCreateError("year"); }}
                                    className={`w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 ${createErrors.year ? "border-red-400 focus:ring-red-200" : "border-slate-200"}`}
                                />
                                {createErrors.year && <p className="mt-1 text-xs text-red-500">{createErrors.year}</p>}
                            </div>
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => setNewCatOpen(!newCatOpen)}
                                    className="flex items-center gap-2 w-full px-4 py-2 text-sm border border-slate-200 rounded-lg bg-white hover:border-slate-300 transition-colors text-left"
                                >
                                    <span className="flex-1 truncate text-navy">{newCategory}</span>
                                    <svg className={`w-4 h-4 text-slate-400 transition-transform ${newCatOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {newCatOpen && (
                                    <div className="absolute z-20 mt-1 w-full bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden">
                                        <div className="p-2 border-b border-slate-100">
                                            <input
                                                type="text"
                                                placeholder="Cari kategori..."
                                                value={newCatSearch}
                                                onChange={(e) => setNewCatSearch(e.target.value)}
                                                className="w-full px-3 py-1.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30"
                                                autoFocus
                                            />
                                        </div>
                                        <div className="max-h-48 overflow-y-auto py-1">
                                            {portfolioCategories.filter((c) => c !== "All" && c.toLowerCase().includes(newCatSearch.toLowerCase())).map((cat) => (
                                                <button
                                                    key={cat}
                                                    type="button"
                                                    onClick={() => { setNewCategory(cat as PortfolioCategory); setNewCatOpen(false); setNewCatSearch(""); }}
                                                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${newCategory === cat ? "bg-primary/10 text-primary font-medium" : "text-slate-600 hover:bg-slate-50"}`}
                                                >
                                                    {cat}
                                                </button>
                                            ))}
                                            {portfolioCategories.filter((c) => c !== "All" && c.toLowerCase().includes(newCatSearch.toLowerCase())).length === 0 && (
                                                <div className="px-4 py-3 text-sm text-slate-400 text-center">Tidak ditemukan</div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div>
                                <textarea
                                    placeholder="Deskripsi"
                                    rows={3}
                                    value={newDesc}
                                    onChange={(e) => { setNewDesc(e.target.value); clearCreateError("desc"); }}
                                    className={`w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none ${createErrors.desc ? "border-red-400 focus:ring-red-200" : "border-slate-200"}`}
                                />
                                {createErrors.desc && <p className="mt-1 text-xs text-red-500">{createErrors.desc}</p>}
                            </div>
                        </div>
                        <div className="flex justify-end gap-2 mt-5">
                            <button onClick={() => { setShowCreate(false); setCreateErrors({}); setCreateSubmitted(false); }} className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">Batal</button>
                            <button onClick={createRow} className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors">Simpan</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit modal */}
            {editId && (
                <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl">
                        <h2 className="text-lg font-bold text-navy mb-4">Edit Portofolio</h2>
                        <div className="space-y-3">
                            <input
                                type="text"
                                value={editTitle}
                                onChange={(e) => setEditTitle(e.target.value)}
                                placeholder="Judul"
                                className="w-full px-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30"
                            />
                            <input
                                type="text"
                                value={editClient}
                                onChange={(e) => setEditClient(e.target.value)}
                                placeholder="Klien"
                                className="w-full px-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30"
                            />
                            <textarea
                                rows={3}
                                value={editDesc}
                                onChange={(e) => setEditDesc(e.target.value)}
                                placeholder="Deskripsi"
                                className="w-full px-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                            />
                        </div>
                        <div className="flex justify-end gap-2 mt-5">
                            <button onClick={() => setEditId(null)} className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">Batal</button>
                            <button onClick={saveEdit} className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors">Simpan</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Table */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-100">
                                <th className="text-left px-5 py-3 font-semibold text-slate-500 text-xs uppercase tracking-wider">Judul Event</th>
                                <th className="text-left px-5 py-3 font-semibold text-slate-500 text-xs uppercase tracking-wider">Klien</th>
                                <th className="text-left px-5 py-3 font-semibold text-slate-500 text-xs uppercase tracking-wider">Kategori</th>
                                <th className="text-left px-5 py-3 font-semibold text-slate-500 text-xs uppercase tracking-wider">Tahun</th>
                                <th className="text-left px-5 py-3 font-semibold text-slate-500 text-xs uppercase tracking-wider">Status</th>
                                <th className="text-right px-5 py-3 font-semibold text-slate-500 text-xs uppercase tracking-wider">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {isLoading ? (
                                Array.from({ length: PER_PAGE }).map((_, i) => (
                                    <tr key={`skeleton-${i}`} className="animate-pulse">
                                        <td className="px-5 py-3"><div className="skeleton h-4 w-36" style={{ animationDelay: `${i * 0.08}s` }} /></td>
                                        <td className="px-5 py-3"><div className="skeleton h-4 w-24" style={{ animationDelay: `${i * 0.08 + 0.04}s` }} /></td>
                                        <td className="px-5 py-3"><div className="skeleton h-4 w-20" style={{ animationDelay: `${i * 0.08 + 0.08}s` }} /></td>
                                        <td className="px-5 py-3"><div className="skeleton h-4 w-12" style={{ animationDelay: `${i * 0.08 + 0.12}s` }} /></td>
                                        <td className="px-5 py-3"><div className="skeleton h-5 w-16 rounded-full" style={{ animationDelay: `${i * 0.08 + 0.16}s` }} /></td>
                                        <td className="px-5 py-3">
                                            <div className="flex items-center justify-end gap-2">
                                                <div className="skeleton h-7 w-12 rounded-lg" style={{ animationDelay: `${i * 0.08 + 0.2}s` }} />
                                                <div className="skeleton h-7 w-20 rounded-lg" style={{ animationDelay: `${i * 0.08 + 0.24}s` }} />
                                                <div className="skeleton h-7 w-14 rounded-lg" style={{ animationDelay: `${i * 0.08 + 0.28}s` }} />
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : paginated.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-5 py-10 text-center text-slate-400 text-sm">Tidak ada data.</td>
                                </tr>
                            ) : (
                                paginated.map((row) => (
                                    <tr key={row.id} className="hover:bg-blue-600 [&:hover>td]:text-white transition-colors cursor-pointer">
                                        <td className="px-5 py-3 font-medium text-navy max-w-[200px] truncate">{row.title}</td>
                                        <td className="px-5 py-3 text-slate-500 whitespace-nowrap">{row.client}</td>
                                        <td className="px-5 py-3 text-slate-500">{row.category}</td>
                                        <td className="px-5 py-3 text-slate-500">{row.year}</td>
                                        <td className="px-5 py-3">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${row.active ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>
                                                {row.active ? "Aktif" : "Nonaktif"}
                                            </span>
                                        </td>
                                        <td className="px-5 py-3">
                                            <div className="flex items-center justify-end gap-2">
                                                <button onClick={() => openEdit(row)} className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">Edit</button>
                                                <button onClick={() => toggleActive(row.id)} className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${row.active ? "text-amber-700 bg-amber-50 hover:bg-amber-100" : "text-emerald-700 bg-emerald-50 hover:bg-emerald-100"}`}>
                                                    {row.active ? "Nonaktifkan" : "Aktifkan"}
                                                </button>
                                                <button onClick={() => deleteRow(row.id)} className="px-3 py-1.5 text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors">Hapus</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Footer with pagination */}
                <div className="px-5 py-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400 flex items-center gap-2">
                        {isLoading ? (
                            <>
                                <svg className="w-3.5 h-3.5 animate-spin text-primary" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                                <span>Memuat data...</span>
                            </>
                        ) : (
                            `Menampilkan ${filtered.length === 0 ? 0 : (safePage - 1) * PER_PAGE + 1}–${Math.min(safePage * PER_PAGE, filtered.length)} dari ${filtered.length} data`
                        )}
                    </span>
                    {totalPages > 1 && (
                        <div className="flex items-center gap-1">
                            <button
                                onClick={() => { setPage((p) => Math.max(1, p - 1)); simulateLoading(); }}
                                disabled={safePage === 1 || isLoading}
                                className="w-8 h-8 flex items-center justify-center rounded-lg text-sm text-slate-500 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                                <button
                                    key={p}
                                    onClick={() => { setPage(p); simulateLoading(); }}
                                    disabled={isLoading}
                                    className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${p === safePage ? "bg-primary text-white" : "text-slate-500 hover:bg-slate-100"} disabled:opacity-50 disabled:cursor-not-allowed`}
                                >
                                    {p}
                                </button>
                            ))}
                            <button
                                onClick={() => { setPage((p) => Math.min(totalPages, p + 1)); simulateLoading(); }}
                                disabled={safePage === totalPages || isLoading}
                                className="w-8 h-8 flex items-center justify-center rounded-lg text-sm text-slate-500 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
