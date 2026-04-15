"use client";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { LanguageProvider } from '../../context/LanguageContext';
import { ShieldCheck, FileText, Lock, Users } from 'lucide-react';

const ComplianceContent = () => {
  const certifications = [
    { title: "ISO 9001:2015", desc: "Quality Management Systems" },
    { title: "PSEA Compliant", desc: "Protection Against Sexual Exploitation" },
    { title: "Trace Certified", desc: "Anti-Bribery and Due Diligence" },
    { title: "UNGM Level 2", desc: "UN Global Marketplace Registered" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Compliance & Safeguarding</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              EAG International operates with the highest standards of integrity, 
              transparency, and accountability in every sector we serve.
            </p>
          </div>

          {/* Grid of Compliance Pillars */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {certifications.map((cert, i) => (
              <div key={i} className="flex p-6 border border-gray-100 rounded-xl bg-gray-50 hover:shadow-md transition-shadow">
                <ShieldCheck className="w-8 h-8 text-blue-600 mr-4 shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">{cert.title}</h3>
                  <p className="text-sm text-gray-600">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Policy Section */}
          <div className="bg-blue-900 text-white rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Ethics & Whistleblowing</h2>
              <p className="text-blue-100 max-w-md text-sm">
                Report any concerns regarding ethics or safeguarding through our 
                secure, anonymous reporting channel.
              </p>
            </div>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
              Submit Report
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default function CompliancePage() {
  return (
    <LanguageProvider>
      <ComplianceContent />
    </LanguageProvider>
  );
}