type Language = 'en' | 'es';

class LanguageStore {
  private static instance: LanguageStore;
  private currentLanguage: Language;

  private constructor() {
    if (typeof localStorage !== 'undefined') {
      const storedLang = localStorage.getItem('language') as Language;
      this.currentLanguage = storedLang || 'es'; // Set Spanish as default
      localStorage.setItem('language', this.currentLanguage); // Ensure it's saved
    } else {
      this.currentLanguage = 'es';
    }
  }

  static getInstance(): LanguageStore {
    if (!LanguageStore.instance) {
      LanguageStore.instance = new LanguageStore();
    }
    return LanguageStore.instance;
  }

  getLanguage(): Language {
    return this.currentLanguage;
  }

  setLanguage(lang: Language): void {
    this.currentLanguage = lang;
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  }
}

export const languageStore = LanguageStore.getInstance();