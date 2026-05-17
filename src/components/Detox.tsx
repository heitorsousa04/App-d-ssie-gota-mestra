import React from 'react';
import { frequenciaData, receitasDetoxData } from '../data/detox';

export default function Detox() {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="space-y-3 pt-2 text-left">
        <span className="inline-block px-3 py-1 bg-alternate text-primary font-bold rounded-full text-[12px] uppercase tracking-widest border border-primary/20">
          ✨ Spa
        </span>
        <h2 className="text-[32px] font-bold text-primary-dark leading-tight">Detox<br/>de Folhas</h2>
        <p className="text-[14px] text-gray-500 font-semibold max-w-sm">
          Folhas limpas respiram melhor, crescem mais e ficam lindas.
        </p>
      </div>

      <div className="space-y-8">
        
        <section>
          <h3 className="text-[20px] font-bold text-primary-dark mb-4">1. Frequência de Limpeza</h3>
          <div className="grid grid-cols-1 gap-3">
            {frequenciaData.map((freq, i) => (
              <div key={i} className="bg-white p-4 rounded-[16px] border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex justify-between items-center gap-4">
                <div className="flex-1">
                  <h4 className="font-bold text-[14px] text-primary-dark">{freq.nome}</h4>
                  <p className="text-[12px] text-gray-500 mt-0.5">{freq.ferramenta}</p>
                </div>
                <div className="bg-alternate text-primary px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider shrink-0 text-center">
                  {freq.frequencia}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-[20px] font-bold text-primary-dark mb-4">2. Receitas Caseiras</h3>
          <div className="grid grid-cols-1 gap-4">
            {receitasDetoxData.map((receita, i) => (
              <div key={i} className="bg-white rounded-[20px] p-5 shadow-sm border border-[#2d6a4f1a]">
                <h4 className="font-bold text-[16px] text-primary-dark mb-3">{receita.nome}</h4>
                <div className="space-y-2 text-[13px]">
                  <p><strong className="text-earthy">Ingredientes:</strong> {receita.ingredientes}</p>
                  <p><strong className="text-gray-700">Preparo:</strong> {receita.preparo}</p>
                  <p><strong className="text-gray-700">Aplicação:</strong> {receita.aplicacao}</p>
                  <div className="mt-3 p-3 bg-alternate/50 rounded-lg text-[13px] font-medium text-primary-dark">
                    <span className="opacity-70">Resultado:</span> {receita.resultado}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-[24px] p-6 shadow-sm border border-[#2d6a4f1a]">
          <h3 className="text-[20px] font-bold text-primary-dark mb-4">3. Identificação Visual</h3>
          <ul className="space-y-4 text-[14px]">
            <li className="flex gap-3"><span className="text-[18px]">💧</span> <span><strong>Calcário:</strong> Manchas brancas circulares e foscas — restos de água dura</span></li>
            <li className="flex gap-3"><span className="text-[18px]">🦠</span> <span><strong>Fungo:</strong> Manchas pretas meladas ou pontos brancos que parecem pó (mofo)</span></li>
            <li className="flex gap-3"><span className="text-[18px]">💨</span> <span><strong>Poeira:</strong> Camada cinza e opaca que sai facilmente ao passar o dedo</span></li>
            <li className="flex gap-3"><span className="text-[18px]">🧪</span> <span><strong>Químicos:</strong> Manchas azuladas ou amareladas irregulares após adubação errada</span></li>
          </ul>
        </section>

        <section className="bg-primary-dark text-white rounded-[24px] p-6 shadow-md">
          <h3 className="text-[20px] font-bold mb-4 text-earthy">4. Rotina Mensal Estética</h3>
          <div className="space-y-4 text-[14px]">
            <p><strong>Semana 1:</strong> Limpeza profunda das folhas grandes com pano úmido</p>
            <p><strong>Semana 2:</strong> Revisão de pragas e aplicação de preventivo</p>
            <p><strong>Semana 3:</strong> Poda de limpeza (retirar folhas secas/amarelas)</p>
            <p><strong>Semana 4:</strong> Banho de brilho e ajuste de posição para luz</p>
          </div>
        </section>

        <section className="bg-orange-50 border border-orange-100 rounded-[20px] p-5 shadow-sm">
          <h3 className="text-[16px] font-bold text-orange-800 mb-2">5. Recuperação de Danos</h3>
          <p className="text-[13px] text-orange-900 mb-2">Se produtos abrasivos queimaram as folhas, o dano é irreversível.</p>
          <ul className="list-disc pl-5 text-[13px] text-orange-800 space-y-1">
            <li>Faça poda cortando perto de uma gema para novos brotos</li>
            <li>Sele o corte com pasta cicatrizante (canela e própolis)</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
