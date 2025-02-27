import { Link } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="bg-gradient-to-b from-black/90 via-black/80 to-transparent backdrop-blur-md border-b border-white/10">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[13vh]">
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
            
            {/* Portfolio texto - centrado */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
              <Link 
                to="/" 
                className="text-xl sm:text-2xl font-bold text-white/90 hover:text-white transition-colors duration-300 tracking-wide"
              >
                Portfolio
              </Link>
            </div>

            {/* Botón menú móvil */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all duration-300 focus:outline-none"
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

            {/* Menú de navegación - escritorio */}
            <div className="hidden md:flex items-center space-x-1">
              <Link 
                to="/" 
                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-300"
              >
                Inicio
              </Link>
              <Link 
                to="/proyectos" 
                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-300"
              >
                Proyectos
              </Link>
            </div>
          </div>

          {/* Menú móvil mejorado */}
          <div 
            className={`md:hidden transform transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 pointer-events-none'
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-b from-black/90 to-black/80 backdrop-blur-md rounded-lg border border-white/10">
              <Link 
                to="/" 
                className="block px-3 py-2 text-base font-medium text-white/80 hover:text-white rounded-md hover:bg-white/5 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                to="/proyectos" 
                className="block px-3 py-2 text-base font-medium text-white/80 hover:text-white rounded-md hover:bg-white/5 transition-all duration-300"
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
