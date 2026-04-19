"use client";
import React, { createContext, useState, useContext, useEffect } from 'react';

const translations: Record<string, Record<string, string>> = {
  EN: { title: "Global Document Portal", upload: "Upload Document", category: "Select Category", submit: "Submit Document", fileLabel: "Choose a file...", home: "Home", about: "About EAGint", divisions: "Divisions", sectors: "Sectors We Serve", esg: "ESG & Impact", compliance: "Compliance", contact: "Contact" },
  SO: { title: "Xariirka Dukumiintiga", upload: "Soo Rar Dukumiinti", category: "Dooro Qaybta", submit: "Gudbi Dukumiintiga", fileLabel: "Dooro fayl...", home: "Hoyga", about: "Nagu Saabsan", divisions: "Qaybaha", sectors: "Adeegyada", esg: "ESG", compliance: "U hoggaansanaanta", contact: "Nala Soo Xiriir" },
  AR: { title: "البوابة العالمية للمستندات", upload: "تحميل المستند", category: "اختر الفئة", submit: "إرسال المستند", fileLabel: "...اختر ملفا", home: "الرئيسية", about: "حول الشركة", divisions: "الأقسام", sectors: "القطاعات", esg: "التأثير", compliance: "الامتثال", contact: "اتصل بنا" },
  // NEW LANGUAGES
  HI: { title: "वैश्विक दस्तावेज़ पोर्टल", upload: "दस्तावेज़ अपलोड करें", category: "श्रेणी चुनें", submit: "दस्तावेज़ जमा करें", fileLabel: "फ़ाइल चुनें...", home: "होम", about: "EAGint के बारे में", divisions: "प्रभाग", sectors: "सेवा क्षेत्र", esg: "ईएसजी", compliance: "अनुपालन", contact: "संपर्क" },
  TR: { title: "Küresel Belge Portalı", upload: "Belge Yükle", category: "Kategori Seç", submit: "Belgeyi Gönder", fileLabel: "Bir dosya seçin...", home: "Anasayfa", about: "EAGint Hakkında", divisions: "Bölümler", sectors: "Sektörler", esg: "ESG", compliance: "Uyum", contact: "İletişim" },
  CN: { title: "全球文件门户", upload: "上传文件", category: "选择类别", submit: "提交文件", fileLabel: "选择文件...", home: "首页", about: "关于 EAGint", divisions: "部门", sectors: "服务领域", esg: "ESG", compliance: "合规性", contact: "联系我们" },
  DE: { title: "Globales Dokumentenportal", upload: "Dokument hochladen", category: "Kategorie wählen", submit: "Dokument einreichen", fileLabel: "Datei auswählen...", home: "Startseite", about: "Über EAGint", divisions: "Abteilungen", sectors: "Branchen", esg: "ESG", compliance: "Compliance", contact: "Kontakt" }
};

interface LanguageContextType {
  lang: string;
  setLang: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState('EN');

  useEffect(() => {
    // AR is Right-to-Left, the others are Left-to-Right
    document.documentElement.dir = lang === 'AR' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang.toLowerCase();
  }, [lang]);

  const t = (key: string) => translations[lang]?.[key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};