import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="bg-gradient-to-b from-black/80 to-black/40 backdrop-blur-sm border-b border-white/10 shadow-lg">
        <div className="w-full">
          <div className="flex items-center h-20">
            {/* Logo a la izquierda */}
            <div className="relative group ml-10">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue to-purple-600 rounded-full blur-xl group-hover:blur-2xl transition-all duration-1000 group-hover:duration-200 animate-bubble opacity-70"></div>
              <img 
                src="/LogoDevZone.png" 
                alt="Logo" 
                className="w-20 h-20 rounded-full relative z-10 hover:scale-105 transition-transform duration-300 animate-float shadow-[0_0_30px_5px_rgba(255,255,255,0.7)] drop-shadow-2xl"
              />
            </div>
            
            {/* Portfolio texto centrado */}
            <div className="flex-1 flex justify-center ml-[-10vw]">
              <Link to="/" className="text-2xl font-bold text-white/90 hover:text-white transition-colors duration-300">
                Portfolio
              </Link>
            </div>

            {/* Menú de navegación */}
            <div className="flex space-x-8 mr-[10vw]">
              <Link 
                to="/" 
                className="text-white/80 hover:text-white px-4 py-2 text-base font-medium transition-all duration-300 border-b-2 border-transparent hover:border-white/50"
              >
                Inicio
              </Link>
              <Link 
                to="/proyectos" 
                className="text-white/80 hover:text-white px-4 py-2 text-base font-medium transition-all duration-300 border-b-2 border-transparent hover:border-white/50"
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
