import { useState, useEffect } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'
import CircularMenu from './CircularMenu'
import HeaderBrandCluster from './HeaderBrandCluster'
import HeaderNavLinks from './HeaderNavLinks'
import HeaderActions from './HeaderActions'

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
        text: 'CERRAR MENÚ', 
        path: '#', 
        color: theme === 'javascript' 
          ? 'from-[#FFE55C]/95 via-[#FDB813]/90 to-[#F7DF1E]/80' 
          : 'from-[#90C53F]/95 via-[#83CD29]/90 to-[#339933]/80',
        radius: getResponsiveRadius(300),
        startAngle: 180,
        isCloseButton: true,
        isBurgerIcon: true
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
        radius: getResponsiveRadius(900),
        startAngle: 190
      }
    ]
  ]

  const brandCursorLabel = language === 'es'
    ? 'Inicio · Portfolio de Nacho Dalesio'
    : 'Home · Nacho Dalesio portfolio'

  const handleMenuSelect = (item) => {
    if (item.isCloseButton) {
      setIsMenuOpen(false)
      return
    }

    if (item.path.startsWith('/#')) {
      setIsMenuOpen(false)
      const targetId = item.path.substring(2)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.location.href = item.path
      }
      return
    }

    window.location.href = item.path
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full z-[45]" role="banner">
      <CircularMenu
        isOpen={isMenuOpen}
        menuItems={menuItems}
        menuContainerSize={menuContainerSize}
        circleVariants={circleVariants}
        onSelectItem={handleMenuSelect}
      />

      <nav className={`bg-gradient-to-b from-black/95 via-black/85 to-transparent backdrop-blur-lg border-b border-white/15 transition-all duration-300 ${isMenuOpen ? 'pb-0' : ''} relative z-[60]`}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24 lg:h-28">
            <HeaderBrandCluster cursorLabel={brandCursorLabel} />
            <HeaderNavLinks t={t} />
            <HeaderActions
              language={language}
              toggleLanguage={toggleLanguage}
              theme={theme}
              isMenuOpen={isMenuOpen}
              onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
            />
          </div>
        </div>
      </nav>
    </header>
  )
}
