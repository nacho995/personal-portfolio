import { useTheme } from '../../context/ThemeContext';
import { motion, useScroll, useTransform } from 'framer-motion';


const BackgroundGradient = () => {
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();
  
  // Hacer el scroll más suave reduciendo la velocidad del progreso
  const smoothProgress = useTransform(scrollYProgress, [0, 1], [0, 0.3]);
  
  // Transformaciones para cada elemento
  const reactY = useTransform(smoothProgress, [0, 0.2, 0.5, 0.8, 1], [0, -100, 50, -100, 0]);
  const reactX = useTransform(smoothProgress, [0, 0.2, 0.5, 0.8, 1], [0, 100, -100, 100, 0]);
  const reactRotate = useTransform(smoothProgress, [0, 1], [0, 360]);
  
  const bracketY1 = useTransform(smoothProgress, [0, 0.3, 0.6, 1], [0, 150, -150, 0]);
  const bracketX1 = useTransform(smoothProgress, [0, 0.3, 0.6, 1], [0, -100, 100, 0]);
  const bracketRotate1 = useTransform(smoothProgress, [0, 1], [10, -180]);
  
  const jsY = useTransform(smoothProgress, [0, 0.2, 0.5, 0.8, 1], [0, 150, -200, 150, 0]);
  const jsX = useTransform(smoothProgress, [0, 0.2, 0.5, 0.8, 1], [0, -200, 150, -200, 0]);
  const jsRotate = useTransform(smoothProgress, [0, 1], [-15, 180]);
  
  const bracketY2 = useTransform(smoothProgress, [0, 0.3, 0.6, 0.9, 1], [0, -150, 100, -150, 0]);
  const bracketX2 = useTransform(smoothProgress, [0, 0.3, 0.6, 0.9, 1], [0, 100, -150, 100, 0]);
  const bracketRotate2 = useTransform(smoothProgress, [0, 1], [15, -180]);
  
  const nodeY = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], [0, 150, -100, 150, 0]);
  const nodeX = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], [0, -200, 150, -200, 0]);
  const nodeRotate = useTransform(smoothProgress, [0, 1], [-15, 180]);

  const bracaletsY = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], [0, 150, -100, 150, 0]);
  const bracaletsX = useTransform(smoothProgress, [0, 0.2, 0.5, 0.8, 1], [0, 100, -150, 100, 0]);
  const bracaletsRotate = useTransform(smoothProgress, [0, 1], [-15, 180]);

  // Nuevo elemento brackets
  const bracketsY = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], [0, -100, 100, -100, 0]);
  const bracketsX = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], [0, 100, -100, 100, 0]);
  const bracketsRotate = useTransform(smoothProgress, [0, 1], [0, 180]);

  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-[#13111C]">
      {/* Gradiente de fondo base mejorado */}
      <div className={`absolute inset-0 bg-gradient-to-br ${
        theme === 'purple' 
          ? 'from-purple-800/40 via-[#13111C]/60 to-blue-900/40'
          : 'from-[#40A0E0]/40 via-[#13111C]/60 to-[#2980B9]/40'
      }`} />
      
      {/* React */}
      <motion.div 
        className="absolute right-[10%] sm:right-[15%] lg:right-[20%] top-[15%] sm:top-[20%] lg:top-[25%] select-none transform-gpu"
        style={{ 
          y: reactY,
          x: reactX,
          rotate: reactRotate,
        }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        initial={false}
      >
        <span className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text ${
          theme === 'purple'
            ? 'bg-gradient-to-r from-purple-400 to-purple-200 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)] [text-shadow:3px_3px_6px_rgba(168,85,247,0.5)]'
            : 'bg-gradient-to-r from-[#40A0E0] to-[#89CFF0] drop-shadow-[0_0_20px_rgba(64,160,224,0.5)] [text-shadow:3px_3px_6px_rgba(64,160,224,0.5)]'
        } tracking-wider backdrop-blur-sm`}>
          React
        </span>
      </motion.div>

      {/* Bracket 1 */}
      <motion.div 
        className="absolute right-[40%] sm:right-[35%] lg:right-[30%] top-[30%] sm:top-[35%] lg:top-[40%] select-none transform-gpu"
        style={{ 
          y: bracketY1,
          x: bracketX1,
          rotate: bracketRotate1,
        }}
        transition={{ duration: 0.5 }}
        initial={false}
      >
        <span className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-mono text-transparent bg-clip-text ${
          theme === 'purple'
            ? 'bg-gradient-to-r from-purple-300 to-blue-300 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)] [text-shadow:3px_3px_6px_rgba(168,85,247,0.5)]'
            : 'bg-gradient-to-r from-[#40A0E0] to-[#89CFF0] drop-shadow-[0_0_20px_rgba(64,160,224,0.5)] [text-shadow:3px_3px_6px_rgba(64,160,224,0.5)]'
        } backdrop-blur-sm`}>
          {'</>'}
        </span>
      </motion.div>

      {/* JavaScript */}
      <motion.div 
        className="absolute right-[15%] sm:right-[20%] lg:right-[25%] top-[45%] sm:top-[50%] lg:top-[55%] select-none transform-gpu"
        style={{ 
          y: jsY,
          x: jsX,
          rotate: jsRotate,
        }}
        transition={{ duration: 0.5 }}
        initial={false}
      >
        <span className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text ${
          theme === 'purple'
            ? 'bg-gradient-to-r from-purple-400 to-purple-200 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)] [text-shadow:3px_3px_6px_rgba(168,85,247,0.5)]'
            : 'bg-gradient-to-r from-[#40A0E0] to-[#89CFF0] drop-shadow-[0_0_20px_rgba(64,160,224,0.5)] [text-shadow:3px_3px_6px_rgba(64,160,224,0.5)]'
        } tracking-wider backdrop-blur-sm`}>
          JavaScript
        </span>
      </motion.div>

      {/* Bracket 2 */}
      <motion.div 
        className="absolute right-[45%] sm:right-[40%] lg:right-[35%] top-[60%] sm:top-[65%] lg:top-[70%] select-none transform-gpu"
        style={{ 
          y: bracketY2,
          x: bracketX2,
          rotate: bracketRotate2,
        }}
        transition={{ duration: 0.5 }}
        initial={false}
      >
        <span className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-mono text-transparent bg-clip-text ${
          theme === 'purple'
            ? 'bg-gradient-to-r from-purple-300 to-blue-300 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)] [text-shadow:3px_3px_6px_rgba(168,85,247,0.5)]'
            : 'bg-gradient-to-r from-[#40A0E0] to-[#89CFF0] drop-shadow-[0_0_20px_rgba(64,160,224,0.5)] [text-shadow:3px_3px_6px_rgba(64,160,224,0.5)]'
        } backdrop-blur-sm`}>
          {'</>'}
        </span>
      </motion.div>

      {/* Node.js */}
      <motion.div 
        className="absolute right-[20%] sm:right-[30%] lg:right-[45%] top-[75%] sm:top-[65%] lg:top-[55%] select-none transform-gpu"
        style={{ 
          y: nodeY,
          x: nodeX,
          rotate: nodeRotate,
        }}
        transition={{ duration: 0.5 }}
        initial={false}
      >
        <span className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text ${
          theme === 'purple'
            ? 'bg-gradient-to-r from-purple-400 to-purple-200 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)] [text-shadow:3px_3px_6px_rgba(168,85,247,0.5)]'
            : 'bg-gradient-to-r from-[#40A0E0] to-[#89CFF0] drop-shadow-[0_0_20px_rgba(64,160,224,0.5)] [text-shadow:3px_3px_6px_rgba(64,160,224,0.5)]'
        } tracking-wider backdrop-blur-sm`}>
          Node.js
        </span>
      </motion.div>
      <motion.div
      className="absolute left-[15%] sm:left-[20%] lg:left-[25%] top-[35%] sm:top-[40%] lg:top-[45%] select-none transform-gpu"
      style={{
        y: bracaletsY,
        x: bracaletsX,
        rotate: bracaletsRotate,
      }}
      transition={{ duration: 0.5 }}
      initial={false}
      >
        <span className={`text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-mono text-transparent bg-clip-text ${
          theme === 'purple'
            ? 'bg-gradient-to-r from-purple-300 to-blue-300 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)] [text-shadow:3px_3px_6px_rgba(168,85,247,0.5)]'
            : 'bg-gradient-to-r from-[#40A0E0] to-[#2980B9] drop-shadow-[0_0_20px_rgba(64,160,224,0.5)] [text-shadow:3px_3px_6px_rgba(64,160,224,0.5)]'
        } tracking-wider backdrop-blur-sm`}>
          { '{}' }
        </span>
      </motion.div>
      {/* Nuevo elemento brackets */}
      <motion.div
        className="absolute left-[35%] sm:left-[40%] lg:left-[45%] top-[65%] sm:top-[70%] lg:top-[75%] select-none transform-gpu"
        style={{
          y: bracketsY,
          x: bracketsX,
          rotate: bracketsRotate,
        }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        initial={false}
      >
        <span className={`text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-mono text-transparent bg-clip-text ${
          theme === 'purple'
            ? 'bg-gradient-to-r from-purple-400 to-blue-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.6)] [text-shadow:2px_2px_4px_rgba(168,85,247,0.6)]'
            : 'bg-gradient-to-r from-[#40A0E0] to-[#2980B9] drop-shadow-[0_0_15px_rgba(64,160,224,0.6)] [text-shadow:2px_2px_4px_rgba(64,160,224,0.6)]'
        } tracking-wider backdrop-blur-sm`}>
          {'[]'}
        </span>
      </motion.div>
      
      {/* Efectos de luz mejorados - Responsive */}
      <div className={`absolute top-0 right-0 w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] ${
        theme === 'purple' 
          ? 'bg-purple-600/20'
          : 'bg-[#40A0E0]/20'
      } rounded-full blur-[100px] md:blur-[120px] lg:blur-[140px] animate-pulse-slow`} />
      
      <div className={`absolute bottom-0 right-1/3 w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] ${
        theme === 'purple'
          ? 'bg-blue-600/20'
          : 'bg-[#2980B9]/20'
      } rounded-full blur-[100px] md:blur-[120px] lg:blur-[140px] animate-pulse-slow`} />
      
      <div className={`absolute top-1/2 left-1/3 w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] ${
        theme === 'purple'
          ? 'bg-purple-500/20'
          : 'bg-[#40A0E0]/20'
      } rounded-full blur-[100px] md:blur-[120px] lg:blur-[140px] animate-pulse-slow`} />
      
      {/* Overlay de ruido mejorado */}
      <div className="absolute inset-0 bg-grid-white/[0.04] bg-[size:30px_30px] md:bg-[size:40px_40px] lg:bg-[size:50px_50px] opacity-40" />
      
      {/* Overlay gradiente sutil mejorado */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#13111C]/60 via-transparent to-transparent backdrop-blur-[1px]" />

      
    </div>
  )
}

export default BackgroundGradient 