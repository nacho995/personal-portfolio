import { useMemo } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import TenfeProject from './TenfeProject';
import CodLetProject from './CodLetProject';
import GozaMadridProject from './GozaMadridProject';
import HaciendaSanCarlosProject from './HaciendaSanCarlosProject.jsx';
import MundoTintaProject from './MundoTintaProject';
import BiologicProject from './BiologicProject';
import PortfolioGilbertoProject from './PortfolioGilbertoProject';
import { buildProjects } from './projectsCatalog';
import { useProjectRatings } from './useProjectRatings';

export default function Projects() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();

  const {
    tempRatings,
    ratings,
    averageRatings,
    totalRatings,
    handleTempRating,
    handleSubmitRating
  } = useProjectRatings();

  const projects = useMemo(() => buildProjects(t), [language, t]);


  const accentColor = theme === 'javascript' ? '#F7DF1E' : '#83CD29'; // Color del tema

  const cursorLabel = language === 'es'
    ? 'Stack React + Node aplicado a producto real'
    : 'React + Node stack applied to real products'

  return (
    <div
      className="relative w-full mt-[5vh] max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20"
      data-cursor-label={cursorLabel}
      data-cursor-intent="skill"
    >
      {/* Corner brackets */}
      <div className="absolute -top-6 -left-6 font-code text-3xl opacity-40" style={{ color: accentColor }}>⌜</div>
      <div className="absolute -top-6 -right-6 font-code text-3xl opacity-40" style={{ color: accentColor }}>⌝</div>
      <div className="absolute -bottom-6 -left-6 font-code text-3xl opacity-40" style={{ color: accentColor }}>⌞</div>
      <div className="absolute -bottom-6 -right-6 font-code text-3xl opacity-40" style={{ color: accentColor }}>⌟</div>

      <div className="relative tech-grid scanlines backdrop-blur-2xl bg-tech-dark/80 border-2 rounded-2xl p-6 sm:p-10 shadow-2xl overflow-hidden"
        style={{ 
          borderColor: `${accentColor}30`,
          boxShadow: `0 0 20px ${accentColor}20, 0 20px 60px rgba(0,0,0,0.5)`
        }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 opacity-20 blur-xl" style={{ 
          background: `radial-gradient(circle at 50% 0%, ${accentColor}40, transparent 70%)`
        }} />

        {/* Título tech */}
        <div className="relative mb-8 sm:mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="font-code text-2xl" style={{ color: accentColor }}>&gt;_</span>
            <h1 className="text-3xl sm:text-4xl font-bold font-code tracking-tight"
              style={{
                color: 'white',
                textShadow: `
                  0 0 15px ${accentColor},
                  0 0 30px ${accentColor}80,
                  0 0 45px ${accentColor}40
                `,
              }}
            >
              {t('projects.title')}
            </h1>
            <span className="inline-block w-3 h-7 animate-blink" style={{ backgroundColor: accentColor }} />
          </div>
          <div className="h-px w-32 mx-auto" style={{ backgroundColor: accentColor, boxShadow: `0 0 10px ${accentColor}` }} />
        </div>

        {/* Contenido */}
        <div className="relative space-y-8">
          {/* Tenfe Project - MI PRIMER PROYECTO EN EQUIPO */}
          <TenfeProject 
            project={projects.tenfe} 
            tempRating={tempRatings['tenfe']} 
            rating={ratings['tenfe']}
            averageRating={averageRatings['tenfe']}
            totalRatings={totalRatings['tenfe']}
            onTempRatingChange={(stars) => handleTempRating(stars, 'tenfe')}
            onSubmitRating={() => handleSubmitRating('tenfe')}
          />

          {/* Mundo-Tinta Project */}
          <MundoTintaProject 
            project={projects.mundoTinta} 
            tempRating={tempRatings['mundo-tinta']} 
            rating={ratings['mundo-tinta']}
            averageRating={averageRatings['mundo-tinta']}
            totalRatings={totalRatings['mundo-tinta']}
            onTempRatingChange={(stars) => handleTempRating(stars, 'mundo-tinta')}
            onSubmitRating={() => handleSubmitRating('mundo-tinta')}
          />

          {/* CodLet Project */}
          <CodLetProject 
            project={projects.codlet} 
            tempRating={tempRatings['codlet']} 
            rating={ratings['codlet']}
            averageRating={averageRatings['codlet']}
            totalRatings={totalRatings['codlet']}
            onTempRatingChange={(stars) => handleTempRating(stars, 'codlet')}
            onSubmitRating={() => handleSubmitRating('codlet')}
          />

          {/* Goza Madrid Project */}
          <GozaMadridProject 
            project={projects.gozaMadrid} 
            tempRating={tempRatings['goza-madrid']} 
            rating={ratings['goza-madrid']}
            averageRating={averageRatings['goza-madrid']}
            totalRatings={totalRatings['goza-madrid']}
            onTempRatingChange={(stars) => handleTempRating(stars, 'goza-madrid')}
            onSubmitRating={() => handleSubmitRating('goza-madrid')}
          />

          {/* Hacienda San Carlos Project */}
          <HaciendaSanCarlosProject 
            project={projects.haciendaSanCarlos} 
            tempRating={tempRatings['hacienda-san-carlos']} 
            rating={ratings['hacienda-san-carlos']}
            averageRating={averageRatings['hacienda-san-carlos']}
            totalRatings={totalRatings['hacienda-san-carlos']}
            onTempRatingChange={(stars) => handleTempRating(stars, 'hacienda-san-carlos')}
            onSubmitRating={() => handleSubmitRating('hacienda-san-carlos')}
          />

          {/* Biologic Analysis Project */}
          <BiologicProject 
            project={projects.biologicAnalysis} 
            tempRating={tempRatings['biologic-analysis']} 
            rating={ratings['biologic-analysis']}
            averageRating={averageRatings['biologic-analysis']}
            totalRatings={totalRatings['biologic-analysis']}
            onTempRatingChange={(stars) => handleTempRating(stars, 'biologic-analysis')}
            onSubmitRating={() => handleSubmitRating('biologic-analysis')}
          />

          {/* Portfolio Gilberto Project */}
          <PortfolioGilbertoProject 
            project={projects.portfolioGilberto} 
            tempRating={tempRatings['portfolio-gilberto']} 
            rating={ratings['portfolio-gilberto']}
            averageRating={averageRatings['portfolio-gilberto']}
            totalRatings={totalRatings['portfolio-gilberto']}
            onTempRatingChange={(stars) => handleTempRating(stars, 'portfolio-gilberto')}
            onSubmitRating={() => handleSubmitRating('portfolio-gilberto')}
          />
        </div>
      </div>
    </div>
  );
}
