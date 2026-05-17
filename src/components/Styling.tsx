import React from 'react';
import { arranjosData, paletasData, fotosData } from '../data/styling';

export default function Styling() {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="space-y-3 pt-2 text-left">
        <span className="inline-block px-3 py-1 bg-alternate text-primary font-bold rounded-full text-[12px] uppercase tracking-widest border border-primary/20">
          🎨 Design
        </span>
        <h2 className="text-[32px] font-bold text-primary-dark leading-tight">Plant<br/>Styling</h2>
        <p className="text-[14px] text-gray-500 font-semibold max-w-sm">
          Aprenda a combinar, decorar e fotografar suas plantas como uma profissional.
        </p>
      </div>

      <div className="space-y-8">
        
        <section>
          <h3 className="text-[20px] font-bold text-primary-dark mb-2">1. Regra dos Três Níveis</h3>
          <p className="text-[14px] text-gray-600 mb-4 font-medium">Divida as plantas em Pequenas até 30cm; Médias 30-60cm e Grandes +60cm para criar profundidade.</p>
          <div className="grid grid-cols-1 gap-3">
            {arranjosData.map((arranjo, i) => (
              <div key={i} className="bg-white p-4 rounded-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100">
                <h4 className="font-bold text-[15px] text-primary-dark mb-1">{arranjo.nome}</h4>
                <p className="text-[13px] text-gray-600">{arranjo.descricao}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-alternate rounded-[24px] p-6 shadow-sm border border-primary/10">
          <h3 className="text-[20px] font-bold text-primary-dark mb-4">2. Como Montar Prateleiras</h3>
          <ul className="space-y-4 text-[14px] text-gray-700 font-medium">
            <li><strong className="text-earthy block">Densidade:</strong> Misture plantas de folhas largas com as de folhas finas para evitar visual vazio</li>
            <li><strong className="text-earthy block">Espaçamento:</strong> Deixe pelo menos 15cm entre os vasos para circulação de ar e evitar pragas</li>
            <li><strong className="text-earthy block">Mix de Crescimento:</strong> Coloque as pendentes nas extremidades para emoldurar</li>
            <li><strong className="text-earthy block">Agrupamento:</strong> Agrupe plantas com a mesma necessidade luminosa</li>
          </ul>
        </section>

        <section>
          <h3 className="text-[20px] font-bold text-primary-dark mb-4">3. Paletas de Cores de Vasos</h3>
          <div className="grid grid-cols-1 gap-4">
            {paletasData.map((paleta, i) => (
              <div key={i} className="bg-white p-5 rounded-[16px] shadow-sm border border-[#2d6a4f1a] relative overflow-hidden">
                <div className="absolute left-0 top-0 w-1.5 h-full bg-primary" />
                <h4 className="font-bold text-[16px] text-primary-dark mb-1 pl-2">{paleta.nome}</h4>
                <p className="text-[13px] text-gray-500 font-bold mb-2 pl-2 tracking-wide uppercase">{paleta.cores}</p>
                <p className="text-[13px] text-gray-700 pl-2">✏️ {paleta.destaque}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-primary-dark text-white rounded-[24px] p-6 shadow-md">
          <h3 className="text-[20px] font-bold mb-4 text-earthy">4. Urban Jungle (Espaços Pequenos)</h3>
          <ul className="space-y-3 text-[14px]">
            <li><strong>Verticalismo:</strong> Use prateleiras até o teto e suportes suspensos</li>
            <li><strong>Luz Artificial:</strong> Use lâmpadas Grow Lights Full Spectrum</li>
            <li><strong>Espelhos:</strong> Coloque espelhos em frente às janelas para dobrar a luz</li>
            <li><strong>Microclima:</strong> Agrupe plantas com necessidades parecidas</li>
          </ul>
        </section>

        <section>
          <h3 className="text-[20px] font-bold text-primary-dark mb-2">5. Fotografia Instagramável</h3>
          <div className="bg-white p-4 rounded-[16px] border border-gray-100 shadow-sm mb-4 text-[13px] font-medium text-gray-600 space-y-2">
            <p><strong>Ângulo:</strong> Fotos de baixo para cima valorizam plantas grandes.</p>
            <p><strong>Luz:</strong> Luz natural filtrada (manhã/tarde) — evite flash.</p>
            <p><strong>Fundo:</strong> Paredes neutras destacam a silhueta.</p>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {fotosData.map((foto, i) => (
              <div key={i} className="bg-white p-4 rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col gap-1">
                <span className="font-bold text-[14px] text-primary-dark">{foto.nome}</span>
                <span className="text-[13px] text-gray-500">📸 {foto.dica}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
