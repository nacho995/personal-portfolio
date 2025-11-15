import { Link } from 'react-router-dom'

export function HeaderNavLinks({ t }) {
  return (
    <div className="hidden md:flex items-center gap-6">
      <Link
        to="/"
        className="cursor-pointer"
        data-cursor-label="Volver al panel principal"
        data-cursor-intent="cta"
      >
        <h1 className="text-xl lg:text-2xl font-bold text-white/95 tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] hover:text-white transition-colors duration-300">
          {t('header.portfolio')}
        </h1>
      </Link>
      <div className="flex items-center gap-3">
        <Link
          to="/proyectos"
          className="px-4 py-2 rounded-lg bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 hover:border-white/25 transition-all duration-300 backdrop-blur-md text-white/90 hover:text-white text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          data-cursor-label="Explorar proyectos React + Node"
          data-cursor-intent="cta"
        >
          {t('header.projects')}
        </Link>
        <a
          href="mailto:ignaciodalesio1995@gmail.com"
          className="px-4 py-2 rounded-lg bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 hover:border-white/25 transition-all duration-300 backdrop-blur-md text-white/90 hover:text-white text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          data-cursor-label="Contactar a Ignacio Dalesio"
          data-cursor-intent="cta"
        >
          {t('header.contact')}
        </a>
      </div>
    </div>
  )
}

export default HeaderNavLinks

