"use client";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { LanguageProvider } from '../../context/LanguageContext';
import { Target, Eye, Award, History } from 'lucide-react';

const AboutContent = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <div className="bg-gray-900 py-24 px-6 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">About EAG International</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Global Sourcing. Integrated Delivery. We provide world-class infrastructure 
            and supply chain solutions for the most challenging environments.
          </p>
        </div>

        {/* Vision & Mission Section */}
        <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12">
          <div className="p-10 bg-blue-50 rounded-3xl border border-blue-100">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Eye className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To be the premier global partner in transforming complex logistical and 
              infrastructure challenges into sustainable opportunities for growth 
              and development.
            </p>
          </div>

          <div className="p-10 bg-green-50 rounded-3xl border border-green-100">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6">
              <Target className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To deliver high-impact sourcing, procurement, and construction services 
              with uncompromising integrity, ensuring excellence for governments, 
              UN agencies, and private sector partners.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-gray-50 py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-16 text-gray-900">Our Core Values</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: <Award />, title: "Excellence" },
                { icon: <History />, title: "Reliability" },
                { icon: <Target />, title: "Precision" },
                { icon: <Eye />, title: "Transparency" }
              ].map((value, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center text-blue-600 mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-bold text-gray-800">{value.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default function AboutPage() {
  return (
    <LanguageProvider>
      <AboutContent />
    </LanguageProvider>
  );
}