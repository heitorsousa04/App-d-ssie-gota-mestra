import React from 'react';
import { pragasData } from '../data/invasao';

export default function Invasao() {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="space-y-3 pt-2 text-left">
        <span className="inline-block px-3 py-1 bg-red-50 text-red-600 font-bold rounded-full text-[12px] uppercase tracking-widest border border-red-200">
          🛡️ Proteção
        </span>
        <h2 className="text-[32px] font-bold text-primary-dark leading-tight">Invasão<br/>Zero</h2>
        <p className="text-[14px] text-gray-500 font-semibold max-w-sm">
          Aprenda a identificar, combater e prevenir 15 pragas com ingredientes caseiros.
        </p>
      </div>

      <div className="space-y-8">
        
        <section>
          <h3 className="text-[20px] font-bold text-primary-dark mb-4">1. Dossiê de 15 Pragas</h3>
          <div className="grid grid-cols-1 gap-4">
            {pragasData.map((praga, i) => (
              <div key={i} className="bg-white rounded-[20px] p-5 shadow-sm border border-gray-100">
                <h4 className="font-bold text-[18px] text-primary-dark mb-2">{praga.nome}</h4>
                <div className="mb-3">
                  <span className="text-[12px] font-bold text-earthy uppercase tracking-wide block mb-1">Visual</span>
                  <p className="text-[13px] text-gray-700">{praga.descricao}</p>
                </div>
                <div className="mb-3">
                  <span className="text-[12px] font-bold text-earthy uppercase tracking-wide block mb-1">Onde Aparece</span>
                  <p className="text-[13px] text-gray-700">{praga.onde}</p>
                </div>
                <div className="mb-3 bg-red-50 p-3 rounded-xl border border-red-100">
                  <span className="text-[12px] font-bold text-red-800 uppercase tracking-wide block mb-1">Receita Combate</span>
                  <p className="text-[13px] text-red-900">{praga.receita}</p>
                </div>
                <div className="bg-alternate p-3 rounded-xl border border-primary/10">
                  <span className="text-[12px] font-bold text-primary-dark uppercase tracking-wide block mb-1">Prevenção</span>
                  <p className="text-[13px] text-primary-dark/80">{praga.prevencao}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-primary-dark text-white rounded-[24px] p-6 shadow-md">
          <h3 className="text-[20px] font-bold mb-4 text-earthy">2. Protocolo de Quarentena</h3>
          <div className="space-y-4 text-[14px]">
            <p><strong>1. Isolamento:</strong> Mantenha planta nova em cômodo separado por 15 dias</p>
            <p><strong>2. Inspeção:</strong> Use lupa embaixo das folhas e nós</p>
            <p><strong>3. Limpeza:</strong> Faça detox com detergente neutro</p>
            <p><strong>4. Troca de Topo:</strong> Remova 2cm da terra e substitua</p>
            <p><strong>5. Liberação:</strong> Após 15 dias sem sinais, junte à estante</p>
          </div>
        </section>

        <section className="bg-white rounded-[24px] p-6 shadow-sm border border-[#2d6a4f1a]">
          <h3 className="text-[20px] font-bold text-primary-dark mb-4">3. Calendário Anual</h3>
          <div className="space-y-3">
            {[
              { mes: 'Janeiro', txt: 'Foco total em regas — calor acelera pulgões' },
              { mes: 'Fevereiro', txt: 'Crítico para fungos e cochonilhas (previna)' },
              { mes: 'Março', txt: 'Moscas brancas vindo do calor externo' },
              { mes: 'Abril', txt: 'Limpeza de folhas contra pó (Detox)' },
              { mes: 'Maio', txt: 'Riscos de podridão — diminua regas' },
              { mes: 'Junho', txt: 'Dormência — cuidado com correntes de ar' },
              { mes: 'Julho', txt: 'Mês dos ácaros — borrife água (umidade)' },
              { mes: 'Agosto', txt: 'Podas de limpeza — prepare-se pra primavera' },
              { mes: 'Setembro', txt: 'Hora de acordar — adubação cálcio' },
              { mes: 'Outubro', txt: 'Replantio — vaso maior se necessário' },
              { mes: 'Novembro', txt: 'Multiplique com a Fábrica de Mudas' },
              { mes: 'Dezembro', txt: 'Manutenção estética — organize a jungle' },
            ].map((item, i) => (
              <div key={i} className="flex gap-2 text-[13px] border-b border-gray-50 pb-2 last:border-b-0 last:pb-0">
                <strong className="text-primary-dark w-20 shrink-0">{item.mes}:</strong>
                <span className="text-gray-600">{item.txt}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
