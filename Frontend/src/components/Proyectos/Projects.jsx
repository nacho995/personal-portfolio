import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { getRatingStars, postStars } from '../../service/api';
import { useLanguage } from '../../context/LanguageContext';
import TenfeProject from './TenfeProject';
import CodLetProject from './CodLetProject';
import GozaMadridProject from './GozaMadridProject';
import HaciendaSanCarlosProject from './HaciendaSanCarlosProject.jsx';
import MundoTintaProject from './MundoTintaProject';

// Componente para los Tags de tecnologías
const TechTag = ({ name, color, children }) => (
  <span className={`px-3 py-1 text-xs sm:text-sm bg-[${color}]/20 text-[${color}] rounded-full flex items-center gap-1.5`}>
    {children}
    <span>{name}</span>
  </span>
);

export default function Projects() {
  const { t, language } = useLanguage();
  
  const [tempRatings, setTempRatings] = useState({
    'tenfe': 0,
    'goza-madrid': 0,
    'codlet': 0,
    'hacienda-san-carlos': 0,
    'mundo-tinta': 0
  });
  const [ratings, setRatings] = useState({
    'tenfe': 0,
    'goza-madrid': 0,
    'codlet': 0,
    'hacienda-san-carlos': 0,
    'mundo-tinta': 0
  });
  const [averageRatings, setAverageRatings] = useState({
    'tenfe': 0,
    'goza-madrid': 0,
    'codlet': 0,
    'hacienda-san-carlos': 0,
    'mundo-tinta': 0
  });
  const [totalRatings, setTotalRatings] = useState({
    'tenfe': 0,
    'goza-madrid': 0,
    'codlet': 0,
    'hacienda-san-carlos': 0,
    'mundo-tinta': 0
  });

  // Objeto con los proyectos - useMemo para actualizar cuando cambia el idioma
  const projects = useMemo(() => ({
    tenfe: {
      id: 'tenfe',
      title: t('tenfe.title'),
      description: t('tenfe.description'),
      image: "/tenfe.png",
      url: "https://tenfe.onrender.com",
      siteName: "tenfe.onrender.com",
      githubUrl: "https://github.com/NFSDMAD/1024-frontend",
      githubBackendUrl: "https://github.com/NFSDMAD/1024-backend"
    },
    mundoTinta: {
      id: 'mundo-tinta',
      title: t('mundotinta.title'),
      description: t('mundotinta.description'),
      image: "/mundo-tinta.png",
      url: "https://www.mundo-tinta.com",
      siteName: "mundo-tinta.com",
      githubUrl: "https://github.com/nacho995/mundotinta"
    },
    codlet: {
      id: 'codlet',
      title: t('codlet.title'),
      description: t('codlet.description'),
      image: "/Codlet.png",
      url: "https://www.joycodlet.com",
      siteName: "joycodlet.com",
      githubUrl: "https://github.com/nacho995/DevLet"
    },
    gozaMadrid: {
      id: 'goza-madrid',
      title: t('gozamadrid.title'),
      description: t('gozamadrid.description'),
      image: "/gozamadridpreview.png",
      url: "https://realestategozamadrid.com/",
      siteName: "realestategozamadrid.com",
      githubUrl: "https://github.com/nacho995/nextjs-gozamadrid"
    },
    haciendaSanCarlos: {
      id: 'hacienda-san-carlos',
      title: t('hacienda.title'),
      description: t('hacienda.description'),
      image: "/hdasancarlos.png",
      url: "https://www.hdasancarlosborromeo.com/",
      siteName: "hdasancarlosborromeo.com",
      githubUrl: "https://github.com/nacho995/hacienda"
    }
  }), [language, t]);

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
        
        console.log('Datos cargados para Tenfe:', tenfeData);
        console.log('Datos cargados para Goza Madrid:', gozaData);
        console.log('Datos cargados para CodLet:', codletData);
        console.log('Datos cargados para Hacienda San Carlos:', haciendaData);
        console.log('Datos cargados para Mundo-Tinta:', mundoTintaData);
        
        // Actualizar los estados con los datos correctos para cada proyecto
        setAverageRatings({
          'tenfe': tenfeData.averageRating || 0,
          'goza-madrid': gozaData.averageRating || 0,
          'codlet': codletData.averageRating || 0,
          'hacienda-san-carlos': haciendaData.averageRating || 0,
          'mundo-tinta': mundoTintaData.averageRating || 0
        });
        
        setTotalRatings({
          'tenfe': tenfeData.totalRatings || 0,
          'goza-madrid': gozaData.totalRatings || 0,
          'codlet': codletData.totalRatings || 0,
          'hacienda-san-carlos': haciendaData.totalRatings || 0,
          'mundo-tinta': mundoTintaData.totalRatings || 0
        });
        
        setRatings({
          'tenfe': tenfeData.userRating || 0,
          'goza-madrid': gozaData.userRating || 0,
          'codlet': codletData.userRating || 0,
          'hacienda-san-carlos': haciendaData.userRating || 0,
          'mundo-tinta': mundoTintaData.userRating || 0
        });
        
        // Inicializar los ratings temporales con los valores actuales
        setTempRatings({
          'tenfe': tenfeData.userRating || 0,
          'goza-madrid': gozaData.userRating || 0,
          'codlet': codletData.userRating || 0,
          'hacienda-san-carlos': haciendaData.userRating || 0,
          'mundo-tinta': mundoTintaData.userRating || 0
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

  return (
    <div className="relative w-full mt-[5vh] max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <div className="relative backdrop-blur-2xl bg-black/10 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-[0_0_40px_rgba(0,0,0,0.3)] overflow-hidden">
        {/* Efectos de fondo */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5" />
        <div className="absolute -top-32 -right-32 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-32 -left-32 w-48 sm:w-64 h-48 sm:h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" />

        {/* Título */}
        <div className="relative mb-8 sm:mb-16 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-white/70 tracking-tight">
            {t('projects.title')}
          </h1>
          <div className="mt-2 h-1 w-24 sm:w-32 mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
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
        </div>
      </div>
    </div>
  );
}
