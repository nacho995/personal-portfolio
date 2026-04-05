export const PROJECT_IDS = [
  'cortex-id',
  'devpulse',
  'shadowsoc',
  'lorekeeper',
  'vibelink',
  'jobboard-ai',
  'goza-madrid',
  'hacienda-san-carlos',
  'tenfe',
  'codlet',
  'mundo-tinta',
  'biologic-analysis',
  'portfolio-gilberto'
]

export const buildProjects = (t) => ({
  cortexId: {
    id: 'cortex-id',
    title: t('cortexid.title'),
    description: t('cortexid.description'),
    image: '/cortexid.png',
    url: null,
    siteName: null,
    githubUrl: 'https://github.com/nacho995/cortex-ide',
    techStack: [
      { name: "Java 21", color: "from-[#ED8B00] to-[#B07000]" },
      { name: "Spring Boot", color: "from-[#6DB33F] to-[#4A7A2A]" },
      { name: "Angular 17+", color: "from-[#DD0031] to-[#A10024]" },
      { name: "Electron", color: "from-[#47848F] to-[#2C6E7A]" },
      { name: "WebSocket", color: "from-[#FF6B6B] to-[#CC5555]" },
      { name: "Monaco Editor", color: "from-[#1E1E1E] to-[#333333]" }
    ]
  },
  devpulse: {
    id: 'devpulse',
    title: t('devpulse.title'),
    description: t('devpulse.description'),
    image: '/devpulse.png',
    url: 'https://devpulse-frontend.onrender.com',
    siteName: 'devpulse.onrender.com',
    githubUrl: 'https://github.com/nacho995/DevPulse',
    techStack: [
      { name: "Java 21", color: "from-[#ED8B00] to-[#B07000]" },
      { name: "Spring Boot", color: "from-[#6DB33F] to-[#4A7A2A]" },
      { name: "Angular 21", color: "from-[#DD0031] to-[#A10024]" },
      { name: "Spring Security", color: "from-[#6DB33F] to-[#3A6B1F]" },
      { name: "JWT", color: "from-[#000000] to-[#333333]" },
      { name: "PostgreSQL", color: "from-[#336791] to-[#1F4060]" }
    ]
  },
  shadowsoc: {
    id: 'shadowsoc',
    title: t('shadowsoc.title'),
    description: t('shadowsoc.description'),
    image: '/shadowsoc.png',
    url: null,
    siteName: null,
    githubUrl: 'https://github.com/nacho995/ShadowSOC',
    techStack: [
      { name: "C# .NET", color: "from-[#512BD4] to-[#3A1D99]" },
      { name: "Angular", color: "from-[#DD0031] to-[#A10024]" },
      { name: "RabbitMQ", color: "from-[#FF6600] to-[#CC5200]" },
      { name: "Kafka", color: "from-[#231F20] to-[#444444]" },
      { name: "SignalR", color: "from-[#512BD4] to-[#7B68EE]" },
      { name: "Leaflet", color: "from-[#199900] to-[#0D6600]" }
    ]
  },
  lorekeeper: {
    id: 'lorekeeper',
    title: t('lorekeeper.title'),
    description: t('lorekeeper.description'),
    image: '/lorekeeper.png',
    url: 'https://lorekeeper-web.fly.dev',
    siteName: 'lorekeeper-web.fly.dev',
    githubUrl: 'https://github.com/nacho995/lorekeeper',
    techStack: [
      { name: ".NET 8", color: "from-[#512BD4] to-[#3A1D99]" },
      { name: "React", color: "from-[#61DAFB] to-[#3A8DB5]" },
      { name: "FastAPI", color: "from-[#009688] to-[#00695C]" },
      { name: "PostgreSQL", color: "from-[#336791] to-[#1F4060]" },
      { name: "YARP Gateway", color: "from-[#512BD4] to-[#7B68EE]" },
      { name: "Groq AI", color: "from-[#FF6B6B] to-[#CC3333]" }
    ]
  },
  vibelink: {
    id: 'vibelink',
    title: t('vibelink.title'),
    description: t('vibelink.description'),
    image: '/biologic.png',
    url: null,
    siteName: null,
    githubUrl: 'https://github.com/nacho995/VibeLink',
    techStack: [
      { name: "React", color: "from-[#61DAFB] to-[#3A8DB5]" },
      { name: "FastAPI", color: "from-[#009688] to-[#00695C]" },
      { name: "PostgreSQL", color: "from-[#336791] to-[#1F4060]" },
      { name: "TMDB API", color: "from-[#01D277] to-[#019A58]" },
      { name: "Stripe", color: "from-[#635BFF] to-[#4A42CC]" },
      { name: "Docker", color: "from-[#2496ED] to-[#1A6DB5]" }
    ]
  },
  jobboardAi: {
    id: 'jobboard-ai',
    title: t('jobboardai.title'),
    description: t('jobboardai.description'),
    image: '/devpulse.png',
    url: null,
    siteName: null,
    githubUrl: 'https://github.com/nacho995/JOBAI',
    techStack: [
      { name: "Java 21", color: "from-[#ED8B00] to-[#B07000]" },
      { name: "Spring Boot", color: "from-[#6DB33F] to-[#4A7A2A]" },
      { name: "Angular 21", color: "from-[#DD0031] to-[#A10024]" },
      { name: "FastAPI", color: "from-[#009688] to-[#00695C]" },
      { name: "Groq AI", color: "from-[#FF6B6B] to-[#CC3333]" },
      { name: "PostgreSQL", color: "from-[#336791] to-[#1F4060]" }
    ]
  },
  tenfe: {
    id: 'tenfe',
    title: t('tenfe.title'),
    description: t('tenfe.description'),
    image: '/tenfe.png',
    url: 'https://tenfe.onrender.com',
    siteName: 'tenfe.onrender.com',
    githubUrl: 'https://github.com/NFSDMAD/1024-frontend',
    githubBackendUrl: 'https://github.com/NFSDMAD/1024-backend'
  },
  mundoTinta: {
    id: 'mundo-tinta',
    title: t('mundotinta.title'),
    description: t('mundotinta.description'),
    image: '/mundo-tinta.png',
    url: 'https://www.mundo-tinta.com',
    siteName: 'mundo-tinta.com',
    githubUrl: 'https://github.com/nacho995/mundotinta'
  },
  codlet: {
    id: 'codlet',
    title: t('codlet.title'),
    description: t('codlet.description'),
    image: '/Codlet.png',
    url: 'https://www.joycodlet.com',
    siteName: 'joycodlet.com',
    githubUrl: 'https://github.com/nacho995/DevLet'
  },
  gozaMadrid: {
    id: 'goza-madrid',
    title: t('gozamadrid.title'),
    description: t('gozamadrid.description'),
    image: '/gozamadridpreview.png',
    url: 'https://realestategozamadrid.com/',
    siteName: 'realestategozamadrid.com',
    githubUrl: 'https://github.com/nacho995/nextjs-gozamadrid'
  },
  haciendaSanCarlos: {
    id: 'hacienda-san-carlos',
    title: t('hacienda.title'),
    description: t('hacienda.description'),
    image: '/hdasancarlos.png',
    url: 'https://www.hdasancarlosborromeo.com/',
    siteName: 'hdasancarlosborromeo.com',
    githubUrl: 'https://github.com/nacho995/hacienda'
  },
  biologicAnalysis: {
    id: 'biologic-analysis',
    title: t('biologic.title'),
    description: t('biologic.description'),
    image: '/biologic.png',
    url: 'https://biologic-project-3ob2cyge7-nacho995s-projects.vercel.app',
    siteName: 'biologic-analysis.vercel.app',
    githubUrl: 'https://github.com/nacho995/biologic-project'
  },
  portfolioGilberto: {
    id: 'portfolio-gilberto',
    title: t('portfoliogilberto.title'),
    description: t('portfoliogilberto.description'),
    image: '/portfolio_gilberto.png',
    url: 'https://portfolio-gilberto-nine.vercel.app',
    siteName: 'portfolio-gilberto.vercel.app',
    githubUrl: 'https://github.com/nacho995/portfolio-gilberto'
  }
})
