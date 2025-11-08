import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Skills() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [hoveredSkill, setHoveredSkill] = useState(null);
  
  const accentColor = theme === 'javascript' ? '#F7DF1E' : '#83CD29'; // Color principal del tema

  const getThemeStyles = () => ({
    gradient: theme === 'javascript' 
      ? 'from-[#F7DF1E]/15 via-transparent to-[#FDB813]/15'
      : 'from-[#83CD29]/15 via-transparent to-[#339933]/15',
    glow: theme === 'javascript'
      ? 'from-[#F7DF1E]/30 to-[#FDB813]/30'
      : 'from-[#83CD29]/30 to-[#339933]/30',
    blur: theme === 'javascript'
      ? {
          primary: 'bg-[#F7DF1E]/20',
          secondary: 'bg-[#FDB813]/20'
        }
      : {
          primary: 'bg-[#83CD29]/20',
          secondary: 'bg-[#339933]/20'
        },
    shadow: theme === 'javascript'
      ? 'rgba(247,223,30,0.3)'
      : 'rgba(131,205,41,0.3)',
    accentColor: theme === 'javascript' ? '#F7DF1E' : '#83CD29',
  });

  const styles = getThemeStyles();

  // Datos de habilidades con descripción detallada
  const skillsData = [
    {
      category: "Programming Languages",
      icon: "https://github.com/7oSkaaa/7oSkaaa/blob/main/Images/Programming_Languages.gif?raw=true",
      skills: [
        { 
          name: "JavaScript", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          color: "from-[#F7DF1E]/90 via-[#F7DF1E]/80 to-black/40",
          textColor: "text-black",
          description: "3+ años de experiencia. Desarrollo de aplicaciones web modernas, ES6+, async/await, manipulación del DOM."
        }
      ]
    },
    {
      category: "Frontend Development",
      icon: "https://github.com/7oSkaaa/7oSkaaa/blob/main/Images/Front_End.gif?raw=true",
      skills: [
        { 
          name: "React", 
          icon: "/react.png",
          color: "from-gray-500/90 to-black/40",
          textColor: "text-white",
          description: "Hooks, Context API, componentes funcionales, React Router, optimización de rendimiento."
        },
        { 
          name: "HTML5", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          color: "from-[#E34F26]/90 via-[#E34F26]/80 to-black/40",
          textColor: "text-white",
          description: "Semántica moderna, accesibilidad (a11y), SEO, estructura web profesional."
        },
        { 
          name: "CSS3", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          color: "from-[#1572B6]/90 via-[#1572B6]/80 to-black/40",
          textColor: "text-white",
          description: "Flexbox, Grid, animaciones, responsive design, metodologías BEM y arquitectura escalable."
        },
        { 
          name: "TailwindCSS", 
          icon: "/tailwind.png",
          color: "from-[#38BDF8]/90 via-[#38BDF8]/80 to-black/40",
          textColor: "text-white",
          description: "Utility-first CSS, diseño de componentes reutilizables, personalización avanzada, responsive design rápido."
        }
      ]
    },
    {
      category: "Backend Development",
      icon: "/letscode.gif",
      skills: [
        { 
          name: "Node.js", 
          icon: "/nodejs.png",
          color: "from-[#83CD29]/90 via-[#83CD29]/80 to-black/40",
          textColor: "text-white",
          description: "APIs RESTful, Express.js, middleware, autenticación JWT, manejo de bases de datos."
        },
        { 
          name: "Python", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          color: "from-[#3776AB]/90 via-[#FFD43B]/60 to-[#3776AB]/70",
          textColor: "text-white",
          description: "Estudiando en MSMK University para expandir habilidades. Scripts, automatización, fundamentos de IA y ML."
        }
      ]
    },
    {
      category: "Software & Tools",
      icon: "https://github.com/7oSkaaa/7oSkaaa/blob/main/Images/Software_Tools.gif?raw=true",
      skills: [
        { 
          name: "Git", 
          icon: "/git.png",
          color: "from-[#F05033]/90 via-[#F05033]/80 to-black/40",
          textColor: "text-white",
          description: "Control de versiones, branching, merge, pull requests, colaboración en equipo, workflows."
        },
        { 
          name: "GitHub", 
          icon: "/github.png",
          color: "from-gray-400/90 via-[#181717]/80 to-black/40",
          textColor: "text-white",
          description: "Repositorios, issues, projects, GitHub Actions, documentación, colaboración open source."
        },
        { 
          name: "Discord", 
          icon: null,
          color: "from-[#738ADB]/90 via-[#738ADB]/80 to-black/40",
          textColor: "text-white",
          svg: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z",
          description: "Comunicación en equipos de desarrollo, bots, comunidades técnicas."
        },
        { 
          name: "Canva", 
          icon: null,
          color: "from-[#00C4CC]/90 via-[#7D2AE8]/60 to-[#00C4CC]/70",
          textColor: "text-white",
          svg: "M7.494 7.618c1.07 0 1.937.867 1.937 1.937s-.867 1.937-1.937 1.937-1.937-.867-1.937-1.937.867-1.937 1.937-1.937zm8.48 0c1.07 0 1.937.867 1.937 1.937s-.867 1.937-1.937 1.937-1.937-.867-1.937-1.937.867-1.937 1.937-1.937zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-5.5c-2.033 0-3.71 1.677-3.71 3.71h1.5c0-1.206.994-2.21 2.21-2.21s2.21 1.004 2.21 2.21h1.5c0-2.033-1.677-3.71-3.71-3.71z",
          description: "Diseño gráfico profesional: videos, reels, contenido para redes sociales, branding visual."
        }
      ]
    },
    {
      category: "IDEs & AI-Powered Editors",
      icon: "https://github.com/7oSkaaa/7oSkaaa/blob/main/Images/IDEs.gif?raw=true",
      skills: [
        { 
          name: "VS Code", 
          icon: "/vscode.png",
          color: "from-[#007ACC]/90 via-[#007ACC]/40 to-black/60",
          textColor: "text-white",
          description: "Editor principal. Extensions, debugging, Git integration, snippets personalizados."
        },
        { 
          name: "Windsurf", 
          icon: "/windsurfai.webp",
          color: "from-[#00D4FF]/90 via-[#0099CC]/80 to-black/40",
          textColor: "text-white",
          description: "Editor potenciado con IA para desarrollo colaborativo y asistencia inteligente."
        },
        { 
          name: "Cursor AI", 
          icon: "/cursorImagen.png",
          color: "from-[#000000]/90 via-[#333333]/80 to-[#666666]/40",
          textColor: "text-white",
          description: "IDE con IA integrada. Autocompletado inteligente, refactoring asistido."
        },
        { 
          name: "PyCharm", 
          icon: "/pycharm.png",
          color: "from-[#21D789]/90 via-[#21D789]/80 to-black/40",
          textColor: "text-white",
          description: "IDE especializado en Python de JetBrains. Debugging avanzado, testing, virtualenvs."
        }
      ]
    },
    {
      category: "Next-Gen AI IDE",
      icon: "https://github.com/7oSkaaa/7oSkaaa/blob/main/Images/CP_PS.gif?raw=true",
      skills: [
        { 
          name: "TRAE AI", 
          icon: "/traeai_logo.jpeg",
          color: "from-[#FF6B6B]/90 via-[#FF8E8E]/80 to-[#FF4757]/70",
          textColor: "text-white",
          description: "Nuevo IDE de ByteDance (TikTok). Construido desde cero para IA. Agentes integrados con Claude 3.5, GPT-4o, Llama-3. Colaboración directa con IA en tiempo real.",
          isNew: true
        }
      ]
    },
    {
      category: "Operating Systems",
      icon: "https://github.com/7oSkaaa/7oSkaaa/blob/main/Images/OS.gif?raw=true",
      skills: [
        { 
          name: "Windows", 
          icon: null,
          color: "from-[#0078D6]/90 via-[#0078D6]/80 to-black/40",
          textColor: "text-white",
          svg: "M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801",
          description: "Sistema operativo principal para desarrollo. WSL2 para entornos Linux."
        },
        { 
          name: "Ubuntu", 
          icon: null,
          color: "from-[#E95420]/90 via-[#E95420]/80 to-black/40",
          textColor: "text-white",
          svg: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3a7 7 0 100 14 7 7 0 000-14z",
          description: "Distro Linux para desarrollo. Terminal avanzada, scripting, deployment."
        },
        { 
          name: "macOS", 
          icon: null,
          color: "from-[#555555]/90 via-[#333333]/80 to-black/40",
          textColor: "text-white",
          svg: "M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z",
          description: "Experiencia con entorno Unix. Terminal, Homebrew, desarrollo iOS/Mac."
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 overflow-visible">
      {/* Corner brackets */}
      <div className="absolute -top-6 -left-6 font-code text-3xl opacity-40" style={{ color: accentColor }}>⌜</div>
      <div className="absolute -top-6 -right-6 font-code text-3xl opacity-40" style={{ color: accentColor }}>⌝</div>
      <div className="absolute -bottom-6 -left-6 font-code text-3xl opacity-40" style={{ color: accentColor }}>⌞</div>
      <div className="absolute -bottom-6 -right-6 font-code text-3xl opacity-40" style={{ color: accentColor }}>⌟</div>

      {/* Contenedor principal tech */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative backdrop-blur-2xl bg-tech-dark/80 border-2 rounded-2xl p-6 sm:p-10 pb-20 shadow-2xl group/container"
        style={{ 
          borderColor: `${accentColor}30`,
          boxShadow: `0 0 20px ${accentColor}20, 0 20px 60px rgba(0,0,0,0.5)`
        }}
      >
        {/* Code pattern background - CÓDIGO DE FONDO */}
        <div className="absolute inset-0 opacity-5 font-code text-xs leading-relaxed p-4 overflow-hidden select-none pointer-events-none whitespace-pre"
          style={{ color: accentColor }}
        >
{`const skills = [
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'React', level: 'Advanced' },
  { name: 'Node.js', level: 'Intermediate' },
];

function renderSkills() {
  return skills.map(skill => (
    <Skill key={skill.name} {...skill} />
  ));
}

export default TechStack;`}
        </div>
        
        {/* Scanlines sutiles */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.3) 0px, rgba(0,0,0,0.3) 1px, transparent 1px, transparent 3px)',
          }}
        />
        
        {/* Glow effect */}
        <div className="absolute inset-0 opacity-15 blur-xl" style={{ 
          background: `radial-gradient(circle at 50% 0%, ${accentColor}60, transparent 70%)`
        }} />
        
        {/* Status indicator */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
          <span className="font-code text-xs opacity-60" style={{ color: accentColor }}>LOADED</span>
        </div>
        
        {/* Título tech */}
        <motion.div 
          className="relative mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="font-code text-2xl" style={{ color: accentColor }}>&gt;_</span>
            <h1 className="text-4xl sm:text-5xl font-bold font-code tracking-tight"
              style={{
                color: 'white',
                textShadow: `
                  0 0 15px ${accentColor},
                  0 0 30px ${accentColor}80,
                  0 0 45px ${accentColor}40
                `,
              }}
            >
              {t('skills.title')}
            </h1>
            <span className="inline-block w-3 h-7 animate-blink" style={{ backgroundColor: accentColor }} />
          </div>
          <p className="text-white/60 text-sm sm:text-base font-code">
            {t('skills.hover')}
          </p>
          <div className="h-px w-32 mx-auto mt-4" style={{ backgroundColor: accentColor, boxShadow: `0 0 10px ${accentColor}` }} />
        </motion.div>

        {/* Grid de secciones de habilidades */}
        <motion.div 
          className="relative space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillsData.map((category, catIndex) => (
            <motion.section 
              key={catIndex}
              variants={itemVariants}
              className="transform hover:scale-[1.01] transition-all duration-300"
            >
              {/* Encabezado de categoría tech */}
              <div className="flex flex-wrap items-center gap-4 mb-6 group">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full animate-neon-pulse" 
                    style={{ boxShadow: `0 0 20px ${accentColor}` }}
                  />
                  <img 
                    src={category.icon} 
                    className="w-12 h-12 object-contain relative" 
                    style={{ filter: `drop-shadow(0 0 10px ${accentColor})` }}
                    alt={`${category.category} icon`} 
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold font-code"
                    style={{
                      color: accentColor,
                      textShadow: `0 0 20px ${accentColor}80`,
                    }}
                  >
                    {category.category}
                  </h2>
                  <div className="h-px w-full mt-1" style={{ backgroundColor: `${accentColor}50` }} />
                </div>
              </div>

              {/* Grid de skills en estilo honeycomb/hexagonal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-visible">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="group/skill relative"
                    onHoverStart={() => setHoveredSkill(`${catIndex}-${skillIndex}`)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div 
                      className={`relative px-5 py-3 bg-gradient-to-br ${skill.color} rounded-lg font-medium flex items-center gap-3 transition-all duration-300 cursor-pointer overflow-hidden border-2`}
                      style={{
                        borderColor: hoveredSkill === `${catIndex}-${skillIndex}` ? accentColor : 'transparent',
                        boxShadow: hoveredSkill === `${catIndex}-${skillIndex}` 
                          ? `0 0 20px ${accentColor}, 0 0 30px ${accentColor}80, inset 0 0 20px ${accentColor}20` 
                          : `inset 0 0 10px rgba(0,0,0,0.5)`
                      }}
                    >
                      {/* Icono tech */}
                      <div className="p-1.5 rounded-lg bg-white/15 backdrop-blur-sm flex-shrink-0 group-hover/skill:scale-110 transition-transform duration-300 border"
                        style={{ borderColor: hoveredSkill === `${catIndex}-${skillIndex}` ? `${accentColor}60` : 'transparent' }}
                      >
                        {skill.icon && (
                          <img 
                            src={skill.icon} 
                            className="w-7 h-7" 
                            alt={skill.name} 
                          />
                        )}
                        {skill.svg && (
                          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                            <path d={skill.svg} />
                          </svg>
                        )}
                      </div>
                      
                      {/* Nombre */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className={`text-base font-semibold ${skill.textColor} drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] truncate`}>
                            {skill.name}
                          </span>
                          {skill.isNew && (
                            <span className="px-2 py-0.5 text-xs font-bold bg-white/20 text-white rounded-full flex-shrink-0">
                              NEW
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Efecto de brillo en hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/skill:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                    </div>

                    {/* Tooltip compacto - Posicionado inteligentemente */}
                    {hoveredSkill === `${catIndex}-${skillIndex}` && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute z-[200] left-1/2 -translate-x-1/2 p-3 bg-black/95 backdrop-blur-xl border rounded-lg shadow-xl w-64"
                        style={{ 
                          borderColor: `${accentColor}60`,
                          boxShadow: `0 0 20px ${accentColor}40`,
                          // TRAE AI (catIndex 4) y Operating Systems (catIndex 5) siempre ARRIBA
                          [catIndex >= 4 || skillIndex >= 4 ? 'bottom' : 'top']: 'calc(100% + 8px)',
                          pointerEvents: 'none',
                        }}
                      >
                        {/* Header mini */}
                        <div className="flex items-center gap-2 mb-2 pb-2 border-b" style={{ borderColor: `${accentColor}30` }}>
                          <span className="font-code text-xs" style={{ color: accentColor }}>&gt;</span>
                          <span className="text-xs font-bold text-white">{skill.name}</span>
                        </div>
                        
                        {/* Descripción */}
                        <p className="text-xs text-white/90 leading-relaxed">
                          {skill.description}
                        </p>
                        
                        {/* Flecha apuntando al skill */}
                        <div 
                          className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border"
                          style={{ 
                            [catIndex >= 4 || skillIndex >= 4 ? 'bottom' : 'top']: '-6px',
                            [catIndex >= 4 || skillIndex >= 4 ? 'borderRight' : 'borderLeft']: `1px solid ${accentColor}60`,
                            [catIndex >= 4 || skillIndex >= 4 ? 'borderTop' : 'borderBottom']: `1px solid ${accentColor}60`,
                            backgroundColor: '#0a0a0f',
                          }}
                        />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Nota especial para TRAE AI */}
              {category.category === "Next-Gen AI IDE" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="mt-4 p-4 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md"
                >
                  <p className="text-sm text-white/70 leading-relaxed">
                    {t('skills.traeAI.part1')}{' '}
                    <span className="text-white font-semibold">TRAE AI</span>,{' '}
                    {t('skills.traeAI.part2')}{' '}
                    <span className="text-white font-medium">ByteDance</span>{' '}
                    {t('skills.traeAI.part3')}{' '}
                    {t('skills.traeAI.part4')}{' '}
                    <span className="text-white font-medium">{t('skills.traeAI.part5')}</span>.{' '}
                    {t('skills.traeAI.part6')}{' '}
                    <span className="text-white font-medium">{t('skills.traeAI.part7')}</span>{' '}
                    {t('skills.traeAI.part8')}
                  </p>
                </motion.div>
              )}
            </motion.section>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
