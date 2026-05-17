import React, { useState } from 'react';
import { Leaf } from 'lucide-react';
import Dossie from './components/Dossie';
import Mudas from './components/Mudas';
import Iluminacao from './components/Iluminacao';
import Styling from './components/Styling';
import Detox from './components/Detox';
import Invasao from './components/Invasao';

type TabId = 'dossie' | 'mudas' | 'iluminacao' | 'styling' | 'detox' | 'invasao';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('dossie');

  const tabs: { id: TabId; label: string; icon: string }[] = [
    { id: 'dossie', label: 'Dossiê', icon: '🌿' },
    { id: 'mudas', label: 'Mudas', icon: '🌱' },
    { id: 'iluminacao', label: 'Luz', icon: '☀️' },
    { id: 'styling', label: 'Styling', icon: '🎨' },
    { id: 'detox', label: 'Detox', icon: '✨' },
    { id: 'invasao', label: 'Pragas', icon: '🛡️' }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-text-main pb-[80px]" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%)' }}>
      {/* Header */}
      <header className="sticky top-0 z-20 shadow-[0_2px_10px_rgba(0,0,0,0.05)]" style={{ background: 'rgba(27, 67, 50, 0.85)', backdropFilter: 'blur(20px)' }}>
        <div className="max-w-[430px] mx-auto px-5 h-[64px] flex items-center gap-3">
          <Leaf className="w-6 h-6 text-earthy" />
          <h1 className="text-lg font-bold tracking-wide text-white">Dossiê Gota Mestra</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-[430px] mx-auto px-5 pt-8">
        {activeTab === 'dossie' && <Dossie />}
        {activeTab === 'mudas' && <Mudas />}
        {activeTab === 'iluminacao' && <Iluminacao />}
        {activeTab === 'styling' && <Styling />}
        {activeTab === 'detox' && <Detox />}
        {activeTab === 'invasao' && <Invasao />}
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#1b4332] h-[64px] z-[100] shadow-[0_-4px_20px_rgba(0,0,0,0.15)] flex justify-around items-center">
        <div className="max-w-[430px] mx-auto w-full h-full flex justify-around items-center px-1">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex flex-col items-center justify-center w-[48px] h-full transition-colors duration-200 relative ${
                  isActive ? 'text-[#d4a574]' : 'text-[rgba(255,255,255,0.5)]'
                }`}
              >
                <span className="text-[24px] mb-1 leading-[1]">{tab.icon}</span>
                <span className="text-[9px] font-bold uppercase tracking-wide leading-none">
                  {tab.label}
                </span>
                {isActive && (
                  <div className="w-1 h-1 rounded-full bg-[#d4a574] absolute bottom-1.5" />
                )}
              </button>
            )
          })}
        </div>
      </nav>
    </div>
  );
}

