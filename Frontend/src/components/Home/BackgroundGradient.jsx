import { useTheme } from '../../context/ThemeContext';

const BackgroundGradient = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-[#13111C]">
      {/* Gradiente de fondo base mejorado */}
      <div className={`absolute inset-0 bg-gradient-to-br ${
        theme === 'purple' 
          ? 'from-purple-800/40 via-[#13111C]/60 to-blue-900/40'
          : 'from-[#40A0E0]/40 via-[#13111C]/60 to-[#2980B9]/40'
      }`} />
      
      {/* Elementos decorativos en forma de S con efecto 3D mejorado */}
      <div className="absolute right-[5%] sm:right-[10%] lg:right-[15%] top-[10%] sm:top-[15%] lg:top-[20%] select-none rotate-[-20deg] transform-gpu">
        <span className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text ${
          theme === 'purple'
            ? 'bg-gradient-to-r from-purple-400 to-purple-200 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)] [text-shadow:3px_3px_6px_rgba(168,85,247,0.5)]'
            : 'bg-gradient-to-r from-[#40A0E0] to-[#89CFF0] drop-shadow-[0_0_20px_rgba(64,160,224,0.5)] [text-shadow:3px_3px_6px_rgba(64,160,224,0.5)]'
        } tracking-wider backdrop-blur-sm`}>
          React
        </span>
      </div>

      <div className="absolute right-[35%] sm:right-[30%] lg:right-[25%] top-[25%] sm:top-[30%] lg:top-[35%] select-none rotate-[10deg] transform-gpu">
        <span className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-mono text-transparent bg-clip-text ${
          theme === 'purple'
            ? 'bg-gradient-to-r from-purple-300 to-blue-300 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)] [text-shadow:3px_3px_6px_rgba(168,85,247,0.5)]'
            : 'bg-gradient-to-r from-[#40A0E0] to-[#89CFF0] drop-shadow-[0_0_20px_rgba(64,160,224,0.5)] [text-shadow:3px_3px_6px_rgba(64,160,224,0.5)]'
        } backdrop-blur-sm`}>
          {'</>'}
        </span>
      </div>

      <div className="absolute right-[8%] sm:right-[15%] lg:right-[20%] top-[40%] sm:top-[45%] lg:top-[50%] select-none rotate-[-15deg] transform-gpu">
        <span className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text ${
          theme === 'purple'
            ? 'bg-gradient-to-r from-purple-400 to-purple-200 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)] [text-shadow:3px_3px_6px_rgba(168,85,247,0.5)]'
            : 'bg-gradient-to-r from-[#40A0E0] to-[#89CFF0] drop-shadow-[0_0_20px_rgba(64,160,224,0.5)] [text-shadow:3px_3px_6px_rgba(64,160,224,0.5)]'
        } tracking-wider backdrop-blur-sm`}>
          JavaScript
        </span>
      </div>

      <div className="absolute right-[40%] sm:right-[35%] lg:right-[30%] top-[55%] sm:top-[60%] lg:top-[65%] select-none rotate-[15deg] transform-gpu">
        <span className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-mono text-transparent bg-clip-text ${
          theme === 'purple'
            ? 'bg-gradient-to-r from-purple-300 to-blue-300 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)] [text-shadow:3px_3px_6px_rgba(168,85,247,0.5)]'
            : 'bg-gradient-to-r from-[#40A0E0] to-[#89CFF0] drop-shadow-[0_0_20px_rgba(64,160,224,0.5)] [text-shadow:3px_3px_6px_rgba(64,160,224,0.5)]'
        } backdrop-blur-sm`}>
          {'</>'}
        </span>
      </div>

      <div className="absolute right-[15%] sm:right-[25%] lg:right-[40%] top-[70%] sm:top-[60%] lg:top-[50%] select-none rotate-[-15deg] transform-gpu">
        <span className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text ${
          theme === 'purple'
            ? 'bg-gradient-to-r from-purple-400 to-purple-200 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)] [text-shadow:3px_3px_6px_rgba(168,85,247,0.5)]'
            : 'bg-gradient-to-r from-[#40A0E0] to-[#89CFF0] drop-shadow-[0_0_20px_rgba(64,160,224,0.5)] [text-shadow:3px_3px_6px_rgba(64,160,224,0.5)]'
        } tracking-wider backdrop-blur-sm`}>
          Node.js
        </span>
      </div>
      
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