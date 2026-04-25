import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';
import { Language, Translations } from '../types';

interface SubscriptionModalProps {
    isOpen: boolean;
    onClose: () => void;
    lang: Language;
    t: Translations;
}

export const SubscriptionModal: React.FC<SubscriptionModalProps> = ({ isOpen, onClose, lang, t }) => {
    const isRtl = lang === 'dz';

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100]"
                    />
                    <div className="fixed inset-0 flex items-center justify-center p-4 z-[101] pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-white w-full max-w-lg rounded-3xl p-8 shadow-2xl pointer-events-auto relative overflow-hidden"
                            dir={isRtl ? 'rtl' : 'ltr'}
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />

                            <button
                                onClick={onClose}
                                className={`absolute top-6 ${isRtl ? 'left-6' : 'right-6'} p-2 text-slate-400 hover:bg-slate-100 rounded-full transition-colors`}
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center shadow-inner">
                                    <Sparkles className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black text-slate-900">
                                        {lang === 'dz' ? 'اشتراكات الذكاء الاصطناعي' : 'AI Subscriptions'}
                                    </h2>
                                    <p className="text-slate-500 font-medium">
                                        {lang === 'dz' ? 'أفضل أسعار حسابات الذكاء الاصطناعي في الجزائر' : 'Best prices for premium AI accounts in Algeria'}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    lang === 'dz' ? 'اشتراكات و حسابات ChatGPT Plus' : 'ChatGPT Plus Accounts',
                                    lang === 'dz' ? 'اشتراكات Canva Pro' : 'Canva Pro Subscriptions',
                                    lang === 'dz' ? 'تفعيل CapCut Pro' : 'CapCut Pro Activation',
                                    lang === 'dz' ? 'حسابات Lovable و Claude Pro' : 'Lovable & Claude Pro Accounts',
                                    lang === 'dz' ? 'تفعيل مضمون وأسعار تنافسية' : 'Guaranteed activation & competitive pricing',
                                ].map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-teal-500" />
                                        <span className="text-slate-700 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8 text-center">
                                <div className="text-sm text-slate-500 font-medium">
                                    {lang === 'dz' ? 'تواصل معنا للحصول على الأسعار والعروض الحالية !' : 'Contact us to get the current pricing and offers!'}
                                </div>
                            </div>

                            <button
                                onClick={() => onClose()}
                                className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-teal-800 hover:shadow-lg hover:shadow-teal-900/20 transition-all active:scale-95 flex items-center justify-center gap-2"
                            >
                                <MessageSquare className="w-5 h-5" />
                                {lang === 'dz' ? 'تواصل معنا - Contact Us' : 'Contact Us'}
                            </button>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};
