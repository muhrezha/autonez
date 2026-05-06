import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const maintenanceMode = process.env.MAINTENANCE_MODE === "true";

    if (!maintenanceMode) {
        return NextResponse.next();
    }

    const { pathname } = request.nextUrl;

    // Izinkan akses ke halaman maintenance itu sendiri + aset statis
    if (pathname.startsWith("/maintenance") || pathname.startsWith("/api/")) {
        return NextResponse.next();
    }

    return NextResponse.rewrite(new URL("/maintenance", request.url));
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.svg).*)"],
};
