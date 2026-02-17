"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { infoPosts as initialData } from "@/lib/data";
import type { InfoPost } from "@/lib/data";

type Row = InfoPost & { active: boolean };

const seed: Row[] = initialData.map((p) => ({ ...p, active: true }));

const PER_PAGE = 5;

// Extract unique categories from data
const allCategories = Array.from(new Set(initialData.map((p) => p.category))).sort();

// Indonesian month names for parsing & display
const MONTH_NAMES = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

/** Parse "15 Desember 2024" → Date */
const parseIndonesianDate = (dateStr: string): Date | null => {
    const parts = dateStr.trim().split(/\s+/);
    if (parts.length !== 3) return null;
    const day = parseInt(parts[0]);
    const monthIdx = MONTH_NAMES.indexOf(parts[1]);
    const year = parseInt(parts[2]);
    if (isNaN(day) || monthIdx === -1 || isNaN(year)) return null;
    return new Date(year, monthIdx, day);
};

/** Format Date → "15 Desember 2024" */
const formatIndonesianDate = (d: Date): string => {
    return `${d.getDate()} ${MONTH_NAMES[d.getMonth()]} ${d.getFullYear()}`;
};

/** Get days in month */
const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();

/** Get first day of week (0=Sun) for a month */
const getFirstDayOfWeek = (year: number, month: number) => new Date(year, month, 1).getDay();

/** Check if two dates match day/month/year */
const isSameDay = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

