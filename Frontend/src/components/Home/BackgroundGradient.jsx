import { useTheme } from '../../context/ThemeContext';
import { motion, useScroll, useTransform } from 'framer-motion';

const BackgroundGradient = () => {
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();
  
  // Aumentamos la velocidad incrementando el valor máximo de transformación (de 0.3 a 0.8)
  const smoothProgress = useTransform(scrollYProgress, [0, 1], [0, 0.8]);
  
  // Transformaciones para cada elemento - Valores ampliados para mayor velocidad
  
  // React - Esquina superior derecha, luego desaparece por arriba
  const reactY = useTransform(smoothProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, -160, -400, -600, -800, -1000]);
  const reactX = useTransform(smoothProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 100, 200, 300, 400, 500]);
  const reactRotate = useTransform(smoothProgress, [0, 1], [0, 720]); // Aumentado a 720 grados
  
  // Comillas - Desde central derecha, moviéndose hacia la izquierda y arriba
  const bracketY1 = useTransform(smoothProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, -100, -200, -400, -600, -800]);
  const bracketX1 = useTransform(smoothProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, -160, -320, -480, -640, -800]);
  const bracketRotate1 = useTransform(smoothProgress, [0, 1], [10, -360]); // Aumentado a -360 grados
  
  // JavaScript - Desde abajo a la derecha, subiendo y desplazándose a la izquierda
  const jsY = useTransform(smoothProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [200, 100, 0, -200, -400, -600]);
  const jsX = useTransform(smoothProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [200, 100, 0, -200, -400, -600]);
  const jsRotate = useTransform(smoothProgress, [0, 1], [-15, 360]); // Aumentado a 360 grados
  
  // Tags HTML - Aparecen en el centro y bajan
  const bracketY2 = useTransform(smoothProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [-400, -200, 0, 300, 600, 900]);
  const bracketX2 = useTransform(smoothProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 100, 200, 300, 400, 500]);
  const bracketRotate2 = useTransform(smoothProgress, [0, 1], [15, -360]); // Aumentado a -360 grados
  
  // Node.js - Ajustado para ser más visible desde el inicio
  const nodeY = useTransform(smoothProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [200, 100, 0, -200, -400, -600]);
  const nodeX = useTransform(smoothProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [-200, -150, -100, -50, 100, 250]);
  const nodeRotate = useTransform(smoothProgress, [0, 1], [-15, 360]); // Aumentado a 360 grados

  // Llaves - Desde la izquierda, moviéndose hacia la derecha y bajando
  const bracaletsY = useTransform(smoothProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [-200, 0, 200, 500, 800, 1100]);
  const bracaletsX = useTransform(smoothProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [-300, -200, -100, 100, 300, 500]);
  const bracaletsRotate = useTransform(smoothProgress, [0, 1], [-15, 360]); // Aumentado a 360 grados

  // Corchetes - Ajustados para ser más visibles desde el inicio
  const bracketsY = useTransform(smoothProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [150, 75, 0, -100, -200, -300]);
  const bracketsX = useTransform(smoothProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [-100, -50, 0, 50, 100, 150]);
  const bracketsRotate = useTransform(smoothProgress, [0, 1], [0, 360]); // Aumentado a 360 grados

  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-[#0a0a0f]">
      {/* Gradiente de fondo base mejorado con colores profesionales */}
      <div className={`absolute inset-0 bg-gradient-to-br ${
        theme === 'purple' 
          ? 'from-[#1a0b2e]/80 via-[#0a0a0f]/60 to-[#16213e]/80'
          : 'from-[#0f2027]/80 via-[#0a0a0f]/60 to-[#203a43]/80'
      }`} />
      {/* Capa de profundidad adicional */}
      <div className={`absolute inset-0 bg-gradient-to-t ${
        theme === 'purple'
          ? 'from-[#2d1b69]/20 via-transparent to-transparent'
          : 'from-[#1e3a5f]/20 via-transparent to-transparent'
      }`} />
      
      {/* React */}
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
        <span className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text ${
          theme === 'purple'
            ? 'bg-gradient-to-r from-[#a78bfa] via-[#c084fc] to-[#e9d5ff] drop-shadow-[0_0_30px_rgba(167,139,250,0.6)] [text-shadow:3px_3px_10px_rgba(167,139,250,0.8)]'
            : 'bg-gradient-to-r from-[#60a5fa] via-[#93c5fd] to-[#dbeafe] drop-shadow-[0_0_30px_rgba(96,165,250,0.6)] [text-shadow:3px_3px_10px_rgba(96,165,250,0.8)]'
        } tracking-wider backdrop-blur-sm`}>
          React
        </span>
      </motion.div>

      {/* Bracket 1 */}
      <motion.div 
        className="absolute right-[40%] sm:right-[35%] lg:right-[30%] top-[30%] sm:top-[35%] lg:top-[40%] select-none transform-gpu will-change-transform"
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
            ? 'bg-gradient-to-r from-[#c084fc] via-[#e9d5ff] to-[#a78bfa] drop-shadow-[0_0_30px_rgba(192,132,252,0.6)] [text-shadow:3px_3px_10px_rgba(192,132,252,0.8)]'
            : 'bg-gradient-to-r from-[#93c5fd] via-[#dbeafe] to-[#60a5fa] drop-shadow-[0_0_30px_rgba(147,197,253,0.6)] [text-shadow:3px_3px_10px_rgba(147,197,253,0.8)]'
        } backdrop-blur-sm`}>
          &apos;&apos;
        </span>
      </motion.div>

      {/* JavaScript */}
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
        <span className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text ${
          theme === 'purple'
            ? 'bg-gradient-to-r from-[#a78bfa] via-[#c084fc] to-[#e9d5ff] drop-shadow-[0_0_30px_rgba(167,139,250,0.6)] [text-shadow:3px_3px_10px_rgba(167,139,250,0.8)]'
            : 'bg-gradient-to-r from-[#60a5fa] via-[#93c5fd] to-[#dbeafe] drop-shadow-[0_0_30px_rgba(96,165,250,0.6)] [text-shadow:3px_3px_10px_rgba(96,165,250,0.8)]'
        } tracking-wider backdrop-blur-sm`}>
          JavaScript
        </span>
      </motion.div>

      {/* Bracket 2 */}
      <motion.div 
        className="absolute right-[45%] sm:right-[40%] lg:right-[35%] top-[60%] sm:top-[65%] lg:top-[70%] select-none transform-gpu will-change-transform"
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
            ? 'bg-gradient-to-r from-[#c084fc] via-[#e9d5ff] to-[#a78bfa] drop-shadow-[0_0_30px_rgba(192,132,252,0.6)] [text-shadow:3px_3px_10px_rgba(192,132,252,0.8)]'
            : 'bg-gradient-to-r from-[#93c5fd] via-[#dbeafe] to-[#60a5fa] drop-shadow-[0_0_30px_rgba(147,197,253,0.6)] [text-shadow:3px_3px_10px_rgba(147,197,253,0.8)]'
        } backdrop-blur-sm`}>
          {'</>'}
        </span>
      </motion.div>

      {/* Node.js - Posición inicial ajustada para ser más visible */}
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
        <span className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text ${
          theme === 'purple'
            ? 'bg-gradient-to-r from-[#a78bfa] via-[#c084fc] to-[#e9d5ff] drop-shadow-[0_0_30px_rgba(167,139,250,0.6)] [text-shadow:3px_3px_10px_rgba(167,139,250,0.8)]'
            : 'bg-gradient-to-r from-[#60a5fa] via-[#93c5fd] to-[#dbeafe] drop-shadow-[0_0_30px_rgba(96,165,250,0.6)] [text-shadow:3px_3px_10px_rgba(96,165,250,0.8)]'
        } tracking-wider backdrop-blur-sm`}>
          Node.js
        </span>
      </motion.div>
      
      {/* Llaves */}
      <motion.div
        className="absolute left-[15%] sm:left-[20%] lg:left-[25%] top-[35%] sm:top-[40%] lg:top-[45%] select-none transform-gpu will-change-transform"
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
            ? 'bg-gradient-to-r from-[#c084fc] via-[#e9d5ff] to-[#a78bfa] drop-shadow-[0_0_30px_rgba(192,132,252,0.6)] [text-shadow:3px_3px_10px_rgba(192,132,252,0.8)]'
            : 'bg-gradient-to-r from-[#93c5fd] via-[#dbeafe] to-[#60a5fa] drop-shadow-[0_0_30px_rgba(147,197,253,0.6)] [text-shadow:3px_3px_10px_rgba(147,197,253,0.8)]'
        } tracking-wider backdrop-blur-sm`}>
          { '{}' }
        </span>
      </motion.div>
      
      {/* Corchetes - Posición inicial ajustada para ser más visibles */}
      <motion.div
        className="absolute left-[35%] sm:left-[40%] lg:left-[45%] top-[50%] sm:top-[55%] lg:top-[60%] select-none transform-gpu will-change-transform"
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
            ? 'bg-gradient-to-r from-[#a78bfa] via-[#c084fc] to-[#e9d5ff] drop-shadow-[0_0_30px_rgba(167,139,250,0.6)] [text-shadow:3px_3px_10px_rgba(167,139,250,0.8)]'
            : 'bg-gradient-to-r from-[#60a5fa] via-[#93c5fd] to-[#dbeafe] drop-shadow-[0_0_30px_rgba(96,165,250,0.6)] [text-shadow:3px_3px_10px_rgba(96,165,250,0.8)]'
        } tracking-wider backdrop-blur-sm`}>
          {'[]'}
        </span>
      </motion.div>
      
      {/* Efectos de luz mejorados con colores profesionales */}
      <div className={`absolute top-0 right-0 w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] ${
        theme === 'purple' 
          ? 'bg-[#a78bfa]/25'
          : 'bg-[#60a5fa]/25'
      } rounded-full blur-[120px] md:blur-[140px] lg:blur-[160px] animate-pulse-slow`} />
      
      <div className={`absolute bottom-0 right-1/3 w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] ${
        theme === 'purple'
          ? 'bg-[#c084fc]/20'
          : 'bg-[#93c5fd]/20'
      } rounded-full blur-[120px] md:blur-[140px] lg:blur-[160px] animate-pulse-slow`} />
      
      <div className={`absolute top-1/2 left-1/3 w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] ${
        theme === 'purple'
          ? 'bg-[#e9d5ff]/15'
          : 'bg-[#dbeafe]/15'
      } rounded-full blur-[120px] md:blur-[140px] lg:blur-[160px] animate-pulse-slow`} />
      
      {/* Luces adicionales para más profundidad */}
      <div className={`absolute top-1/4 left-1/4 w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] ${
        theme === 'purple'
          ? 'bg-[#a78bfa]/15'
          : 'bg-[#60a5fa]/15'
      } rounded-full blur-[100px] md:blur-[120px] lg:blur-[140px] animate-pulse-slow`} style={{ animationDelay: '2s' }} />
      
      <div className={`absolute bottom-1/4 right-1/4 w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] ${
        theme === 'purple'
          ? 'bg-[#c084fc]/15'
          : 'bg-[#93c5fd]/15'
      } rounded-full blur-[100px] md:blur-[120px] lg:blur-[140px] animate-pulse-slow`} style={{ animationDelay: '3s' }} />
      
      {/* Overlay de ruido mejorado */}
      <div className="absolute inset-0 bg-grid-white/[0.04] bg-[size:30px_30px] md:bg-[size:40px_40px] lg:bg-[size:50px_50px] opacity-40" />
      
      {/* Overlay gradiente sutil mejorado */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#13111C]/60 via-transparent to-transparent backdrop-blur-[1px]" />
    </div>
  )
}

export default BackgroundGradient 