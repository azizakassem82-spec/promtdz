import React from 'react';
import { Terminal, Github, Twitter, Mail } from 'lucide-react';
import { Language, Translations } from '../types';
import { LanguageSelector } from './LanguageSelector';

interface EnhancedFooterProps {
    lang: Language;
    t: Translations;
    setLang: (lang: Language) => void;
}

export const EnhancedFooter: React.FC<EnhancedFooterProps> = ({ lang, t, setLang }) => {
    return (
        <footer id="contact" className="liquid-glass border-t border-white/10 pt-12 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 mt-8 sm:mt-12 relative z-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
                <div className="flex flex-col items-start gap-4 col-span-1 md:col-span-2">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-white">
                            <Terminal className="w-4 h-4" />
                        </div>
                        <span className="text-xl font-bold uppercase text-white tracking-widest">{t.title}</span>
                    </div>
                    <p className="text-sm text-slate-300 font-medium max-w-sm leading-relaxed">
                        {lang === 'dz' ? 'مكتبتك الشاملة لكل ما يخص هندسة الذكاء الاصطناعي، بأفضل الاشتراكات التنافسية في الجزائر.' : lang === 'fr' ? "Votre bibliothèque complète pour l'ingénierie des prompts IA et les meilleurs abonnements IA en Algérie." : 'Your comprehensive library for AI engineering prompts and the best AI subscriptions in Algeria.'}
                    </p>
                    <div className="flex gap-4 mt-6">
                        <a href="https://wa.me/213676610457" target="_blank" rel="noopener noreferrer" className="transition-transform hover:-translate-y-2 relative group hover:scale-110">
                            <img src="/contact icons/whatsapp.png" alt="WhatsApp" className="w-12 h-12 object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] filter brightness-110" />
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-white font-bold bg-black/60 px-2.5 py-1 rounded-md backdrop-blur whitespace-nowrap">WhatsApp</div>
                        </a>
                        <a href="https://www.instagram.com/webcrafters.agenc?igsh=MXdxdmI0cW8zY2F1YQ==" target="_blank" rel="noopener noreferrer" className="transition-transform hover:-translate-y-2 relative group hover:scale-110">
                            <img src="/contact icons/instagram.png" alt="Instagram" className="w-12 h-12 object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] filter brightness-110" />
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-white font-bold bg-black/60 px-2.5 py-1 rounded-md backdrop-blur whitespace-nowrap">Instagram</div>
                        </a>
                        <a href="https://www.facebook.com/share/1BJEQP5pQb/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:-translate-y-2 relative group hover:scale-110">
                            <img src="/contact icons/facebook.png" alt="Facebook" className="w-12 h-12 object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] filter brightness-110" />
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-white font-bold bg-black/60 px-2.5 py-1 rounded-md backdrop-blur whitespace-nowrap">Facebook</div>
                        </a>
                        <a href="https://t.me/WebCraftersdz" target="_blank" rel="noopener noreferrer" className="transition-transform hover:-translate-y-2 relative group hover:scale-110">
                            <img src="/contact icons/telegrame.png" alt="Telegram" className="w-12 h-12 object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] filter brightness-110" />
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-white font-bold bg-black/60 px-2.5 py-1 rounded-md backdrop-blur whitespace-nowrap">Telegram</div>
                        </a>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-white mb-4">{lang === 'dz' ? 'روابط سريعة' : lang === 'fr' ? 'Liens Rapides' : 'Quick Links'}</h3>
                    <ul className="space-y-3">
                        <li><a href="/" className="text-sm text-slate-400 hover:text-white transition-colors">{lang === 'dz' ? 'الرئيسية' : lang === 'fr' ? 'Accueil' : 'Home'}</a></li>
                        <li><a href="/about" className="text-sm text-slate-400 hover:text-white transition-colors">{lang === 'dz' ? 'من نحن' : lang === 'fr' ? 'À propos' : 'About Us'}</a></li>
                        <li><a href="/deals" className="text-sm text-slate-400 hover:text-white transition-colors">{lang === 'dz' ? 'العروض والاشتراكات' : lang === 'fr' ? 'Abonnements' : 'Deals & Subscriptions'}</a></li>
                    </ul>
                </div>

                <div>
                    <div className="mb-6">
                        <h3 className="font-bold text-white mb-4">{lang === 'dz' ? 'اللغة' : lang === 'fr' ? 'Langue' : 'Language'}</h3>
                        <LanguageSelector currentLang={lang} onLanguageChange={setLang} variant="footer" />
                    </div>
                </div>
            </div>

            <div className="container mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500 font-bold tracking-[0.1em] uppercase">
                    &copy; {new Date().getFullYear()} PROMPT DZ PROTOCOL. {lang === 'dz' ? 'جميع الحقوق محفوظة.' : lang === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
                </div>
                <div className="text-xs text-slate-500">
                    {lang === 'dz' ? 'صنع في الجزائر' : lang === 'fr' ? 'Fabriqué en Algérie' : 'Made in Algeria'}
                </div>
            </div>
        </footer>
    );
};
