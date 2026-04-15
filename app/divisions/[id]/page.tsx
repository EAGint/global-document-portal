"use client";

import { useParams } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { LanguageProvider } from '../../../context/LanguageContext';

const DivisionContent = () => {
  const params = useParams();
  const title = params.id ? params.id.toString().replace(/-/g, ' ').toUpperCase() : "Division";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <div className="bg-blue-900 py-20 px-6 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            {title}
          </h1>
          <p className="text-blue-200 max-w-2xl mx-auto uppercase tracking-widest text-sm">
            EAG International Delivery Division
          </p>
        </div>

        <section className="max-w-5xl mx-auto py-16 px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">Our Capabilities</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As part of EAGint's integrated delivery model, the {title} division 
                specializes in providing high-impact solutions for government and 
                international institutional partners.
              </p>
              <ul className="space-y-4">
                {["Strategic Planning", "Global Procurement", "Integrated Implementation"].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700 font-medium">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 h-64 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300">
               <span className="text-gray-400 italic">Division Project Gallery coming soon...</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default function DivisionPage() {
  return (
    <LanguageProvider>
      <DivisionContent />
    </LanguageProvider>
  );
}