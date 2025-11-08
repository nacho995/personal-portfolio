import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

export default function AboutMe() {
  const { theme } = useTheme();
  const { t, language } = useLanguage();
  
  const accentColor = theme === 'javascript' ? '#F7DF1E' : '#83CD29'; // Color principal del tema

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

  // Componente reutilizable para IDE Window Header
  const IDEHeader = ({ filename, icon = '●●●' }) => (
    <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
      <div className="flex items-center gap-3">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: accentColor }} />
        </div>
        <span className="font-code text-sm opacity-70" style={{ color: accentColor }}>
          {filename}
        </span>
      </div>
      <span className="font-code text-xs opacity-50">{icon}</span>
    </div>
  );

  return (
    <section id="about-me" className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20" role="region" aria-labelledby="about-me-heading">
      {/* Contenedor principal tech */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* Corner brackets */}
        <div className="absolute -top-6 -left-6 font-code text-3xl opacity-40" style={{ color: accentColor }}>⌜</div>
        <div className="absolute -top-6 -right-6 font-code text-3xl opacity-40" style={{ color: accentColor }}>⌝</div>
        <div className="absolute -bottom-6 -left-6 font-code text-3xl opacity-40" style={{ color: accentColor }}>⌞</div>
        <div className="absolute -bottom-6 -right-6 font-code text-3xl opacity-40" style={{ color: accentColor }}>⌟</div>

        <div className="relative tech-grid scanlines backdrop-blur-2xl bg-tech-dark/80 border-2 rounded-2xl p-6 sm:p-10 shadow-2xl overflow-hidden"
          style={{ 
            borderColor: `${accentColor}30`,
            boxShadow: `0 0 20px ${accentColor}20, 0 20px 60px rgba(0,0,0,0.5)`
          }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 opacity-30 blur-xl" style={{ 
            background: `radial-gradient(circle at 50% 0%, ${accentColor}20, transparent 70%)`
          }} />

          {/* Título con terminal style */}
          <motion.div 
            className="relative mb-8 sm:mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="font-code text-xl" style={{ color: accentColor }}>&gt;_</span>
              <h1 id="about-me-heading" className="text-4xl sm:text-5xl font-bold font-code tracking-tight"
                style={{
                  color: 'white',
                  textShadow: `
                    0 0 15px ${accentColor},
                    0 0 30px ${accentColor}80,
                    0 0 45px ${accentColor}40
                  `,
                }}
              >
                {t('about.title')}
              </h1>
              <span className="inline-block w-3 h-6 sm:h-8 animate-blink" style={{ backgroundColor: accentColor }} />
            </div>
            <div className="h-px w-32 mx-auto" style={{ backgroundColor: accentColor, boxShadow: `0 0 10px ${accentColor}` }} />
          </motion.div>

          {/* Contenido en dos columnas */}
          <motion.div 
            className="relative grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* COLUMNA IZQUIERDA */}
            <div className="space-y-6">
              {/* Card de Educación - IDE Window Style */}
              <motion.div 
                variants={itemVariants}
                className="group/card relative p-6 rounded-xl bg-black/40 border-2 backdrop-blur-md overflow-hidden"
                style={{ borderColor: `${accentColor}30` }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                {/* Scan line effect */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div 
                    className="absolute w-full h-px opacity-0 group-hover/card:opacity-60 group-hover/card:animate-scan"
                    style={{ 
                      backgroundColor: accentColor,
                      boxShadow: `0 0 20px ${accentColor}`,
                      top: 0,
                    }}
                  />
                </div>

                <IDEHeader filename="education.jsx" />
                
                <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3 relative z-10">
                  <span className="text-2xl">🎓</span>
                  <span className="font-code">{t('about.education')}</span>
                </h2>
                <ul className="text-base text-white/80 leading-relaxed relative z-10 space-y-3 font-sans">
                  <li className="flex flex-col gap-1 pl-4 border-l-2" style={{ borderColor: `${accentColor}40` }}>
                    <span className="text-white font-medium">🔧 {t('about.education1')}</span>
                    <span className="text-white/70 text-sm pl-2">{t('about.education1desc')}</span>
                  </li>
                  <li className="flex flex-col gap-1 pl-4 border-l-2" style={{ borderColor: `${accentColor}40` }}>
                    <span className="text-white font-medium">💻 {t('about.education2')}</span>
                    <span className="text-white/70 text-sm pl-2">{t('about.education2desc')}</span>
                  </li>
                  <li className="flex flex-col gap-1 pl-4 border-l-2" style={{ borderColor: `${accentColor}40` }}>
                    <span className="text-white font-medium">🤖 {t('about.education3')}</span>
                    <span className="text-white/70 text-sm pl-2">{t('about.education3desc')}</span>
                  </li>
                </ul>
              </motion.div>

              {/* Card de Experiencia */}
              <motion.div 
                variants={itemVariants}
                className="group/card relative p-6 rounded-xl bg-black/40 border-2 backdrop-blur-md overflow-hidden"
                style={{ borderColor: `${accentColor}30` }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div 
                    className="absolute w-full h-px opacity-0 group-hover/card:opacity-60 group-hover/card:animate-scan"
                    style={{ backgroundColor: accentColor, boxShadow: `0 0 20px ${accentColor}`, top: 0 }}
                  />
                </div>

                <IDEHeader filename="experience.jsx" />
                
                <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3 relative z-10">
                  <span className="text-2xl">💻</span>
                  <span className="font-code">{t('about.experience')}</span>
                </h2>
                <p className="text-base text-white/80 leading-relaxed relative z-10 font-sans">
                  {t('about.experienceDesc')}
                </p>
              </motion.div>

              {/* Card de Enfoque */}
              <motion.div 
                variants={itemVariants}
                className="group/card relative p-6 rounded-xl bg-black/40 border-2 backdrop-blur-md overflow-hidden"
                style={{ borderColor: `${accentColor}30` }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div 
                    className="absolute w-full h-px opacity-0 group-hover/card:opacity-60 group-hover/card:animate-scan"
                    style={{ backgroundColor: accentColor, boxShadow: `0 0 20px ${accentColor}`, top: 0 }}
                  />
                </div>

                <IDEHeader filename="workApproach.js" />
                
                <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3 relative z-10">
                  <span className="text-2xl">💡</span>
                  <span className="font-code">{t('about.workApproach')}</span>
                </h2>
                <p className="text-base text-white/80 leading-relaxed relative z-10 font-sans">
                  {t('about.workApproachDesc')}
                </p>
              </motion.div>

              {/* Card de Proyectos */}
              <motion.div 
                variants={itemVariants}
                className="group/card relative p-6 rounded-xl bg-black/40 border-2 backdrop-blur-md overflow-hidden"
                style={{ borderColor: `${accentColor}50` }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div 
                    className="absolute w-full h-px opacity-0 group-hover/card:opacity-60 group-hover/card:animate-scan"
                    style={{ backgroundColor: accentColor, boxShadow: `0 0 20px ${accentColor}`, top: 0 }}
                  />
                </div>

                <IDEHeader filename="myProjects.json" />
                
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-3 relative z-10">
                  <span className="text-2xl">🛠️</span>
                  <span className="font-code text-white">{t('about.projects')}</span>
                </h2>
                <p className="text-base text-white/80 leading-relaxed mb-3 font-sans">
                  {t('about.projectsDesc')}
                </p>
                <div className="space-y-2 text-base text-white/80 font-sans">
                  <p className="flex items-start gap-2">
                    <span className="font-code" style={{ color: accentColor }}>→</span>
                    {t('about.project1')}
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="font-code" style={{ color: accentColor }}>→</span>
                    {t('about.project2')}
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="font-code" style={{ color: accentColor }}>→</span>
                    {t('about.project3')}
                  </p>
                </div>
                <p className="text-sm text-white/60 mt-3 italic font-sans">
                  {t('about.projectsNote')}
                </p>
              </motion.div>
            </div>

            {/* COLUMNA DERECHA: Sidebar tech */}
            <motion.div 
              variants={itemVariants}
              className="space-y-6"
            >
              {/* Terminal sidebar */}
              <div className="sticky top-24 p-6 rounded-xl bg-black/40 border-2 backdrop-blur-md shadow-lg relative overflow-hidden"
                style={{ borderColor: `${accentColor}30` }}
              >
                {/* Terminal header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="font-code text-xs" style={{ color: accentColor }}>~/connect</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
                    <span className="font-code text-xs opacity-60">READY</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-white mb-4 font-code flex items-center gap-2">
                  <span style={{ color: accentColor }}>&gt;</span>
                  {t('about.connect')} 🚀
                </h3>
                
                {/* Botón CV tech */}
                <motion.a 
                  href={language === 'es' ? '/CV - Ignacio Dalesio - Desarrollador Full Stack.pdf' : '/CV - Ignacio Dalesio - ENG Full Stack Developer.pdf'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center gap-3 p-4 rounded-lg font-code font-bold overflow-hidden mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${accentColor}20, ${accentColor}20)`,
                    borderWidth: '2px',
                    borderColor: accentColor,
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ 
                      background: `linear-gradient(90deg, transparent, ${accentColor}30, transparent)`,
                    }}
                  />
                  
                  <FaFileDownload className="text-2xl relative z-10 group-hover:animate-bounce" style={{ color: accentColor }} />
                  <span className="text-lg relative z-10" style={{ color: accentColor }}>
                    {t('about.cvButton')}
                  </span>
                  
                  {/* Download progress bar simulation */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700" 
                    style={{ backgroundColor: accentColor, boxShadow: `0 0 10px ${accentColor}` }}
                  />
                </motion.a>

                {/* Links sociales */}
                <div className="space-y-3">
                  {/* LinkedIn */}
                  <motion.a 
                    href="https://www.linkedin.com/in/ignacio-dalesio-lopez/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-3 rounded-lg bg-[#0A66C2]/20 border transition-all duration-300 relative overflow-hidden"
                    style={{ borderColor: '#0A66C240' }}
                    whileHover={{ scale: 1.05, x: 4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-[#0A66C2]/0 group-hover:bg-[#0A66C2]/20 transition-all duration-300" />
                    <FaLinkedin className="text-3xl text-[#0A66C2] relative z-10 group-hover:scale-110 transition-transform" />
                    <div className="flex-1 relative z-10">
                      <span className="text-base text-white font-medium block font-code">{t('about.linkedin')}</span>
                      <span className="text-xs text-white/70 font-code">{t('about.linkedinDesc')}</span>
                    </div>
                    {/* Connection LED */}
                    <div className="w-2 h-2 rounded-full bg-[#0A66C2] animate-pulse" />
                  </motion.a>

                  {/* GitHub */}
                  <motion.a 
                    href="https://github.com/nacho995" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-3 rounded-lg bg-white/5 border transition-all duration-300 relative overflow-hidden"
                    style={{ borderColor: 'rgba(255,255,255,0.2)' }}
                    whileHover={{ scale: 1.05, x: 4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
                    <FaGithub className="text-3xl text-white relative z-10 group-hover:scale-110 transition-transform" />
                    <div className="flex-1 relative z-10">
                      <span className="text-base text-white font-medium block font-code">{t('about.github')}</span>
                      <span className="text-xs text-white/70 font-code">{t('about.githubDesc')}</span>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  </motion.a>

                  {/* Email */}
                  <motion.a 
                    href="mailto:ignaciodalesio1995@gmail.com"
                    className="group flex items-center gap-3 p-3 rounded-lg bg-white/5 border transition-all duration-300 relative overflow-hidden"
                    style={{ borderColor: `${accentColor}40` }}
                    whileHover={{ scale: 1.05, x: 4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `${accentColor}10` }}
                    />
                    <svg className="w-8 h-8 relative z-10 group-hover:scale-110 transition-transform" 
                      style={{ color: accentColor }}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div className="flex-1 relative z-10">
                      <span className="text-base text-white font-medium block font-code">{t('about.email')}</span>
                      <span className="text-xs text-white/70 font-code">{t('about.emailDesc')}</span>
                    </div>
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
