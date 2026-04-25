import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Terminal, Sparkles, ArrowUp, Menu, X } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { SubscriptionModal } from './SubscriptionModal';
import { EnhancedFooter } from './EnhancedFooter';
import { BackgroundVideo } from './BackgroundVideo';
import { Language, Translations } from '../types';
import { TRANSLATIONS } from '../constants';

interface LayoutProps {
    lang: Language;
    setLang: (lang: Language) => void;
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ lang, setLang, children }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const t = TRANSLATIONS[lang];
    const isRtl = lang === 'dz';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            setShowBackToTop(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-transparent text-white font-sans selection:bg-white/20 relative">
            <BackgroundVideo />

            {/* 3D Icons Placeholders */}
            <div className="fixed left-12 top-1/2 -translate-y-1/2 z-0 hidden xl:block opacity-80 hover:opacity-100 transition-all duration-500 pointer-events-none">
                <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
                    <img src="/3d icons/compressed_chat-gpt.png" alt="ChatGPT Logo" className="w-48 h-auto object-contain drop-shadow-2xl brightness-125" onError={(e) => {
                        // Fallback if image is missing
                        (e.target as HTMLElement).style.display = 'none';
                    }} />
                </motion.div>
            </div>

            <div className="fixed right-12 top-1/2 -translate-y-1/2 z-0 hidden xl:block opacity-80 hover:opacity-100 transition-all duration-500 pointer-events-none">
                <motion.div animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
                    <img src="/3d icons/gemini-logo-render.png" alt="Gemini Logo" className="w-48 h-auto object-contain drop-shadow-2xl brightness-125" onError={(e) => {
                        // Fallback if image is missing
                        (e.target as HTMLElement).style.display = 'none';
                    }} />
                </motion.div>
            </div>

            {/* Navigation */}
            <div className="absolute top-0 left-0 right-0 z-[100] px-4 md:px-12 lg:px-16 pt-4 md:pt-6 pointer-events-none">
                <nav className="liquid-glass rounded-xl flex items-center justify-between px-3 md:px-4 py-2 pointer-events-auto bg-black/20 backdrop-blur-md shadow-lg relative z-[100]">
                    <div className="flex items-center gap-2 md:gap-0">
                        <button className="md:hidden p-1.5 text-white hover:bg-white/10 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? <X className="w-5 h-5 pointer-events-none" /> : <Menu className="w-5 h-5 pointer-events-none" />}
                        </button>
                        <Link to="/" className="text-lg md:text-2xl font-semibold tracking-tight text-white hover:text-slate-200 transition-colors uppercase">PROMPT DZ</Link>
                    </div>

                    <div className="hidden md:flex gap-8 text-sm relative z-50">
                        <Link to="/" className="text-white hover:text-gray-300 transition-colors uppercase tracking-widest">{lang === 'dz' ? 'الرئيسية' : lang === 'fr' ? 'Accueil' : 'Home'}</Link>
                        <Link to="/deals" className="text-white hover:text-gray-300 transition-colors uppercase tracking-widest">{lang === 'dz' ? 'الاشتراكات' : lang === 'fr' ? 'Abonnements' : 'AI Subs'}</Link>
                        <Link to="/about" className="text-white hover:text-gray-300 transition-colors uppercase tracking-widest">{lang === 'dz' ? 'من نحن' : lang === 'fr' ? 'À propos' : 'About'}</Link>
                    </div>

                    <div className="flex items-center gap-2 md:gap-4 relative z-50">
                        <LanguageSelector currentLang={lang} onLanguageChange={setLang} variant="nav" />
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-white text-black px-3 py-1.5 md:px-6 md:py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-gray-200 transition-colors uppercase tracking-wider whitespace-nowrap"
                        >
                            {t.premiumTag}
                        </button>
                    </div>
                </nav>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            className="absolute top-16 left-4 right-4 liquid-glass rounded-xl p-4 flex flex-col gap-4 shadow-2xl border border-white/20 pointer-events-auto md:hidden z-50 bg-black/80 backdrop-blur-xl"
                        >
                            <Link onClick={() => setIsMobileMenuOpen(false)} to="/" className={`text-white text-sm font-semibold hover:text-teal-400 transition-colors uppercase tracking-widest border-b border-white/10 pb-3 ${isRtl ? 'pr-2 text-right' : 'pl-2 text-left'}`}>{lang === 'dz' ? 'الرئيسية' : lang === 'fr' ? 'Accueil' : 'Home'}</Link>
                            <Link onClick={() => setIsMobileMenuOpen(false)} to="/deals" className={`text-white text-sm font-semibold hover:text-teal-400 transition-colors uppercase tracking-widest border-b border-white/10 pb-3 ${isRtl ? 'pr-2 text-right' : 'pl-2 text-left'}`}>{lang === 'dz' ? 'الاشتراكات' : lang === 'fr' ? 'Abonnements' : 'AI Subs'}</Link>
                            <Link onClick={() => setIsMobileMenuOpen(false)} to="/about" className={`text-white text-sm font-semibold hover:text-teal-400 transition-colors uppercase tracking-widest pb-1 ${isRtl ? 'pr-2 text-right' : 'pl-2 text-left'}`}>{lang === 'dz' ? 'من نحن' : lang === 'fr' ? 'À propos' : 'About'}</Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Main Content Area */}
            <div className="relative z-10">
                {children}
            </div>

            <EnhancedFooter lang={lang} setLang={setLang} t={t} />
            <SubscriptionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} lang={lang} t={t} />

            <AnimatePresence>
                {showBackToTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 20 }}
                        whileHover={{ scale: 1.1, translateY: -5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-6 md:right-12 z-[100] w-14 h-14 rounded-full bg-gradient-to-t from-teal-900 to-teal-400 flex items-center justify-center border-t border-teal-200 shadow-[0_0_30px_rgba(45,212,191,0.8),inset_0_4px_10px_rgba(255,255,255,0.4)] pointer-events-auto overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-white/20 blur-md pointer-events-none group-hover:bg-white/40 transition-colors" />
                        <ArrowUp className="w-7 h-7 text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)] z-10 -translate-y-0.5 group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};
