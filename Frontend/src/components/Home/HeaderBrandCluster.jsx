import { Link } from 'react-router-dom'

export function HeaderBrandCluster({ cursorLabel }) {
  return (
    <Link
      to="/"
      className="flex flex-row items-center gap-4 cursor-pointer"
      data-cursor-label={cursorLabel}
      data-cursor-intent="cta"
    >
      <div className="relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/80 to-blue-500/80 rounded-full opacity-75 blur-lg"></div>
        <div className="relative flex items-center justify-center w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] bg-black/60 rounded-full border border-white/15 overflow-hidden backdrop-blur-sm">
          <img
            src="/yoia.jpeg"
            alt="Dev Logo de Ignacio Dalesio"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="h-10 w-px bg-gradient-to-b from-transparent via-white/25 to-transparent"></div>

      <div className="relative group overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"></div>
        <img
          src="/code1.png"
          alt="Código destacado de Nacho Dalesio"
          className="mt-[3vh] animate-float h-11 sm:h-14 w-auto object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
        />
      </div>
    </Link>
  )
}

export default HeaderBrandCluster

