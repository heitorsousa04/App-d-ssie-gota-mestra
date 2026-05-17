import React, { useState } from 'react';
import { ArrowLeft, Search, FlaskConical, ChefHat, Droplets, CheckCircle2, ChevronRight } from 'lucide-react';
import { categories, recipes, Recipe, Category } from '../data';

const recipeImages: Record<number, string> = {
  1: "https://i.imgur.com/51pQIsR.jpeg",
  2: "https://i.imgur.com/AAGo4NU.jpeg",
  3: "https://i.imgur.com/FHfr2xr.jpeg",
  4: "https://i.imgur.com/xtOUdZc.jpeg",
  5: "https://i.imgur.com/ZELabnh.jpeg",
  6: "https://i.imgur.com/dnZ6On3.jpeg",
  7: "https://i.imgur.com/PgVvq2v.jpeg",
  8: "https://i.imgur.com/iMGAUEO.jpeg",
  9: "https://i.imgur.com/5YKqKMr.jpeg",
  10: "https://i.imgur.com/Y93GAWs.jpeg",
  11: "https://i.imgur.com/nffG2Mv.jpeg",
  12: "https://i.imgur.com/v1RxaRR.jpeg",
  13: "https://i.imgur.com/TQIR9ir.jpeg",
  14: "https://i.imgur.com/15Po7qz.jpeg",
  15: "https://i.imgur.com/LZ2G07y.jpeg",
  16: "https://i.imgur.com/nZ9SIBV.jpeg",
  17: "https://i.imgur.com/9fSgkz2.jpeg",
  18: "https://i.imgur.com/CeuPILd.jpeg",
  19: "https://i.imgur.com/6s8yGy0.jpeg",
  20: "https://i.imgur.com/u0sQUNx.jpeg",
  21: "https://i.imgur.com/8QYf190.jpeg",
  22: "https://i.imgur.com/KIygMCC.jpeg",
  23: "https://i.imgur.com/tC4031B.jpeg",
  24: "https://i.imgur.com/2J1sDzG.jpeg",
  25: "https://i.imgur.com/iqi4wIX.jpeg",
  26: "https://i.imgur.com/inFPvSe.jpeg",
  27: "https://i.imgur.com/N1TkNlq.jpeg",
  28: "https://i.imgur.com/ts8FNV5.jpeg",
  29: "https://i.imgur.com/CGkcERb.jpeg",
  30: "https://i.imgur.com/bvnlPdf.jpeg",
  31: "https://i.imgur.com/udYjRu1.jpeg",
  32: "https://i.imgur.com/Ans4dTU.jpeg",
  33: "https://i.imgur.com/uIv10F4.jpeg",
  34: "https://i.imgur.com/wSiVpDk.jpeg",
  35: "https://i.imgur.com/1gGRIuq.jpeg",
  36: "https://i.imgur.com/9LdeOWT.jpeg",
  37: "https://i.imgur.com/Hond3C0.jpeg",
  38: "https://i.imgur.com/Fiazi4e.jpeg",
  39: "https://i.imgur.com/4w5eRDo.jpeg",
  40: "https://i.imgur.com/9jYOIQx.jpeg",
  41: "https://i.imgur.com/gxgp4UL.jpeg",
  42: "https://i.imgur.com/bgpMSrg.jpeg",
  43: "https://i.imgur.com/DKc5IjN.jpeg",
  44: "https://i.imgur.com/Nq4xPCC.jpeg",
  45: "https://i.imgur.com/4RiV9WK.jpeg",
  46: "https://i.imgur.com/rmiUM2q.jpeg",
  47: "https://i.imgur.com/iM3MCWZ.jpeg",
  48: "https://i.imgur.com/QZ3hZDk.jpeg",
  49: "https://i.imgur.com/i9gejqi.jpeg",
  50: "https://i.imgur.com/WDFqmux.jpeg"
};

