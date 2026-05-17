import React from 'react';
import { plantasLuzData, janelasData, sinaisVisuaisData } from '../data/iluminacao';

export default function Iluminacao() {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="space-y-3 pt-2 text-left">
        <span className="inline-block px-3 py-1 bg-alternate text-primary font-bold rounded-full text-[12px] uppercase tracking-widest border border-primary/20">
          ☀️ Iluminação
        </span>
        <h2 className="text-[32px] font-bold text-primary-dark leading-tight">Checklist de<br/>Iluminação</h2>
        <p className="text-[14px] text-gray-500 font-semibold max-w-sm">
          Descubra a luz ideal do seu apartamento e nunca mais perca uma planta por esse motivo.
        </p>
      </div>

      <div className="space-y-8">
        
        <section className="bg-white rounded-[24px] p-6 shadow-sm border border-[#2d6a4f1a] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-primary/20" />
          <h3 className="text-[20px] font-bold text-primary-dark mb-4">1. Como Medir a Luz com o Celular</h3>
          <ul className="space-y-3 text-[14px] text-gray-700 font-medium">
            <li><strong className="text-primary">Apps recomendados:</strong> procure por "Light Meter" ou "Luxímetro" na loja de aplicativos</li>
            <li><strong className="text-primary">Como posicionar:</strong> coloque o celular exatamente onde as folhas ficam; aponte para a janela</li>
            <li><strong className="text-primary">Interpretando os números:</strong> Baixa Luz 50-100 fc / Média Luz 100-300 fc / Alta Luz 300+ fc</li>
            <li><strong className="text-primary">O que fazer:</strong> compare o número com a necessidade da espécie</li>
          </ul>
        </section>

        <section>
          <h3 className="text-[20px] font-bold text-primary-dark mb-4">2. Tabela de 25 Plantas</h3>
          <div className="grid grid-cols-1 gap-4">
            {plantasLuzData.map((planta, i) => (
              <div key={i} className="bg-white p-4 rounded-[16px] border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                <h4 className="font-bold text-[16px] text-primary-dark mb-2">{planta.nome}</h4>
                <div className="flex gap-4 mb-3">
                  <div className="flex-1 bg-gray-50 rounded-lg p-2 text-center">
                    <span className="block text-[10px] uppercase font-bold text-gray-500">Mínima</span>
                    <span className="text-[13px] font-semibold text-primary">{planta.luzMinima}</span>
                  </div>
                  <div className="flex-1 bg-alternate/50 border border-primary/10 rounded-lg p-2 text-center">
                    <span className="block text-[10px] uppercase font-bold text-earthy">Ideal</span>
                    <span className="text-[13px] font-semibold text-primary-dark">{planta.luzIdeal}</span>
                  </div>
                </div>
                <div className="text-[13px]">
                  <p><strong className="text-red-500">Falta:</strong> {planta.falta}</p>
                  {planta.excesso && <p><strong className="text-orange-500">Excesso:</strong> {planta.excesso}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-[20px] font-bold text-primary-dark mb-4">3. Mapa de Janelas (Hemisfério Sul)</h3>
          <div className="grid grid-cols-1 gap-3">
            {janelasData.map((janela, i) => (
              <div key={i} className="bg-white p-5 rounded-[16px] shadow-sm border border-[#2d6a4f1a]">
                <h4 className="font-bold text-[16px] text-primary-dark mb-1">{janela.orientacao}</h4>
                <p className="text-[13px] text-earthy font-bold mb-3">{janela.intensidade} — {janela.sol}</p>
                <div className="space-y-2 text-[13px]">
                  <p><strong className="text-gray-800">Plantas:</strong> {janela.plantas}</p>
                  <p className="text-gray-600 italic">"{janela.justificativa}"</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-primary-dark text-white rounded-[24px] p-6 shadow-lg">
          <h3 className="text-[20px] font-bold mb-4">4. Aclimatação</h3>
          <div className="space-y-4 text-[14px]">
            <div className="flex gap-3 items-start">
              <span className="bg-alternate text-primary-dark font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-sm">1</span>
              <p>Coloque a planta no local mais iluminado da casa mesmo que não seja o definitivo</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="bg-alternate text-primary-dark font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-sm">2</span>
              <p>Mova para o local final por apenas algumas horas por dia voltando para a luz</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="bg-alternate text-primary-dark font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-sm">3</span>
              <p>Deixe no local definitivo mas monitore queda de folhas; se houver queda massiva a luz é insuficiente</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-[24px] p-6 shadow-sm border border-[#2d6a4f1a]">
          <h3 className="text-[20px] font-bold text-primary-dark mb-4">5. Soluções para Apartamentos Sem Luz</h3>
          <ul className="space-y-3 text-[14px] text-gray-700 font-medium list-disc pl-5">
            <li><strong className="text-primary-dark">Tipos:</strong> LEDs Full Spectrum (consomem menos e não esquentam)</li>
            <li><strong className="text-primary-dark">Posicionamento:</strong> 30-50cm de distância para plantas de média luz; 15-30cm para suculentas</li>
            <li><strong className="text-primary-dark">Tempo:</strong> 12 a 14 horas por dia (use um timer)</li>
            <li><strong className="text-primary-dark">Crescem melhor:</strong> Jiboias; Zamioculcas; Suculentas e Orquídeas</li>
            <li><strong className="text-primary-dark">Custo:</strong> Setup básico de R$80 a R$200 dependendo da potência</li>
          </ul>
        </section>

        <section>
          <h3 className="text-[20px] font-bold text-primary-dark mb-4">6. Sinais Visuais por Espécie</h3>
          <div className="grid grid-cols-1 gap-3">
            {sinaisVisuaisData.map((sinal, i) => (
              <div key={i} className="flex gap-3 bg-white p-4 rounded-[16px] shadow-sm border border-gray-100">
                <div className={`w-2 rounded-full shrink-0 ${sinal.causa.includes('falta') ? 'bg-orange-400' : 'bg-red-400'}`} />
                <div>
                  <h4 className="font-bold text-[15px] text-primary-dark">{sinal.nome}</h4>
                  <p className="text-[13px] text-gray-600 mt-1">{sinal.sintoma}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
