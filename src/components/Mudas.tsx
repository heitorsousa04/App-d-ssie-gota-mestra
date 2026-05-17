import React from 'react';
import { mudasData } from '../data/mudas';

export default function Mudas() {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="space-y-3 pt-2 text-left">
        <span className="inline-block px-3 py-1 bg-alternate text-primary font-bold rounded-full text-[12px] uppercase tracking-widest border border-primary/20">
          🌱 Multiplique
        </span>
        <h2 className="text-[32px] font-bold text-primary-dark leading-tight">Fábrica<br/>de Mudas</h2>
        <p className="text-[14px] text-gray-500 font-semibold max-w-sm">
          30 espécies com passo a passo completo de propagação para aumentar sua coleção.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {mudasData.map((muda, i) => (
          <div key={i} className="p-5 rounded-[20px] bg-white shadow-[0_2px_16px_rgba(45,106,79,0.06)] border border-[#2d6a4f1a] hover:-translate-y-[2px] transition-all duration-200">
            <h3 className="text-[18px] font-bold text-primary-dark mb-4">{muda.nome}</h3>
            
            <div className="space-y-3">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-earthy uppercase tracking-widest">Método</span>
                <span className="text-[14px] text-gray-700 font-medium">{muda.metodo}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-earthy uppercase tracking-widest">Época Ideal</span>
                <span className="text-[14px] text-gray-700 font-medium">{muda.epoca}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-earthy uppercase tracking-widest">Tempo até enraizar</span>
                <span className="text-[14px] text-gray-700 font-medium">{muda.tempo}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <span className="text-[11px] font-bold text-primary uppercase tracking-widest block mb-1">Dica Especial</span>
              <p className="text-[13px] text-gray-600 italic">"{muda.dica}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
