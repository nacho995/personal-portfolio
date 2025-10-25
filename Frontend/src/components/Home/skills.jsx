import { useTheme } from '../../context/ThemeContext';

export default function Skills() {
  const { theme } = useTheme();

  const getThemeStyles = () => ({
    gradient: theme === 'purple' 
      ? 'from-purple-500/15 via-transparent to-blue-500/15'
      : 'from-[#40A0E0]/15 via-transparent to-[#2980B9]/15',
    glow: theme === 'purple'
      ? 'from-purple-500/30 to-blue-500/30'
      : 'from-[#40A0E0]/30 to-[#2980B9]/30',
    blur: theme === 'purple'
      ? {
          primary: 'bg-purple-500/20',
          secondary: 'bg-blue-500/20'
        }
      : {
          primary: 'bg-[#40A0E0]/20',
          secondary: 'bg-[#2980B9]/20'
        },
    shadow: theme === 'purple'
      ? 'rgba(168,85,247,0.3)'
      : 'rgba(64,160,224,0.3)'
  });

  const styles = getThemeStyles();

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      {/* Contenedor principal con efecto de cristal mejorado */}
      <div className="relative backdrop-blur-2xl bg-black/10 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-[0_0_60px_rgba(168,85,247,0.3)] hover:shadow-[0_0_80px_rgba(168,85,247,0.4)] transition-shadow duration-500 overflow-hidden group/container">
        {/* Efectos de fondo mejorados */}
        <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient}`} />
        <div className={`absolute -top-32 -right-32 w-48 sm:w-64 h-48 sm:h-64 ${styles.blur.primary} rounded-full blur-3xl animate-pulse-slow`} />
        <div className={`absolute -bottom-32 -left-32 w-48 sm:w-64 h-48 sm:h-64 ${styles.blur.secondary} rounded-full blur-3xl animate-pulse-slow`} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow`} style={{ animationDelay: '1s' }} />
        {/* Borde brillante animado */}
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 opacity-0 group-hover/container:opacity-100 transition-opacity duration-700 blur-xl" />
        
        {/* Título principal mejorado */}
        <div className="relative mb-8 sm:mb-16 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/90 tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            Technical Skills
          </h1>
          <div className="mt-2 h-1 w-24 sm:w-32 mx-auto bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </div>

        {/* Contenido mejorado */}
        <div className="relative space-y-8 sm:space-y-16">
          {/* Programming Languages */}
          <section className="transform hover:scale-[1.01] transition-all duration-300">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-8 group">
              <div className="relative">
                <div className={`absolute -inset-2 bg-gradient-to-r ${styles.glow} rounded-full blur-sm group-hover:blur-md transition-all duration-500`}></div>
                <img src="https://github.com/7oSkaaa/7oSkaaa/blob/main/Images/Programming_Languages.gif?raw=true" 
                     className="w-10 h-10 sm:w-12 sm:h-12 object-contain relative drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" alt="Programming Languages icon" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                Programming Languages
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
              {/* JavaScript */}
              <span 
                className={`group px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-br from-[#F7DF1E]/90 via-[#F7DF1E]/80 to-black/40 text-black rounded-lg sm:rounded-xl font-medium flex items-center gap-2 sm:gap-3 hover:scale-105 hover:shadow transition-all duration-300`}
                onMouseOver={(e) => e.currentTarget.style.boxShadow = `0 0 25px ${styles.shadow}`}
                onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                <div className="p-1 sm:p-1.5 rounded-lg bg-black/10 backdrop-blur-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
                       className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform duration-300" alt="JavaScript" />
                </div>
                <span className="text-sm sm:text-base font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">JavaScript</span>
              </span>

              {/* Python */}
              <span 
                className={`group px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-br from-[#3776AB]/90 via-[#FFD43B]/60 to-[#3776AB]/70 text-white rounded-lg sm:rounded-xl font-medium flex items-center gap-2 sm:gap-3 hover:scale-105 hover:shadow transition-all duration-300`}
                onMouseOver={(e) => e.currentTarget.style.boxShadow = `0 0 25px ${styles.shadow}`}
                onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                <div className="p-1 sm:p-1.5 rounded-lg bg-white/15 backdrop-blur-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
                       className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform duration-300" alt="Python" />
                </div>
                <span className="text-sm sm:text-base font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">Python</span>
                
              </span>
            </div>
          </section>

          {/* Frontend Development */}
          <section className="transform hover:scale-[1.01] transition-all duration-300">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-8 group">
              <div className="relative">
                <div className={`absolute -inset-2 bg-gradient-to-r ${styles.glow} rounded-full blur-sm group-hover:blur-md transition-all duration-500`}></div>
                <img src="https://github.com/7oSkaaa/7oSkaaa/blob/main/Images/Front_End.gif?raw=true" 
                     className="w-10 h-10 sm:w-12 sm:h-12 object-contain relative drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" alt="Frontend icon" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                Frontend Development
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
              {/* React */}
              <span 
                className={`group px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-br from-gray-500/90 to-black/40 text-white rounded-lg sm:rounded-xl font-medium flex items-center gap-2 sm:gap-3 hover:scale-105 hover:shadow transition-all duration-300`}
                onMouseOver={(e) => e.currentTarget.style.boxShadow = `0 0 25px ${styles.shadow}`}
                onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                <div className="p-1 sm:p-1.5 rounded-lg bg-white/15 backdrop-blur-sm">
                  <img src="/react.png" 
                       className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform duration-300" alt="React" />
                </div>
                <span className="text-sm sm:text-base font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">React</span>
              </span>

              {/* HTML5 */}
              <span 
                className={`group px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-br from-[#E34F26]/90 via-[#E34F26]/80 to-black/40 text-white rounded-lg sm:rounded-xl font-medium flex items-center gap-2 sm:gap-3 hover:scale-105 hover:shadow transition-all duration-300`}
                onMouseOver={(e) => e.currentTarget.style.boxShadow = `0 0 25px ${styles.shadow}`}
                onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                <div className="p-1 sm:p-1.5 rounded-lg bg-white/15 backdrop-blur-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
                       className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform duration-300" alt="HTML5" />
                </div>
                <span className="text-sm sm:text-base font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">HTML5</span>
              </span>

              {/* CSS3 */}
              <span 
                className={`group px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-br from-[#1572B6]/90 via-[#1572B6]/80 to-black/40 text-white rounded-lg sm:rounded-xl font-medium flex items-center gap-2 sm:gap-3 hover:scale-105 hover:shadow transition-all duration-300`}
                onMouseOver={(e) => e.currentTarget.style.boxShadow = `0 0 25px ${styles.shadow}`}
                onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                <div className="p-1 sm:p-1.5 rounded-lg bg-white/15 backdrop-blur-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
                       className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform duration-300" alt="CSS3" />
                </div>
                <span className="text-sm sm:text-base font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">CSS3</span>
              </span>

              {/* JavaScript */}
              <span 
                className={`group px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-br from-[#F7DF1E]/90 via-[#F7DF1E]/80 to-black/40 text-black rounded-lg sm:rounded-xl font-medium flex items-center gap-2 sm:gap-3 hover:scale-105 hover:shadow transition-all duration-300`}
                onMouseOver={(e) => e.currentTarget.style.boxShadow = `0 0 25px ${styles.shadow}`}
                onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                <div className="p-1 sm:p-1.5 rounded-lg bg-black/10 backdrop-blur-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
                       className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform duration-300" alt="JavaScript" />
                </div>
                <span className="text-sm sm:text-base font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">JavaScript</span>
              </span>

              {/* TailwindCSS */}
              <span 
                className={`group px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-br from-[#38BDF8]/90 via-[#38BDF8]/80 to-black/40 text-white rounded-lg sm:rounded-xl font-medium flex items-center gap-2 sm:gap-3 hover:scale-105 hover:shadow transition-all duration-300`}
                onMouseOver={(e) => e.currentTarget.style.boxShadow = `0 0 25px ${styles.shadow}`}
                onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                <div className="p-1 sm:p-1.5 rounded-lg bg-white/15 backdrop-blur-sm">
                  <img src="/tailwind.png" 
                       className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform duration-300" alt="TailwindCSS" />
                </div>
                <span className="text-sm sm:text-base font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">TailwindCSS</span>
              </span>
            </div>
          </section>

          {/* Backend Development */}
          <section className="transform hover:scale-[1.01] transition-all duration-300">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-8 group">
              <div className="relative">
                <div className={`absolute -inset-2 bg-gradient-to-r ${styles.glow} rounded-full blur-sm group-hover:blur-md transition-all duration-500`}></div>
                <img src="/letscode.gif" 
                     className="w-10 h-10 sm:w-12 sm:h-12 object-contain relative drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" alt="Backend icon" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                Backend Development
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
              {/* Node.js */}
              <span 
                className={`group px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-br from-[#83CD29]/90 via-[#83CD29]/80 to-black/40 text-white rounded-lg sm:rounded-xl font-medium flex items-center gap-2 sm:gap-3 hover:scale-105 hover:shadow transition-all duration-300`}
                onMouseOver={(e) => e.currentTarget.style.boxShadow = `0 0 25px ${styles.shadow}`}
                onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                <div className="p-1 sm:p-1.5 rounded-lg bg-white/15 backdrop-blur-sm">
                  <img src="/nodejs.png" 
                       className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform duration-300" alt="Node.js" />
                </div>
                <span className="text-sm sm:text-base font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Node.js</span>
              </span>
            </div>
          </section>

          {/* Software & Tools */}
          <section className="transform hover:scale-[1.01] transition-all duration-300">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-8 group">
              <div className="relative">
                <div className={`absolute -inset-2 bg-gradient-to-r ${styles.glow} rounded-full blur-sm group-hover:blur-md transition-all duration-500`}></div>
                <img src="https://github.com/7oSkaaa/7oSkaaa/blob/main/Images/Software_Tools.gif?raw=true" 
                     className="w-10 h-10 sm:w-12 sm:h-12 object-contain relative drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" alt="Tools icon" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                Software & Tools
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
              {/* Git */}
              <span 
                className={`group px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-br from-[#F05033]/90 via-[#F05033]/80 to-black/40 text-white rounded-lg sm:rounded-xl font-medium flex items-center gap-2 sm:gap-3 hover:scale-105 hover:shadow transition-all duration-300`}
                onMouseOver={(e) => e.currentTarget.style.boxShadow = `0 0 25px ${styles.shadow}`}
                onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                <div className="p-1 sm:p-1.5 rounded-lg bg-white/15 backdrop-blur-sm">
                  <img src="/git.png" 
                       className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform duration-300" alt="Git" />
                </div>
                <span className="text-sm sm:text-base font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Git</span>
              </span>

              {/* GitHub */}
              <span 
                className={`group px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-br from-gray-400/90 via-[#181717]/80 to-black/40 text-white rounded-lg sm:rounded-xl font-medium flex items-center gap-2 sm:gap-3 hover:scale-105 hover:shadow transition-all duration-300`}
                onMouseOver={(e) => e.currentTarget.style.boxShadow = `0 0 25px ${styles.shadow}`}
                onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                <div className="p-1 sm:p-1.5 rounded-lg bg-white/15 backdrop-blur-sm">
                  <img src="/github.png" 
                       className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform duration-300" alt="GitHub" />
                </div>
                <span className="text-sm sm:text-base font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">GitHub</span>
              </span>

              {/* Discord */}
              <span 
                className={`group px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-br from-[#738ADB]/90 via-[#738ADB]/80 to-black/40 text-white rounded-lg sm:rounded-xl font-medium flex items-center gap-2 sm:gap-3 hover:scale-105 hover:shadow transition-all duration-300`}
                onMouseOver={(e) => e.currentTarget.style.boxShadow = `0 0 25px ${styles.shadow}`}
                onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                <div className="p-1 sm:p-1.5 rounded-lg bg-white/15 backdrop-blur-sm">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </div>
                <span className="text-sm sm:text-base font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Discord</span>
              </span>

              {/* Canva */}
              <span 
                className={`group px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-br from-[#00C4CC]/90 via-[#7D2AE8]/60 to-[#00C4CC]/70 text-white rounded-lg sm:rounded-xl font-medium flex items-center gap-2 sm:gap-3 hover:scale-105 hover:shadow transition-all duration-300`}
                onMouseOver={(e) => e.currentTarget.style.boxShadow = `0 0 25px ${styles.shadow}`}
                onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                <div className="p-1 sm:p-1.5 rounded-lg bg-white/15 backdrop-blur-sm">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.494 7.618c1.07 0 1.937.867 1.937 1.937s-.867 1.937-1.937 1.937-1.937-.867-1.937-1.937.867-1.937 1.937-1.937zm8.48 0c1.07 0 1.937.867 1.937 1.937s-.867 1.937-1.937 1.937-1.937-.867-1.937-1.937.867-1.937 1.937-1.937zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-5.5c-2.033 0-3.71 1.677-3.71 3.71h1.5c0-1.206.994-2.21 2.21-2.21s2.21 1.004 2.21 2.21h1.5c0-2.033-1.677-3.71-3.71-3.71z"/>
                  </svg>
                </div>
                <span className="text-sm sm:text-base font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Canva</span>
              </span>
            </div>
          </section>

          {/* IDEs */}
          <section className="transform hover:scale-[1.01] transition-all duration-300">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-8 group">
              <div className="relative">
                <div className={`absolute -inset-2 bg-gradient-to-r ${styles.glow} rounded-full blur-sm group-hover:blur-md transition-all duration-500`}></div>
                <img src="https://github.com/7oSkaaa/7oSkaaa/blob/main/Images/IDEs.gif?raw=true" 
                     className="w-10 h-10 sm:w-12 sm:h-12 object-contain relative drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" alt="Tools icon" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                IDEs
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
              {/* Visual Studio Code */}
              <span 
                className={`group px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-br from-[#007ACC]/90  via-[#007ACC]/40 to-black/60 text-white rounded-lg sm:rounded-xl font-medium flex items-center gap-2 sm:gap-3 hover:scale-105 hover:shadow transition-all duration-300`}
                onMouseOver={(e) => e.currentTarget.style.boxShadow = `0 0 25px ${styles.shadow}`}
                onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                <div className="p-1 sm:p-1.5 rounded-lg bg-white/15 backdrop-blur-sm">
                  <img src="/vscode.png" 
                       className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform duration-300" alt="VS Code" />
                </div>
                <span className="text-sm sm:text-base font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Visual Studio Code</span>
              </span>
            </div>
          </section>

          {/* Operating Systems */}
          <section className="transform hover:scale-[1.01] transition-all duration-300">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-8 group">
              <div className="relative">
                <div className={`absolute -inset-2 bg-gradient-to-r ${styles.glow} rounded-full blur-sm group-hover:blur-md transition-all duration-500`}></div>
                <img src="https://github.com/7oSkaaa/7oSkaaa/blob/main/Images/OS.gif?raw=true" 
                     className="w-10 h-10 sm:w-12 sm:h-12 object-contain relative drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" alt="Operating Systems icon" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                Operating Systems
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
              {/* Windows */}
              <span 
                className={`group px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-br from-[#0078D6]/90 via-[#0078D6]/80 to-black/40 text-white rounded-lg sm:rounded-xl font-medium flex items-center gap-2 sm:gap-3 hover:scale-105 hover:shadow transition-all duration-300`}
                onMouseOver={(e) => e.currentTarget.style.boxShadow = `0 0 25px ${styles.shadow}`}
                onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                <div className="p-1 sm:p-1.5 rounded-lg bg-white/15 backdrop-blur-sm">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                  </svg>
                </div>
                <span className="text-sm sm:text-base font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Windows</span>
              </span>

              {/* Ubuntu */}
              <span 
                className={`group px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-br from-[#E95420]/90 via-[#E95420]/80 to-black/40 text-white rounded-lg sm:rounded-xl font-medium flex items-center gap-2 sm:gap-3 hover:scale-105 hover:shadow transition-all duration-300`}
                onMouseOver={(e) => e.currentTarget.style.boxShadow = `0 0 25px ${styles.shadow}`}
                onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                <div className="p-1 sm:p-1.5 rounded-lg bg-white/15 backdrop-blur-sm">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3a7 7 0 100 14 7 7 0 000-14z"/>
                  </svg>
                </div>
                <span className="text-sm sm:text-base font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Ubuntu</span>
              </span>

              {/* macOS */}
              <span 
                className={`group px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-br from-black/90 via-black/80 to-black/40 text-white rounded-lg sm:rounded-xl font-medium flex items-center gap-2 sm:gap-3 hover:scale-105 hover:shadow transition-all duration-300`}
                onMouseOver={(e) => e.currentTarget.style.boxShadow = `0 0 25px ${styles.shadow}`}
                onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                <div className="p-1 sm:p-1.5 rounded-lg bg-white/15 backdrop-blur-sm">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3a7 7 0 100 14 7 7 0 000-14z"/>
                  </svg>
                </div>
                <span className="text-sm sm:text-base font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">macOS</span>
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
