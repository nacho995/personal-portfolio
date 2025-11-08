import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { FaGithub, FaExternalLinkAlt, FaBook } from 'react-icons/fa';

const MundoTintaProject = ({
  project,
  tempRating,
  rating,
  averageRating,
  totalRatings,
  onTempRatingChange,
  onSubmitRating
}) => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  
  const themeColors = theme === 'javascript' 
    ? {
        gradient: 'from-[#F7DF1E] to-[#FDB813]',
        glow: 'rgba(247,223,30,0.4)',
        border: 'border-[#F7DF1E]/30',
        shadow: 'shadow-[#F7DF1E]/20',
        text: 'text-[#F7DF1E]',
        bg: 'bg-[#F7DF1E]/10'
      }
    : {
        gradient: 'from-[#83CD29] to-[#339933]',
        glow: 'rgba(131,205,41,0.4)',
        border: 'border-[#83CD29]/30',
        shadow: 'shadow-[#83CD29]/20',
        text: 'text-[#83CD29]',
        bg: 'bg-[#83CD29]/10'
      };

  const techStack = [
    { name: 'React', color: '#61DAFB' },
    { name: 'Node.js', color: '#83CD29' },
    { name: 'Next.js', color: '#000000' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="group relative bg-gradient-to-br from-black/40 via-black/20 to-black/40 border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 transition-all duration-500 shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
    >
      {/* Efecto de brillo animado en el borde */}
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${themeColors.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
      
      {/* Imagen del proyecto con overlay */}
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Imagen real */}
        <motion.img 
          src={project.image}
          alt={`${project.title} Preview`}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        
        {/* Overlay con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        
        {/* Enlaces flotantes sobre la imagen */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <motion.a 
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-3 bg-gradient-to-r ${themeColors.gradient} text-black font-bold rounded-xl flex items-center gap-2 shadow-2xl`}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{ boxShadow: `0 10px 30px ${themeColors.glow}` }}
          >
            <FaExternalLinkAlt />
            <span>{t('projects.viewDemo')}</span>
          </motion.a>
          
          {project.githubUrl && (
            <motion.a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/10 backdrop-blur-xl text-white font-bold rounded-xl flex items-center gap-2 border border-white/30 hover:bg-white/20 transition-all shadow-2xl"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
              <span>{t('projects.viewCode')}</span>
            </motion.a>
          )}
        </div>

        {/* Badge de categoría */}
        <div className="absolute top-4 right-4">
          <span className={`px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-black text-sm font-bold rounded-full shadow-lg backdrop-blur-sm flex items-center gap-2`}>
            <FaBook />
            E-Commerce
          </span>
        </div>

        {/* Badge de proyecto didáctico */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 bg-purple-500/90 text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm">
            📚 Proyecto Autodidacta
          </span>
        </div>
      </div>

      {/* Contenido de la card */}
      <div className="relative p-6 sm:p-8">
        {/* Título */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-orange-600 transition-all duration-300">
              {project.title}
            </h3>
            <a 
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white/90 text-sm transition-colors duration-300 flex items-center gap-2"
            >
              <FaExternalLinkAlt className="text-xs" />
              {project.siteName}
            </a>
          </div>
        </div>
        
        {/* Descripción */}
        <p className="text-white/70 text-base leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech Stack con Pills/Badges */}
        <div className="mb-6">
          <p className="text-white/50 text-xs uppercase tracking-wider mb-3 font-semibold">{t('projects.techStack')}</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <motion.span 
                key={index}
                className="px-4 py-2 rounded-full text-sm font-medium border border-white/20 backdrop-blur-sm flex items-center gap-2 hover:scale-105 transition-transform duration-300"
                style={{ 
                  backgroundColor: `${tech.color}15`,
                  color: tech.color,
                  borderColor: `${tech.color}30`
                }}
                whileHover={{ 
                  boxShadow: `0 0 20px ${tech.color}40`,
                  y: -2
                }}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: tech.color }} />
                {tech.name}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Sistema de Rating mejorado */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10">
          <div className="flex items-center gap-3 flex-1">
            {/* Estrellas */}
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.button
                  key={star}
                  onClick={(e) => {
                    e.preventDefault();
                    onTempRatingChange(star);
                  }}
                  className="p-1 transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg 
                    className={`w-6 h-6 ${
                      star <= (tempRating || rating)
                        ? 'text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]'
                        : 'text-white/20 hover:text-yellow-400/50'
                    } transition-all duration-300`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </motion.button>
              ))}
            </div>

            {/* Botón de valorar */}
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                onSubmitRating();
              }}
              className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                tempRating > 0 && tempRating !== rating
                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-lg hover:shadow-yellow-400/50'
                  : 'bg-white/10 text-white/60 cursor-not-allowed'
              }`}
              disabled={tempRating === 0 || tempRating === rating}
              whileHover={tempRating > 0 && tempRating !== rating ? { scale: 1.05 } : {}}
              whileTap={tempRating > 0 && tempRating !== rating ? { scale: 0.95 } : {}}
            >
              {tempRating === rating ? t('projects.rated') : t('projects.rate')}
            </motion.button>
          </div>
          
          {/* Promedio de valoraciones */}
          <div className="flex items-center gap-2 text-white/80 border-l border-white/10 pl-4">
            <div className="flex flex-col items-end">
              <span className="font-bold text-lg">
                {averageRating > 0 
                  ? `${parseFloat(averageRating).toFixed(1)} ⭐`
                  : t('projects.noRatings')
                }
              </span>
              {totalRatings > 0 && (
                <span className="text-white/50 text-xs">
                  {totalRatings} {totalRatings === 1 ? t('projects.rating') : t('projects.ratings')}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Efecto de partículas en hover - Temática de libros */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-amber-500/30 text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.6, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            📚
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MundoTintaProject;

