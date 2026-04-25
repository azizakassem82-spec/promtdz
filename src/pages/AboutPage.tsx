import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { AnimatedHeading } from '../components/AnimatedHeading';
import { FadeIn } from '../components/FadeIn';

export default function AboutPage({ lang }: { lang: Language }) {
    const t = TRANSLATIONS[lang];
    return (
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-16 overflow-hidden pt-24">
            <div className="w-full max-w-4xl flex flex-col items-center">
                <AnimatedHeading
                    text={lang === 'dz' ? "من نحن" : "Our Story"}
                    className="text-4xl md:text-5xl lg:text-6xl font-normal mb-8 text-white drop-shadow-2xl"
                    delay={200} charDelay={20}
                />
                <FadeIn delay={800} duration={1000}>
                    <div className="liquid-glass border border-white/20 rounded-3xl p-8 md:p-12 text-left bg-black/40">
                        <h3 className="text-2xl text-teal-400 font-bold mb-4">{t.title}</h3>
                        <p className="text-slate-300 leading-relaxed mb-6">
                            Prompt DZ is the premium Algerian repository for generative AI productivity. We craft dynamic, highly-tuned AI workflows across multiple categories and languages to supercharge your potential.
                        </p>
                        <p className="text-slate-300 leading-relaxed">
                            We focus on delivering high-end prompt designs and premium AI subscriptions like ChatGPT Plus, Canva Pro, Lovable, and CapCut to maximize professional growth in Algeria and beyond.
                        </p>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
