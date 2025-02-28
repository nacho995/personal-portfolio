import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useTheme } from '../../context/ThemeContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="fixed top-0 w-full z-50">
      <nav className={`bg-gradient-to-b from-black/90 via-black/70 to-transparent backdrop-blur-md border-b border-white/10 transition-all duration-300 ${isMenuOpen ? 'pb-0' : ''}`}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24 lg:h-28">
            {/* Logo y branding */}
            <div className="flex items-center gap-6">
              {/* Logo con efecto mejorado */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full opacity-75 group-hover:opacity-100 blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <div className="relative flex items-center justify-center w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] bg-black/50 rounded-full border border-white/10 overflow-hidden group-hover:border-white/20 transition-colors duration-500">
                  <img 
                    src="/LogoDevLetSinFondo.png" 
                    alt="Logo" 
                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain transform group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                  />
                </div>
              </div>

              {/* Separador decorativo */}
              <div className="hidden sm:block h-10 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

              {/* Imagen code con efecto */}
              <div className="relative group overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src="/code1.png" 
                  alt="Code" 
                  className="h-12 sm:h-14 w-auto object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]"
                />
              </div>
            </div>
            
            {/* Portfolio texto con botón de tema */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6">
              <Link 
                to="/" 
                className="text-2xl lg:text-3xl font-bold text-white/90 hover:text-white transition-colors duration-300 tracking-wide"
              >
                Portfolio
              </Link>

              {/* Botón de tema mejorado */}
              <button
                onClick={toggleTheme}
                className="relative group flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                {/* Efecto de fondo */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-25 group-hover:opacity-100 transition-all duration-300 blur-md"
                  style={{
                    background: `radial-gradient(circle, ${theme === 'purple' ? '#40A0E0' : '#9333EA'} 0%, transparent 70%)`
                  }}
                />
                
                {/* Contenido del botón */}
                <div className="relative flex items-center gap-3">
                  {/* Icono del tema */}
                  <div className="relative">
                    <div 
                      className={`w-6 h-6 rounded-full ${
                        theme === 'purple' 
                          ? 'bg-gradient-to-br from-purple-400 to-purple-600' 
                          : 'bg-gradient-to-br from-[#40A0E0] to-[#2980B9]'
                      } transition-all duration-300 shadow-lg`}
                    />
                    <div className="absolute inset-0 bg-white/20 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </div>
                  
                  {/* Texto del tema */}
                  <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors duration-300">
                    {theme === 'purple' ? 'Purple' : 'Blue'} Theme
                  </span>
                </div>
              </button>
            </div>

            {/* Botón menú móvil */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all duration-300 focus:outline-none"
                aria-label="Menu"
              >
                <svg
                  className="w-6 h-6"
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

            {/* Menú de navegación - escritorio con tamaño aumentado */}
            <div className="hidden md:flex items-center space-x-3">
              <Link 
                to="/" 
                className="px-8 py-4 text-lg font-medium text-white/90 hover:text-white rounded-xl hover:bg-white/5 transition-all duration-300"
              >
                Inicio
              </Link>
              <Link 
                to="/proyectos" 
                className="px-8 py-4 text-lg font-medium text-white/90 hover:text-white rounded-xl hover:bg-white/5 transition-all duration-300"
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
            <div className="pt-4 pb-3 bg-gradient-to-b from-black/80 to-black/40 backdrop-blur-sm">
              <Link 
                to="/" 
                className="block px-6 py-4 text-base font-medium text-white/90 hover:text-white hover:bg-white/5 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                to="/proyectos" 
                className="block px-6 py-4 text-base font-medium text-white/90 hover:text-white hover:bg-white/5 transition-all duration-300"
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
