import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

export default function AboutMe() {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      {/* Contenedor principal */}
      <div className="relative backdrop-blur-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.03] border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-[0_0_40px_rgba(0,0,0,0.3)] overflow-hidden">
        {/* Efectos de fondo */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5" />
        <div className="absolute -top-32 -right-32 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-32 -left-32 w-48 sm:w-64 h-48 sm:h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" />

        {/* Título */}
        <div className="relative mb-8 sm:mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-white/70 tracking-tight">
            Sobre Mí
          </h1>
          <div className="mt-2 h-1 w-24 sm:w-32 mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        {/* Contenido */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 sm:gap-8 items-start">
          {/* Columna de texto */}
          <div className="space-y-4 sm:space-y-6">
            {/* Sección de Educación */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.05] transition-colors duration-300"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-white/90 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                <span className="text-xl sm:text-2xl">🎓</span>
                Formación Académica
              </h2>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                He cursado un grado medio en <span className="text-white/90 font-medium">Sistemas Microinformáticos y Redes</span>, 
                proporcionándome una sólida base técnica. Actualmente, estoy ampliando mis conocimientos con un 
                <span className="text-white/90 font-medium"> máster en Full-Stack Development</span> en Nuclio Digital School.
              </p>
            </motion.div>

            {/* Sección de Experiencia */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.05] transition-colors duration-300"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-white/90 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                <span className="text-xl sm:text-2xl">💻</span>
                Experiencia Profesional
              </h2>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                Me desempeño como <span className="text-white/90 font-medium">programador junior</span> especializado en desarrollo web, 
                con un gran entusiasmo por aprender y descubrir nuevas tendencias en el mundo del software. 
                Dispongo de conocimientos en <span className="text-white/90 font-medium">JavaScript</span> y otras tecnologías web modernas.
              </p>
            </motion.div>

            {/* Nueva Sección - DevLet */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 border border-white/[0.05] hover:from-purple-500/20 hover:to-blue-500/20 transition-all duration-300 group"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl sm:rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl">⚡</span>
                  <h2 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
                    DevLet
                  </h2>
                  <span className="px-2 py-1 text-xs font-medium bg-white/10 rounded-full text-white/70 ml-auto sm:ml-0">
                    En Desarrollo
                  </span>
                </div>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  Actualmente estoy desarrollando <span className="text-white/90 font-medium">DevLet</span>, 
                  una marca personal enfocada en el desarrollo web integral. Este proyecto combina soluciones 
                  tanto en <span className="text-white/90 font-medium">WordPress</span> como en desarrollo personalizado 
                  con <span className="text-white/90 font-medium">programación moderna</span>, ofreciendo 
                  versatilidad y calidad en cada proyecto.
                </p>
                <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm bg-white/5 rounded-full text-white/60">WordPress</span>
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm bg-white/5 rounded-full text-white/60">Desarrollo Web</span>
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm bg-white/5 rounded-full text-white/60">Marca Personal</span>
                </div>
              </div>
            </motion.div>

            {/* Sección de Objetivos */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.05] transition-colors duration-300"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-white/90 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                <span className="text-xl sm:text-2xl">🎯</span>
                Objetivos Profesionales
              </h2>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                Mi meta es encontrar una oportunidad laboral que me permita crecer profesionalmente, 
                colaborando con expertos del sector y contribuyendo a proyectos desafiantes.
              </p>
            </motion.div>
          </div>

          {/* Columna de conexión */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="w-full lg:w-64 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.05] lg:sticky lg:top-4"
          >
            <h3 className="text-base sm:text-lg font-semibold text-white/90 mb-3 sm:mb-4">¡Conectemos!</h3>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-3">
              {/* Botón de LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/ignacio-dalesio-lopez/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-[#0A66C2]/20 hover:bg-[#0A66C2]/30 transition-all duration-300"
              >
                <FaLinkedin className="text-2xl sm:text-3xl text-[#0A66C2] group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm sm:text-base text-white/90 font-medium">LinkedIn</span>
              </a>

              {/* Botón de GitHub */}
              <a 
                href="https://github.com/nacho995" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-[#333]/20 hover:bg-[#333]/30 transition-all duration-300"
              >
                <svg 
                  className="w-6 h-6 sm:w-8 sm:h-8 text-white/90 group-hover:scale-110 transition-transform duration-300" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span className="text-sm sm:text-base text-white/90 font-medium">GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
