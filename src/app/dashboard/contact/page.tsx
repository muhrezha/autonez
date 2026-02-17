"use client";

import { useState } from "react";
import { contactInfo as initialData } from "@/lib/data";

export default function DashboardContactPage() {
    const [whatsapp, setWhatsapp] = useState(initialData.whatsapp);
    const [email, setEmail] = useState(initialData.email);
    const [instagram, setInstagram] = useState(initialData.instagram);
    const [address, setAddress] = useState(initialData.address);
    const [tagline, setTagline] = useState(initialData.tagline);
    const [saved, setSaved] = useState(false);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulasi simpan
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <div>
            <div className="mb-6">
                <h1 className="text-2xl font-black text-navy" style={{ fontFamily: "var(--font-heading)" }}>Kelola Kontak</h1>
                <p className="text-sm text-slate-500">Edit informasi kontak yang tampil di halaman Contact.</p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 max-w-2xl">
                <form onSubmit={handleSave} className="space-y-5">
                    <div>
                        <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">WhatsApp</label>
                        <input
                            type="text"
                            value={whatsapp}
                            onChange={(e) => setWhatsapp(e.target.value)}
                            placeholder="+62 812-3456-7890"
                            className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="hello@autonez.com"
                            className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Instagram</label>
                        <input
                            type="text"
                            value={instagram}
                            onChange={(e) => setInstagram(e.target.value)}
                            placeholder="@autonez.communications"
                            className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Alamat</label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Jakarta, Indonesia"
                            className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Tagline</label>
                        <input
                            type="text"
                            value={tagline}
                            onChange={(e) => setTagline(e.target.value)}
                            placeholder="Always There For You"
                            className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                        />
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                        <button
                            type="submit"
                            className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                        >
                            Simpan
                        </button>
                        {saved && (
                            <span className="text-sm text-emerald-600 font-medium">Berhasil disimpan!</span>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}
