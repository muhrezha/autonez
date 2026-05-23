"use client";

import SectionWrapper from "@/components/SectionWrapper";


export default function AboutPage() {
    return (
        <>
            <SectionWrapper className="mt-10 bg-white"> </SectionWrapper>

            <SectionWrapper className="section-padding mt-2 bg-white">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase bg-accent/10 text-accent rounded-full">
                                About us
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                                Autonez Communications
                            </h2>
                            <div className="space-y-4 text-black leading-relaxed">
                                <p>
                                    Since 2015, Autonez Communications has been a leading force in the <strong>Event Management and Production</strong> industry. We offer a comprehensive <strong>One-Stop Solution</strong>, streamlining the complex process of event planning into a single, seamless experience.
                                    Our expertise spans from conceptualizing innovative ideas to delivering flawless execution. We take pride in our in-house production capabilities, providing custom-built booths, stages, and high-quality backdrops. Equipped with professional sound, lighting, and premium LED technology, alongside curated talent management, we ensure every element of your event is handled with precision.
                                    At Autonez, we are more than just consultants—we are a team fueled by positive energy and a shared vision. Our mission is simple: To achieve absolute client satisfaction by delivering excellence that stands above the rest.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-3xl bg-gradient-to-br from-accent/10 via-accent/5 to-accent/5 p-8 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-7xl md:text-8xl font-black gradient-text mb-2" style={{ fontFamily: 'var(--font-heading)' }}>2015</div>
                                    <div className="text-lg font-semibold text-navy">Established</div>
                                    <div className="text-sm text-slate-400 mt-2">Jakarta, Indonesia</div>
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-2xl -z-10" />
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-2xl -z-10" />
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
}
