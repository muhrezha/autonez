import { notFound } from "next/navigation";
import { infoPosts } from "@/lib/data";
import InfoDetailClient from "./InfoDetailClient";

export function generateStaticParams() {
    return infoPosts.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = infoPosts.find((p) => p.id === id);
    if (!post) return {};
    return {
        title: `${post.title} — AUTONEZ Communications`,
        description: post.description,
    };
}

export default async function InfoDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = infoPosts.find((p) => p.id === id);
    if (!post) notFound();

    const currentIndex = infoPosts.findIndex((p) => p.id === id);
    const prevPost = currentIndex > 0 ? infoPosts[currentIndex - 1] : null;
    const nextPost = currentIndex < infoPosts.length - 1 ? infoPosts[currentIndex + 1] : null;

    return <InfoDetailClient post={post} prevPost={prevPost} nextPost={nextPost} />;
}
