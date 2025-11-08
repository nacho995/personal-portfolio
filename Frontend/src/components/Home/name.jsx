import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Name = () => {
  const { t } = useLanguage();
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Crear partículas flotantes
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);
  return (
    <motion.div 
      className="mt-[10vh] relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-7xl mx-auto relative">
        {/* Contenedor derecho: Foto y título - Centrado en desktop */}
        <motion.div 
          className="flex flex-col items-center gap-6 w-full max-w-sm lg:max-w-md mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md aspect-[3/4] sm:aspect-square">
            {/* Efecto de brillo y borde mejorado con múltiples capas - Colores profesionales */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#a78bfa] via-[#c084fc] to-[#60a5fa] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] blur-xl opacity-60 animate-border-wave will-change-transform"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#60a5fa] via-[#a78bfa] to-[#c084fc] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] blur-lg opacity-80 animate-border-wave will-change-transform" style={{ animationDelay: '1s' }}></div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#c084fc] to-[#93c5fd] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] blur-md opacity-90 animate-pulse"></div>
            
            {/* Imagen con mejor contraste y lazy loading */}
            <img 
              src="/yo.jpeg" 
              alt="Retrato profesional de Nacho Dalesio, Full Stack Developer" 
              className="relative w-full h-full object-cover border-2 border-white/50 animate-border-wave shadow-2xl shadow-[#a78bfa]/50"
              loading="eager"
              decoding="async"
            />
            {/* Overlay de brillo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#a78bfa]/0 via-white/0 to-[#60a5fa]/0 pointer-events-none animate-border-wave"></div>
          </div>
          
          {/* Título profesional mejorado */}
          <motion.div 
            className="text-center w-full relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative inline-block">
              <h2 className="text-xl sm:text-2xl font-medium tracking-wider text-white bg-clip-text drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] relative z-10">
                {t('name.title')}
              </h2>
              {/* Efecto de brillo detrás del texto */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#a78bfa]/30 via-[#c084fc]/30 to-[#60a5fa]/30 blur-xl animate-pulse"></div>
            </div>
            <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-white/60 to-transparent mt-2 shadow-lg relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#a78bfa]/50 via-white/80 to-[#60a5fa]/50 blur-sm animate-pulse"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Contenedor izquierdo: Nombre y datos - Mejorado para dark mode */}
        <motion.div 
          className="space-y-6 text-center lg:text-left lg:absolute lg:left-0 lg:top-[40%] lg:w-[40vw] mt-12 lg:mt-0"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {/* Nombre con gradiente profesional y legible */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight relative">
            <span className="relative inline-block group/name">
              <span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#f3e8ff] to-[#e9d5ff] relative z-10"
                style={{
                  textShadow: '0 0 40px rgba(167,139,250,0.3)',
                  WebkitTextStroke: '0.5px rgba(255,255,255,0.1)'
                }}
              >
                Nacho
              </span>
              {/* Efecto de profundidad */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#a78bfa]/20 via-[#c084fc]/20 to-[#e9d5ff]/20 blur-2xl group-hover/name:blur-3xl transition-all duration-500"></span>
              <span className="absolute inset-0 text-[#a78bfa]/20 blur-sm" style={{ transform: 'translateY(2px)' }}>Nacho</span>
            </span>
            <br className="hidden lg:block" />
            <span className="lg:hidden"> </span>
            <span className="relative inline-block group/surname">
              <span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-[#dbeafe] via-[#bfdbfe] to-white relative z-10"
                style={{
                  textShadow: '0 0 40px rgba(96,165,250,0.3)',
                  WebkitTextStroke: '0.5px rgba(255,255,255,0.1)'
                }}
              >
                Dalesio
              </span>
              {/* Efecto de profundidad */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#60a5fa]/20 via-[#93c5fd]/20 to-[#dbeafe]/20 blur-2xl group-hover/surname:blur-3xl transition-all duration-500"></span>
              <span className="absolute inset-0 text-[#60a5fa]/20 blur-sm" style={{ transform: 'translateY(2px)' }}>Dalesio</span>
            </span>
          </h1>

          {/* Botón de CV mejorado */}
          <motion.div 
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a 
              href="/Ignacio_Dalesio_Full_Stack_CV.pdf" 
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg 
                         bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20
                         hover:bg-white/20 transition-all duration-300 
                         shadow-lg hover:shadow-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
              <span className="text-sm sm:text-base text-white font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                {t('name.downloadCV')}
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decoración de fondo mejorada con colores profesionales */}
      <div className="fixed -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-[#a78bfa]/30 to-[#60a5fa]/30 rounded-full blur-[150px] animate-pulse will-change-opacity" aria-hidden="true" />
      <div className="fixed -z-10 top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-r from-[#c084fc]/20 to-[#a78bfa]/20 rounded-full blur-[120px] animate-pulse will-change-opacity" style={{ animationDelay: '1s' }} aria-hidden="true" />
      <div className="fixed -z-10 top-2/3 right-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-r from-[#60a5fa]/25 to-[#93c5fd]/25 rounded-full blur-[140px] animate-pulse will-change-opacity" style={{ animationDelay: '2s' }} aria-hidden="true" />
      
      {/* Partículas flotantes */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="fixed -z-10 rounded-full bg-white/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
          aria-hidden="true"
        />
      ))}
    </motion.div>
  )
}

export default Name