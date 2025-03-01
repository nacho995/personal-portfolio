import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
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
      transition: { delay: custom * 0.1, duration: 0.3, ease: 'easeOut' }
    })
  }

  const getResponsiveRadius = (baseRadius) => {
    if (window.innerWidth < 640) return baseRadius * 0.4;
    if (window.innerWidth < 1024) return baseRadius * 0.6;
    return baseRadius;
  };

  // Ajusta 'startAngle' y 'radius' según necesites que el texto se vea
  // más adentro o afuera, o empiece en un ángulo distinto
  const menuItems = [
    [
      { 
        text: 'HOME', 
        path: '/', 
        color: theme === 'purple' 
          ? 'from-purple-500/80 via-purple-300/90 to-purple-100/95' 
          : 'from-[#3590D0]/80 via-[#50B0F0]/90 to-[#80E0F0]/95',
        radius: getResponsiveRadius(300),
        startAngle: 180
      }
    ],
    [
      { 
        text: 'PERFIL', 
        path: '/#about-me',
        color: theme === 'purple' 
          ? 'from-purple-600/80 via-purple-400/90 to-purple-200/95' 
          : 'from-[#2980B9]/80 via-[#40A0E0]/90 to-[#70D0F0]/95',
        radius: getResponsiveRadius(450),
        startAngle: 180
      }
    ],
    [
      { 
        text: 'PROYECTOS', 
        path: '/proyectos', 
        color: theme === 'purple' 
          ? 'from-purple-700/80 via-purple-500/90 to-purple-300/95' 
          : 'from-[#2575AF]/80 via-[#3085C0]/90 to-[#60C0F0]/95',
        radius: getResponsiveRadius(600),
        startAngle: 180
      }
    ],
    [
      { 
        text: 'GITHUB', 
        path: 'https://github.com/nacho995', 
        color: theme === 'purple' 
          ? 'from-purple-700/90 via-purple-600/95 to-purple-400' 
          : 'from-[#2171A5]/90 via-[#3590D0] to-[#50B0F0]',
        radius: getResponsiveRadius(750),
        startAngle: 180
      }
    ],
    [
      { 
        text: 'LINKEDIN', 
        path: 'https://www.linkedin.com/in/ignacio-dalesio-lopez/', 
        color: theme === 'purple' 
          ? 'from-purple-800/90 via-purple-700/95 to-purple-500' 
          : 'from-[#1e5c8d]/90 via-[#2980B9] to-[#40A0E0]',
        radius: getResponsiveRadius(850),
        startAngle: 190
      }
    ],
    [
      { 
        text: 'CERRAR MENU', 
        path: '#', 
        color: 'from-black/90 via-black/95 to-black',
        radius: getResponsiveRadius(950),
        startAngle: 195,
        isCloseButton: true
      }
    ]
  ]

  return (
    <header className="fixed top-0 w-full z-[45]">
      {/* Menú circular */}
      <AnimatePresence>
        {isMenuOpen && (
          <div 
            className="fixed top-0 right-0 z-[100] overflow-hidden pointer-events-none"
            style={{ 
              width: `${menuContainerSize.width}px`, 
              height: `${menuContainerSize.height}px` 
            }}
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
                          radius: (item[0].radius / 2) - (window.innerWidth < 640 ? 40 : 70),
                          startAngleOffset: -30
                        },
                        'PERFIL': {
                          arcLength: 40,
                          radius: (item[0].radius / 2) - (window.innerWidth < 640 ? 35 : 60),
                          startAngleOffset: -30
                        },
                        'PROYECTOS': {
                          arcLength: 40,
                          radius: (item[0].radius / 2) - (window.innerWidth < 640 ? 35 : 60),
                          startAngleOffset: -30
                        },
                        'GITHUB': {
                          arcLength: 35,
                          radius: (item[0].radius / 2) - (window.innerWidth < 640 ? 35 : 60),
                          startAngleOffset: -30
                        },
                        'LINKEDIN': {
                          arcLength: 40,
                          radius: (item[0].radius / 2) - (window.innerWidth < 640 ? 35 : 60),
                          startAngleOffset: -30
                        },
                        'CERRAR MENU': {
                          arcLength: 65,
                          radius: (item[0].radius / 2) - (window.innerWidth < 640 ? 35 : 60),
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
            {/* Logo y branding */}
            <div className="flex flex-col sm:flex-row items-center gap-6 relative mt-[10vh] sm:mt-0">
              <div className="flex flex-col sm:flex-row items-center gap-6 mt-8 sm:mt-0">
                {/* Logo con botón de tema debajo en móvil */}
                <div className="flex flex-col items-center sm:flex-row sm:items-start gap-4 sm:gap-6">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/80 to-blue-500/80 rounded-full opacity-75 group-hover:opacity-100 blur-lg group-hover:blur-xl transition-all duration-500"></div>
                    <div className="relative flex items-center justify-center w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] bg-black/60 rounded-full border border-white/15 overflow-hidden group-hover:border-white/30 transition-colors duration-500 backdrop-blur-sm">
                      <img 
                        src="/LogoDevLetSinFondo.png" 
                        alt="Logo" 
                        className="w-12 h-12 sm:w-14 sm:h-14 object-contain transform group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] animate-bubble"
                      />
                    </div>
                  </div>
                  
                  {/* Botón de tema - solo visible en móvil debajo del logo */}
                  <div className="flex sm:hidden items-center relative">
                    <button
                      onClick={toggleTheme}
                      className="relative group flex items-center gap-1 px-2 py-1.5 rounded-xl bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 hover:border-white/25 transition-all duration-300 backdrop-blur-md"
                    >
                      <div 
                        className="absolute inset-0 rounded-xl opacity-30 group-hover:opacity-100 transition-all duration-300 blur-md"
                        style={{
                          background: `radial-gradient(circle, ${theme === 'purple' ? '#40A0E0' : '#9333EA'} 0%, transparent 70%)`
                        }}
                      />
                      <div className="relative flex items-center gap-2">
                        <div className="z-[1000] relative">
                          <div 
                            className={`z-[1000] w-5 h-5 rounded-full ${
                              theme === 'purple' 
                                ? 'bg-gradient-to-br from-purple-300 to-purple-500' 
                                : 'bg-gradient-to-br from-[#40A0E0] to-[#2980B9]'
                            } transition-all duration-300 shadow-lg shadow-black/30`}
                          />
                          <div className="absolute inset-0 bg-white/25 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                        </div>
                        <span className="text-xs font-medium text-white/95 group-hover:text-white transition-colors duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                          {theme === 'purple' ? 'Purple' : 'Blue'}
                        </span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Separador vertical - visible solo en desktop */}
                <div className="hidden sm:block h-10 w-px bg-gradient-to-b from-transparent via-white/25 to-transparent"></div>
                
                {/* Imagen code1.png */}
                <div className="relative group overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"></div>
                  <img 
                    src="/code1.png" 
                    alt="Code" 
                    className="animate-float mt-2 h-12 sm:h-14 w-auto object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                  />
                </div>
              </div>

              {/* Botón de tema - visible solo en tablet/desktop */}
              <div className="hidden sm:flex items-center mt-0 ml-4 relative">
                <div className="relative z-[1000] pointer-events-auto">
                  <button
                    onClick={toggleTheme}
                    className="relative group flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 hover:border-white/25 transition-all duration-300 backdrop-blur-md"
                  >
                    <div 
                      className="absolute inset-0 rounded-xl opacity-30 group-hover:opacity-100 transition-all duration-300 blur-md"
                      style={{
                        background: `radial-gradient(circle, ${theme === 'purple' ? '#40A0E0' : '#9333EA'} 0%, transparent 70%)`
                      }}
                    />
                    <div className="relative flex items-center gap-3">
                      <div className="z-[1000] relative">
                        <div 
                          className={`z-[1000] w-6 h-6 rounded-full ${
                            theme === 'purple' 
                              ? 'bg-gradient-to-br from-purple-300 to-purple-500' 
                              : 'bg-gradient-to-br from-[#40A0E0] to-[#2980B9]'
                          } transition-all duration-300 shadow-lg shadow-black/30`}
                        />
                        <div className="absolute inset-0 bg-white/25 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                      </div>
                      <span className="text-sm font-medium text-white/95 group-hover:text-white transition-colors duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                        {theme === 'purple' ? 'Purple' : 'Blue'}
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Texto "Portfolio" */}
            <div className="hidden md:flex items-center gap-6">
              <Link 
                to="/" 
                className="text-2xl lg:text-3xl font-bold text-white/95 hover:text-white transition-colors duration-300 tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
              >
                Portfolio
              </Link>
            </div>

            {/* Botón menú */}
            <div className="flex items-center relative z-[75]">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-lg ${
                  isMenuOpen 
                    ? theme === 'purple'
                      ? 'bg-purple-500/20 hover:bg-purple-500/30'
                      : 'bg-[#40A0E0]/20 hover:bg-[#40A0E0]/30'
                    : 'bg-white/[0.07] hover:bg-white/[0.12]'
                } text-white/90 hover:text-white transition-all duration-300 focus:outline-none backdrop-blur-md z-50`}
                aria-label="Menu"
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
