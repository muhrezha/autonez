export default function MaintenancePage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4"
            style={{ background: "linear-gradient(135deg, #0a1628 0%, #1e293b 60%, #0a1628 100%)" }}>

            {/* Animated background dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-5"
                    style={{ background: "#2563eb", filter: "blur(80px)" }} />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-5"
                    style={{ background: "#f59e0b", filter: "blur(100px)" }} />
            </div>

            <div className="relative z-10 text-center max-w-lg w-full">

                {/* Logo */}
                <div className="mb-10">
                    <h1 className="text-4xl font-black text-white tracking-tight"
                        style={{ fontFamily: "var(--font-heading)" }}>
                        AUTONEZ
                    </h1>
                    <p className="text-slate-400 text-sm mt-1 tracking-widest uppercase">
                        Communications
                    </p>
                </div>

                {/* Icon */}
                <div className="mb-8 flex justify-center">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center"
                        style={{ background: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.3)" }}>
                        <svg className="w-10 h-10" fill="none" stroke="#2563eb" viewBox="0 0 24 24" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                        </svg>
                    </div>
                </div>

                {/* Message */}
                <h2 className="text-2xl font-bold text-white mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}>
                    Sedang dalam Pemeliharaan
                </h2>
                <p className="text-slate-400 text-base leading-relaxed mb-10">
                    Website kami sedang dalam proses pembaruan untuk memberikan
                    pengalaman yang lebih baik. Kami akan segera kembali.
                </p>

                {/* Divider */}
                <div className="flex items-center gap-4 mb-10">
                    <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
                    <span className="text-slate-500 text-xs uppercase tracking-widest">Hubungi Kami</span>
                    <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
                </div>

                {/* Contact */}
                {/*<div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a href="mailto:hello@autonez.com"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white transition-all"
                        style={{ background: "rgba(37,99,235,0.2)", border: "1px solid rgba(37,99,235,0.4)" }}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        hello@autonez.com
                    </a>
                    <a href="https://wa.me/6281234567890"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white transition-all"
                        style={{ background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.3)" }}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        WhatsApp
                    </a>
                </div>*/}

            </div>

            {/* Footer note */}
            <p className="absolute bottom-6 text-slate-600 text-xs">
                © {new Date().getFullYear()} AUTONEZ Communications
            </p>
        </div>
    );
}