export default function Dossie() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const handleCategoryClick = (category: Category) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedCategory(category);
    setSelectedRecipe(null);
  };

  const handleRecipeClick = (recipe: Recipe) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedRecipe(recipe);
  };

  const handleBackToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedCategory(null);
    setSelectedRecipe(null);
  };

  const handleBackToCategory = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedRecipe(null);
  };

  const categoryRecipes = selectedCategory 
    ? recipes.filter(r => r.categoryId === selectedCategory.id) 
    : [];

  const recipeSections = selectedRecipe ? [
    { id: 'causa', icon: Search, title: 'Causa Provável', color: '#f97316', content: selectedRecipe.causa },
    { id: 'ingredientes', icon: FlaskConical, title: 'Ingredientes', color: '#3b82f6', content: selectedRecipe.ingredientes },
    { id: 'preparo', icon: ChefHat, title: 'Modo de Preparo', color: '#16a34a', content: selectedRecipe.preparo },
    { id: 'aplicacao', icon: Droplets, title: 'Como Aplicar', color: '#0d9488', content: selectedRecipe.aplicacao },
    { id: 'resultado', icon: CheckCircle2, title: 'Resultado Esperado', color: '#d4a574', content: selectedRecipe.resultado },
  ] : [];

  return (
    <>
      {/* VIEW: HOME (Categories) */}
      {!selectedCategory && !selectedRecipe && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="space-y-3 pt-2 text-left">
            <span className="inline-block px-3 py-1 bg-alternate text-primary font-bold rounded-full text-[12px] uppercase tracking-widest border border-primary/20">
              Guia Definitivo
            </span>
            <h2 className="text-[32px] font-bold text-primary-dark leading-tight">Suas 50 Receitas<br/>de Resgate</h2>
            <p className="text-[14px] text-gray-500 font-semibold max-w-sm">
              Selecione o problema da sua plantinha e encontre a solução caseira.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {categories.map((cat, index) => {
              const isWide = index === 0 || index === 3 || index === 6;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat)}
                  className={`flex flex-col justify-between p-5 rounded-[24px] border border-[#2d6a4f1a] bg-white shadow-[0_4px_24px_rgba(45,106,79,0.08)] hover:-translate-y-[2px] hover:shadow-[0_8px_32px_rgba(45,106,79,0.12)] transition-all duration-200 text-left group overflow-hidden relative ${isWide ? 'col-span-2 min-h-[160px]' : 'col-span-1 min-h-[180px]'}`}
                  style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%)' }}
                >
                  <div className="w-full">
                    <div className={`mb-3 ${isWide ? 'text-[56px]' : 'text-[40px]'}`}>
                      {cat.emoji}
                    </div>
                    <h3 className="text-[18px] font-bold text-primary-dark leading-snug">
                      {cat.title}
                    </h3>
                    <p className="text-[13px] text-primary/70 mt-1 font-semibold">
                      {cat.count} receitas
                    </p>
                  </div>
                  <div className={`mt-4 w-full flex items-center text-[13px] font-bold text-earthy group-hover:translate-x-1 transition-transform duration-200`}>
                    Ver receitas <ChevronRight className="w-4 h-4 ml-0.5" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* VIEW: CATEGORY LIST */}
      {selectedCategory && !selectedRecipe && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <button 
            onClick={handleBackToHome}
            className="flex items-center text-primary-dark hover:text-earthy transition-colors font-semibold -ml-2 p-2 rounded-lg"
          >
            <ArrowLeft className="w-5 h-5 mr-1.5" />
            Voltar
          </button>

          <div className="rounded-[24px] p-8 flex flex-col items-center justify-center text-center shadow-lg" style={{ background: 'linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%)' }}>
            <span className="text-6xl mb-4 drop-shadow-md">{selectedCategory.emoji}</span>
            <h2 className="text-2xl font-bold text-white mb-2 leading-snug">{selectedCategory.title}</h2>
            <p className="text-white/80 text-[14px] font-medium">Selecione o sintoma da sua plantinha.</p>
          </div>

          <div className="flex flex-col gap-4">
            {categoryRecipes.map((recipe) => (
              <button
                key={recipe.id}
                onClick={() => handleRecipeClick(recipe)}
                className="flex items-center p-5 rounded-[20px] bg-white shadow-[0_2px_16px_rgba(45,106,79,0.06)] hover:-translate-y-[2px] transition-all duration-200 text-left group w-full"
                style={{ border: '1px solid rgba(45,106,79,0.05)' }}
              >
                <div className="flex-1 pr-4">
                  <span className="text-[11px] font-bold text-primary mb-1.5 inline-block uppercase tracking-widest bg-alternate px-2 py-0.5 rounded-md border border-primary/10">
                    Receita {recipe.id}
                  </span>
                  <h3 className="text-[17px] font-bold text-primary-dark leading-snug group-hover:text-primary transition-colors duration-200">
                    {recipe.title}
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-alternate flex items-center justify-center group-hover:bg-earthy/10 transition-colors duration-200 shrink-0">
                  <ChevronRight className="w-5 h-5 text-earthy" />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: RECIPE DETAILS */}
      {selectedRecipe && (
        <div className="animate-in fade-in duration-300 flex flex-col space-y-6">
          <button 
            onClick={handleBackToCategory}
            className="flex items-center text-primary-dark hover:text-earthy transition-colors font-semibold -ml-2 p-2 rounded-lg"
          >
            <ArrowLeft className="w-5 h-5 mr-1.5" />
            Voltar
          </button>

          <img 
            src={recipeImages[selectedRecipe.id]} 
            alt={selectedRecipe.title} 
            className="w-full h-[220px] object-cover rounded-[16px] mb-5 block"
            referrerPolicy="no-referrer"
          />

          <div>
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span className="bg-alternate text-primary px-3 py-1 rounded-full text-[12px] font-bold uppercase tracking-wider flex items-center gap-1.5 border border-primary/10">
                {categories.find(c => c.id === selectedRecipe.categoryId)?.emoji} {categories.find(c => c.id === selectedRecipe.categoryId)?.title}
              </span>
              <span className="bg-earthy/10 text-earthy px-3 py-1 rounded-full text-[12px] font-bold uppercase tracking-wider border border-earthy/20">
                Receita {selectedRecipe.id}
              </span>
            </div>
            <h2 className="text-[26px] font-bold text-primary-dark leading-[1.3] mb-8">
              {selectedRecipe.title}
            </h2>

            <div className="space-y-4">
              {recipeSections.map((section) => {
                const Icon = section.icon;
                return (
                  <div 
                    key={section.id} 
                    className="bg-white rounded-[16px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex flex-col gap-3 transition-transform hover:-translate-y-1 duration-200"
                    style={{ borderLeft: `4px solid ${section.color}` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: `${section.color}15` }}>
                        <Icon className="w-4 h-4" style={{ color: section.color }} />
                      </div>
                      <h3 className="font-bold text-[16px] text-primary-dark tracking-tight">{section.title}</h3>
                    </div>
                    <p className="text-[14px] font-normal text-gray-700 leading-[1.6]">
                      {section.content}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="flex justify-center pt-8 pb-4">
            <button 
              onClick={handleBackToHome}
              className="bg-white border border-gray-200 hover:border-earthy hover:text-earthy shadow-sm text-primary-dark font-bold text-[14px] py-3.5 px-8 rounded-full transition-all duration-200 w-full hover:-translate-y-1"
            >
              Voltar para o Início
            </button>
          </div>
        </div>
      )}
    </>
  );
}
