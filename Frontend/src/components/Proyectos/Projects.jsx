import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { getRatingStars, postStars } from '../../service/api';
import CodLetProject from './CodLetProject';
import GozaMadridProject from './GozaMadridProject';

// Componente para los Tags de tecnologías
const TechTag = ({ name, color, children }) => (
  <span className={`px-3 py-1 text-xs sm:text-sm bg-[${color}]/20 text-[${color}] rounded-full flex items-center gap-1.5`}>
    {children}
    <span>{name}</span>
  </span>
);

export default function Projects() {
  const [tempRatings, setTempRatings] = useState({
    'goza-madrid': 0,
    'codlet': 0
  });
  const [ratings, setRatings] = useState({
    'goza-madrid': 0,
    'codlet': 0
  });
  const [averageRatings, setAverageRatings] = useState({
    'goza-madrid': 0,
    'codlet': 0
  });
  const [totalRatings, setTotalRatings] = useState({
    'goza-madrid': 0,
    'codlet': 0
  });

  // Objeto con los proyectos para facilitar el mantenimiento
  const projects = {
    codlet: {
      id: 'codlet',
      title: "CodLet - Diseño Web",
      description: "Plataforma profesional de servicios de desarrollo web, con diseño moderno y enfoque en la experiencia de usuario. Incluye sistema de solicitud de proyectos, portafolio interactivo y panel de administración.",
      image: "/Codlet.png",
      url: "https://www.joycodlet.com",
      siteName: "joycodlet.com",
      githubUrl: "https://github.com/nacho995/DevLet"
    },
    gozaMadrid: {
      id: 'goza-madrid',
      title: "Real Estate Goza Madrid",
      description: "Plataforma inmobiliaria especializada en Madrid, con sistema de búsqueda avanzada de propiedades, gestión de citas y panel administrativo para gestión de propiedades.",
      image: "/gozamadridpreview.png",
      url: "https://realestategozamadrid.com/",
      siteName: "realestategozamadrid.com",
      githubUrl: "https://github.com/nacho995/nextjs-gozamadrid"
    }
  };

  // Cargar ratings desde la API al iniciar - Mejorando para separar correctamente las valoraciones
  useEffect(() => {
    const fetchRatings = async () => {
      try {
        // Cargar ratings para cada proyecto de forma separada
        const gozaData = await getRatingStars('goza-madrid');
        const codletData = await getRatingStars('codlet');
        
        console.log('Datos cargados para Goza Madrid:', gozaData);
        console.log('Datos cargados para CodLet:', codletData);
        
        // Actualizar los estados con los datos correctos para cada proyecto
        setAverageRatings({
          'goza-madrid': gozaData.averageRating || 0,
          'codlet': codletData.averageRating || 0
        });
        
        setTotalRatings({
          'goza-madrid': gozaData.totalRatings || 0,
          'codlet': codletData.totalRatings || 0
        });
        
        setRatings({
          'goza-madrid': gozaData.userRating || 0,
          'codlet': codletData.userRating || 0
        });
        
        // Inicializar los ratings temporales con los valores actuales
        setTempRatings({
          'goza-madrid': gozaData.userRating || 0,
          'codlet': codletData.userRating || 0
        });
      } catch (error) {
        console.error('Error al cargar valoraciones:', error);
      }
    };

    fetchRatings();
  }, []);

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
            Mis Proyectos
          </h1>
          <div className="mt-2 h-1 w-24 sm:w-32 mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        {/* Contenido */}
        <div className="relative space-y-8">
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

          {/* GitHub Card - Versión modificada */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a 
              href="https://github.com/nacho995"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center p-5 bg-white/[0.03] border border-white/[0.05] rounded-2xl hover:border-white/20 transition-all duration-500 w-fit"
            >
              {/* GitHub Icon */}
              <img 
                src="/github.png" 
                alt="GitHub" 
                className="w-10 h-10 mr-4 transition-transform duration-500 group-hover:scale-110"
              />
              <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors duration-300">
                Ver código en GitHub
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