export default function DashboardInfoPage() {
    const [rows, setRows] = useState<Row[]>(seed);
    const [search, setSearch] = useState("");
    const [filterCategory, setFilterCategory] = useState<string>("All");
    const [categorySearch, setCategorySearch] = useState("");
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [filterDate, setFilterDate] = useState<Date | null>(null);
    const [dateOpen, setDateOpen] = useState(false);
    const [calYear, setCalYear] = useState(new Date().getFullYear());
    const [calMonth, setCalMonth] = useState(new Date().getMonth());
    const [page, setPage] = useState(1);

    const [editId, setEditId] = useState<string | null>(null);
    const [editTitle, setEditTitle] = useState("");
    const [editDesc, setEditDesc] = useState("");
    const [showCreate, setShowCreate] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [newDesc, setNewDesc] = useState("");
    const [newCategory, setNewCategory] = useState("");
    const [createErrors, setCreateErrors] = useState<Record<string, string>>({});

    const categoryRef = useRef<HTMLDivElement>(null);
    const dateRef = useRef<HTMLDivElement>(null);

    // Close dropdowns on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (categoryRef.current && !categoryRef.current.contains(e.target as Node)) setCategoryOpen(false);
            if (dateRef.current && !dateRef.current.contains(e.target as Node)) setDateOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const filteredCategoryOptions = ["All", ...allCategories].filter(
        (c) => c.toLowerCase().includes(categorySearch.toLowerCase())
    );

    const filtered = useMemo(() => {
        return rows.filter((r) => {
            const matchSearch = r.title.toLowerCase().includes(search.toLowerCase());
            const matchCategory = filterCategory === "All" || r.category === filterCategory;
            let matchDate = true;
            if (filterDate !== null) {
                const rowDate = parseIndonesianDate(r.date);
                matchDate = rowDate !== null && isSameDay(rowDate, filterDate);
            }
            return matchSearch && matchCategory && matchDate;
        });
    }, [rows, search, filterCategory, filterDate]);

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
    };

    const saveEdit = () => {
        setRows((prev) =>
            prev.map((r) => (r.id === editId ? { ...r, title: editTitle, description: editDesc } : r))
        );
        setEditId(null);
    };

    // --- Validation ---
    const validateCreate = () => {
        const errors: Record<string, string> = {};
        if (!newTitle.trim()) errors.title = "Judul wajib diisi";
        if (!newCategory.trim()) errors.category = "Kategori wajib diisi";
        if (!newDesc.trim()) errors.desc = "Deskripsi wajib diisi";
        return errors;
    };

    const clearCreateError = (field: string) => {
        if (createErrors[field]) {
            setCreateErrors((prev) => { const next = { ...prev }; delete next[field]; return next; });
        }
    };

    const createRow = () => {
        const errors = validateCreate();
        setCreateErrors(errors);
        if (Object.keys(errors).length > 0) return;

        const id = `info-${Date.now()}`;
        setRows((prev) => [
            {
                id,
                title: newTitle,
                description: newDesc,
                content: newDesc,
                date: new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }),
                author: "Admin",
                category: newCategory,
                images: ["/event_example_one.png"],
                active: true,
            },
            ...prev,
        ]);
        setNewTitle("");
        setNewDesc("");
        setNewCategory("");
        setCreateErrors({});
        setShowCreate(false);
    };

    // --- Calendar helpers ---
    const daysInMonth = getDaysInMonth(calYear, calMonth);
    const firstDay = getFirstDayOfWeek(calYear, calMonth);
    const calDays: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) calDays.push(null);
    for (let d = 1; d <= daysInMonth; d++) calDays.push(d);

    const prevMonth = () => {
        if (calMonth === 0) { setCalMonth(11); setCalYear((y) => y - 1); }
        else setCalMonth((m) => m - 1);
    };
    const nextMonth = () => {
        if (calMonth === 11) { setCalMonth(0); setCalYear((y) => y + 1); }
        else setCalMonth((m) => m + 1);
    };
    const selectDay = (day: number) => {
        const selected = new Date(calYear, calMonth, day);
        setFilterDate(selected);
        setDateOpen(false);
        setPage(1);
    };
    const clearDate = () => {
        setFilterDate(null);
        setDateOpen(false);
        setPage(1);
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-black text-navy" style={{ fontFamily: "var(--font-heading)" }}>Kelola Info</h1>
                    <p className="text-sm text-slate-500">Manage berita dan artikel.</p>
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
                        placeholder="Cari berdasarkan judul..."
                        value={search}
                        onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                        className="w-56 px-4 py-2 text-sm border border-slate-200 rounded-lg bg-white hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    />
                </div>

                {/* Category dropdown with search */}
                <div ref={categoryRef} className="relative">
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Kategori</label>
                    <button
                        onClick={() => { setCategoryOpen(!categoryOpen); setDateOpen(false); }}
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
                                {filteredCategoryOptions.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => { setFilterCategory(cat); setCategoryOpen(false); setCategorySearch(""); setPage(1); }}
                                        className={`w-full text-left px-4 py-2 text-sm transition-colors ${filterCategory === cat ? "bg-primary/10 text-primary font-medium" : "text-slate-600 hover:bg-slate-50"}`}
                                    >
                                        {cat === "All" ? "Semua Kategori" : cat}
                                    </button>
                                ))}
                                {filteredCategoryOptions.length === 0 && (
                                    <div className="px-4 py-3 text-sm text-slate-400 text-center">Tidak ditemukan</div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Date picker (calendar) */}
                <div ref={dateRef} className="relative">
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Tanggal</label>
                    <button
                        onClick={() => { setDateOpen(!dateOpen); setCategoryOpen(false); }}
                        className="flex items-center gap-2 w-52 px-4 py-2 text-sm border border-slate-200 rounded-lg bg-white hover:border-slate-300 transition-colors text-left"
                    >
                        <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className={`flex-1 ${filterDate === null ? "text-slate-400" : "text-navy"}`}>
                            {filterDate ? formatIndonesianDate(filterDate) : "Semua Tanggal"}
                        </span>
                        <svg className={`w-4 h-4 text-slate-400 transition-transform ${dateOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {dateOpen && (
                        <div className="absolute z-20 mt-1 w-72 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden p-3">
                            {/* Month/Year nav */}
                            <div className="flex items-center justify-between mb-2">
                                <button onClick={prevMonth} className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <span className="text-sm font-semibold text-navy">{MONTH_NAMES[calMonth]} {calYear}</span>
                                <button onClick={nextMonth} className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                            {/* Day headers */}
                            <div className="grid grid-cols-7 gap-0.5 mb-1">
                                {["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"].map((d) => (
                                    <div key={d} className="text-center text-xs font-medium text-slate-400 py-1">{d}</div>
                                ))}
                            </div>
                            {/* Day grid */}
                            <div className="grid grid-cols-7 gap-0.5">
                                {calDays.map((day, i) => {
                                    if (day === null) return <div key={`empty-${i}`} />;
                                    const thisDate = new Date(calYear, calMonth, day);
                                    const isSelected = filterDate !== null && isSameDay(thisDate, filterDate);
                                    const isToday = isSameDay(thisDate, new Date());
                                    return (
                                        <button
                                            key={day}
                                            onClick={() => selectDay(day)}
                                            className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm transition-colors
                                                ${isSelected ? "bg-primary text-white font-semibold" : ""}
                                                ${!isSelected && isToday ? "bg-primary/10 text-primary font-medium" : ""}
                                                ${!isSelected && !isToday ? "text-slate-600 hover:bg-slate-100" : ""}
                                            `}
                                        >
                                            {day}
                                        </button>
                                    );
                                })}
                            </div>
                            {/* Clear button */}
                            <div className="mt-2 pt-2 border-t border-slate-100 flex justify-between items-center">
                                <button
                                    onClick={() => {
                                        const today = new Date();
                                        setCalYear(today.getFullYear());
                                        setCalMonth(today.getMonth());
                                    }}
                                    className="text-xs text-primary hover:text-primary/80 font-medium transition-colors"
                                >
                                    Hari Ini
                                </button>
                                <button
                                    onClick={clearDate}
                                    className="text-xs text-slate-500 hover:text-slate-700 font-medium transition-colors"
                                >
                                    Hapus Filter
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Reset filters */}
                {(filterCategory !== "All" || filterDate !== null || search) && (
                    <button
                        onClick={() => { setFilterCategory("All"); setFilterDate(null); setSearch(""); setPage(1); }}
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
                        <h2 className="text-lg font-bold text-navy mb-4">Tambah Info Baru</h2>
                        <div className="space-y-3">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Judul"
                                    value={newTitle}
                                    onChange={(e) => { setNewTitle(e.target.value); clearCreateError("title"); }}
                                    className={`w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 ${createErrors.title ? "border-red-400 focus:ring-red-200" : "border-slate-200"}`}
                                />
                                {createErrors.title && <p className="mt-1 text-xs text-red-500">{createErrors.title}</p>}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Kategori"
                                    value={newCategory}
                                    onChange={(e) => { setNewCategory(e.target.value); clearCreateError("category"); }}
                                    className={`w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 ${createErrors.category ? "border-red-400 focus:ring-red-200" : "border-slate-200"}`}
                                />
                                {createErrors.category && <p className="mt-1 text-xs text-red-500">{createErrors.category}</p>}
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
                            <button onClick={() => { setShowCreate(false); setCreateErrors({}); }} className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">Batal</button>
                            <button onClick={createRow} className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors">Simpan</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit modal */}
            {editId && (
                <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl">
                        <h2 className="text-lg font-bold text-navy mb-4">Edit Info</h2>
                        <div className="space-y-3">
                            <input
                                type="text"
                                value={editTitle}
                                onChange={(e) => setEditTitle(e.target.value)}
                                className="w-full px-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30"
                            />
                            <textarea
                                rows={3}
                                value={editDesc}
                                onChange={(e) => setEditDesc(e.target.value)}
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
                                <th className="text-left px-5 py-3 font-semibold text-slate-500 text-xs uppercase tracking-wider">Judul</th>
                                <th className="text-left px-5 py-3 font-semibold text-slate-500 text-xs uppercase tracking-wider">Kategori</th>
                                <th className="text-left px-5 py-3 font-semibold text-slate-500 text-xs uppercase tracking-wider">Tanggal</th>
                                <th className="text-left px-5 py-3 font-semibold text-slate-500 text-xs uppercase tracking-wider">Status</th>
                                <th className="text-right px-5 py-3 font-semibold text-slate-500 text-xs uppercase tracking-wider">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {paginated.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="px-5 py-10 text-center text-slate-400 text-sm">Tidak ada data.</td>
                                </tr>
                            )}
                            {paginated.map((row) => (
                                <tr key={row.id} className="hover:bg-blue-600 [&:hover>td]:text-white transition-colors cursor-pointer">
                                    <td className="px-5 py-3 font-medium text-navy max-w-xs truncate">{row.title}</td>
                                    <td className="px-5 py-3 text-slate-500">{row.category}</td>
                                    <td className="px-5 py-3 text-slate-500 whitespace-nowrap">{row.date}</td>
                                    <td className="px-5 py-3">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${row.active ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>
                                            {row.active ? "Aktif" : "Nonaktif"}
                                        </span>
                                    </td>
                                    <td className="px-5 py-3">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => openEdit(row)}
                                                className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => toggleActive(row.id)}
                                                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${row.active ? "text-amber-700 bg-amber-50 hover:bg-amber-100" : "text-emerald-700 bg-emerald-50 hover:bg-emerald-100"}`}
                                            >
                                                {row.active ? "Nonaktifkan" : "Aktifkan"}
                                            </button>
                                            <button
                                                onClick={() => deleteRow(row.id)}
                                                className="px-3 py-1.5 text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
                                            >
                                                Hapus
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer with pagination */}
                <div className="px-5 py-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400">
                        Menampilkan {filtered.length === 0 ? 0 : (safePage - 1) * PER_PAGE + 1}–{Math.min(safePage * PER_PAGE, filtered.length)} dari {filtered.length} data
                    </span>
                    {totalPages > 1 && (
                        <div className="flex items-center gap-1">
                            <button
                                onClick={() => setPage((p) => Math.max(1, p - 1))}
                                disabled={safePage === 1}
                                className="w-8 h-8 flex items-center justify-center rounded-lg text-sm text-slate-500 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                                <button
                                    key={p}
                                    onClick={() => setPage(p)}
                                    className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${p === safePage ? "bg-primary text-white" : "text-slate-500 hover:bg-slate-100"}`}
                                >
                                    {p}
                                </button>
                            ))}
                            <button
                                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                                disabled={safePage === totalPages}
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
