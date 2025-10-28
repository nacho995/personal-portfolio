import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

export default function AboutMe() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section id="about-me" className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20" role="region" aria-labelledby="about-me-heading">
      {/* Contenedor principal - Mejorado para dark mode */}
      <div className="relative backdrop-blur-2xl bg-black/10 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-[0_0_60px_rgba(168,85,247,0.3)] hover:shadow-[0_0_80px_rgba(168,85,247,0.4)] transition-shadow duration-500 overflow-hidden group/container">
        {/* Efectos de fondo mejorados */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10" />
        <div className="absolute -top-32 -right-32 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-32 -left-32 w-48 sm:w-64 h-48 sm:h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        {/* Borde brillante animado */}
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 opacity-0 group-hover/container:opacity-100 transition-opacity duration-700 blur-xl" />

        {/* Título mejorado */}
        <motion.div 
          className="relative mb-8 sm:mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h1 id="about-me-heading" className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/90 tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            Sobre Mí
          </h1>
          <div className="mt-2 h-1 w-24 sm:w-32 mx-auto bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </motion.div>

        {/* Contenido - Secciones mejoradas */}
        <motion.div 
          className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 sm:gap-8 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="space-y-4 sm:space-y-6">
            {/* Sección de Educación mejorada */}
            <motion.div 
              variants={itemVariants}
              className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-black/10 border border-white/10 hover:bg-black/20 hover:border-purple-500/30 transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-purple-500/30 hover:shadow-2xl group cursor-default relative overflow-hidden"
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] relative z-10">
                <span className="text-xl sm:text-2xl">🎓</span>
                Formación Académica
              </h2>
              <ul className="text-sm sm:text-base text-white/80 leading-relaxed relative z-10 space-y-3">
                <li className="flex flex-col gap-1">
                  <span className="text-white font-medium">🔧 Grado Medio en Sistemas Microinformáticos y Redes</span>
                  <span className="text-white/70 text-sm pl-6">Donde aprendí que reiniciar el router soluciona el 80% de los problemas (y a montar redes que funcionan el otro 20%)</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-white font-medium">💻 Máster en Full-Stack Development - Nuclio Digital School</span>
                  <span className="text-white/70 text-sm pl-6">Aquí descubrí que &ldquo;full-stack&rdquo; significa que tienes que saber de todo... literalmente todo. Frontend, backend, bases de datos y café en grandes cantidades</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-white font-medium">🤖 HND y Bachelor en Ingeniería de Software e IA - MSMK University</span>
                  <span className="text-white/70 text-sm pl-6">Actualmente aprendiendo Python y cómo hacer que las máquinas piensen (o al menos que lo intenten). Spoiler: la IA no es tan inteligente como parece, pero sí muy útil</span>
                </li>
              </ul>
            </motion.div>

            {/* Sección de Experiencia mejorada */}
            <motion.div 
              variants={itemVariants}
              className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-black/10 border border-white/10 hover:bg-black/20 hover:border-blue-500/30 transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-blue-500/30 hover:shadow-2xl group cursor-default relative overflow-hidden"
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] relative z-10">
                <span className="text-xl sm:text-2xl">💻</span>
                Experiencia Profesional
              </h2>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed relative z-10">
                Me especializo en <span className="text-white font-medium">desarrollo web full-stack</span>, creando soluciones digitales 
                que combinan funcionalidad robusta con experiencias de usuario intuitivas. Mi enfoque se centra en tecnologías modernas como 
                <span className="text-white font-medium"> JavaScript, React, Node.js y ecosistemas web actuales</span>, 
                manteniendo siempre una actitud proactiva hacia el aprendizaje continuo y la adopción de nuevas tendencias tecnológicas.
              </p>
            </motion.div>

            {/* Sección de Enfoque de Trabajo */}
            <motion.div 
              variants={itemVariants}
              className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-black/10 border border-white/10 hover:bg-black/20 hover:border-green-500/30 transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-green-500/30 hover:shadow-2xl group cursor-default relative overflow-hidden"
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] relative z-10">
                <span className="text-xl sm:text-2xl">💡</span>
                Mi Enfoque de Trabajo
              </h2>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed relative z-10">
                Me gusta pensar que soy de los que <span className="text-white font-medium">no se quedan esperando</span> a que les enseñen todo. 
                Si hay algo que no sé, lo busco, lo aprendo y lo aplico (a veces incluso funciona a la primera 😄). 
                Disfruto <span className="text-white font-medium">resolviendo problemas</span> como si fueran puzzles, 
                y me tomo en serio eso de escribir <span className="text-white font-medium">código que otros puedan entender</span> sin necesitar 
                un traductor. Trabajo bien en equipo porque, seamos honestos, nadie sabe todo y siempre hay algo nuevo que aprender de los demás.
              </p>
            </motion.div>

            {/* Sección de Proyectos Personales */}
            <motion.div 
              variants={itemVariants}
              className="relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-black/10 border border-white/10 hover:border-orange-500/50 transition-all duration-300 group backdrop-blur-md shadow-lg hover:shadow-orange-500/40 hover:shadow-2xl cursor-default overflow-hidden"
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute -inset-[2px] bg-gradient-to-r from-orange-500/40 via-yellow-500/40 to-orange-500/40 rounded-xl sm:rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              {/* Efecto de brillo deslizante */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              <div className="relative">
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl">🛠️</span>
                  <h2 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-orange-300 to-white bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                    Cosas que He Construido
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-3">
                  Cuando no estoy estudiando o trabajando, me gusta <span className="text-white font-medium">crear cosas</span>. 
                  A veces por necesidad, a veces porque &ldquo;¿y si pruebo esto?&rdquo;. Aquí algunas de las que no han explotado:
                </p>
                <div className="space-y-2 text-sm sm:text-base text-white/80">
                  <p>
                    • <span className="text-white font-medium">CodLet</span>: Mi intento de hacer una marca de desarrollo web (spoiler: va bien)
                  </p>
                  <p>
                    • <span className="text-white font-medium">Este portfolio</span>: Con chatbot IA incluido porque... ¿por qué no?
                  </p>
                  <p>
                    • <span className="text-white font-medium">Plataformas reales</span>: Inmobiliarias, sitios corporativos y más experimentos que funcionaron
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-white/60 mt-3 italic">
                  * Sí, aprendo haciendo. Es más divertido que leer documentación... aunque al final siempre vuelvo a ella 📚
                </p>
              </div>
            </motion.div>

          </div>

          {/* Columna de conexión mejorada */}
          <motion.div 
            variants={itemVariants}
            className="w-full lg:w-64 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-black/10 border border-white/10 lg:sticky lg:top-4 backdrop-blur-md shadow-lg"
          >
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">¡Conectemos!</h3>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-3">
              {/* Botón de LinkedIn mejorado */}
              <motion.a 
                href="https://www.linkedin.com/in/ignacio-dalesio-lopez/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-[#0A66C2]/30 hover:bg-[#0A66C2]/50 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-[#0A66C2]/50 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2] focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 relative overflow-hidden"
                whileHover={{ scale: 1.05, x: 4 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Visitar perfil de LinkedIn"
              >
                {/* Efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <FaLinkedin className="text-2xl sm:text-3xl text-[#0A66C2] group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm sm:text-base text-white font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">LinkedIn</span>
              </motion.a>

              {/* Botón de GitHub mejorado */}
              <motion.a 
                href="https://github.com/nacho995" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-[#333]/30 hover:bg-[#333]/50 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-white/30 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 relative overflow-hidden"
                whileHover={{ scale: 1.05, x: 4 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Visitar perfil de GitHub"
              >
                {/* Efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <svg 
                  className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform duration-300" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span className="text-sm sm:text-base text-white font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">GitHub</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
