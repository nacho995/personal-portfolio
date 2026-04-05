import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const LanguageContext = createContext({
  language: 'es',
  toggleLanguage: () => {},
  t: (key) => key,
});

// Traducciones
const translations = {
  es: {
    // Header
    'header.portfolio': 'Portfolio de Ignacio Dalesio',
    'header.projects': 'Proyectos',
    'header.contact': 'Contacto',
    
    // Name section
    'name.title': 'Full Stack Developer',
    'name.downloadCV': 'Descargar CV',
    
    // About Me
    'about.title': 'Sobre Mí',
    'about.education': 'Formación Académica',
    'about.education1': 'Grado Medio en Sistemas Microinformáticos y Redes',
    'about.education1desc': 'Donde aprendí que reiniciar el router soluciona el 80% de los problemas (y a montar redes que funcionan el otro 20%)',
    'about.education2': 'Máster en Full-Stack Development - Nuclio Digital School',
    'about.education2desc': 'Aquí descubrí que "full-stack" significa que tienes que saber de todo... literalmente todo. Frontend, backend, bases de datos y café en grandes cantidades',
    'about.education3': 'HND y Bachelor en Ingeniería de Software e IA - MSMK University',
    'about.education3desc': 'Actualmente aprendiendo Python y cómo hacer que las máquinas piensen (o al menos que lo intenten). Spoiler: la IA no es tan inteligente como parece, pero sí muy útil',
    'about.experience': 'Experiencia Profesional',
    'about.experienceDesc': 'Me especializo en desarrollo web full-stack, creando soluciones digitales que combinan funcionalidad robusta con experiencias de usuario intuitivas. Mi enfoque se centra en tecnologías modernas como JavaScript, React, Node.js y ecosistemas web actuales, manteniendo siempre una actitud proactiva hacia el aprendizaje continuo y la adopción de nuevas tendencias tecnológicas.',
    'about.workApproach': 'Mi Enfoque de Trabajo',
    'about.workApproachDesc': 'Me gusta pensar que soy de los que no se quedan esperando a que les enseñen todo. Si hay algo que no sé, lo busco, lo aprendo y lo aplico (a veces incluso funciona a la primera 😄). Disfruto resolviendo problemas como si fueran puzzles, y me tomo en serio eso de escribir código que otros puedan entender sin necesitar un traductor. Trabajo bien en equipo porque, seamos honestos, nadie sabe todo y siempre hay algo nuevo que aprender de los demás.',
    'about.projects': 'Cosas que He Construido',
    'about.projectsDesc': 'Cuando no estoy estudiando o trabajando, me gusta crear cosas. A veces por necesidad, a veces porque "¿y si pruebo esto?". Aquí algunas de las que no han explotado:',
    'about.project1': 'CodLet: Mi intento de hacer una marca de desarrollo web (spoiler: va bien)',
    'about.project2': 'Este portfolio: Con chatbot IA incluido porque... ¿por qué no?',
    'about.project3': 'Plataformas reales: Inmobiliarias, sitios corporativos y más experimentos que funcionaron',
    'about.projectsNote': '* Sí, aprendo haciendo. Es más divertido que leer documentación... aunque al final siempre vuelvo a ella 📚',
    'about.connect': '¡Conectemos!',
    'about.cvButton': 'Descargar CV',
    'about.linkedin': 'LinkedIn',
    'about.linkedinDesc': 'Perfil profesional',
    'about.github': 'GitHub',
    'about.githubDesc': 'Proyectos y código',
    'about.email': 'Email',
    'about.emailDesc': 'Contacto directo',
    
    // Skills
    'skills.title': 'Technical Skills',
    'skills.hover': 'Haz hover sobre cada skill para ver más detalles',
    'skills.traeAI.part1': 'Estoy explorando',
    'skills.traeAI.part2': 'el nuevo IDE que acaba de lanzar',
    'skills.traeAI.part3': '(sí, los de TikTok).',
    'skills.traeAI.part4': 'Lo interesante es que no es otro fork de VS Code, sino que lo construyeron',
    'skills.traeAI.part5': 'desde cero pensando en IA',
    'skills.traeAI.part6': 'Viene con',
    'skills.traeAI.part7': 'agentes de IA integrados',
    'skills.traeAI.part8': 'que trabajan contigo mientras programas.',
    
    // Projects
    'projects.title': 'Mis Proyectos',
    'projects.techStack': 'Stack Tecnológico',
    'projects.viewDemo': 'Ver Demo',
    'projects.viewCode': 'Ver Código',
    'projects.visitSite': 'Visitar Sitio',
    'projects.rate': 'Valorar',
    'projects.rated': '✓ Valorado',
    'projects.noRatings': 'Sin valoraciones',
    'projects.rating': 'valoración',
    'projects.ratings': 'valoraciones',
    
    // Tenfe Project
    'cortexid.title': 'Cortex-ID — IDE con IA Open Source',
    'cortexid.description': 'IDE de escritorio open-source que compite con Cursor. Angular 17+ + Java 21 Spring Boot + Electron. Monaco Editor, terminal xterm.js, IA multi-agente con debate entre agentes, WebSocket en tiempo real, proxy LSP, Tree-sitter AST, JGit para control de versiones, pgvector RAG. Privacidad total con BYOK.',
    'devpulse.title': 'DevPulse — Observatorio Tech en Tiempo Real',
    'devpulse.description': 'Monitoriza 50+ tecnologías en GitHub clasificadas por repositorios, estrellas y forks. Java 21 + Spring Boot + Angular 21. Arquitectura hexagonal, Spring Security con JWT, PostgreSQL 17, sincronización automática cada 24h con la API de GitHub, Swagger UI. Desplegado en Render con Docker.',
    'shadowsoc.title': 'ShadowSOC — Centro de Operaciones de Seguridad',
    'shadowsoc.description': 'Dashboard SOC con microservicios y visualización de ataques en tiempo real. C# .NET, Angular, RabbitMQ para colas de mensajes, Kafka para streaming de eventos, SignalR para actualizaciones en vivo, y Leaflet para mapa de geolocalización de ataques. Arquitectura event-driven.',
    'tenfe.title': 'Tenfe - Sistema de Reservas de Trenes',
    'tenfe.description': 'Mi primer proyecto en equipo. Aplicación web completa para reservar billetes de tren, desarrollada en colaboración con un equipo de 5 personas. Construida con React, Node.js y MongoDB. Incluye sistema de búsqueda de rutas, gestión de reservas, panel de usuario y administración de viajes.',
    'tenfe.badge': '👥 Proyecto en Equipo (5 personas)',
    'tenfe.badgeFirst': '🎯 Mi Primer Proyecto',
    
    // Mundo-Tinta Project
    'mundotinta.title': 'Mundo-Tinta - Librería Digital',
    'mundotinta.description': 'E-commerce especializado en libros de ciencia ficción y fantasía desarrollado con React, Node.js y Next.js. Proyecto autodidacta que explora el mundo literario con un diseño inmersivo y experiencia de usuario única. Incluye catálogo de libros, sistema de búsqueda, gestión de pedidos y recomendaciones personalizadas.',
    'mundotinta.badge': '📚 Proyecto Autodidacta',
    
    // CodLet Project
    'codlet.title': 'CodLet - Diseño Web',
    'codlet.description': 'Plataforma profesional de servicios de desarrollo web, con diseño moderno y enfoque en la experiencia de usuario. Incluye sistema de solicitud de proyectos, portafolio interactivo y panel de administración.',
    
    // Goza Madrid Project
    'gozamadrid.title': 'Real Estate Goza Madrid',
    'gozamadrid.description': 'Plataforma inmobiliaria especializada en Madrid, con sistema de búsqueda avanzada de propiedades, gestión de citas y panel administrativo para gestión de propiedades.',
    
    // Hacienda San Carlos Project
    'hacienda.title': 'Hacienda San Carlos Borromeo',
    'hacienda.description': 'Sitio web para Hacienda San Carlos Borromeo, una hacienda histórica para bodas y eventos en México. Incluye secciones para eventos, galería, hotel, servicios y contacto. Diseño elegante y responsivo.',
    
    // Biologic Analysis Project
    'biologic.title': 'Biological Analysis Platform',
    'biologic.description': 'Plataforma avanzada de procesamiento de imágenes biológicas con visualización 3D volumétrica. Desarrollada con React y Node.js, permite cargar imágenes TIFF, aplicar filtros, análisis de composición y vistas interactivas (Dashboard, Slider, Grid View, 3D Volumetric). Proyecto autodidacta enfocado en análisis científico de células.',
    'biologic.badge': '🔬 Análisis Científico',
    
    // Portfolio Gilberto Project
    'portfoliogilberto.title': 'Portfolio Gilberto - Diseño Web',
    'portfoliogilberto.description': 'Portfolio profesional desarrollado para mostrar proyectos y servicios de diseño web. Incluye secciones de proyectos, habilidades, experiencia y contacto. Diseño moderno y responsivo con animaciones fluidas.',
    'portfoliogilberto.badge': '🎨 Diseño Profesional',
    
    // Signs/Phrases
    'signs.phrase1': 'TRANSFORMANDO IDEAS EN SOLUCIONES ELEGANTES',
    'signs.phrase2': 'DESARROLLO ESCALABLE Y CÓDIGO LIMPIO',
    'signs.phrase3': 'OPTIMIZACIÓN, RENDIMIENTO, EXPERIENCIA DE USUARIO',
    'signs.phrase4': 'APRENDIZAJE CONTINUO Y ADAPTABILIDAD',
    'signs.phrase5': 'COMPROMISO CON LA CALIDAD Y RESULTADOS',
    
    // Chatbot
    'chatbot.sincere': 'Hola... 😏 Soy el asistente "sincero" de Nacho. Pregunta lo que quieras, te diré la verdad (con un toque de sarcasmo incluido).',
    'chatbot.professional': '¡Hola! ⚡ Soy el asistente PROFESIONAL de Nacho. ¿En qué puedo ayudarte a conocer más sobre su experiencia y habilidades?',
    'chatbot.placeholder': 'Escribe tu pregunta...',
    'chatbot.askAbout': 'Pregúntame sobre experiencia, formación, proyectos...',
  },
  en: {
    // Header
    'header.portfolio': 'Ignacio Dalesio Portfolio',
    'header.projects': 'Projects',
    'header.contact': 'Contact',
    
    // Name section
    'name.title': 'Full Stack Developer',
    'name.downloadCV': 'Download Resume',
    
    // About Me
    'about.title': 'About Me',
    'about.education': 'Academic Background',
    'about.education1': 'Associate Degree in Microcomputer Systems and Networks',
    'about.education1desc': 'Where I learned that restarting the router solves 80% of problems (and how to set up networks that work the other 20%)',
    'about.education2': 'Master in Full-Stack Development - Nuclio Digital School',
    'about.education2desc': 'Here I discovered that "full-stack" means you need to know everything... literally everything. Frontend, backend, databases, and coffee in large quantities',
    'about.education3': 'HND & Bachelor in Software Engineering and AI - MSMK University',
    'about.education3desc': 'Currently learning Python and how to make machines think (or at least try to). Spoiler: AI isn\'t as intelligent as it seems, but it\'s very useful',
    'about.experience': 'Professional Experience',
    'about.experienceDesc': 'I specialize in full-stack web development, creating digital solutions that combine robust functionality with intuitive user experiences. My focus is on modern technologies like JavaScript, React, Node.js, and current web ecosystems, always maintaining a proactive attitude towards continuous learning and adopting new technological trends.',
    'about.workApproach': 'My Work Approach',
    'about.workApproachDesc': 'I like to think I\'m one of those who don\'t wait around to be taught everything. If there\'s something I don\'t know, I look it up, learn it, and apply it (sometimes it even works on the first try 😄). I enjoy solving problems like puzzles, and I take seriously the idea of writing code that others can understand without needing a translator. I work well in teams because, let\'s be honest, nobody knows everything and there\'s always something new to learn from others.',
    'about.projects': 'Things I\'ve Built',
    'about.projectsDesc': 'When I\'m not studying or working, I like to create things. Sometimes out of necessity, sometimes because "what if I try this?". Here are some that haven\'t exploded:',
    'about.project1': 'CodLet: My attempt at making a web development brand (spoiler: it\'s going well)',
    'about.project2': 'This portfolio: With AI chatbot included because... why not?',
    'about.project3': 'Real platforms: Real estate, corporate sites, and more experiments that worked',
    'about.projectsNote': '* Yes, I learn by doing. It\'s more fun than reading documentation... although I always end up going back to it 📚',
    'about.connect': 'Let\'s Connect!',
    'about.cvButton': 'Download Resume',
    'about.linkedin': 'LinkedIn',
    'about.linkedinDesc': 'Professional profile',
    'about.github': 'GitHub',
    'about.githubDesc': 'Projects and code',
    'about.email': 'Email',
    'about.emailDesc': 'Direct contact',
    
    // Skills
    'skills.title': 'Technical Skills',
    'skills.hover': 'Hover over each skill to see more details',
    'skills.traeAI.part1': 'I\'m exploring',
    'skills.traeAI.part2': 'the new IDE just launched by',
    'skills.traeAI.part3': '(yes, the TikTok people).',
    'skills.traeAI.part4': 'What\'s interesting is that it\'s not another VS Code fork, but they built it',
    'skills.traeAI.part5': 'from scratch with AI in mind',
    'skills.traeAI.part6': 'It comes with',
    'skills.traeAI.part7': 'integrated AI agents',
    'skills.traeAI.part8': 'that work with you while you code.',
    
    // Projects
    'projects.title': 'My Projects',
    'projects.techStack': 'Tech Stack',
    'projects.viewDemo': 'View Demo',
    'projects.viewCode': 'View Code',
    'projects.visitSite': 'Visit Site',
    'projects.rate': 'Rate',
    'projects.rated': '✓ Rated',
    'projects.noRatings': 'No ratings',
    'projects.rating': 'rating',
    'projects.ratings': 'ratings',
    
    // Tenfe Project
    'cortexid.title': 'Cortex-ID — Open Source AI-Powered IDE',
    'cortexid.description': 'Open-source desktop IDE competing with Cursor. Angular 17+ + Java 21 Spring Boot + Electron. Monaco Editor, xterm.js terminal, multi-agent AI with agent debates, real-time WebSocket, LSP proxy, Tree-sitter AST, JGit version control, pgvector RAG. Full privacy with BYOK.',
    'devpulse.title': 'DevPulse — Real-Time Tech Observatory',
    'devpulse.description': 'Tracks 50+ technologies across GitHub ranked by repositories, stars, and forks. Java 21 + Spring Boot + Angular 21. Hexagonal architecture, Spring Security with JWT, PostgreSQL 17, automated 24h GitHub API sync, Swagger UI. Deployed on Render with Docker.',
    'shadowsoc.title': 'ShadowSOC — Security Operations Center',
    'shadowsoc.description': 'Microservices SOC dashboard with real-time attack visualization. C# .NET, Angular, RabbitMQ for message queuing, Kafka for event streaming, SignalR for live updates, and Leaflet for attack geolocation map. Event-driven architecture.',
    'tenfe.title': 'Tenfe - Train Booking System',
    'tenfe.description': 'My first team project. Complete web application for booking train tickets, developed in collaboration with a team of 5 people. Built with React, Node.js, and MongoDB. Includes route search system, booking management, user panel, and trip administration.',
    'tenfe.badge': '👥 Team Project (5 people)',
    'tenfe.badgeFirst': '🎯 My First Project',
    
    // Mundo-Tinta Project
    'mundotinta.title': 'Mundo-Tinta - Digital Bookstore',
    'mundotinta.description': 'E-commerce specialized in science fiction and fantasy books developed with React, Node.js, and Next.js. Self-taught project exploring the literary world with immersive design and unique user experience. Includes book catalog, search system, order management, and personalized recommendations.',
    'mundotinta.badge': '📚 Self-Taught Project',
    
    // CodLet Project
    'codlet.title': 'CodLet - Web Design',
    'codlet.description': 'Professional web development services platform with modern design and user experience focus. Includes project request system, interactive portfolio, and admin panel.',
    
    // Goza Madrid Project
    'gozamadrid.title': 'Real Estate Goza Madrid',
    'gozamadrid.description': 'Real estate platform specialized in Madrid, with advanced property search system, appointment management, and administrative panel for property management.',
    
    // Hacienda San Carlos Project
    'hacienda.title': 'Hacienda San Carlos Borromeo',
    'hacienda.description': 'Website for Hacienda San Carlos Borromeo, a historic hacienda for weddings and events in Mexico. Includes sections for events, gallery, hotel, services, and contact. Elegant and responsive design.',
    
    // Biologic Analysis Project
    'biologic.title': 'Biological Analysis Platform',
    'biologic.description': 'Advanced biological image processing platform with 3D volumetric visualization. Built with React and Node.js, allows uploading TIFF images, applying filters, composition analysis, and interactive views (Dashboard, Slider, Grid View, 3D Volumetric). Self-taught project focused on scientific cell analysis.',
    'biologic.badge': '🔬 Scientific Analysis',
    
    // Portfolio Gilberto Project
    'portfoliogilberto.title': 'Portfolio Gilberto - Web Design',
    'portfoliogilberto.description': 'Professional portfolio developed to showcase web design projects and services. Includes sections for projects, skills, experience, and contact. Modern and responsive design with smooth animations.',
    'portfoliogilberto.badge': '🎨 Professional Design',
    
    // Signs/Phrases
    'signs.phrase1': 'TRANSFORMING IDEAS INTO ELEGANT SOLUTIONS',
    'signs.phrase2': 'SCALABLE DEVELOPMENT AND CLEAN CODE',
    'signs.phrase3': 'OPTIMIZATION, PERFORMANCE, USER EXPERIENCE',
    'signs.phrase4': 'CONTINUOUS LEARNING AND ADAPTABILITY',
    'signs.phrase5': 'COMMITMENT TO QUALITY AND RESULTS',
    
    // Chatbot
    'chatbot.sincere': 'Hello... 😏 I\'m Nacho\'s "honest" assistant. Ask me anything, I\'ll tell you the truth (with a touch of sarcasm included).',
    'chatbot.professional': 'Hello! ⚡ I\'m Nacho\'s PROFESSIONAL assistant. How can I help you learn more about his experience and skills?',
    'chatbot.placeholder': 'Type your question...',
    'chatbot.askAbout': 'Ask me about experience, education, projects...',
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem('language');
    return savedLang || 'es';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    const newLang = language === 'es' ? 'en' : 'es';
    setLanguage(newLang);
    console.log('Idioma cambiado a:', newLang);
  };

  const t = (key) => {
    const translation = translations[language]?.[key];
    if (!translation) {
      console.warn(`Traducción no encontrada para: ${key} en idioma: ${language}`);
      return key;
    }
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

