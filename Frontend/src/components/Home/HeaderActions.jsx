import { motion } from 'framer-motion'

export function HeaderActions({
  language,
  toggleLanguage,
  theme,
  isMenuOpen,
  onToggleMenu
}) {
  const languageLabel = language === 'es' ? 'EN' : 'ES'
  const flag = language === 'es' ? '🇬🇧' : '🇪🇸'

  return (
    <div className="flex items-center gap-3 relative z-[75]">
      <motion.button
        onClick={toggleLanguage}
        className="px-3 py-2 rounded-lg bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 hover:border-white/25 transition-all duration-300 backdrop-blur-md text-white/90 hover:text-white text-sm font-medium flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={`Cambiar idioma a ${language === 'es' ? 'English' : 'Español'}`}
        data-cursor-label={`Cambiar idioma · ${language === 'es' ? 'Switch to EN' : 'Cambiar a ES'}`}
        data-cursor-intent="cta"
      >
        <span className="text-base">{flag}</span>
        <span className="hidden sm:inline">{languageLabel}</span>
      </motion.button>
      <motion.button
        onClick={onToggleMenu}
        className={`inline-flex items-center justify-center p-2 rounded-lg ${
          isMenuOpen
            ? theme === 'javascript'
              ? 'bg-[#F7DF1E]/20 hover:bg-[#F7DF1E]/30'
              : 'bg-[#83CD29]/20 hover:bg-[#83CD29]/30'
            : 'bg-white/[0.07] hover:bg-white/[0.12]'
        } text-white/90 hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 backdrop-blur-md z-50`}
        aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isMenuOpen}
        aria-controls="main-navigation"
        data-cursor-label={isMenuOpen ? 'Cerrar menú radial' : 'Explorar menú radial'}
        data-cursor-intent="cta"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.svg
          className="w-6 h-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          animate={{
            rotate: isMenuOpen ? 360 : 0
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut"
          }}
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </motion.svg>
      </motion.button>
    </div>
  )
}

export default HeaderActions
