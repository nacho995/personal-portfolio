import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { getRatingStars, postStars } from '../../service/api';

// Componente para los Tags de tecnologías
const TechTag = ({ name, color, children }) => (
  <span className={`px-3 py-1 text-xs sm:text-sm bg-[${color}]/20 text-[${color}] rounded-full flex items-center gap-1.5`}>
    {children}
    <span>{name}</span>
  </span>
);

// Componente de botón de navegación para el iframe
const IframeNavButton = ({ action, icon }) => (
  <button 
    onClick={action}
    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
  >
    <svg className="w-5 h-5 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      {icon}
    </svg>
  </button>
);

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempRating, setTempRating] = useState(0);
  const [rating, setRating] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [totalRatings, setTotalRatings] = useState(0);
  const [currentPreview, setCurrentPreview] = useState('');
  const [currentSiteName, setCurrentSiteName] = useState('');
  const projectId = 'goza-madrid';

  // Objeto con los proyectos para facilitar el mantenimiento
  const projects = {
    codlet: {
      title: "CodLet - Diseño Web",
      description: "Plataforma profesional de servicios de desarrollo web, con diseño moderno y enfoque en la experiencia de usuario. Incluye sistema de solicitud de proyectos, portafolio interactivo y panel de administración.",
      image: "/Codlet.png",
      url: "https://www.joycodlet.com",
      siteName: "joycodlet.com"
    },
    gozaMadrid: {
      title: "Real Estate Goza Madrid",
      description: "Plataforma inmobiliaria especializada en Madrid, con sistema de búsqueda avanzada de propiedades, gestión de citas y panel administrativo para gestión de propiedades.",
      image: "/gozamadridpreview.png",
      url: "https://realestategozamadrid.com/",
      siteName: "realestategozamadrid.com"
    }
  };

  // Cargar ratings desde la API al iniciar
  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const data = await getRatingStars(projectId);
        setAverageRating(data.averageRating);
        setTotalRatings(data.totalRatings);
        setRating(data.rating);
      } catch (error) {
        console.error('Error al cargar valoraciones:', error);
      }
    };

    fetchRatings();
  }, []);

  const handleTempRating = useCallback((stars) => {
    setTempRating(stars);
  }, []);

  const handleSubmitRating = useCallback(async () => {
    if (tempRating === 0) return;

    try {
      const response = await postStars(tempRating, projectId);
      
      // Actualizar estado con la respuesta del servidor
      setRating(response.rating);
      setTotalRatings(response.totalRatings);
      setAverageRating(response.averageRating);
      setTempRating(0);
    } catch (error) {
      console.error('Error al enviar valoración:', error);
      alert('No se pudo guardar la valoración. Por favor, intenta de nuevo.');
    }
  }, [tempRating, projectId]);

  const openPreview = useCallback((url, siteName) => {
    setCurrentPreview(url);
    setCurrentSiteName(siteName);
    setIsModalOpen(true);
  }, []);

  const handleIframeAction = useCallback((action) => {
    const iframe = document.querySelector('#preview-iframe');
    if (iframe instanceof HTMLIFrameElement) {
      switch (action) {
        case 'back':
          iframe.contentWindow?.history.back();
          break;
        case 'forward':
          iframe.contentWindow?.history.forward();
          break;
        case 'reload':
          iframe.src = iframe.src;
          break;
        default:
          break;
      }
    }
  }, []);

  // Componente de tarjeta de proyecto para reducir duplicación
  const ProjectCard = ({ project, delay = 0 }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group relative bg-white/[0.03] border border-white/[0.05] rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500"
    >
      {/* Preview Image */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.image}
          alt={`${project.title} Preview`}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Contenido de la card */}
      <div className="p-6 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-white/90 mb-3">{project.title}</h3>
        <p className="text-white/70 text-sm sm:text-base mb-6">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.title.includes("CodLet") ? (
            <>
              <span className="px-3 py-1 text-xs sm:text-sm bg-[#61DAFB]/20 text-[#61DAFB] rounded-full flex items-center gap-1.5">
                <img src="/react.png" alt="React icon" className="w-3.5 h-3.5" />
                <span>React</span>
              </span>
              <span className="px-3 py-1 text-xs sm:text-sm bg-[#38BDF8]/20 text-[#38BDF8] rounded-full flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" viewBox="0 0 54 33" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"/>
                </svg>
                <span>TailwindCSS</span>
              </span>
              <span className="px-3 py-1 text-xs sm:text-sm bg-[#68A063]/20 text-[#68A063] rounded-full flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z"/>
                </svg>
                <span>Node.js</span>
              </span>
            </>
          ) : (
            <>
              <span className="px-3 py-1 text-xs sm:text-sm bg-[#0070f3]/20 text-[#0070f3] rounded-full flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 0-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
                </svg>
                <span>Next.js</span>
              </span>
              <span className="px-3 py-1 text-xs sm:text-sm bg-[#38BDF8]/20 text-[#38BDF8] rounded-full flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" viewBox="0 0 54 33" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"/>
                </svg>
                <span>TailwindCSS</span>
              </span>
              <span className="px-3 py-1 text-xs sm:text-sm bg-[#68A063]/20 text-[#68A063] rounded-full flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z"/>
                </svg>
                <span>Node.js</span>
              </span>
            </>
          )}
        </div>

        {/* Sistema de Rating (solo para RealEstate Goza Madrid) */}
        {project.title.includes("Real Estate Goza Madrid") && (
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 p-3 rounded-xl bg-black/20 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={(e) => {
                        e.preventDefault();
                        handleTempRating(star);
                      }}
                      className="p-1 transition-all duration-300 hover:scale-110 cursor-pointer"
                    >
                      <svg 
                        className={`w-5 h-5 ${
                          star <= (tempRating || rating)
                            ? 'text-yellow-400'
                            : 'text-white/20 hover:text-yellow-400/50'
                        } transition-colors duration-300`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </button>
                  ))}
                </div>

                {/* Botón de valorar */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmitRating();
                  }}
                  className={`px-4 py-1.5 rounded-lg transition-all duration-300 ${
                    tempRating > 0 && tempRating !== rating
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-medium hover:from-yellow-500 hover:to-yellow-600'
                      : 'bg-white/10 text-white/60 cursor-not-allowed'
                  }`}
                  disabled={tempRating === 0 || tempRating === rating}
                >
                  {tempRating === rating ? 'Valorado' : 'Valorar'}
                </button>
              </div>
              
              {/* Mostrar promedio */}
              <div className="flex items-center gap-2 text-white/80">
                <span className="font-medium text-sm">
                  {averageRating > 0 
                    ? `${averageRating} / 5`
                    : "Sin valoraciones"
                  }
                </span>
                {totalRatings > 0 && (
                  <span className="text-white/50 text-xs">
                    ({totalRatings} {totalRatings === 1 ? 'valoración' : 'valoraciones'})
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Botones */}
        <div className="flex flex-wrap gap-4 mt-6">
          <a 
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white/90 rounded-xl transition-all duration-300"
          >
            Visitar Sitio
          </a>
          <button
            onClick={() => openPreview(project.url, project.siteName)}
            className="px-6 py-2 bg-gradient-to-r from-purple-500/80 to-blue-500/80 hover:from-purple-500 hover:to-blue-500 text-white rounded-xl transition-all duration-300"
          >
            Vista Previa
          </button>
        </div>
      </div>
    </motion.div>
  );

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
          {/* Card del Proyecto CodLet */}
          <ProjectCard project={projects.codlet} delay={0} />

          {/* Card del Proyecto Goza Madrid */}
          <ProjectCard project={projects.gozaMadrid} delay={0.3} />

          {/* GitHub Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-64 h-fit"
          >
            <a 
              href="https://github.com/nacho995/DevLet"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-white/[0.03] border border-white/[0.05] rounded-2xl hover:border-white/20 transition-all duration-500"
            >
              {/* GitHub Icon */}
              <div className="relative p-4 mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <svg 
                  className="w-12 h-12 text-white/90 relative group-hover:scale-110 transition-transform duration-500" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-white/90 text-center group-hover:text-white transition-colors duration-300">
                Ver código en GitHub
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Modal de Preview */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-7xl bg-gradient-to-br from-white/[0.07] to-white/[0.03] border border-white/10 rounded-2xl shadow-2xl">
            {/* Header del Modal */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => handleIframeAction('back')}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={() => handleIframeAction('forward')}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button 
                  onClick={() => handleIframeAction('reload')}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
                <span className="text-sm text-white/90 border-l border-white/10 pl-4">
                  {currentSiteName}
                </span>
              </div>
            </div>

            {/* Contenido del Modal */}
            <div className="h-[80vh] overflow-hidden">
              <iframe
                id="preview-iframe"
                src={currentPreview}
                className="w-full h-full"
                title="Portfolio Preview"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
