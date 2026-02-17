"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface SubMenuItem {
    label: string;
    href: string;
}

interface MenuItem {
    label: string;
    href?: string;
    icon: React.ReactNode;
    children?: SubMenuItem[];
}

const menuItems: MenuItem[] = [
    {
        label: "Dashboard",
        href: "/dashboard/dashboard",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
    },
    {
        label: "Profil",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        ),
        children: [
            { label: "Kelola Info", href: "/dashboard/info" },
            { label: "Kelola Kontak", href: "/dashboard/contact" },
            { label: "Kelola Tentang", href: "/dashboard/about" },
        ],
    },
    {
        label: "Kelola Services",
        href: "/dashboard/services",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        label: "Kelola Portofolio",
        href: "/dashboard/portofolio",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
    },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const [collapsed, setCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

    // Guard: redirect to login if not authenticated
    useEffect(() => {
        if (typeof window !== "undefined" && !localStorage.getItem("cms_auth")) {
            router.replace("/login");
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem("cms_auth");
        router.push("/login");
    };

    return (
        <div className="min-h-screen bg-slate-100 flex">
            {/* Mobile overlay */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-20 lg:hidden"
                    onClick={() => setMobileOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
                    fixed top-0 left-0 h-full z-30 bg-navy flex flex-col transition-all duration-300 ease-in-out
                    ${collapsed ? "w-16" : "w-60"}
                    ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
                `}
            >
                {/* Logo */}
                <div className={`flex items-center gap-3 px-4 h-16 border-b border-white/10 flex-shrink-0 ${collapsed ? "justify-center" : ""}`}>
                    {!collapsed && (
                        <span className="text-white font-black text-lg tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                            AUTONEZ
                        </span>
                    )}
                    <button
                        onClick={() => setCollapsed((c) => !c)}
                        className="ml-auto lg:block hidden w-8 h-8 flex items-center justify-center rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors flex-shrink-0"
                        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            {collapsed ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Nav */}
                <nav className="flex-1 py-4 overflow-y-auto">
                    {menuItems.map((item) => {
                        if (item.children) {
                            const isChildActive = item.children.some(
                                (child) => pathname === child.href || pathname.startsWith(child.href + "/")
                            );
                            const isOpen = openMenus[item.label] ?? isChildActive;
                            const toggleMenu = () =>
                                setOpenMenus((prev) => ({ ...prev, [item.label]: !isOpen }));

                            return (
                                <div key={item.label}>
                                    <button
                                        onClick={toggleMenu}
                                        className={`
                                            flex items-center gap-3 mx-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 w-[calc(100%-16px)]
                                            ${isChildActive
                                                ? "text-white bg-white/10"
                                                : "text-slate-300 hover:text-white hover:bg-white/10"
                                            }
                                            ${collapsed ? "justify-center" : ""}
                                        `}
                                        title={collapsed ? item.label : undefined}
                                    >
                                        <span className="flex-shrink-0">{item.icon}</span>
                                        {!collapsed && (
                                            <>
                                                <span className="flex-1 text-left">{item.label}</span>
                                                <svg
                                                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                                                    fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </>
                                        )}
                                    </button>
                                    {isOpen && !collapsed && (
                                        <div className="mt-1 ml-4 space-y-0.5">
                                            {item.children.map((child) => {
                                                const childActive = pathname === child.href || pathname.startsWith(child.href + "/");
                                                return (
                                                    <Link
                                                        key={child.href}
                                                        href={child.href}
                                                        onClick={() => setMobileOpen(false)}
                                                        className={`
                                                            flex items-center gap-3 mx-2 px-3 py-2 rounded-lg text-sm transition-all duration-200
                                                            ${childActive
                                                                ? "bg-primary text-white font-medium"
                                                                : "text-slate-400 hover:text-white hover:bg-white/10"
                                                            }
                                                        `}
                                                    >
                                                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${childActive ? "bg-white" : "bg-slate-500"}`} />
                                                        <span>{child.label}</span>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            );
                        }

                        const active = pathname === item.href || pathname.startsWith(item.href + "/");
                        return (
                            <Link
                                key={item.href}
                                href={item.href!}
                                onClick={() => setMobileOpen(false)}
                                className={`
                                    flex items-center gap-3 mx-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                                    ${active
                                        ? "bg-primary text-white"
                                        : "text-slate-300 hover:text-white hover:bg-white/10"
                                    }
                                    ${collapsed ? "justify-center" : ""}
                                `}
                                title={collapsed ? item.label : undefined}
                            >
                                <span className="flex-shrink-0">{item.icon}</span>
                                {!collapsed && <span>{item.label}</span>}
                            </Link>
                        );
                    })}
                </nav>

                {/* Logout */}
                <div className="p-3 border-t border-white/10 flex-shrink-0">
                    <button
                        onClick={handleLogout}
                        className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200 ${collapsed ? "justify-center" : ""}`}
                        title={collapsed ? "Logout" : undefined}
                    >
                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        {!collapsed && <span>Logout</span>}
                    </button>
                </div>
            </aside>

            {/* Main area */}
            <div className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${collapsed ? "lg:ml-16" : "lg:ml-60"}`}>
                {/* Top bar */}
                <header className="h-16 bg-white border-b border-slate-200 flex items-center px-4 gap-4 flex-shrink-0">
                    <button
                        className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
                        onClick={() => setMobileOpen((v) => !v)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <span className="text-sm font-semibold text-slate-600">
                        {(() => {
                            for (const m of menuItems) {
                                if (m.href && (pathname === m.href || pathname.startsWith(m.href + "/"))) return m.label;
                                if (m.children) {
                                    const child = m.children.find((c) => pathname === c.href || pathname.startsWith(c.href + "/"));
                                    if (child) return child.label;
                                }
                            }
                            return "Dashboard";
                        })()}
                    </span>
                    <div className="ml-auto flex items-center gap-2">
                        <span className="text-xs text-slate-400 hidden sm:block">admin@autonez.com</span>
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">A</div>
                    </div>
                </header>

                {/* Page content */}
                <main className="flex-1 p-6">{children}</main>
            </div>
        </div>
    );
}
