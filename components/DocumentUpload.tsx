"use client";
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { UploadCloud } from 'lucide-react';
export default function DocumentUpload() {
  const { t } = useLanguage();
  const [file, setFile] = useState<File | null>(null);
  const [category, setCategory] = useState("");
  // These are your new corporate categories
  const categories = [
    "Governments & Public Institutions",
    "United Nations & IFIs",
    "NGOs & Humanitarian Actors",
    "Private Sector & PPPs",
    "Internal EAGint Divisions"
  ];
  // This is the part that was missing!
  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !category) return alert("Please select a file and category.");
    console.log("Uploading:", file.name, "to category:", category);
    alert(`Successfully staged ${file.name} for ${category}!`);
    setFile(null);
    setCategory("");
  };
  return (
    <form onSubmit={handleUpload} className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-100 mt-12">
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-12 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer relative">
        <UploadCloud className="w-12 h-12 text-blue-500 mb-4" />
        <p className="text-gray-600 font-medium">{file ? file.name : t('fileLabel')}</p>
        <input
            type="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"/>
      </div>
      <div className="mt-6 text-left rtl:text-right">
        <label className="block text-sm font-bold text-gray-700 mb-2">{t('category')}</label>
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border-gray-300 rounded-lg shadow-sm p-3 border focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
        >
          <option value="" disabled>-- {t('category')} --</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <button 
        type="submit" 
        className="mt-6 w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
      >
        {t('submit')}
      </button>
    </form>
  );
} 