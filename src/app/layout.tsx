import type { Metadata } from "next";
import "./globals.css";
import ConditionalShell from "@/components/ConditionalShell";

export const metadata: Metadata = {
  title: "AUTONEZ Communications — Always There For You",
  description:
    "Event Organizer & Creative Agency since 2015. Brand Activation, MICE, Special Events, Virtual Events, and Productions Handling.",
  keywords: [
    "Event Organizer",
    "Creative Agency",
    "Brand Activation",
    "MICE",
    "Jakarta",
    "Indonesia",
    "Autonez",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ConditionalShell>{children}</ConditionalShell>
      </body>
    </html>
  );
}
