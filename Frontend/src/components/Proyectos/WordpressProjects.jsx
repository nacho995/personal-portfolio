import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getRatingStars, postStars } from '../../service/api';

export default function WordpressProjects() {
  const [tempRating, setTempRating] = useState(0);
  const [rating, setRating] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [totalRatings, setTotalRatings] = useState(0);
  const projectId = 'wordpress-inmobiliaria';

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

  const handleTempRating = (stars) => {
    setTempRating(stars);
  };

  const handleSubmitRating = async () => {
    if (tempRating === 0) return;

    try {
      // Mostrar algún indicador de carga si quieres
      const response = await postStars(tempRating, projectId);
      
      // Actualizar estado con la respuesta del servidor
      setRating(response.rating);
      setTotalRatings(response.totalRatings);
      setAverageRating(response.averageRating);
      setTempRating(0);

      // Opcional: Mostrar mensaje de éxito
      console.log('Valoración guardada correctamente');

    } catch (error) {
      console.error('Error al enviar valoración:', error);
      // Opcional: Mostrar mensaje de error al usuario
      alert('No se pudo guardar la valoración. Por favor, intenta de nuevo.');
    }
  };

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
            Mis Proyectos WordPress
          </h1>
          <div className="mt-2 h-1 w-24 sm:w-32 mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        {/* Contenido */}
        <div className="relative space-y-8">
          {/* Card del Proyecto y GitHub Link */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto] gap-6">
            {/* Card del Proyecto */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative bg-white/[0.03] border border-white/[0.05] rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500"
            >
              {/* Preview Image */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src="/GozaMadridWP.png" 
                  alt="WordPress inmobiliaria Preview"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Contenido de la card */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white/90 mb-3">Inmobiliaria</h3>
                <p className="text-white/70 text-sm sm:text-base mb-6">
                  Sitio web inmobiliario desarrollado con WordPress, especializado en la presentación de propiedades 
                  premium y gestión de cartera de inmuebles. Incluye búsqueda avanzada, galería de imágenes HD 
                 y formularios de contacto personalizados. Diseño elegante y responsivo optimizado 
                  para conversión de leads.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 text-xs sm:text-sm bg-[#21759B]/20 text-[#21759B] rounded-full flex items-center gap-1.5">
                    <svg 
                      className="w-3.5 h-3.5" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M12.158 0c-6.634 0-12.031 5.398-12.031 12.031 0 6.634 5.398 12.031 12.031 12.031 6.634 0 12.031-5.398 12.031-12.031 0-6.634-5.398-12.031-12.031-12.031zm-0.842 4.391c0.427-0.012 0.865 0.007 1.318 0.059 1.357 0.155 2.535 0.933 3.094 1.822 0.555 0.884 0.869 1.858 0.869 2.928 0 0.913-0.193 1.962-0.572 2.879-0.27 0.698-0.632 1.557-1.082 2.189l-1.746 4.741h-3.177l-1.758-4.811c0.358-0.107 0.686-0.251 0.980-0.429 0.421-0.254 0.775-0.592 1.045-1.009 0.369-0.572 0.582-1.309 0.582-2.096 0-0.627-0.155-1.207-0.429-1.705-0.272-0.498-0.661-0.913-1.142-1.208-0.358-0.219-0.758-0.382-1.189-0.486v-0.095c0.419-0.107 0.792-0.269 1.114-0.486 0.479-0.323 0.864-0.763 1.131-1.273 0.269-0.51 0.416-1.096 0.416-1.727 0-0.663-0.155-1.274-0.429-1.796-0.265-0.51-0.643-0.925-1.101-1.22-0.234-0.149-0.491-0.274-0.764-0.369v-0.035c0.955 0.046 1.766 0.336 2.403 0.872 0.652 0.55 1.16 1.319 1.477 2.227 0.317 0.907 0.475 1.945 0.475 3.115 0 1.051-0.143 2.052-0.428 3.002-0.286 0.949-0.693 1.812-1.228 2.588l2.582 7.739h-3.511l-0.428-1.394c-1.296 1.171-2.799 1.757-4.509 1.757-1.344 0-2.587-0.335-3.728-1.003l0.461-1.378c0.84 0.419 1.763 0.628 2.769 0.628 1.342 0 2.539-0.425 3.591-1.274l-1.726-5.652c-1.537 0.788-3.275 1.182-5.213 1.182-0.804 0-1.564-0.082-2.278-0.244l0.463-1.468c0.729 0.233 1.532 0.35 2.409 0.35 1.641 0 3.127-0.392 4.458-1.177l-0.251-0.811c-0.304 0.084-0.627 0.127-0.964 0.127-1.069 0-1.994-0.382-2.774-1.146-0.782-0.764-1.173-1.689-1.173-2.775 0-0.92 0.247-1.736 0.743-2.449 0.495-0.713 1.162-1.267 2.001-1.663 0.6-0.281 1.274-0.446 2.016-0.498-0.406-0.167-0.789-0.383-1.144-0.652-0.5-0.38-0.89-0.835-1.165-1.368-0.276-0.532-0.416-1.1-0.416-1.704 0-0.627 0.143-1.203 0.428-1.729 0.285-0.525 0.68-0.982 1.187-1.367 0.494-0.38 1.076-0.676 1.744-0.884 0.644-0.201 1.376-0.299 2.198-0.299z"/>
                    </svg>
                    <span>WordPress</span>
                  </span>
                  <span className="px-3 py-1 text-xs sm:text-sm bg-white/10 text-white/70 rounded-full flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.663 3.118c.225.015.45.032.673.05C19.876 3.298 21 4.604 21 6.109v9.642a3 3 0 01-3 3V16.5c0-5.922-4.576-10.775-10.384-11.217.324-1.132 1.3-2.01 2.548-2.114.224-.019.448-.036.673-.051A3 3 0 0113.5 0h4.164A3 3 0 0117.663 3.118z" />
                      <path d="M7.5 18a4.5 4.5 0 01-4.5-4.5V9.337a3 3 0 00-3-3V15a6 6 0 006 6h10.5a3 3 0 01-3 3H7.5z" />
                    </svg>
                    <span>WP Bakery</span>
                  </span>
                  <span className="px-3 py-1 text-xs sm:text-sm bg-white/10 text-white/70 rounded-full flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.352 0 0 5.352 0 12s5.352 12 12 12 12-5.352 12-12S18.648 0 12 0zm0 22.8C6.012 22.8 1.2 17.988 1.2 12S6.012 1.2 12 1.2 22.8 6.012 22.8 12 17.988 22.8 12 22.8zm3.96-14.04l-6.24 9.768c-.12.12-.12.12-.24.12h-.12c-.12 0-.12 0-.24-.12l-2.76-2.76c-.12-.12-.12-.36 0-.48l.48-.48c.12-.12.36-.12.48 0l2.04 2.04 5.52-8.628c.12-.12.36-.12.48 0l.48.48c.24.12.24.36.12.48z"/>
                    </svg>
                    <span>WooCommerce</span>
                  </span>
                </div>

                {/* Contenedor flex para GitHub link y Rating */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
                  {/* Sistema de Rating con botón de confirmación */}
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

                {/* Botones */}
                <div className="flex flex-wrap gap-4 mt-6">
                  <a 
                    href="https://wordpress-1430059-5339263.cloudwaysapps.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white/90 rounded-xl transition-all duration-300"
                  >
                    Visitar Sitio
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 