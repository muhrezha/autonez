"use client";

import SectionWrapper from "@/components/SectionWrapper";


export default function AboutPage() {
    return (
        <>
            <SectionWrapper className="section-padding mt-1 bg-white">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary rounded-full">
                                About us
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                                Autonez Communications
                            </h2>
                            <div className="space-y-4 text-slate-500 leading-relaxed">
                                <p>
                                    is a company that focuses on providing solutions for
                                    events and digital consultants, since 2015 we have begun to open up
                                    opportunities in the world of event management, previously we have focused
                                    on digital industries such as: design, website creation, multimedia, and digital
                                    marketing.
                                    We operate with a team that is trained, professional and efficient in carrying
                                    out activities that are part of our service. So that we are the best solution for
                                    the needs of companies or individuals
                                    Autonez is a company that has a wealth of experience in services, especially
                                    event organizers and Digital consultant. so we are not only consultants, but we
                                    are a circle of positive energy with one goal, namely client satisfaction.                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 p-8 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-7xl md:text-8xl font-black gradient-text mb-2" style={{ fontFamily: 'var(--font-heading)' }}>2015</div>
                                    <div className="text-lg font-semibold text-navy">Established</div>
                                    <div className="text-sm text-slate-400 mt-2">Jakarta, Indonesia</div>
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-2xl -z-10" />
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
}
