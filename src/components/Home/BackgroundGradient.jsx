const BackgroundGradient = () => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-[#13111C]">
      {/* Gradiente de fondo base */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800/30 via-[#13111C]/50 to-blue-900/30" />
      
      {/* Elementos decorativos en forma de S con efecto 3D */}
      <div className="absolute right-[5%] sm:right-[10%] lg:right-[15%] top-[10%] sm:top-[15%] lg:top-[20%] select-none rotate-[-20deg] transform-gpu">
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-300 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)] [text-shadow:3px_3px_6px_rgba(168,85,247,0.4)] tracking-wider">
          React
        </span>
      </div>

      <div className="absolute right-[35%] sm:right-[30%] lg:right-[25%] top-[25%] sm:top-[30%] lg:top-[35%] select-none rotate-[10deg] transform-gpu">
        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)] [text-shadow:3px_3px_6px_rgba(168,85,247,0.4)]">
          {'</>'}
        </span>
      </div>

      <div className="absolute right-[8%] sm:right-[15%] lg:right-[20%] top-[40%] sm:top-[45%] lg:top-[50%] select-none rotate-[-15deg] transform-gpu">
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-300 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)] [text-shadow:3px_3px_6px_rgba(168,85,247,0.4)] tracking-wider">
          JavaScript
        </span>
      </div>

      <div className="absolute right-[40%] sm:right-[35%] lg:right-[30%] top-[55%] sm:top-[60%] lg:top-[65%] select-none rotate-[15deg] transform-gpu">
        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)] [text-shadow:3px_3px_6px_rgba(168,85,247,0.4)]">
          {'</>'}
        </span>
      </div>

      <div className="absolute right-[15%] sm:right-[25%] lg:right-[40%] top-[70%] sm:top-[60%] lg:top-[50%] select-none rotate-[-15deg] transform-gpu">
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-300 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)] [text-shadow:3px_3px_6px_rgba(168,85,247,0.4)] tracking-wider">
          Node.js
        </span>
      </div>
      
      {/* Efectos de luz mejorados - Responsive */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] bg-purple-600/15 rounded-full blur-[80px] md:blur-[100px] lg:blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] bg-blue-600/15 rounded-full blur-[80px] md:blur-[100px] lg:blur-[120px] animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] bg-purple-500/15 rounded-full blur-[80px] md:blur-[100px] lg:blur-[120px] animate-pulse-slow" />
      
      {/* Overlay de ruido */}
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:30px_30px] md:bg-[size:40px_40px] lg:bg-[size:50px_50px] opacity-30" />
      
      {/* Overlay gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#13111C]/50 via-transparent to-transparent" />
    </div>
  )
}

export default BackgroundGradient 