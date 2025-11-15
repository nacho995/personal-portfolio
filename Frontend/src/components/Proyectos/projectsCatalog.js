export const PROJECT_IDS = [
  'tenfe',
  'goza-madrid',
  'codlet',
  'hacienda-san-carlos',
  'mundo-tinta',
  'biologic-analysis',
  'portfolio-gilberto'
]

export const buildProjects = (t) => ({
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

