import React, { useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

const Signs = () => {
  const { theme } = useTheme();
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1500);
  
  // Frases profesionales orientadas a desarrollo de software
  const phrases = [
    { text: "TRANSFORMANDO IDEAS EN SOLUCIONES ELEGANTES", direction: 'right', speed: 1 },
    { text: "DESARROLLO ESCALABLE Y CÓDIGO LIMPIO", direction: 'left', speed: 1 },
    { text: "OPTIMIZACIÓN, RENDIMIENTO, EXPERIENCIA DE USUARIO", direction: 'right', speed: 1.5 },
    { text: "APRENDIZAJE CONTINUO Y ADAPTABILIDAD", direction: 'left', speed: 0.7 },
    { text: "COMPROMISO CON LA CALIDAD Y RESULTADOS", direction: 'right', speed: 0.8 }
  ];

  // Usar colores sólidos y brillantes para el tema azul en lugar de gradientes
  const getTextStyle = (index) => {
    if (theme === 'purple') {
      // Mantener los gradientes para el tema púrpura
      const purpleColors = [
        'from-purple-500 to-pink-400', 
        'from-indigo-600 to-purple-400', 
        'from-fuchsia-500 to-purple-600', 
        'from-violet-600 to-indigo-400', 
        'from-purple-700 to-pink-500'
      ];
      return {
        className: `bg-gradient-to-r ${purpleColors[index % purpleColors.length]} bg-clip-text text-transparent`,
        style: { textShadow: '0 0 20px rgba(255,255,255,0.2)' }
      };
    } else {
      // Usar colores sólidos brillantes para tema azul
      const blueColors = [
        '#00E5FF', // Cyan brillante
        '#4FC3F7', // Azul claro
        '#2196F3', // Azul primario
        '#64FFDA', // Turquesa
        '#00B0FF'  // Azul acento
      ];
      return {
        className: '',
        style: { 
          color: blueColors[index % blueColors.length],
          textShadow: `0 0 15px ${blueColors[index % blueColors.length]}80`,
        }
      };
    }
  };

  // Actualizar el ancho de la ventana cuando cambie
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Crear un contenido repetido lo suficientemente largo para cubrir la pantalla
  const createRepeatedContent = (text) => {
    // Creamos el texto repetido muchas veces para asegurar que cubra toda la pantalla
    const repetitions = Math.ceil((windowWidth * 3) / (text.length * 20)) + 5;
    const items = [];
    
    for (let i = 0; i < repetitions; i++) {
      items.push(
        <React.Fragment key={i}>
          <span className="px-4">{text}</span>
          <span className="px-4">⬧</span>
        </React.Fragment>
      );
    }
    
    return items;
  };

  return (
    <div className="relative w-full overflow-hidden py-4 my-12 sm:my-16 md:my-20">
      {/* Fondos difuminados para un efecto visual mejorado */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 backdrop-blur-sm z-10 pointer-events-none"></div>
      
      {/* Capa de ruido sutil */}
      <div className="absolute inset-0 opacity-20" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
      }}></div>
      
      {/* Frases con animación */}
      <div className="relative z-20 flex flex-col space-y-4 sm:space-y-6">
        {phrases.map((phrase, index) => {
          // Calculamos el ancho aproximado del contenido
          const duration = 100 / phrase.speed; // Inverso de la velocidad
          
          const animationStyle = {
            animation: `scroll-${phrase.direction} ${duration}s linear infinite`,
            willChange: 'transform'
          };
          
          const textStyle = getTextStyle(index);
          
          return (
            <div 
              key={index} 
              className="relative overflow-hidden h-10 sm:h-14 md:h-16 flex items-center"
            >
              <div
                className={`whitespace-nowrap font-mono font-bold text-2xl sm:text-3xl md:text-4xl tracking-wider flex items-center absolute ${textStyle.className}`}
                style={{ 
                  ...animationStyle,
                  ...textStyle.style
                }}
              >
                {createRepeatedContent(phrase.text)}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Efecto de brillo en los bordes */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      
      {/* Definir las animaciones CSS */}
      <style jsx>{`
        @keyframes scroll-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scroll-left {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default Signs; 