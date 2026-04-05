export const PROJECT_IDS = [
  'cortex-id',
  'devpulse',
  'shadowsoc',
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
