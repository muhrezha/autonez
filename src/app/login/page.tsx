"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        // Dummy auth
        setTimeout(() => {
            if (email === "admin@autonez.com" && password === "autonez2025") {
                localStorage.setItem("cms_auth", "1");
                router.push("/dashboard/dashboard");
            } else {
                setError("Email atau password salah.");
                setLoading(false);
            }
        }, 600);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-navy via-navy-light to-navy flex items-center justify-center px-4">
            <div className="w-full max-w-sm">
                {/* Logo / Brand */}
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors mb-6">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                        Kembali ke beranda
                    </Link>
                    <h1 className="text-3xl font-black text-white" style={{ fontFamily: "var(--font-heading)" }}>
                        AUTONEZ
                    </h1>
                    <p className="text-slate-400 text-sm mt-1">CMS Dashboard</p>
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl shadow-2xl shadow-black/30 p-8">
                    <h2 className="text-xl font-bold text-navy mb-1">Masuk ke Dashboard</h2>
                    <p className="text-sm text-slate-500 mb-6">Masukkan kredensial Anda untuk melanjutkan.</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="email">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="admin@autonez.com"
                                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="password">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                            />
                        </div>

                        {error && (
                            <p className="text-xs text-red-500 font-medium">{error}</p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-2.5 bg-primary text-white font-bold rounded-lg text-sm hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                        >
                            {loading ? "Memproses..." : "Masuk"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
