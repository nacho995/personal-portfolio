import { useTheme } from '../../context/ThemeContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

const BackgroundGradient = () => {
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Generar secuencias binarias una sola vez (no cambiarán)
  const binarySequences = useMemo(() => 
    Array.from({ length: 12 }, () => 
      Array.from({ length: 50 }, () => Math.random() > 0.5 ? '1' : '0').join(' ')
    ), []
  );

  // Símbolos de Matrix rain fijos
  const matrixSymbols = useMemo(() => {
    const codeSymbols = ['0', '1', '<', '>', '/', '{', '}', '(', ')', '$', '=>', '//'];
    return Array.from({ length: 40 }, () => ({
      symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
      opacity: 0.12 + Math.random() * 0.08,
      fontSize: 12 + Math.random() * 8,
      duration: 15 + Math.random() * 15,
      delay: Math.random() * 12
    }));
  }, []);
  
  // Seguimiento del mouse para efectos sutiles
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
  
  // Símbolos de código con parallax
  const codeY1 = useTransform(smoothProgress, [0, 1], [0, -600]);
  const codeY2 = useTransform(smoothProgress, [0, 1], [0, -400]);
  const codeY3 = useTransform(smoothProgress, [0, 1], [0, -800]);

  // Colores según el tema - AMARILLO para JS, VERDE para Node
  const colors = theme === 'javascript' 
    ? {
        neon: '#00F5FF', // Cyan para efectos tech
        accent: '#F7DF1E', // AMARILLO JavaScript
        neonRgb: '0, 245, 255',
        accentRgb: '247, 223, 30',
      }
    : {
        neon: '#39FF14', // Verde matrix
        accent: '#83CD29', // Verde Node.js
        neonRgb: '57, 255, 20',
        accentRgb: '131, 205, 41',
      };


  return (
    <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden">
      {/* Gradiente de fondo base más luminoso */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at top, rgba(${colors.accentRgb}, 0.15) 0%, rgba(20, 25, 35, 1) 40%, rgba(10, 15, 20, 1) 100%),
            linear-gradient(135deg, #1a1f2e 0%, #16202e 25%, #0f1419 75%, #0a0e15 100%)
          `,
        }}
      />

      {/* Grid tech con perspectiva isométrica */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(${colors.accent}40 1.5px, transparent 1.5px),
            linear-gradient(90deg, ${colors.accent}40 1.5px, transparent 1.5px)
          `,
          backgroundSize: '80px 80px',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'center top',
        }}
      />
      
      {/* Dots pattern más visible */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, ${colors.accent}90 1.5px, transparent 1.5px)`,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Scanlines animadas CRT */}
      <motion.div 
        className="absolute inset-0 opacity-8 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 2px)',
        }}
        animate={{
          y: [0, 4],
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Mesh gradients dinámicos - MÁS LUMINOSOS */}
      <div className="absolute inset-0">
        {/* Glow superior derecha */}
        <motion.div 
          className="absolute w-[700px] h-[700px] rounded-full blur-[140px]"
          style={{ 
            background: `radial-gradient(circle, rgba(${colors.accentRgb}, 0.18), rgba(${colors.neonRgb}, 0.12), transparent 70%)`,
            top: '5%',
            right: '5%',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Glow inferior izquierda */}
        <motion.div 
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{ 
            background: `radial-gradient(circle, rgba(${colors.neonRgb}, 0.15), rgba(${colors.accentRgb}, 0.1), transparent 70%)`,
            bottom: '10%',
            left: '5%',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.35, 0.5, 0.35],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Glow central móvil */}
        <motion.div 
          className="absolute w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{ 
            background: `radial-gradient(circle, rgba(${colors.accentRgb}, 0.12), transparent 70%)`,
            top: '45%',
            left: '40%',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* MATRIX RAIN - Código cayendo verticalmente - MEJORADO */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {matrixSymbols.map((item, i) => (
          <motion.div
            key={`matrix-${i}`}
            className="absolute font-code font-bold"
            style={{
              left: `${i * 2.5}%`,
              color: colors.accent,
              opacity: item.opacity,
              fontSize: `${item.fontSize}px`,
            }}
            animate={{
              y: ['-10%', '110%'],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              delay: item.delay,
              ease: "linear"
            }}
          >
            {item.symbol}
          </motion.div>
        ))}
      </div>

      {/* FLUJO BINARIO HORIZONTAL - 0s y 1s de izquierda a derecha MUY LENTO */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {binarySequences.map((sequence, i) => (
          <motion.div
            key={`binary-${i}`}
            className="absolute font-code font-bold whitespace-nowrap"
            style={{
              top: `${i * 8 + 5}%`,
              color: colors.accent,
              opacity: 0.06 + (i % 5) * 0.01, // Opacidad fija basada en índice
              fontSize: `${10 + (i % 7)}px`, // Tamaño fijo basado en índice
            }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 80 + (i * 5), // Duración fija basada en índice: 80-135 segundos
              repeat: Infinity,
              delay: i * 1.5, // Delay fijo basado en índice
              ease: "linear"
            }}
          >
            {sequence}
          </motion.div>
        ))}
      </div>

      {/* CÓDIGO FLOTANTE - Snippets de código con blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['const', 'function', 'return', 'import', 'export', 'async'].map((word, i) => (
          <motion.div
            key={`code-${i}`}
            className="absolute font-code text-lg blur-[2px]"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 12}%`,
              color: colors.accent,
              opacity: 0.05,
              transform: `rotate(${-10 + Math.random() * 20}deg)`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {word}()
          </motion.div>
        ))}
      </div>

      {/* Símbolos de código grandes con parallax - MÁS VISIBLES */}
      <motion.div 
        className="absolute right-[15%] top-[20%] select-none font-code text-4xl lg:text-6xl font-bold opacity-10"
        style={{ 
          y: codeY1,
          color: colors.accent,
          textShadow: `0 0 20px ${colors.accent}80`,
        }}
      >
        React
      </motion.div>

      <motion.div 
        className="absolute left-[20%] top-[40%] select-none font-code text-5xl lg:text-7xl opacity-10"
        style={{ 
          y: codeY2,
          color: colors.accent,
          textShadow: `0 0 20px ${colors.accent}80`,
        }}
      >
        {'</>'}
      </motion.div>

      <motion.div 
        className="absolute right-[25%] top-[55%] select-none font-code text-3xl lg:text-5xl opacity-10"
        style={{ 
          y: codeY3,
          color: colors.accent,
          textShadow: `0 0 20px ${colors.accent}80`,
        }}
      >
        Node.js
      </motion.div>

      {/* Efecto del mouse MUY LENTO y suave */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(${colors.accentRgb}, 0.12), rgba(${colors.neonRgb}, 0.08), transparent 70%)`,
        }}
        animate={{
          x: `${mousePosition.x - 50}%`,
          y: `${mousePosition.y - 50}%`,
        }}
        transition={{
          type: "spring",
          stiffness: 5, // MUCHO más lento (antes 30)
          damping: 50,  // Mucho más suave (antes 25)
        }}
      />

      {/* Overlay de vignette más suave */}
      <div 
        className="absolute inset-0" 
        style={{
          background: `radial-gradient(ellipse at center, transparent 0%, transparent 60%, rgba(10, 15, 20, 0.4) 100%)`,
        }}
      />
      
      {/* Corner decorations tech - USA ACCENT COLOR */}
      <div className="absolute top-4 left-4 font-code text-xs opacity-30" style={{ color: colors.accent }}>
        {'<dev>'}
      </div>
      <div className="absolute top-4 right-4 font-code text-xs opacity-30" style={{ color: colors.accent }}>
        {'</portfolio>'}
      </div>
      <div className="absolute bottom-4 left-4 font-code text-xs opacity-30" style={{ color: colors.accent }}>
        v2.0.1
      </div>
      <div className="absolute bottom-4 right-4 flex items-center gap-2 font-code text-xs opacity-30">
        <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: colors.accent }} />
        <span style={{ color: colors.accent }}>ONLINE</span>
      </div>
    </div>
  )
}

export default BackgroundGradient
