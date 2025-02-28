import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useTheme } from '../../context/ThemeContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="fixed top-0 w-full z-50">
      <nav className={`bg-gradient-to-b from-black/95 via-black/85 to-transparent backdrop-blur-lg border-b border-white/15 transition-all duration-300 ${isMenuOpen ? 'pb-0' : ''}`}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24 lg:h-28">
            {/* Logo y branding mejorado */}
            <div className="flex items-center gap-6">
              {/* Logo con efecto mejorado */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/80 to-blue-500/80 rounded-full opacity-75 group-hover:opacity-100 blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <div className="relative flex items-center justify-center w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] bg-black/60 rounded-full border border-white/15 overflow-hidden group-hover:border-white/30 transition-colors duration-500 backdrop-blur-sm">
                  <img 
                    src="/LogoDevLetSinFondo.png" 
                    alt="Logo" 
                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain transform group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                  />
                </div>
              </div>

              {/* Separador decorativo mejorado */}
              <div className="hidden sm:block h-10 w-px bg-gradient-to-b from-transparent via-white/25 to-transparent"></div>

              {/* Imagen code con efecto mejorado */}
              <div className="relative group overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"></div>
                <img 
                  src="/code1.png" 
                  alt="Code" 
                  className="h-12 sm:h-14 w-auto object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                />
              </div>
            </div>
            
            {/* Portfolio texto mejorado */}
            <div className="hidden md:flex items-center gap-6">
              <Link 
                to="/" 
                className="text-2xl lg:text-3xl font-bold text-white/95 hover:text-white transition-colors duration-300 tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
              >
                Portfolio
              </Link>
            </div>

            {/* Botón de tema mejorado */}
            <div className="flex items-center">
              <button
                onClick={toggleTheme}
                className="relative group flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 hover:border-white/25 transition-all duration-300 backdrop-blur-md"
              >
                {/* Efecto de fondo mejorado */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-30 group-hover:opacity-100 transition-all duration-300 blur-md"
                  style={{
                    background: `radial-gradient(circle, ${theme === 'purple' ? '#40A0E0' : '#9333EA'} 0%, transparent 70%)`
                  }}
                />
                
                {/* Contenido del botón mejorado */}
                <div className="relative flex items-center gap-2 sm:gap-3">
                  {/* Icono del tema mejorado */}
                  <div className="relative">
                    <div 
                      className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full ${
                        theme === 'purple' 
                          ? 'bg-gradient-to-br from-purple-300 to-purple-500' 
                          : 'bg-gradient-to-br from-[#40A0E0] to-[#2980B9]'
                      } transition-all duration-300 shadow-lg shadow-black/30`}
                    />
                    <div className="absolute inset-0 bg-white/25 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </div>
                  
                  {/* Texto del tema mejorado */}
                  <span className="text-xs sm:text-sm font-medium text-white/95 group-hover:text-white transition-colors duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                    {theme === 'purple' ? 'Purple' : 'Blue'}
                  </span>
                </div>
              </button>
            </div>

            {/* Botón menú móvil mejorado */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg bg-white/[0.07] hover:bg-white/[0.12] text-white/90 hover:text-white transition-all duration-300 focus:outline-none backdrop-blur-md"
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

            {/* Menú de navegación - escritorio mejorado */}
            <div className="hidden md:flex items-center space-x-3">
              <Link 
                to="/" 
                className="px-8 py-4 text-lg font-medium text-white/95 hover:text-white rounded-xl hover:bg-white/[0.07] transition-all duration-300 backdrop-blur-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
              >
                Inicio
              </Link>
              <Link 
                to="/proyectos" 
                className="px-8 py-4 text-lg font-medium text-white/95 hover:text-white rounded-xl hover:bg-white/[0.07] transition-all duration-300 backdrop-blur-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
              >
                Proyectos
              </Link>
            </div>
          </div>

          {/* Menú móvil mejorado */}
          <div 
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen 
                ? 'max-h-52 opacity-100' 
                : 'max-h-0 opacity-0 pointer-events-none'
            }`}
          >
            <div className="pt-4 pb-3 bg-gradient-to-b from-black/90 to-black/50 backdrop-blur-lg">
              <Link 
                to="/" 
                className="block px-6 py-4 text-base font-medium text-white/95 hover:text-white hover:bg-white/[0.07] transition-all duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                to="/proyectos" 
                className="block px-6 py-4 text-base font-medium text-white/95 hover:text-white hover:bg-white/[0.07] transition-all duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
                onClick={() => setIsMenuOpen(false)}
              >
                Proyectos
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
