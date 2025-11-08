import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';

const Name = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [particles, setParticles] = useState([]);

  const accentColor = theme === 'javascript' ? '#F7DF1E' : '#83CD29'; // Color principal del tema

  useEffect(() => {
    // Crear partículas de código
    const codeSymbols = ['<', '>', '/', '{', '}', '(', ')', '[', ']', ';', '$', '=>'];
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 16 + 12,
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
        {/* Contenedor derecho: Foto y título */}
        <motion.div 
          className="flex flex-col items-center gap-6 w-full max-w-sm lg:max-w-md mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md aspect-[3/4] sm:aspect-square">
            {/* Corner brackets tech */}
            <div className="absolute -top-4 -left-4 font-code text-2xl opacity-60" style={{ color: accentColor }}>⌜</div>
            <div className="absolute -top-4 -right-4 font-code text-2xl opacity-60" style={{ color: accentColor }}>⌝</div>
            <div className="absolute -bottom-4 -left-4 font-code text-2xl opacity-60" style={{ color: accentColor }}>⌞</div>
            <div className="absolute -bottom-4 -right-4 font-code text-2xl opacity-60" style={{ color: accentColor }}>⌟</div>
            
            {/* Neón border animado */}
            <div 
              className="absolute -inset-1 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] blur-md opacity-80 animate-neon-pulse"
              style={{ 
                boxShadow: `0 0 20px ${accentColor}, 0 0 40px ${accentColor}, 0 0 60px ${accentColor}`,
                border: `2px solid ${accentColor}`,
              }}
            />
            
            {/* Scanlines sobre la foto */}
            <div className="absolute inset-0 scanlines pointer-events-none rounded-[30%_70%_70%_30%/30%_30%_70%_70%]" />
            
            {/* Imagen */}
            <img 
              src="/yo.jpeg" 
              alt="Nacho Dalesio - Full Stack Developer" 
              className="relative w-full h-full object-cover border-2 animate-border-wave shadow-2xl"
              style={{ borderColor: accentColor }}
              loading="eager"
            />
            
            {/* Status indicator */}
            <div className="absolute top-2 right-2 flex items-center gap-2 bg-black/80 px-3 py-1 rounded-full backdrop-blur-sm border" style={{ borderColor: `${accentColor}40` }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
              <span className="font-code text-xs" style={{ color: accentColor }}>ONLINE</span>
            </div>
          </div>
          
          {/* Título profesional tech */}
          <motion.div 
            className="text-center w-full relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative inline-block">
              {/* Terminal prompt */}
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="font-code text-sm sm:text-base opacity-70" style={{ color: accentColor }}>
                  &gt;_
                </span>
                <h2 
                  className="text-lg sm:text-xl font-code font-medium tracking-wide text-white relative z-10"
                  style={{
                    textShadow: `0 0 10px ${accentColor}`,
                  }}
                >
                  {t('name.title')}
                  <span className="inline-block w-2 h-5 sm:h-6 ml-1 animate-blink" style={{ backgroundColor: accentColor }} />
                </h2>
              </div>
              
              {/* Version tag */}
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="font-code text-xs px-3 py-1 rounded border opacity-60" style={{ 
                  borderColor: `${accentColor}40`,
                  color: accentColor 
                }}>
                  [deployed]
                </span>
                <span className="font-code text-xs px-3 py-1 rounded border opacity-60" style={{ 
                  borderColor: `${accentColor}40`,
                  color: accentColor 
                }}>
                  v2.0.1
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Contenedor izquierdo: Nombre */}
        <motion.div 
          className="space-y-6 text-center lg:text-left lg:absolute lg:left-0 lg:top-[40%] lg:w-[40vw] mt-12 lg:mt-0"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {/* Nombre con efecto tech */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight relative group">
            <span 
              className="relative inline-block"
              onMouseEnter={(e) => e.currentTarget.style.animation = 'glitch 0.3s ease-in-out'}
              onAnimationEnd={(e) => e.currentTarget.style.animation = ''}
            >
              <span 
                className="relative z-10 font-bold"
                style={{
                  color: accentColor, // Color principal del tema (AMARILLO o VERDE)
                  textShadow: `
                    0 0 20px ${accentColor},
                    0 0 40px ${accentColor}80,
                    0 2px 4px rgba(0,0,0,0.5)
                  `,
                }}
              >
                Nacho
              </span>
              {/* Glitch layers */}
              <span className="absolute inset-0 opacity-20 blur-sm" style={{ color: accentColor }}>Nacho</span>
            </span>
            <br className="hidden lg:block" />
            <span className="lg:hidden"> </span>
            <span 
              className="relative inline-block"
              onMouseEnter={(e) => e.currentTarget.style.animation = 'glitch 0.3s ease-in-out'}
              onAnimationEnd={(e) => e.currentTarget.style.animation = ''}
            >
              <span 
                className="relative z-10 font-bold"
                style={{
                  color: accentColor, // Color principal del tema (AMARILLO o VERDE)
                  textShadow: `
                    0 0 20px ${accentColor},
                    0 0 40px ${accentColor}80,
                    0 2px 4px rgba(0,0,0,0.5)
                  `,
                }}
              >
                Dalesio
              </span>
              <span className="absolute inset-0 opacity-20 blur-sm" style={{ color: accentColor }}>Dalesio</span>
            </span>
          </h1>

          {/* Botón de CV tech */}
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
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg font-code text-sm overflow-hidden"
              style={{
                backgroundColor: `${accentColor}10`,
                borderWidth: '2px',
                borderColor: `${accentColor}40`,
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Hover effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{ backgroundColor: accentColor }}
              />
              
              {/* Icon */}
              <svg 
                className="w-5 h-5 relative z-10" 
                style={{ color: accentColor }}
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
              
              {/* Text */}
              <span className="relative z-10 font-semibold" style={{ color: accentColor }}>
                {t('name.downloadCV')}
              </span>
              
              {/* Progress bar en hover */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500" style={{ backgroundColor: accentColor }} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Partículas de código flotantes alrededor */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="fixed -z-10 font-code font-bold"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            fontSize: `${particle.size}px`,
            color: accentColor,
            opacity: 0.15,
            textShadow: `0 0 10px ${accentColor}`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        >
          {particle.symbol}
        </motion.div>
      ))}
    </motion.div>
  )
}

export default Name
