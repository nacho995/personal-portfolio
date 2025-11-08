import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'
import { motion, AnimatePresence } from 'framer-motion'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme } = useTheme()
  const { language, toggleLanguage, t } = useLanguage()
  const [menuContainerSize, setMenuContainerSize] = useState({ width: 900, height: 900 })

  useEffect(() => {
    const updateMenuSize = () => {
      if (window.innerWidth < 640) {
        setMenuContainerSize({ width: 500, height: 500 })
      } else if (window.innerWidth < 1024) {
        setMenuContainerSize({ width: 700, height: 700 })
      } else {
        setMenuContainerSize({ width: 900, height: 900 })
      }
    }

    updateMenuSize()
    window.addEventListener('resize', updateMenuSize)
    return () => window.removeEventListener('resize', updateMenuSize)
  }, [])

  const circleVariants = {
    closed: (custom) => ({
      scale: 0,
      originX: 1,
      originY: 0,
      transition: { 
        scale: { delay: custom * 0.1, duration: 0.3, ease: 'easeOut' }
      }
    }),
    open: (custom) => ({
      scale: 1,
      originX: 1,
      originY: 0,
      transition: { delay: custom * 0.1, duration: 0.3, ease: 'easeIn' }
    })
  }

  const getResponsiveRadius = (baseRadius) => {
    if (window.innerWidth < 640) return baseRadius * 0.4;
    if (window.innerWidth < 768) return baseRadius * 0.5;
    if (window.innerWidth < 1024) return baseRadius * 0.6;
    return baseRadius;
  };

  const menuItems = [
    [
      { 
        text: 'HOME', 
        path: '/', 
        color: theme === 'javascript' 
          ? 'from-[#FFE55C]/95 via-[#FDB813]/90 to-[#F7DF1E]/80' 
          : 'from-[#90C53F]/95 via-[#83CD29]/90 to-[#339933]/80',
        radius: getResponsiveRadius(300),
        startAngle: 180
      }
    ],
    [
      { 
        text: 'PERFIL', 
        path: '/#about-me',
        color: theme === 'javascript' 
          ? 'from-[#F7DF1E]/90 via-[#FDB813]/85 to-[#E5C500]/75' 
          : 'from-[#83CD29]/90 via-[#70B81F]/85 to-[#5AA315]/75',
        radius: getResponsiveRadius(450),
        startAngle: 180
      }
    ],
    [
      { 
        text: 'PROYECTOS', 
        path: '/proyectos', 
        color: theme === 'javascript' 
          ? 'from-[#FDB813]/85 via-[#E5C500]/80 to-[#D4A500]/70' 
          : 'from-[#70B81F]/85 via-[#5AA315]/80 to-[#4A8D12]/70',
        radius: getResponsiveRadius(600),
        startAngle: 180
      }
    ],
    [
      { 
        text: 'GITHUB', 
        path: 'https://github.com/nacho995', 
        color: theme === 'javascript' 
          ? 'from-[#E5C500]/80 via-[#D4A500]/75 to-[#C89500]/65' 
          : 'from-[#5AA315]/80 via-[#4A8D12]/75 to-[#3A7810]/65',
        radius: getResponsiveRadius(750),
        startAngle: 180
      }
    ],
    [
      { 
        text: 'LINKEDIN', 
        path: 'https://www.linkedin.com/in/ignacio-dalesio-lopez/', 
        color: theme === 'javascript' 
          ? 'from-[#D4A500]/75 via-[#C89500]/70 to-[#B88500]/60' 
          : 'from-[#4A8D12]/75 via-[#3A7810]/70 to-[#2A630E]/60',
        radius: getResponsiveRadius(880),
        startAngle: 190
      }
    ],
    [
      { 
        text: 'CERRAR MENU', 
        path: '#', 
        color: 'from-black/90 via-black/95 to-black',
        radius: getResponsiveRadius(1050),
        startAngle: 195,
        isCloseButton: true
      }
    ]
  ]

  return (
    <header className="fixed top-0 w-full z-[45]" role="banner">
      {/* Menú circular */}
      <AnimatePresence>
        {isMenuOpen && (
          <div 
            className="fixed top-0 right-0 z-[100] overflow-hidden pointer-events-none"
            style={{ 
              width: `${menuContainerSize.width}px`, 
              height: `${menuContainerSize.height}px` 
            }}
            role="navigation"
            aria-label="Menú principal circular"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={circleVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="absolute top-0 right-0 origin-top-right cursor-pointer pointer-events-auto"
                style={{
                  width: `${item[0].radius}px`,
                  height: `${item[0].radius}px`,
                  zIndex: 100 - index,
                  clipPath: 'circle(51% at top right)'
                }}
                onClick={() => {
                  if (item[0].isCloseButton) {
                    setIsMenuOpen(false)
                  } else if (item[0].path.startsWith('/#')) {
                    setIsMenuOpen(false)
                    const targetId = item[0].path.substring(2)
                    const targetElement = document.getElementById(targetId)
                    if (targetElement) {
                      targetElement.scrollIntoView({ behavior: 'smooth' })
                    } else {
                      window.location.href = item[0].path
                    }
                  } else {
                    window.location.href = item[0].path
                    setIsMenuOpen(false)
                  }
                }}
              >
                {/* Área clickeable */}
                <div
                  className={`absolute inset-0 rounded-bl-full bg-gradient-to-br ${item[0].color} backdrop-blur-md cursor-pointer hover:scale-[1.02] hover:brightness-110 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.3)] group active:scale-95`}
                  style={{
                    width: `${item[0].radius}px`,
                    height: `${item[0].radius}px`,
                  }}
                >
                  {/* Efecto de brillo en hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:backdrop-blur-lg" />
                  
                  {/* Borde suave */}
                  <div className="absolute inset-0 border-l border-t border-white/20 rounded-bl-full shadow-inner" />
                  
                  {/* Texto circular */}
                  <div className="absolute inset-0 w-full h-full z-0">
                    {item[0].text.split('').map((letter, letterIndex) => {
                      const totalLetters = item[0].text.length
                      
                      const menuConfig = {
                        'HOME': {
                          arcLength: 55,
                          radius: (item[0].radius / 2) - (window.innerWidth < 640 ? 35 : 
                                  window.innerWidth < 768 ? 45 : 
                                  window.innerWidth < 1024 ? 50 : 60),
                          startAngleOffset: -30
                        },
                        'PERFIL': {
                          arcLength: 40,
                          radius: (item[0].radius / 2) - (window.innerWidth < 640 ? 35 : 
                                  window.innerWidth < 768 ? 45 : 
                                  window.innerWidth < 1024 ? 50 : 60),
                          startAngleOffset: -30
                        },
                        'PROYECTOS': {
                          arcLength: 40,
                          radius: (item[0].radius / 2) - (window.innerWidth < 640 ? 35 : 
                                  window.innerWidth < 768 ? 45 : 
                                  window.innerWidth < 1024 ? 50 : 60),
                          startAngleOffset: -30
                        },
                        'GITHUB': {
                          arcLength: 35,
                          radius: (item[0].radius / 2) - (window.innerWidth < 640 ? 35 : 
                                  window.innerWidth < 768 ? 45 : 
                                  window.innerWidth < 1024 ? 50 : 60),
                          startAngleOffset: -30
                        },
                        'LINKEDIN': {
                          arcLength: 40,
                          radius: (item[0].radius / 2) - (window.innerWidth < 640 ? 35 : 
                                  window.innerWidth < 768 ? 45 : 
                                  window.innerWidth < 1024 ? 50 : 60),
                          startAngleOffset: -30
                        },
                        'CERRAR MENU': {
                          arcLength: 65,
                          radius: (item[0].radius / 2) - (window.innerWidth < 640 ? 35 : 
                                  window.innerWidth < 768 ? 45 : 
                                  window.innerWidth < 1024 ? 50 : 60),
                          startAngleOffset: -30
                        }
                      }
                      
                      const config = menuConfig[item[0].text]
                      const arcLength = config.arcLength
                      const startAngle = item[0].startAngle
                      const angleStep = arcLength / totalLetters
                      const currentAngle = startAngle + config.startAngleOffset - letterIndex * angleStep
                      const radius = config.radius
                      const angleInRadians = currentAngle * (Math.PI / 180)

                      return (
                        <div
                          key={letterIndex}
                          className="absolute text-[10px] xs:text-[11px] sm:text-sm md:text-[13px] lg:text-base font-bold tracking-normal text-white/95 group-hover:text-white transition-all duration-500 select-none"
                          style={{
                            left: 'calc(100% - 20px)',
                            top: '20px',
                            transform: `
                              translate(${radius * Math.cos(angleInRadians)}px, 
                                      ${radius * Math.sin(angleInRadians)}px)
                              rotate(${currentAngle - 90}deg)
                            `,
                            transformOrigin: 'top right',
                            textShadow: '0 0 15px rgba(255,255,255,0.4), 0 2px 5px rgba(0,0,0,0.5)'
                          }}
                        >
                          {letter}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      <nav className={`bg-gradient-to-b from-black/95 via-black/85 to-transparent backdrop-blur-lg border-b border-white/15 transition-all duration-300 ${isMenuOpen ? 'pb-0' : ''} relative z-[60]`}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24 lg:h-28">
            {/* Sección izquierda: Logo, separador y code1.png */}
            <Link to="/" className="flex flex-row items-center gap-4 cursor-pointer">
              {/* Logo */}
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/80 to-blue-500/80 rounded-full opacity-75 blur-lg"></div>
                <div className="relative flex items-center justify-center w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] bg-black/60 rounded-full border border-white/15 overflow-hidden backdrop-blur-sm">
                  <img 
                    src="/yoia.jpeg" 
                    alt="Dev Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Separador vertical */}
              <div className="h-10 w-px bg-gradient-to-b from-transparent via-white/25 to-transparent"></div>
              
              {/* Imagen code1.png */}
              <div className="relative group overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"></div>
                <img 
                  src="/code1.png" 
                  alt="Code" 
                  className="mt-[3vh] animate-float h-11 sm:h-14 w-auto object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                />
              </div>
            </Link>
            
            {/* Sección central: Título y botones de navegación */}
            <div className="hidden md:flex items-center gap-6">
              <Link to="/" className="cursor-pointer">
                <h1 className="text-xl lg:text-2xl font-bold text-white/95 tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] hover:text-white transition-colors duration-300">
                  {t('header.portfolio')}
                </h1>
              </Link>
              <div className="flex items-center gap-3">
                <Link 
                  to="/proyectos"
                  className="px-4 py-2 rounded-lg bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 hover:border-white/25 transition-all duration-300 backdrop-blur-md text-white/90 hover:text-white text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  {t('header.projects')}
                </Link>
                <a 
                  href="mailto:ignaciodalesio1995@gmail.com"
                  className="px-4 py-2 rounded-lg bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 hover:border-white/25 transition-all duration-300 backdrop-blur-md text-white/90 hover:text-white text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  {t('header.contact')}
                </a>
              </div>
            </div>

            {/* Sección derecha: Botón de idioma y menú */}
            <div className="flex items-center gap-3 relative z-[75]">
              {/* Botón de cambio de idioma */}
              <motion.button
                onClick={toggleLanguage}
                className="px-3 py-2 rounded-lg bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 hover:border-white/25 transition-all duration-300 backdrop-blur-md text-white/90 hover:text-white text-sm font-medium flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Cambiar idioma a ${language === 'es' ? 'English' : 'Español'}`}
              >
                <span className="text-base">{language === 'es' ? '🇬🇧' : '🇪🇸'}</span>
                <span className="hidden sm:inline">{language === 'es' ? 'EN' : 'ES'}</span>
              </motion.button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-lg ${
                  isMenuOpen 
                    ? theme === 'javascript'
                      ? 'bg-[#F7DF1E]/20 hover:bg-[#F7DF1E]/30'
                      : 'bg-[#83CD29]/20 hover:bg-[#83CD29]/30'
                    : 'bg-white/[0.07] hover:bg-white/[0.12]'
                } text-white/90 hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 backdrop-blur-md z-50`}
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={isMenuOpen}
                aria-controls="main-navigation"
              >
                <svg
                  className="w-6 h-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
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
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
