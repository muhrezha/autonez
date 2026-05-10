"use client";

import { useState } from "react";

const initialAbout = {
    title: "Circle of Positive Energy",
    subtitle: "Lebih dari satu dekade menghadirkan pengalaman event yang tak terlupakan dengan semangat energi positif.",
    story: `Autonez Communications didirikan pada tahun 2015 sebagai agensi digital yang berfokus pada desain grafis, pengembangan web, dan produksi multimedia. Dengan fondasi yang kuat di dunia digital, kami kemudian bertransformasi menjadi event organizer dan creative agency yang lengkap.

Keunggulan kami terletak pada integrasi keahlian digital dengan manajemen event — menciptakan pengalaman yang tidak hanya berkesan secara langsung, tetapi juga memiliki dampak digital yang kuat.

Hingga saat ini, kami telah dipercaya oleh berbagai BUMN dan perusahaan swasta terkemuka di Indonesia untuk menyelenggarakan event berskala nasional hingga internasional.`,
    visi: "Menjadi event organizer dan creative agency terdepan di Indonesia yang mengintegrasikan kekuatan digital dan kreativitas untuk menghadirkan pengalaman event yang tak terlupakan dan berdampak positif bagi setiap klien.",
    misi: `Menghadirkan circle of positive energy di setiap project
Mengutamakan kepuasan klien sebagai tujuan utama
Mengintegrasikan keahlian digital dengan event management
Berinovasi terus-menerus dalam industri kreatif`,
    yearEstablished: "2015",
};

export default function DashboardAboutPage() {
    const [title, setTitle] = useState(initialAbout.title);
    const [subtitle, setSubtitle] = useState(initialAbout.subtitle);
    const [story, setStory] = useState(initialAbout.story);
    const [visi, setVisi] = useState(initialAbout.visi);
    const [misi, setMisi] = useState(initialAbout.misi);
    const [yearEstablished, setYearEstablished] = useState(initialAbout.yearEstablished);
    const [saved, setSaved] = useState(false);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <div>
            <div className="mb-6">
                <h1 className="text-2xl font-black text-navy" style={{ fontFamily: "var(--font-heading)" }}>Kelola Tentang</h1>
                <p className="text-sm text-slate-500">Edit informasi yang tampil di halaman About.</p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 max-w-2xl">
                <form onSubmit={handleSave} className="space-y-5">
                    <div>
                        <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Judul Hero</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Subtitle Hero</label>
                        <textarea
                            rows={2}
                            value={subtitle}
                            onChange={(e) => setSubtitle(e.target.value)}
                            className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent resize-none"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Tahun Didirikan</label>
                        <input
                            type="text"
                            value={yearEstablished}
                            onChange={(e) => setYearEstablished(e.target.value)}
                            className="w-full max-w-[120px] px-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Cerita / Sejarah</label>
                        <textarea
                            rows={6}
                            value={story}
                            onChange={(e) => setStory(e.target.value)}
                            className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent resize-none"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Visi</label>
                        <textarea
                            rows={3}
                            value={visi}
                            onChange={(e) => setVisi(e.target.value)}
                            className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent resize-none"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Misi (satu per baris)</label>
                        <textarea
                            rows={4}
                            value={misi}
                            onChange={(e) => setMisi(e.target.value)}
                            className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent resize-none"
                        />
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                        <button
                            type="submit"
                            className="px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent/90 transition-colors"
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
