/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Prompt, Category, Language, Translations } from './types';

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    title: "Prompt DZ",
    subtitle: "Your premium gateway to curated AI productivity across three languages.",
    searchPlaceholder: "Search prompts...",
    allPrompts: "All Collections",
    copyBtn: "Copy Text",
    copied: "Copied!",
    shareBtn: "Share",
    footerText: "Crafted for elite workflows.",
    newPrompt: "Design Custom",
    noResults: "No prompts matching your criteria.",
    clearFilters: "Reset View",
    premiumTag: "AI Subs"
  },
  fr: {
    title: "Prompt DZ",
    subtitle: "Votre portail premium vers une productivité IA optimisée en trois langues.",
    searchPlaceholder: "Rechercher...",
    allPrompts: "Collections",
    copyBtn: "Copier",
    copied: "Copié!",
    shareBtn: "Partager",
    footerText: "Conçu pour les flux de travail d'élite.",
    newPrompt: "Créer un Design",
    noResults: "Aucun résultat trouvé.",
    clearFilters: "Réinitialiser",
    premiumTag: "Abonnements IA"
  },
  dz: {
    title: "Prompt DZ",
    subtitle: "بوابتكم الممتازة للإنتاجية بالذكاء الاصطناعي بثلاث لغات.",
    searchPlaceholder: "ابحث هنا...",
    allPrompts: "كل المجموعات",
    copyBtn: "نسخ",
    copied: "تم النسخ!",
    shareBtn: "مشاركة",
    footerText: "مصمم لأعمال النخبة.",
    newPrompt: "تصميم مخصص",
    noResults: "لم يتم العثور على أي نتائج.",
    clearFilters: "إعادة تعيين",
    premiumTag: "اشتراكات AI"
  }
};

export const CATEGORIES: Category[] = [
  {
    id: "writing",
    name: {
      en: "Writing",
      fr: "Rédaction",
      dz: "كتابة"
    }
  },
  {
    id: "coding",
    name: {
      en: "Coding",
      fr: "Codage",
      dz: "برمجة"
    }
  },
  {
    id: "design",
    name: {
      en: "Design",
      fr: "Design",
      dz: "تصميم"
    }
  },
  {
    id: "business",
    name: {
      en: "Business",
      fr: "Affaires",
      dz: "بيزنس"
    }
  },
  {
    id: "prompts-chat",
    name: {
      en: "Awesome Prompts",
      fr: "Super Prompts",
      dz: "أفضل المحفزات"
    }
  }
];

import promptsData from './data/prompts.json';

export const INITIAL_PROMPTS: Prompt[] = promptsData as Prompt[];

export const THEME = {
  accent: "#0f766e", // Teal 700
  background: "#f8fafc", // Slate 50
  text: "#0f172a", // Slate 900
  card: "#ffffff" // White
};
