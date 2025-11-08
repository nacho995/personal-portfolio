import React, { useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

// Definimos un estilo global para las animaciones
// Esto se insertará una sola vez en el componente
const createGlobalStyles = () => {
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    @keyframes scroll-right {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    
    @keyframes scroll-left {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0); }
    }
  `;
  return styleElement;
};

const Signs = () => {
  const { theme } = useTheme();
  const { t, language } = useLanguage();
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1500);
  
  // Frases profesionales orientadas a desarrollo de software - Se actualizan con el idioma
  const phrases = React.useMemo(() => [
    { text: t('signs.phrase1'), direction: 'right', speed: 1 },
    { text: t('signs.phrase2'), direction: 'left', speed: 1 },
    { text: t('signs.phrase3'), direction: 'right', speed: 1.5 },
    { text: t('signs.phrase4'), direction: 'left', speed: 0.7 },
    { text: t('signs.phrase5'), direction: 'right', speed: 0.8 }
  ], [language, t]);

  // Agregar las animaciones CSS al documento una sola vez
  useEffect(() => {
    const styleElement = createGlobalStyles();
    document.head.appendChild(styleElement);
    
    return () => {
      // Limpiar al desmontar
      if (document.head.contains(styleElement)) {
        document.head.removeChild(styleElement);
      }
    };
  }, []);

  // Usar colores profesionales según el tema
  const getTextStyle = (index) => {
    if (theme === 'javascript') {
      // Gradientes amarillos para JavaScript
      const jsColors = [
        'from-[#F7DF1E] to-[#FDB813]', 
        'from-[#FFE55C] to-[#F7DF1E]', 
        'from-[#FDB813] to-[#FFE55C]', 
        'from-[#F7DF1E] via-[#FDB813] to-[#FFE55C]', 
        'from-[#FFE55C] via-[#F7DF1E] to-[#FDB813]'
      ];
      return {
        className: `bg-gradient-to-r ${jsColors[index]} bg-clip-text text-transparent`,
        style: { textShadow: '0 0 20px rgba(247,223,30,0.4)' }
      };
    } else {
      // Gradientes verdes para Node.js
      const nodejsColors = [
        'from-[#83CD29] to-[#339933]', 
        'from-[#90C53F] to-[#83CD29]', 
        'from-[#83CD29] via-[#90C53F] to-[#339933]', 
        'from-[#339933] to-[#90C53F]', 
        'from-[#90C53F] to-[#339933]'
      ];
      return {
        className: `bg-gradient-to-r ${nodejsColors[index % nodejsColors.length]} bg-clip-text text-transparent`,
        style: { textShadow: '0 0 20px rgba(131,205,41,0.4)' }
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
    <div className="relative w-full overflow-hidden py-4 my-12 sm:my-16 md:my-20" role="region" aria-label="Frases destacadas">
      {/* Fondos difuminados para un efecto visual mejorado */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 backdrop-blur-sm z-10 pointer-events-none" aria-hidden="true"></div>
      
      {/* Capa de ruido sutil */}
      <div className="absolute inset-0 opacity-20" aria-hidden="true" style={{ 
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
              aria-label={phrase.text}
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
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" aria-hidden="true"></div>
    </div>
  );
};

export default Signs; 