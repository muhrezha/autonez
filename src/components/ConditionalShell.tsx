"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ConditionalShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isCms = pathname === "/login" || pathname.startsWith("/dashboard");

    if (isCms) return <>{children}</>;

    return (
        <>
            <Navbar />
            <main className="pt-16 md:pt-20">{children}</main>
            <Footer />
        </>
    );
}
