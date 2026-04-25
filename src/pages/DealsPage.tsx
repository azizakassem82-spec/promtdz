import React from 'react';
import { Language } from '../types';
import { AnimatedHeading } from '../components/AnimatedHeading';
import { FadeIn } from '../components/FadeIn';
import { motion } from 'motion/react';

export default function DealsPage({ lang }: { lang: Language }) {
    return (
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden pt-20 sm:pt-24 pb-16">
            <div className="w-full max-w-5xl flex flex-col items-center">
                <AnimatedHeading
                    text={lang === 'dz' ? "الاشتراكات المميزة" : "AI Subscriptions"}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-6 sm:mb-8 text-white drop-shadow-2xl"
                    delay={200} charDelay={20}
                />
                <FadeIn delay={600} duration={1000}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full mt-6 sm:mt-8">
                        {/* ChatGPT Plus */}
                        <div className="liquid-glass border border-white/20 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left bg-black/40 gap-4 sm:gap-6">
                            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }} className="w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 shrink-0 drop-shadow-2xl">
                                <img src="/3d icons/compressed_chat-gpt.png" alt="ChatGPT 3D" className="w-full h-full object-contain brightness-110" />
                            </motion.div>
                            <div className="flex flex-col flex-1 h-full w-full">
                                <span className="bg-teal-500/20 border border-teal-500/50 text-teal-300 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold mb-3 sm:mb-4 self-center sm:self-start">PREMIUM</span>
                                <h3 className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-2">ChatGPT Plus</h3>
                                <p className="text-slate-300 mb-4 sm:mb-6 flex-1 text-xs sm:text-sm md:text-base">Access GPT-4o, advanced data analysis, and voice tools.</p>
                                <a href="https://wa.me/213676610457?text=Hello,%20I%20am%20interested%20in%20a%20ChatGPT%20Plus%20subscription!" target="_blank" rel="noopener noreferrer" className="block w-full bg-white text-black py-2.5 sm:py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors text-center text-sm sm:text-base">Start a Chat</a>
                            </div>
                        </div>

                        {/* Gemini Advanced */}
                        <div className="liquid-glass border border-white/20 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left bg-black/40 gap-4 sm:gap-6">
                            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }} className="w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 shrink-0 drop-shadow-2xl">
                                <img src="/3d icons/gemini-logo-render.png" alt="Gemini 3D" className="w-full h-full object-contain brightness-110" />
                            </motion.div>
                            <div className="flex flex-col flex-1 h-full w-full">
                                <span className="bg-indigo-500/20 border border-indigo-500/50 text-indigo-300 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold mb-3 sm:mb-4 self-center sm:self-start">ADVANCED</span>
                                <h3 className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-2">Gemini Advanced</h3>
                                <p className="text-slate-300 mb-4 sm:mb-6 flex-1 text-xs sm:text-sm md:text-base">Experience Google's most capable AI model, Ultra 1.0.</p>
                                <a href="https://wa.me/213676610457?text=Hello,%20I%20am%20interested%20in%20a%20Gemini%20Advanced%20subscription!" target="_blank" rel="noopener noreferrer" className="block w-full bg-white text-black py-2.5 sm:py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors text-center text-sm sm:text-base">Start a Chat</a>
                            </div>
                        </div>

                        {/* Lovable */}
                        <div className="liquid-glass border border-white/20 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left bg-black/40 gap-4 sm:gap-6">
                            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }} className="w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 shrink-0 drop-shadow-2xl">
                                <img src="/3d icons/lovable-492x512.png" alt="Lovable 3D" className="w-full h-full object-contain brightness-110" />
                            </motion.div>
                            <div className="flex flex-col flex-1 h-full w-full">
                                <span className="bg-pink-500/20 border border-pink-500/50 text-pink-300 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold mb-3 sm:mb-4 self-center sm:self-start">CREATIVE</span>
                                <h3 className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-2">Lovable Pro</h3>
                                <p className="text-slate-300 mb-4 sm:mb-6 flex-1 text-xs sm:text-sm md:text-base">Build software lightning fast with the power of Lovable AI.</p>
                                <a href="https://wa.me/213676610457?text=Hello,%20I%20am%20interested%20in%20Lovable%20Pro!" target="_blank" rel="noopener noreferrer" className="block w-full bg-white text-black py-2.5 sm:py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors text-center text-sm sm:text-base">Start Building</a>
                            </div>
                        </div>

                        {/* Adobe Creative Cloud */}
                        <div className="liquid-glass border border-white/20 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left bg-black/40 gap-4 sm:gap-6">
                            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }} className="w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 shrink-0 drop-shadow-2xl">
                                <img src="/3d icons/adobe-creative-cloud.png" alt="Adobe CC" className="w-full h-full object-contain brightness-110" />
                            </motion.div>
                            <div className="flex flex-col flex-1 h-full w-full">
                                <span className="bg-red-500/20 border border-red-500/50 text-red-300 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold mb-3 sm:mb-4 self-center sm:self-start">DESIGN</span>
                                <h3 className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-2">Adobe CC</h3>
                                <p className="text-slate-300 mb-4 sm:mb-6 flex-1 text-xs sm:text-sm md:text-base">Unlock the complete suite of Adobe Creative tools and Firefly AI.</p>
                                <a href="https://wa.me/213676610457?text=Hello,%20I%20am%20interested%20in%20Adobe%20Creative%20Cloud!" target="_blank" rel="noopener noreferrer" className="block w-full bg-white text-black py-2.5 sm:py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors text-center text-sm sm:text-base">Get Access</a>
                            </div>
                        </div>

                        {/* CapCut */}
                        <div className="liquid-glass border border-white/20 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left bg-black/40 gap-4 sm:gap-6">
                            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }} className="w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 shrink-0 drop-shadow-2xl">
                                <img src="/3d icons/capcut.png" alt="CapCut" className="w-full h-full object-contain brightness-110" />
                            </motion.div>
                            <div className="flex flex-col flex-1 h-full w-full">
                                <span className="bg-zinc-500/20 border border-zinc-500/50 text-zinc-300 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold mb-3 sm:mb-4 self-center sm:self-start">VIDEO</span>
                                <h3 className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-2">CapCut Pro</h3>
                                <p className="text-slate-300 mb-4 sm:mb-6 flex-1 text-xs sm:text-sm md:text-base">Professional video editing with advanced AI features.</p>
                                <a href="https://wa.me/213676610457?text=Hello,%20I%20am%20interested%20in%20CapCut%20Pro!" target="_blank" rel="noopener noreferrer" className="block w-full bg-white text-black py-2.5 sm:py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors text-center text-sm sm:text-base">Start Editing</a>
                            </div>
                        </div>

                        {/* Figma */}
                        <div className="liquid-glass border border-white/20 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left bg-black/40 gap-4 sm:gap-6">
                            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }} className="w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 shrink-0 drop-shadow-2xl">
                                <img src="/3d icons/figma.png" alt="Figma" className="w-full h-full object-contain brightness-110" />
                            </motion.div>
                            <div className="flex flex-col flex-1 h-full w-full">
                                <span className="bg-purple-500/20 border border-purple-500/50 text-purple-300 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold mb-3 sm:mb-4 self-center sm:self-start">DESIGN</span>
                                <h3 className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-2">Figma Pro</h3>
                                <p className="text-slate-300 mb-4 sm:mb-6 flex-1 text-xs sm:text-sm md:text-base">Design and prototype with powerful collaborative tools.</p>
                                <a href="https://wa.me/213676610457?text=Hello,%20I%20am%20interested%20in%20Figma%20Pro!" target="_blank" rel="noopener noreferrer" className="block w-full bg-white text-black py-2.5 sm:py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors text-center text-sm sm:text-base">Start Designing</a>
                            </div>
                        </div>

                        {/* Grok */}
                        <div className="liquid-glass border border-white/20 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left bg-black/40 gap-4 sm:gap-6">
                            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }} className="w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 shrink-0 drop-shadow-2xl">
                                <img src="/3d icons/vecteezy_grok-app-logo-transparent-background_59519664.png" alt="Grok" className="w-full h-full object-contain brightness-110" />
                            </motion.div>
                            <div className="flex flex-col flex-1 h-full w-full">
                                <span className="bg-stone-500/20 border border-stone-500/50 text-stone-300 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold mb-3 sm:mb-4 self-center sm:self-start">AI CHAT</span>
                                <h3 className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-2">Grok Premium</h3>
                                <p className="text-slate-300 mb-4 sm:mb-6 flex-1 text-xs sm:text-sm md:text-base">Real-time knowledge and fearless AI intelligence by xAI.</p>
                                <a href="https://wa.me/213676610457?text=Hello,%20I%20am%20interested%20in%20Grok%20Premium!" target="_blank" rel="noopener noreferrer" className="block w-full bg-white text-black py-2.5 sm:py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors text-center text-sm sm:text-base">Start a Chat</a>
                            </div>
                        </div>

                        {/* Coursera */}
                        <div className="liquid-glass border border-white/20 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left bg-black/40 gap-4 sm:gap-6">
                            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }} className="w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 shrink-0 drop-shadow-2xl">
                                <img src="/3d icons/vecteezy_coursera-rounded-logo-with-transparent-background-for-online_67941688.png" alt="Coursera" className="w-full h-full object-contain brightness-110" />
                            </motion.div>
                            <div className="flex flex-col flex-1 h-full w-full">
                                <span className="bg-blue-500/20 border border-blue-500/50 text-blue-300 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold mb-3 sm:mb-4 self-center sm:self-start">EDUCATION</span>
                                <h3 className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-2">Coursera Plus</h3>
                                <p className="text-slate-300 mb-4 sm:mb-6 flex-1 text-xs sm:text-sm md:text-base">Unlimited access to 7000+ top courses and certifications.</p>
                                <a href="https://wa.me/213676610457?text=Hello,%20I%20am%20interested%20in%20Coursera%20Plus!" target="_blank" rel="noopener noreferrer" className="block w-full bg-white text-black py-2.5 sm:py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors text-center text-sm sm:text-base">Start Learning</a>
                            </div>
                        </div>

                        {/* YouTube */}
                        <div className="liquid-glass border border-white/20 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left bg-black/40 gap-4 sm:gap-6">
                            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }} className="w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 shrink-0 drop-shadow-2xl">
                                <img src="/3d icons/youtube.png" alt="YouTube" className="w-full h-full object-contain brightness-110" />
                            </motion.div>
                            <div className="flex flex-col flex-1 h-full w-full">
                                <span className="bg-red-600/20 border border-red-600/50 text-red-400 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold mb-3 sm:mb-4 self-center sm:self-start">ENTERTAINMENT</span>
                                <h3 className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-2">YouTube Premium</h3>
                                <p className="text-slate-300 mb-4 sm:mb-6 flex-1 text-xs sm:text-sm md:text-base">Ad-free streaming, background play, and YouTube Music.</p>
                                <a href="https://wa.me/213676610457?text=Hello,%20I%20am%20interested%20in%20YouTube%20Premium!" target="_blank" rel="noopener noreferrer" className="block w-full bg-white text-black py-2.5 sm:py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors text-center text-sm sm:text-base">Get Premium</a>
                            </div>
                        </div>

                        {/* Claude */}
                        <div className="liquid-glass border border-white/20 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left bg-black/40 gap-4 sm:gap-6">
                            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }} className="w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 shrink-0 drop-shadow-2xl">
                                <img src="/3d icons/claude-logo-render.png" alt="Claude 3D" className="w-full h-full object-contain brightness-110" />
                            </motion.div>
                            <div className="flex flex-col flex-1 h-full w-full">
                                <span className="bg-amber-500/20 border border-amber-500/50 text-amber-300 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold mb-3 sm:mb-4 self-center sm:self-start">ADVANCED</span>
                                <h3 className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-2">Claude Pro</h3>
                                <p className="text-slate-300 mb-4 sm:mb-6 flex-1 text-xs sm:text-sm md:text-base">Experience Anthropic's most powerful AI for writing and analysis.</p>
                                <a href="https://wa.me/213676610457?text=Hello,%20I%20am%20interested%20in%20a%20Claude%20Pro%20subscription!" target="_blank" rel="noopener noreferrer" className="block w-full bg-white text-black py-2.5 sm:py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors text-center text-sm sm:text-base">Start a Chat</a>
                            </div>
                        </div>

                        {/* LinkedIn */}
                        <div className="liquid-glass border border-white/20 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left bg-black/40 gap-4 sm:gap-6">
                            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }} className="w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 shrink-0 drop-shadow-2xl">
                                <img src="/3d icons/vecteezy_3d-linkedin-logo-icon-with-new-notification-isolated-on_22493587.png" alt="LinkedIn Premium" className="w-full h-full object-contain brightness-110" />
                            </motion.div>
                            <div className="flex flex-col flex-1 h-full w-full">
                                <span className="bg-sky-500/20 border border-sky-500/50 text-sky-300 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold mb-3 sm:mb-4 self-center sm:self-start">CAREER</span>
                                <h3 className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-2">LinkedIn Pro</h3>
                                <p className="text-slate-300 mb-4 sm:mb-6 flex-1 text-xs sm:text-sm md:text-base">Accelerate your career with exclusive Premium networking tools.</p>
                                <a href="https://wa.me/213676610457?text=Hello,%20I%20am%20interested%20in%20a%20LinkedIn%20subscription!" target="_blank" rel="noopener noreferrer" className="block w-full bg-white text-black py-2.5 sm:py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors text-center text-sm sm:text-base">Upgrade Career</a>
                            </div>
                        </div>

                        {/* Duolingo */}
                        <div className="liquid-glass border border-white/20 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left bg-black/40 gap-4 sm:gap-6">
                            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }} className="w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 shrink-0 drop-shadow-2xl">
                                <img src="/3d icons/duolingo.png" alt="Duolingo" className="w-full h-full object-contain brightness-110" />
                            </motion.div>
                            <div className="flex flex-col flex-1 h-full w-full">
                                <span className="bg-lime-500/20 border border-lime-500/50 text-lime-300 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold mb-3 sm:mb-4 self-center sm:self-start">LEARNING</span>
                                <h3 className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-2">Duolingo Plus</h3>
                                <p className="text-slate-300 mb-4 sm:mb-6 flex-1 text-xs sm:text-sm md:text-base">Learn new languages completely ad-free with infinite hearts.</p>
                                <a href="https://wa.me/213676610457?text=Hello,%20I%20am%20interested%20in%20Duolingo%20Plus!" target="_blank" rel="noopener noreferrer" className="block w-full bg-white text-black py-2.5 sm:py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors text-center text-sm sm:text-base">Start Learning</a>
                            </div>
                        </div>

                        {/* Canva */}
                        <div className="liquid-glass border border-white/20 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left bg-black/40 gap-4 sm:gap-6">
                            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }} className="w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 shrink-0 drop-shadow-2xl">
                                <img src="/3d icons/vecteezy_canva-app-logo-on-a-transparent-background_56850847.png" alt="Canva" className="w-full h-full object-contain brightness-110" />
                            </motion.div>
                            <div className="flex flex-col flex-1 h-full w-full">
                                <span className="bg-indigo-400/20 border border-indigo-400/50 text-indigo-300 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold mb-3 sm:mb-4 self-center sm:self-start">DESIGN</span>
                                <h3 className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-2">Canva Pro</h3>
                                <p className="text-slate-300 mb-4 sm:mb-6 flex-1 text-xs sm:text-sm md:text-base">Unlock premium templates, magic studio, and pro assets.</p>
                                <a href="https://wa.me/213676610457?text=Hello,%20I%20am%20interested%20in%20Canva%20Pro!" target="_blank" rel="noopener noreferrer" className="block w-full bg-white text-black py-2.5 sm:py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors text-center text-sm sm:text-base">Start Designing</a>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
