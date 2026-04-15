"use client";
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  const languages = [
    { code: 'EN', label: 'EN' },
    { code: 'SO', label: 'SO' },
    { code: 'AR', label: 'AR' },
    { code: 'HI', label: 'HI' },
    { code: 'TR', label: 'TR' },
    { code: 'CN', label: 'CN' },
    { code: 'DE', label: 'DE' }
  ];

  return (
    <div className="flex flex-wrap items-center justify-end gap-2 rtl:space-x-reverse">
      {languages.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`min-w-[32px] px-2 py-1 rounded text-[11px] font-bold transition-all border ${
            lang === l.code 
              ? 'bg-blue-600 text-white border-blue-600 shadow-sm' 
              : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}