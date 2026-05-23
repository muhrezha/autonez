"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data";

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (pathname !== "/") return;

        const sections = ["home", "about", "services", "portfolio"];

        const handleScroll = () => {
            const scrollY = window.scrollY;
            let current = "home";
            for (const id of sections) {
                const el = document.getElementById(id);
                if (!el) continue;
                if (scrollY >= el.offsetTop - 120) {
                    current = id;
                }
            }
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    const isActive = (link: { href: string; sectionId: string | null }) => {
        if (pathname !== "/") return pathname === link.href;
        if (link.sectionId) return activeSection === link.sectionId;
        return false;
    };

    const handleNavClick = (e: React.MouseEvent, link: { href: string; sectionId: string | null }) => {
        if (link.sectionId && pathname === "/") {
            e.preventDefault();
            const sectionId = link.sectionId;
            const scrollToSection = () => {
                const el = document.getElementById(sectionId);
                if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top, behavior: "smooth" });
                }
            };
            if (isOpen) {
                // Tutup mobile menu dulu, scroll setelah animasi selesai (300ms)
                setIsOpen(false);
                setTimeout(scrollToSection, 350);
            } else {
                scrollToSection();
            }
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass shadow-lg py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center group">
                    <Image
                        src="/autonez_logo_font_black.png"
                        alt="Autonez Communications"
                        width={160}
                        height={45}
                        className="h-10 w-auto object-contain"
                        unoptimized
                    />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-2">
                    {navLinks.map((link) => {
                        const active = isActive(link);
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link)}
                                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${active
                                    ? "text-accent bg-accent/5"
                                    : "text-slate-600 hover:text-navy hover:bg-slate-200"
                                    }`}
                            >
                                {link.label}
                                {active && (
                                    <motion.div
                                        layoutId="nav-indicator"
                                        className="absolute inset-0 bg-accent/5 rounded-full -z-10"
                                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                    <Link
                        href="/contact"
                        className="ml-3 px-6 py-2.5 bg-gradient-to-r from-accent to-accent-light text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        Get in Touch
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
                    aria-label="Toggle menu"
                >
                    <div className="flex flex-col gap-1.5">
                        <span
                            className={`block w-6 h-0.5 bg-navy transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                        />
                        <span
                            className={`block w-4 h-0.5 bg-navy transition-all duration-300 ${isOpen ? "opacity-0" : ""
                                }`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-navy transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden"
                    >
                        <div className="mx-4 mt-2 p-4 rounded-2xl bg-white shadow-xl border border-slate-100 flex flex-col gap-1">
                            {navLinks.map((link, i) => {
                                const active = isActive(link);
                                return (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={(e) => handleNavClick(e, link)}
                                            className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${active
                                                ? "bg-accent/10 text-accent"
                                                : "text-slate-600 hover:bg-slate-50 hover:text-navy"
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navLinks.length * 0.05 }}
                                className="pt-2"
                            >
                                <Link
                                    href="/contact"
                                    className="block text-center px-4 py-3 bg-gradient-to-r from-accent to-accent-light text-white text-sm font-semibold rounded-xl"
                                >
                                    Get in Touch
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
