import React, { useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

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
  
  const accentColor = theme === 'javascript' ? '#F7DF1E' : '#83CD29'; // Color del tema
  
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

  // Estilo tech con neón
  const getTextStyle = (index) => {
    return {
      className: '',
      style: { 
        color: accentColor,
        textShadow: `
          0 0 10px ${accentColor},
          0 0 20px ${accentColor},
          0 0 30px ${accentColor}80
        `,
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      }
    };
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
    <div className="relative w-full overflow-hidden py-4 my-12 sm:my-16 md:my-20 scanlines" role="region" aria-label="Frases destacadas">
      {/* Fondo tech con grid */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none" 
        style={{
          background: `linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.9) 100%)`,
          backdropFilter: 'blur(10px)',
        }}
      />
      
      {/* Border lines neón */}
      <div className="absolute top-0 left-0 right-0 h-px opacity-60" style={{ backgroundColor: accentColor, boxShadow: `0 0 10px ${accentColor}` }} />
      <div className="absolute bottom-0 left-0 right-0 h-px opacity-60" style={{ backgroundColor: accentColor, boxShadow: `0 0 10px ${accentColor}` }} />
      
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
              {/* Brackets decorativos */}
              {index % 2 === 0 && (
                <>
                  <span className="absolute left-4 font-code text-xl opacity-40" style={{ color: accentColor }}>{'<'}</span>
                  <span className="absolute right-4 font-code text-xl opacity-40" style={{ color: accentColor }}>{'/>'}</span>
                </>
              )}
              
              <div
                className={`whitespace-nowrap font-bold text-2xl sm:text-3xl md:text-4xl tracking-wider flex items-center absolute ${textStyle.className}`}
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
    </div>
  );
};

export default Signs; 