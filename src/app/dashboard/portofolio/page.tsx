"use client";

import { useState } from "react";
import { portfolioEvents as initialData } from "@/lib/data";
import type { PortfolioEvent } from "@/lib/data";

type Row = PortfolioEvent & { active: boolean };

const seed: Row[] = initialData.map((p) => ({ ...p, active: true }));

export default function DashboardPortofolioPage() {
    const [rows, setRows] = useState<Row[]>(seed);
    const [search, setSearch] = useState("");
    const [editId, setEditId] = useState<string | null>(null);
    const [editTitle, setEditTitle] = useState("");
    const [editDesc, setEditDesc] = useState("");
    const [editClient, setEditClient] = useState("");
    const [showCreate, setShowCreate] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [newClient, setNewClient] = useState("");
    const [newDesc, setNewDesc] = useState("");
    const [newYear, setNewYear] = useState<string>(String(new Date().getFullYear()));

    const filtered = rows.filter(
        (r) =>
            r.title.toLowerCase().includes(search.toLowerCase()) ||
            r.client.toLowerCase().includes(search.toLowerCase())
    );

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

    const createRow = () => {
        if (!newTitle.trim()) return;
        const id = `porto-${Date.now()}`;
        setRows((prev) => [
            {
                id,
                title: newTitle,
                client: newClient,
                category: "MICE" as const,
                year: parseInt(newYear) || new Date().getFullYear(),
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

            {/* Search */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Cari berdasarkan judul atau klien..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full max-w-sm px-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
            </div>

            {/* Create modal */}
            {showCreate && (
                <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl">
                        <h2 className="text-lg font-bold text-navy mb-4">Tambah Portofolio Baru</h2>
                        <div className="space-y-3">
                            <input
                                type="text"
                                placeholder="Judul Event"
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                                className="w-full px-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30"
                            />
                            <input
                                type="text"
                                placeholder="Nama Klien"
                                value={newClient}
                                onChange={(e) => setNewClient(e.target.value)}
                                className="w-full px-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30"
                            />
                            <input
                                type="number"
                                placeholder="Tahun"
                                value={newYear}
                                onChange={(e) => setNewYear(e.target.value)}
                                className="w-full px-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30"
                            />
                            <textarea
                                placeholder="Deskripsi"
                                rows={3}
                                value={newDesc}
                                onChange={(e) => setNewDesc(e.target.value)}
                                className="w-full px-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                            />
                        </div>
                        <div className="flex justify-end gap-2 mt-5">
                            <button onClick={() => setShowCreate(false)} className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">Batal</button>
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
                            {filtered.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="px-5 py-10 text-center text-slate-400 text-sm">Tidak ada data.</td>
                                </tr>
                            )}
                            {filtered.map((row) => (
                                <tr key={row.id} className="hover:bg-slate-50/50 transition-colors">
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
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="px-5 py-3 border-t border-slate-100 text-xs text-slate-400">
                    Menampilkan {filtered.length} dari {rows.length} data
                </div>
            </div>
        </div>
    );
}
