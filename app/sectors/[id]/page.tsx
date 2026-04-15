"use client";

import { useParams } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { LanguageProvider } from '../../../context/LanguageContext';
import { Handshake, Users, Landmark, Building2 } from 'lucide-react';

const SectorContent = () => {
  const params = useParams();
  const title = params.id ? params.id.toString().replace(/-/g, ' ').toUpperCase() : "Sector";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-white">
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-24 px-6 text-white text-center">
          <Handshake className="w-16 h-16 mx-auto mb-6 text-blue-300" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Tailored integrated delivery solutions for our global partners.
          </p>
        </div>

        <section className="max-w-6xl mx-auto py-20 px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: <Landmark />, label: "Public Strategy" },
              { icon: <Users />, label: "Community Impact" },
              { icon: <Building2 />, label: "Infrastructure" }
            ].map((item, i) => (
              <div key={i} className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-blue-600 mb-4 flex justify-center">{item.icon}</div>
                <h3 className="font-bold text-gray-900">{item.label}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default function SectorPage() {
  return (
    <LanguageProvider>
      <SectorContent />
    </LanguageProvider>
  );
}