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

  // Cargar ratings desde la API al iniciar - Mejorando para separar correctamente las valoraciones
  useEffect(() => {
    const fetchRatings = async () => {
      try {
        // Cargar ratings para cada proyecto de forma separada
        const tenfeData = await getRatingStars('tenfe');
        const gozaData = await getRatingStars('goza-madrid');
        const codletData = await getRatingStars('codlet');
        const haciendaData = await getRatingStars('hacienda-san-carlos');
        const mundoTintaData = await getRatingStars('mundo-tinta');
        const biologicData = await getRatingStars('biologic-analysis');
        const portfolioGilbertoData = await getRatingStars('portfolio-gilberto');
        
        console.log('Datos cargados para Tenfe:', tenfeData);
        console.log('Datos cargados para Goza Madrid:', gozaData);
        console.log('Datos cargados para CodLet:', codletData);
        console.log('Datos cargados para Hacienda San Carlos:', haciendaData);
        console.log('Datos cargados para Mundo-Tinta:', mundoTintaData);
        console.log('Datos cargados para Biologic Analysis:', biologicData);
        console.log('Datos cargados para Portfolio Gilberto:', portfolioGilbertoData);
        
        // Actualizar los estados con los datos correctos para cada proyecto
        setAverageRatings({
          'tenfe': tenfeData.averageRating || 0,
          'goza-madrid': gozaData.averageRating || 0,
          'codlet': codletData.averageRating || 0,
          'hacienda-san-carlos': haciendaData.averageRating || 0,
          'mundo-tinta': mundoTintaData.averageRating || 0,
          'biologic-analysis': biologicData.averageRating || 0,
          'portfolio-gilberto': portfolioGilbertoData.averageRating || 0
        });
        
        setTotalRatings({
          'tenfe': tenfeData.totalRatings || 0,
          'goza-madrid': gozaData.totalRatings || 0,
          'codlet': codletData.totalRatings || 0,
          'hacienda-san-carlos': haciendaData.totalRatings || 0,
          'mundo-tinta': mundoTintaData.totalRatings || 0,
          'biologic-analysis': biologicData.totalRatings || 0,
          'portfolio-gilberto': portfolioGilbertoData.totalRatings || 0
        });
        
        setRatings({
          'tenfe': tenfeData.userRating || 0,
          'goza-madrid': gozaData.userRating || 0,
          'codlet': codletData.userRating || 0,
          'hacienda-san-carlos': haciendaData.userRating || 0,
          'mundo-tinta': mundoTintaData.userRating || 0,
          'biologic-analysis': biologicData.userRating || 0,
          'portfolio-gilberto': portfolioGilbertoData.userRating || 0
        });
        
        // Inicializar los ratings temporales con los valores actuales
        setTempRatings({
          'tenfe': tenfeData.userRating || 0,
          'goza-madrid': gozaData.userRating || 0,
          'codlet': codletData.userRating || 0,
          'hacienda-san-carlos': haciendaData.userRating || 0,
          'mundo-tinta': mundoTintaData.userRating || 0,
          'biologic-analysis': biologicData.userRating || 0,
          'portfolio-gilberto': portfolioGilbertoData.userRating || 0
        });
      } catch (error) {
        console.error('Error al cargar valoraciones:', error);
      }
    };

    fetchRatings();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleTempRating = useCallback((stars, projectId) => {
    setTempRatings(prev => ({
      ...prev,
      [projectId]: stars
    }));
  }, []);

  // Mejorar el handleSubmitRating para asegurar que las valoraciones se guarden por proyecto
  const handleSubmitRating = useCallback(async (projectId) => {
    // Evitar enviar valoraciones cuando no hay cambios
    if (tempRatings[projectId] === 0 || tempRatings[projectId] === ratings[projectId]) {
      return;
    }

    try {
      console.log(`Enviando valoración para ${projectId}: ${tempRatings[projectId]} estrellas`);
      
      // Asegurarse de pasar el ID del proyecto correcto
      const response = await postStars(tempRatings[projectId], projectId);
      
      if (response && response.success) {
        console.log(`Valoración guardada con éxito para ${projectId}:`, response);
        
        // Actualizar solo la valoración del proyecto actual
        setRatings(prev => ({
          ...prev,
          [projectId]: tempRatings[projectId]
        }));
        
        // Actualizar el total de valoraciones y el promedio solo para este proyecto
        setTotalRatings(prev => ({
          ...prev,
          [projectId]: response.totalRatings || prev[projectId]
        }));
        
        setAverageRatings(prev => ({
          ...prev,
          [projectId]: response.averageRating || prev[projectId]
        }));
      } else {
        console.error(`Error en la respuesta al valorar ${projectId}:`, response);
        alert(`No se pudo guardar la valoración para ${projectId}. Por favor, intenta de nuevo.`);
      }
    } catch (error) {
      console.error(`Error al enviar valoración para ${projectId}:`, error);
      alert(`Error al guardar la valoración para ${projectId}. Por favor, intenta de nuevo.`);
    }
  }, [tempRatings, ratings]);

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
