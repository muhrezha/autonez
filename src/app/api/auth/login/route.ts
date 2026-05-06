import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { email, password } = await request.json();

    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword) {
        return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
    }

    if (email === adminEmail && password === adminPassword) {
        return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Email atau password salah." }, { status: 401 });
}
