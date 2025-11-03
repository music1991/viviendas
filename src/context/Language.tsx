import React, { createContext, useContext, useState, type ReactNode } from 'react';
import en from '../locales/en.json';
import es from '../locales/es.json';

export type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string; 
  tObj: <T = unknown>(key: string) => T;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function pick(obj: any, path: string) {
  return path.split('.').reduce((acc: any, k) => (acc ? acc[k] : undefined), obj);
}

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const getDict = () => (language === 'en' ? en : es);

  const t = (key: string): string => {
    const v = pick(getDict(), key);
    return typeof v === 'string' ? v : key;
  };
  const tObj = <T = unknown>(key: string): T => {
    return pick(getDict(), key) as T;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tObj }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
