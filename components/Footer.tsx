"use client";

import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-8 mt-20">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
        
        {/* Column 1: Company */}
        <div>
          <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">{t('about')}</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Overview</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Leadership</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">History</a></li>
          </ul>
        </div>

        {/* Column 2: Compliance (CRITICAL RULE) */}
        <div>
          <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Compliance</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition-colors font-semibold text-blue-400">Compliance Hub</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Safeguarding & PSEA</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Donor Summary</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Whistleblowing</a></li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Resources</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Insights & Articles</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Download Center</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">FAQs</a></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">{t('contact')}</h3>
          <p className="text-sm mb-4">EAG International HQ</p>
          <p className="text-sm text-gray-500 italic">Global Sourcing. Integrated Delivery.</p>
        </div>
      </div>

      {/* Bottom Bar: Legal items as per your Global Rules */}
      <div className="max-w-[1400px] mx-auto pt-8 flex flex-col md:row justify-between items-center text-xs text-gray-500">
        <p>© {year} EAG International. All rights reserved.</p>
        <div className="flex space-x-6 rtl:space-x-reverse mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Use</a>
          <a href="#" className="hover:text-white">Code of Conduct</a>
        </div>
      </div>
    </footer>
  );
}