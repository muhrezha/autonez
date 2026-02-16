import { notFound } from "next/navigation";
import { portfolioEvents } from "@/lib/data";
import PortfolioDetailClient from "./PortfolioDetailClient";

export function generateStaticParams() {
    return portfolioEvents.map((e) => ({ id: e.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const event = portfolioEvents.find((e) => e.id === id);
    if (!event) return {};
    return {
        title: `${event.title} — AUTONEZ Communications`,
        description: event.description,
    };
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const event = portfolioEvents.find((e) => e.id === id);
    if (!event) notFound();

    const currentIndex = portfolioEvents.findIndex((e) => e.id === id);
    const prevEvent = currentIndex > 0 ? portfolioEvents[currentIndex - 1] : null;
    const nextEvent = currentIndex < portfolioEvents.length - 1 ? portfolioEvents[currentIndex + 1] : null;

    const relatedEvents = portfolioEvents
        .filter((e) => e.id !== id && e.category === event.category)
        .slice(0, 3);

    return (
        <PortfolioDetailClient
            event={event}
            prevEvent={prevEvent}
            nextEvent={nextEvent}
            relatedEvents={relatedEvents}
        />
    );
}
