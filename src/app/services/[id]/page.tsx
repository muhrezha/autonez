import { notFound } from "next/navigation";
import { services, portfolioEvents } from "@/lib/data";
import ServiceDetailClient from "./ServiceDetailClient";

export function generateStaticParams() {
    return services.map((svc) => ({ id: svc.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const svc = services.find((s) => s.id === id);
    if (!svc) return {};
    return {
        title: `${svc.title} — AUTONEZ Communications`,
        description: svc.description,
    };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const svc = services.find((s) => s.id === id);
    if (!svc) notFound();

    const currentIndex = services.findIndex((s) => s.id === id);
    const prevService = currentIndex > 0 ? services[currentIndex - 1] : null;
    const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : null;

    // const relatedPortfolio = portfolioEvents
    //     .filter((p) => p.category === svc.relatedCategory)
    //     .slice(0, 3);

    return (
        <ServiceDetailClient
            svc={svc}
            prevService={prevService}
            nextService={nextService}
            relatedPortfolio={portfolioEvents}
        />
    );
}
