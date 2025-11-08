import { useTheme } from '../../context/ThemeContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const BackgroundGradient = () => {
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Seguimiento del mouse para efectos interactivos
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Transformaciones para elementos flotantes
  const smoothProgress = useTransform(scrollYProgress, [0, 1], [0, 0.8]);
  
  // React - Esquina superior derecha
  const reactY = useTransform(smoothProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, -160, -400, -600, -800, -1000]);
  const reactX = useTransform(smoothProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 100, 200, 300, 400, 500]);
  const reactRotate = useTransform(smoothProgress, [0, 1], [0, 720]);
  
  // JavaScript
  const jsY = useTransform(smoothProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [200, 100, 0, -200, -400, -600]);
  const jsX = useTransform(smoothProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [200, 100, 0, -200, -400, -600]);
  const jsRotate = useTransform(smoothProgress, [0, 1], [-15, 360]);
  
  // Node.js
  const nodeY = useTransform(smoothProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [200, 100, 0, -200, -400, -600]);
  const nodeX = useTransform(smoothProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [-200, -150, -100, -50, 100, 250]);
  const nodeRotate = useTransform(smoothProgress, [0, 1], [-15, 360]);

  // Símbolos de código
  const bracketY1 = useTransform(smoothProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, -100, -200, -400, -600, -800]);
  const bracketX1 = useTransform(smoothProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, -160, -320, -480, -640, -800]);
  
  // Colores según el tema
  const colors = theme === 'javascript' 
    ? {
        primary: '#F7DF1E',
        secondary: '#FDB813',
        shadow: 'rgba(247, 223, 30, 0.3)',
        glow1: 'bg-[#F7DF1E]/25',
        glow2: 'bg-[#FDB813]/20',
        glow3: 'bg-[#FFE55C]/15',
        gradient: 'from-[#F7DF1E] via-[#FDB813] to-[#FFE55C]',
        bgBase: 'from-[#1a1a0f]/90 via-[#0a0a0f]/70 to-[#2a2a1a]/90'
      }
    : {
        primary: '#83CD29',
        secondary: '#339933',
        shadow: 'rgba(131, 205, 41, 0.3)',
        glow1: 'bg-[#83CD29]/25',
        glow2: 'bg-[#339933]/20',
        glow3: 'bg-[#90C53F]/15',
        gradient: 'from-[#83CD29] via-[#90C53F] to-[#339933]',
        bgBase: 'from-[#0a1a0a]/90 via-[#0a0a0f]/70 to-[#1a2a1a]/90'
      };

  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-[#0a0a0f] overflow-hidden">
      {/* Fondo base con gradiente */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.bgBase}`} />
      
      {/* Mesh gradient animado profesional */}
      <div className="absolute inset-0">
        {/* Gradientes principales */}
        <motion.div 
          className={`absolute top-0 right-0 w-[600px] h-[600px] ${colors.glow1} rounded-full blur-[120px]`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className={`absolute bottom-0 left-0 w-[600px] h-[600px] ${colors.glow2} rounded-full blur-[120px]`}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] ${colors.glow3} rounded-full blur-[140px]`}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {/* Gradientes adicionales para más profundidad */}
        <motion.div 
          className={`absolute top-1/4 right-1/4 w-[400px] h-[400px] ${colors.glow1} rounded-full blur-[100px]`}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className={`absolute bottom-1/4 left-1/3 w-[500px] h-[500px] ${colors.glow2} rounded-full blur-[110px]`}
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Partículas flotantes */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${i % 3 === 0 ? colors.glow1 : i % 3 === 1 ? colors.glow2 : colors.glow3}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Símbolos de código flotantes */}
      <motion.div 
        className="absolute right-[10%] sm:right-[15%] lg:right-[20%] top-[15%] sm:top-[20%] lg:top-[25%] select-none transform-gpu will-change-transform"
        style={{ 
          y: reactY,
          x: reactX,
          rotate: reactRotate,
        }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        initial={false}
      >
        <span className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient} tracking-wider backdrop-blur-sm`}
          style={{
            textShadow: `0 0 30px ${colors.shadow}`,
            filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.1))'
          }}>
          React
        </span>
      </motion.div>

      <motion.div 
        className="absolute right-[40%] sm:right-[35%] lg:right-[30%] top-[30%] sm:top-[35%] lg:top-[40%] select-none transform-gpu will-change-transform"
        style={{ 
          y: bracketY1,
          x: bracketX1,
          rotate: useTransform(smoothProgress, [0, 1], [10, -360]),
        }}
        transition={{ duration: 0.5 }}
        initial={false}
      >
        <span className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-mono text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient} backdrop-blur-sm`}
          style={{
            textShadow: `0 0 30px ${colors.shadow}`,
            filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.1))'
          }}>
          &apos;&apos;
        </span>
      </motion.div>

      <motion.div 
        className="absolute right-[15%] sm:right-[20%] lg:right-[25%] top-[45%] sm:top-[50%] lg:top-[55%] select-none transform-gpu will-change-transform"
        style={{ 
          y: jsY,
          x: jsX,
          rotate: jsRotate,
        }}
        transition={{ duration: 0.5 }}
        initial={false}
      >
        <span className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient} tracking-wider backdrop-blur-sm`}
          style={{
            textShadow: `0 0 30px ${colors.shadow}`,
            filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.1))'
          }}>
          JavaScript
        </span>
      </motion.div>

      <motion.div 
        className="absolute right-[20%] sm:right-[30%] lg:right-[40%] top-[55%] sm:top-[50%] lg:top-[45%] select-none transform-gpu will-change-transform"
        style={{ 
          y: nodeY,
          x: nodeX,
          rotate: nodeRotate,
        }}
        transition={{ duration: 0.5 }}
        initial={false}
      >
        <span className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient} tracking-wider backdrop-blur-sm`}
          style={{
            textShadow: `0 0 30px ${colors.shadow}`,
            filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.1))'
          }}>
          Node.js
        </span>
      </motion.div>

      {/* Grid pattern sutil */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] opacity-40" />
      
      {/* Overlay de vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40" />
      
      {/* Efecto interactivo del mouse */}
      <motion.div
        className={`absolute w-[600px] h-[600px] ${colors.glow1} rounded-full blur-[150px] pointer-events-none`}
        animate={{
          x: `${mousePosition.x - 50}%`,
          y: `${mousePosition.y - 50}%`,
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          x: { type: "spring", stiffness: 50, damping: 30 },
          y: { type: "spring", stiffness: 50, damping: 30 },
          opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      />
    </div>
  )
}

export default BackgroundGradient
