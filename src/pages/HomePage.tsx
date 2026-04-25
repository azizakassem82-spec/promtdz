import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Copy,
  Check,
  Terminal,
  PenTool,
  Layout,
  Briefcase,
  X,
  ChevronRight,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { INITIAL_PROMPTS, CATEGORIES, TRANSLATIONS } from '../constants';
import { Language } from '../types';
import { AnimatedHeading } from '../components/AnimatedHeading';
import { FadeIn } from '../components/FadeIn';

const getCategoryIcon = (categoryId: string) => {
  switch (categoryId) {
    case 'writing': return <PenTool className="w-4 h-4" />;
    case 'coding': return <Terminal className="w-4 h-4" />;
    case 'design': return <Layout className="w-4 h-4" />;
    case 'business': return <Briefcase className="w-4 h-4" />;
    case 'prompts-chat': return <MessageSquare className="w-4 h-4" />;
    default: return <ChevronRight className="w-4 h-4" />;
  }
};

export default function HomePage({ lang }: { lang: Language }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(21);

  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'dz';

  const filteredPrompts = useMemo(() => {
    return INITIAL_PROMPTS.filter(prompt => {
      const title = (typeof prompt.title === 'string' ? prompt.title : prompt.title[lang]) || '';
      const desc = (typeof prompt.description === 'string' ? prompt.description : prompt.description[lang]) || '';
      const promptText = prompt.promptText || '';

      const query = searchQuery.toLowerCase();
      const matchesSearch =
        title.toLowerCase().includes(query) ||
        desc.toLowerCase().includes(query) ||
        promptText.toLowerCase().includes(query);

      const matchesCategory = !activeCategoryId || prompt.category === activeCategoryId;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategoryId, lang]);

  // Reset visible count when filters change
  React.useEffect(() => {
    setVisibleCount(21);
  }, [searchQuery, activeCategoryId]);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getLocalizedValue = (val: Record<Language, string> | string) => {
    return typeof val === 'string' ? val : val[lang];
  };

  const heroDescriptions = {
    en: <>Prompt DZ — Algeria's #1 AI Prompt Community.<br />Discover, share, and master the best prompts to supercharge your productivity and creativity.</>,
    fr: <>Prompt DZ — La première communauté algérienne dédiée à l'intelligence artificielle.<br />Découvrez, partagez et maîtrisez les meilleurs prompts pour booster votre productivité.</>,
    dz: <>Prompt DZ — مجتمع الجزائريين الأول في عالم الذكاء الاصطناعي.<br />اكتشف أقوى الـ prompts، شاركها مع مجتمعك، وارتقِ بإنتاجيتك إلى مستوى آخر.</>
  };

  return (
    <>
      <div className="relative z-10 min-h-[100svh] flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden">
        <div className="w-full max-w-4xl flex flex-col items-center mt-20 mb-24 z-10 text-center">
          <AnimatedHeading
            text={t.subtitle}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-white drop-shadow-2xl max-w-4xl tracking-tight leading-tight text-center"
            delay={200}
            charDelay={25}
          />
          <FadeIn delay={800} duration={1000}>
            <p className="text-sm sm:text-base md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto font-medium px-4 leading-relaxed text-center">
              {heroDescriptions[lang]}
            </p>
          </FadeIn>
          <FadeIn delay={1200} duration={1000}>
            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-black px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-xl w-full sm:w-auto">
                {lang === 'dz' ? 'تواصل معنا' : lang === 'fr' ? 'Nous contacter' : 'Contact Us'}
              </button>
              <button onClick={() => document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' })} className="liquid-glass border border-white/20 text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors w-full sm:w-auto">
                {lang === 'dz' ? 'اكتشف الآن' : lang === 'fr' ? 'Explorer' : 'Explore Now'}
              </button>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={1400} duration={1000} className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 pb-8 sm:pb-12 flex justify-center pointer-events-none z-0">
          <div className="liquid-glass border border-white/20 px-4 sm:px-6 py-2 sm:py-3 rounded-xl pointer-events-none shadow-2xl">
            <p className="text-xs sm:text-sm md:text-xl font-light text-white uppercase tracking-widest opacity-80" style={{ letterSpacing: '0.2em' }}>
              {lang === 'dz' ? 'شغف • إبداع • احترافية' : lang === 'fr' ? 'Créativité • Innovation • Qualité' : 'Creative • Innovative • Premium'}
            </p>
          </div>
        </FadeIn>
      </div>

      <main id="explore" className="container mx-auto px-4 sm:px-6 pb-24 relative z-20 pt-16 min-h-screen">
        <div className="container mx-auto max-w-4xl text-center mb-12 sm:mb-16">
          <div className="relative w-full max-w-lg mx-auto group">
            <Search className={`absolute ${isRtl ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-teal-400 transition-colors`} />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl py-3 sm:py-4 ${isRtl ? 'pr-12 pl-4' : 'pl-12 pr-4'} focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all shadow-2xl text-white placeholder-white/30 text-sm sm:text-base`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className={`absolute ${isRtl ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded-full text-slate-400 transition-colors`}
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-12 relative z-30">
          <button
            onClick={() => setActiveCategoryId(null)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${!activeCategoryId
              ? 'bg-gradient-to-r from-teal-700 to-teal-600 text-white shadow-lg shadow-teal-900/20'
              : 'bg-white/80 backdrop-blur border border-slate-200/50 text-slate-600 hover:border-teal-500 hover:text-teal-700'
              }`}
          >
            {t.allPrompts}
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryId(cat.id)}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${activeCategoryId === cat.id
                ? 'bg-gradient-to-r from-teal-700 to-teal-600 text-white shadow-lg shadow-teal-900/20'
                : 'bg-white/80 backdrop-blur border border-slate-200/50 text-slate-600 hover:border-teal-500 hover:text-teal-700'
                }`}
            >
              {getCategoryIcon(cat.id)}
              {getLocalizedValue(cat.name)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          <AnimatePresence mode="popLayout">
            {filteredPrompts.slice(0, visibleCount).map((prompt, index) => (
              <motion.div
                key={prompt.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: (index % 21) * 0.05 }}
                className="group relative liquid-glass border border-white/20 rounded-[2rem] p-6 sm:p-8 shadow-2xl transition-all flex flex-col h-full overflow-hidden"
              >
                <div className="flex items-start justify-between mb-4 sm:mb-6 relative z-10">
                  <div className={`flex items-center gap-2 text-[9px] sm:text-[10px] font-black text-white bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full tracking-widest uppercase ${isRtl ? 'flex-row-reverse' : ''}`}>
                    <span className="opacity-70">{getCategoryIcon(prompt.category)}</span>
                    {getLocalizedValue(CATEGORIES.find(c => c.id === prompt.category)?.name || '')}
                  </div>
                </div>

                <h3 className={`text-xl sm:text-2xl font-black mb-2 sm:mb-3 text-teal-400 opacity-90 transition-colors uppercase italic text-start tracking-tight relative z-10 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]`}>
                  {getLocalizedValue(prompt.title)}
                </h3>
                <p className={`text-xs sm:text-sm text-slate-300 mb-4 sm:mb-6 line-clamp-2 text-start relative z-10`}>
                  {getLocalizedValue(prompt.description)}
                </p>

                <div className="relative mt-auto z-10">
                  <div className="bg-black/40 border border-white/10 rounded-2xl p-3 sm:p-4 mb-3 sm:mb-4 font-mono text-xs sm:text-sm text-slate-300 overflow-hidden relative shadow-inner">
                    <p className={`line-clamp-4 leading-relaxed text-start`}>
                      {prompt.promptText}
                    </p>
                    <div className="absolute inset-x-0 bottom-0 h-8 sm:h-10 bg-gradient-to-t from-zinc-900/90 to-transparent" />
                  </div>

                  <div className={`flex items-center gap-2 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                    <button
                      onClick={() => copyToClipboard(prompt.promptText, prompt.id)}
                      className={`flex-1 flex items-center justify-center gap-2 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all active:scale-95 bg-slate-900 text-white hover:bg-teal-800 hover:shadow-lg shadow-teal-900/20`}
                    >
                      {copiedId === prompt.id ? (
                        <>
                          <Check className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-400`} />
                          <span>{t.copied}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          <span>{t.copyBtn}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {visibleCount < filteredPrompts.length && (
          <div className="flex justify-center mt-12 mb-8 relative z-20">
            <button
              onClick={() => setVisibleCount(prev => prev + 21)}
              className="group liquid-glass border border-white/20 text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black transition-all shadow-xl flex items-center gap-2"
            >
              {lang === 'dz' ? 'عرض المزيد' : lang === 'fr' ? 'Charger Plus' : 'Load More'}
            </button>
          </div>
        )}

        {filteredPrompts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-32 text-center"
          >
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-teal-100 blur-3xl opacity-30 rounded-full scale-150" />
              <div className="relative w-24 h-24 bg-white/80 backdrop-blur border border-slate-100 rounded-[2.5rem] shadow-xl shadow-slate-200/40 flex items-center justify-center">
                <Search className="w-10 h-10 text-teal-600/30" />
                <motion.div
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-teal-500/20"
                >
                  <Sparkles className="w-5 h-5" />
                </motion.div>
              </div>
            </div>

            <h3 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">
              {t.noResults}
            </h3>
            <p className="text-slate-500 max-w-sm mb-10 font-medium leading-relaxed">
              {lang === 'dz'
                ? 'لم يتم العثور على أي نتائج تطابق بحثك. حاول تغيير الكلمات المفتاحية أو التصنيفات.'
                : 'We couldn\'t find any prompts matching your search. Try adjusting your keywords or category filters.'}
            </p>

            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategoryId(null);
              }}
              className="group relative px-8 py-3 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-[0.2em] overflow-hidden transition-all hover:pr-12"
            >
              <span className="relative z-10">{t.clearFilters}</span>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
                <ChevronRight className="w-4 h-4" />
              </div>
            </button>
          </motion.div>
        )}
      </main>
    </>
  );
}
