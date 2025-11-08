import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

export default function AboutMe() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  
  const themeColors = theme === 'javascript' 
    ? {
        gradient: 'from-[#F7DF1E] to-[#FDB813]',
        glow: 'rgba(247,223,30,0.3)',
        border: 'border-[#F7DF1E]/30',
        shadow: 'shadow-[#F7DF1E]/20'
      }
    : {
        gradient: 'from-[#83CD29] to-[#339933]',
        glow: 'rgba(131,205,41,0.3)',
        border: 'border-[#83CD29]/30',
        shadow: 'shadow-[#83CD29]/20'
      };

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
    <section id="about-me" className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20" role="region" aria-labelledby="about-me-heading">
      {/* Contenedor principal */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative backdrop-blur-2xl bg-black/10 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-[0_0_60px_rgba(0,0,0,0.3)] hover:shadow-[0_0_80px_rgba(0,0,0,0.4)] transition-shadow duration-500 overflow-hidden group/container"
      >
        {/* Efectos de fondo */}
        <div className={`absolute inset-0 bg-gradient-to-br ${theme === 'javascript' ? 'from-[#F7DF1E]/10 via-transparent to-[#FDB813]/10' : 'from-[#83CD29]/10 via-transparent to-[#339933]/10'}`} />
        <div className={`absolute -top-32 -right-32 w-64 h-64 ${theme === 'javascript' ? 'bg-[#F7DF1E]/20' : 'bg-[#83CD29]/20'} rounded-full blur-3xl animate-pulse-slow`} />
        <div className={`absolute -bottom-32 -left-32 w-64 h-64 ${theme === 'javascript' ? 'bg-[#FDB813]/20' : 'bg-[#339933]/20'} rounded-full blur-3xl animate-pulse-slow`} />

        {/* Título */}
        <motion.div 
          className="relative mb-8 sm:mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h1 id="about-me-heading" className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/90 tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            {t('about.title')}
          </h1>
          <div className="mt-4 h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </motion.div>

        {/* Contenido en dos columnas: Información + Conexiones */}
        <motion.div 
          className="relative grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* COLUMNA IZQUIERDA: Contenido de información */}
          <div className="space-y-6">
            {/* Sección de Educación */}
            <motion.div 
              variants={itemVariants}
              className={`group/card p-6 rounded-2xl bg-black/10 border ${themeColors.border} hover:bg-black/20 transition-all duration-300 backdrop-blur-md shadow-lg hover:${themeColors.shadow} hover:shadow-2xl cursor-default relative overflow-hidden`}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Efecto de brillo en hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${themeColors.gradient} opacity-0 group-hover/card:opacity-10 transition-opacity duration-500`} />
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/card:translate-x-[100%] transition-transform duration-1000 ease-in-out`} />
              
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] relative z-10">
                <span className="text-2xl">🎓</span>
                {t('about.education')}
              </h2>
              <ul className="text-base text-white/80 leading-relaxed relative z-10 space-y-3">
                <li className="flex flex-col gap-1">
                  <span className="text-white font-medium">🔧 {t('about.education1')}</span>
                  <span className="text-white/70 text-sm pl-6">{t('about.education1desc')}</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-white font-medium">💻 {t('about.education2')}</span>
                  <span className="text-white/70 text-sm pl-6">{t('about.education2desc')}</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-white font-medium">🤖 {t('about.education3')}</span>
                  <span className="text-white/70 text-sm pl-6">{t('about.education3desc')}</span>
                </li>
              </ul>
            </motion.div>

            {/* Sección de Experiencia */}
            <motion.div 
              variants={itemVariants}
              className={`group/card p-6 rounded-2xl bg-black/10 border ${themeColors.border} hover:bg-black/20 transition-all duration-300 backdrop-blur-md shadow-lg hover:${themeColors.shadow} hover:shadow-2xl cursor-default relative overflow-hidden`}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${themeColors.gradient} opacity-0 group-hover/card:opacity-10 transition-opacity duration-500`} />
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/card:translate-x-[100%] transition-transform duration-1000 ease-in-out`} />
              
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] relative z-10">
                <span className="text-2xl">💻</span>
                {t('about.experience')}
              </h2>
              <p className="text-base text-white/80 leading-relaxed relative z-10">
                {t('about.experienceDesc')}
              </p>
            </motion.div>

            {/* Sección de Enfoque de Trabajo */}
            <motion.div 
              variants={itemVariants}
              className={`group/card p-6 rounded-2xl bg-black/10 border ${themeColors.border} hover:bg-black/20 transition-all duration-300 backdrop-blur-md shadow-lg hover:${themeColors.shadow} hover:shadow-2xl cursor-default relative overflow-hidden`}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${themeColors.gradient} opacity-0 group-hover/card:opacity-10 transition-opacity duration-500`} />
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/card:translate-x-[100%] transition-transform duration-1000 ease-in-out`} />
              
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] relative z-10">
                <span className="text-2xl">💡</span>
                {t('about.workApproach')}
              </h2>
              <p className="text-base text-white/80 leading-relaxed relative z-10">
                {t('about.workApproachDesc')}
              </p>
            </motion.div>

            {/* Sección de Proyectos Personales */}
            <motion.div 
              variants={itemVariants}
              className={`relative group/card p-6 rounded-2xl bg-black/10 border ${themeColors.border} hover:border-opacity-50 transition-all duration-300 backdrop-blur-md shadow-lg hover:${themeColors.shadow} hover:shadow-2xl cursor-default overflow-hidden`}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={`absolute -inset-[2px] bg-gradient-to-r ${themeColors.gradient} rounded-2xl blur-md opacity-0 group-hover/card:opacity-20 transition-opacity duration-500`} />
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/card:translate-x-[100%] transition-transform duration-1000 ease-in-out`} />
              
              <div className="relative">
                <h2 className={`text-xl font-semibold mb-4 flex items-center gap-3 bg-gradient-to-r ${themeColors.gradient} bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]`}>
                  <span className="text-2xl">🛠️</span>
                  <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                    {t('about.projects')}
                  </span>
                </h2>
                <p className="text-base text-white/80 leading-relaxed mb-3">
                  {t('about.projectsDesc')}
                </p>
                <div className="space-y-2 text-base text-white/80">
                  <p>• {t('about.project1')}</p>
                  <p>• {t('about.project2')}</p>
                  <p>• {t('about.project3')}</p>
                </div>
                <p className="text-sm text-white/60 mt-3 italic">
                  {t('about.projectsNote')}
                </p>
              </div>
            </motion.div>
          </div>

          {/* COLUMNA DERECHA: Conexiones y CV */}
          <motion.div 
            variants={itemVariants}
            className="space-y-6"
          >
            {/* Card de Conexión */}
            <div className="sticky top-24 p-6 rounded-2xl bg-black/10 border border-white/10 backdrop-blur-md shadow-lg space-y-4">
              <h3 className="text-lg font-semibold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] mb-4">
                {t('about.connect')} 🚀
              </h3>
              
              {/* Botón de CV destacado */}
              <motion.a 
                href="/Ignacio_Dalesio_Full_Stack_CV.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-center gap-3 p-4 rounded-xl bg-gradient-to-br ${themeColors.gradient} text-black font-bold transition-all duration-300 shadow-lg hover:shadow-2xl`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{ boxShadow: `0 4px 20px ${themeColors.glow}` }}
              >
                <FaFileDownload className="text-2xl group-hover:animate-bounce" />
                <span className="text-lg">{t('about.cvButton')}</span>
              </motion.a>

              {/* Botones de redes sociales */}
              <div className="space-y-3 pt-2">
                {/* LinkedIn */}
                <motion.a 
                  href="https://www.linkedin.com/in/ignacio-dalesio-lopez/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3 rounded-xl bg-[#0A66C2]/30 hover:bg-[#0A66C2]/50 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-[#0A66C2]/50 hover:shadow-2xl relative overflow-hidden"
                  whileHover={{ scale: 1.05, x: 4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <FaLinkedin className="text-3xl text-[#0A66C2] group-hover:scale-110 transition-transform duration-300 relative z-10" />
                  <div className="flex-1 relative z-10">
                    <span className="text-base text-white font-medium block">{t('about.linkedin')}</span>
                    <span className="text-xs text-white/70">{t('about.linkedinDesc')}</span>
                  </div>
                </motion.a>

                {/* GitHub */}
                <motion.a 
                  href="https://github.com/nacho995" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3 rounded-xl bg-[#333]/30 hover:bg-[#333]/50 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-white/30 hover:shadow-2xl relative overflow-hidden"
                  whileHover={{ scale: 1.05, x: 4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <FaGithub className="text-3xl text-white group-hover:scale-110 transition-transform duration-300 relative z-10" />
                  <div className="flex-1 relative z-10">
                    <span className="text-base text-white font-medium block">{t('about.github')}</span>
                    <span className="text-xs text-white/70">{t('about.githubDesc')}</span>
                  </div>
                </motion.a>

                {/* Email */}
                <motion.a 
                  href="mailto:ignaciodalesio1995@gmail.com"
                  className={`group flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-white/30 hover:shadow-2xl relative overflow-hidden border ${themeColors.border}`}
                  whileHover={{ scale: 1.05, x: 4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="flex-1 relative z-10">
                    <span className="text-base text-white font-medium block">{t('about.email')}</span>
                    <span className="text-xs text-white/70">{t('about.emailDesc')}</span>
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
