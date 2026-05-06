import { infoPosts, services, portfolioEvents } from "@/lib/data";
import Link from "next/link";

const stats = [
    {
        label: "Total Info",
        value: infoPosts.length,
        href: "/dashboard/info",
        color: "bg-blue-500",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
        ),
    },
    {
        label: "Total Services",
        value: services.length,
        href: "/dashboard/services",
        color: "bg-emerald-500",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        label: "Total Portofolio",
        value: portfolioEvents.length,
        href: "/dashboard/portofolio",
        color: "bg-violet-500",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
    },
];

export default function DashboardPage() {
    return (
        <div>
            <h1 className="text-2xl font-black text-navy mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                Dashboard
            </h1>
            <p className="text-sm text-slate-500 mb-8">Selamat datang di CMS AUTONEZ Communications.</p>

            {/* Stats cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                {stats.map((s) => (
                    <Link
                        key={s.label}
                        href={s.href}
                        className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-4"
                    >
                        <div className={`${s.color} w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                            {s.icon}
                        </div>
                        <div>
                            <div className="text-3xl font-black text-navy">{s.value}</div>
                            <div className="text-sm text-slate-500">{s.label}</div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Quick links */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <h2 className="text-sm font-bold text-slate-600 mb-4">Akses Cepat</h2>
                <div className="flex flex-wrap gap-3">
                    {[
                        { label: "Kelola Info", href: "/dashboard/info" },
                        { label: "Kelola Services", href: "/dashboard/services" },
                        { label: "Kelola Portofolio", href: "/dashboard/portofolio" },
                        { label: "Lihat Website", href: "/" },
                    ].map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className="px-4 py-2 text-sm font-medium bg-slate-100 text-slate-700 rounded-lg hover:bg-accent hover:text-white transition-colors"
                        >
                            {l.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
