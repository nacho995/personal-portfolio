const Name = () => {
  return (
    <div className="mt-[10vh] relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-32">
      <div className="w-full max-w-7xl mx-auto relative">
        {/* Contenedor derecho: Foto y título - Centrado en desktop */}
        <div className="flex flex-col items-center gap-6 w-full max-w-sm lg:max-w-md mx-auto">
          <div className="relative group w-full max-w-md aspect-[3/4] sm:aspect-square">
            {/* Efecto de brillo y borde animado */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-border-wave"></div>
            
            {/* Imagen */}
            <img 
              src="/yo.png" 
              alt="Nacho Dalesio" 
              className="relative w-full h-full object-cover border-2 border-white/50 transform hover:scale-105 transition-transform duration-300 animate-border-wave"
            />
          </div>
          
          {/* Título profesional */}
          <div className="text-center w-full">
            <h2 className="text-xl sm:text-2xl font-light tracking-wider text-white/90 bg-clip-text">
              Full Stack Developer
            </h2>
            <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-white/50 to-transparent mt-2"></div>
          </div>
        </div>

        {/* Contenedor izquierdo: Nombre y datos - Ajustamos el posicionamiento */}
        <div className="space-y-6 text-center lg:text-left lg:absolute lg:left-0 lg:top-[40%] lg:w-[40vw] mt-12 lg:mt-0">
          {/* Nombre con efecto de gradiente */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-white/90 to-white/70 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] [text-shadow:2px_2px_8px_rgba(0,0,0,0.6),0_0_4px_rgba(255,255,255,0.3)]"
            >
              Nacho
            </span>
            <br className="hidden lg:block" />
            <span className="lg:hidden"> </span>
            <span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-white/90 to-white/70 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] [text-shadow:2px_2px_8px_rgba(0,0,0,0.6)]"
            >
              Dalesio
            </span>
          </h1>

          {/* Email con efecto hover */}
          <div className="group flex items-center justify-center lg:justify-start gap-2 cursor-pointer w-fit mx-auto lg:mx-0" 
               onClick={() => window.location.href = 'mailto:ignaciodalesio1995@gmail.com'}>
            <svg 
              className="w-4 h-4 sm:w-5 sm:h-5 text-white/80 group-hover:text-white transition-colors" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
              />
            </svg>
            <span className="text-sm sm:text-base text-white/80 group-hover:text-white transition-colors truncate">
              ignaciodalesio1995@gmail.com
            </span>
          </div>

          {/* Botón de CV con efectos */}
          <div className="flex justify-center lg:justify-start">
            <a 
              href="/Ignacio-Dalesio-CV.pdf" 
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20
                         hover:bg-white/20 transition-all duration-300 
                         shadow-lg hover:shadow-white/20 transform hover:-translate-y-0.5"
            >
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 text-white" 
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
              <span className="text-sm sm:text-base text-white font-medium">
                Descargar CV
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Decoración de fondo - Ajustamos para que siga al contenido */}
      <div className="fixed -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-white/5 rounded-full blur-[100px]" />
    </div>
  )
}

export default Name