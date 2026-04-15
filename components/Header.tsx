"use client";
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { ChevronDown } from 'lucide-react';

export default function Header() {
  const { t } = useLanguage();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const menuData = [
    { name: t('home'), type: 'link', link: "/" },
    { 
      name: t('about'), 
      type: 'dropdown', 
      items: ["Overview", "Vision & Mission", "Leadership", "CEO Message", "History", "Corporate Facts"] 
    },
    { 
      name: t('divisions'), 
      type: 'dropdown', 
      items: [
        "Marine & Port Infrastructure", 
        "Capacity Development", 
        "Global Procurement", 
        "General Trading", 
        "Construction & Real Estate",
        "Logistics & Supply Chain",
        "Energy & Environment",
        "Digital Solutions",
        "Agriculture & Livestock",
        "Tender Services",
        "Humanitarian Services",
        "Hospitality & Travel",
        "Education Infrastructure"
      ] 
    },
    { 
      name: t('sectors'), 
      type: 'dropdown', 
      items: ["Governments", "United Nations", "NGOs", "Private Sector & PPPs"] 
    },
    { name: t('esg'), type: 'link', link: "#" },
    { name: t('compliance'), type: 'link', link: "/compliance" },
    { name: t('contact'), type: 'link', link: "#" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm font-sans text-black">
      <div className="max-w-[1400px] mx-auto px-6 py-3 flex justify-between items-center text-black">
        <img src="/logo.png" alt="EAGint Logo" className="h-12 w-auto object-contain" />
        <LanguageSwitcher />
      </div>

      <nav className="bg-gray-50 border-t border-gray-100 relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <ul className="flex items-center justify-between py-1 rtl:space-x-reverse">
            {menuData.map((menu, index) => (
              <li 
                key={index} 
                className="relative group py-3"
                onMouseEnter={() => setActiveMenu(menu.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                {menu.type === 'link' ? (
                   <a href={menu.link} className="flex items-center text-[12px] font-bold text-gray-700 hover:text-blue-600 uppercase tracking-tighter transition-colors">
                    {menu.name}
                   </a>
                ) : (
                  <button className="flex items-center text-[12px] font-bold text-gray-700 hover:text-blue-600 uppercase tracking-tighter transition-colors">
                    {menu.name}
                    <ChevronDown className="ml-1 w-3 h-3 text-gray-400" />
                  </button>
                )}

                {menu.type === 'dropdown' && activeMenu === menu.name && (
                  <div className="absolute top-[100%] left-0 w-64 bg-white shadow-xl border border-gray-100 rounded-b-lg py-2 z-">
                    {menu.items?.map((subItem, i) => (
                      <a 
                        key={i} 
                        href={`/divisions/${subItem.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="block px-4 py-2 text-[13px] text-gray-600 hover:bg-blue-50 hover:text-blue-700"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}