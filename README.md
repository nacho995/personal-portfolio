# 🎨 Portfolio Personal - Ignacio Dalesio

Portfolio profesional full-stack con sistema de valoraciones, Docker y CI/CD automatizado.

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Proyectos Destacados](#-proyectos-destacados)
- [Tecnologías](#️-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Docker](#-docker)
- [Testing](#-testing)
- [CI/CD](#-cicd)
- [Despliegue](#-despliegue)

## ✨ Características

- 🎯 **7 Proyectos** con descripciones detalladas y links en vivo
- ⭐ **Sistema de Valoraciones** con MongoDB
- 🌐 **Multilenguaje** (Español/Inglés)
- 🎨 **Temas Dinámicos** (JavaScript/Node.js)
- 🐳 **Dockerizado** con docker-compose
- 🚀 **CI/CD** con GitHub Actions
- ✅ **Testing** con Vitest + React Testing Library
- 📱 **Responsive** con Tailwind CSS
- ✨ **Animaciones** con Framer Motion
- 🎯 **Custom Cursor** interactivo

## 🎯 Proyectos Destacados

### 1. Tenfe - Sistema de Reservas de Trenes
Sistema completo de reservas de billetes de tren (proyecto en equipo).
- **Tech**: React, Node.js, MongoDB
- **URL**: https://tenfe.onrender.com

### 2. Biological Analysis Platform
Plataforma avanzada de procesamiento de imágenes biológicas con visualización 3D.
- **Tech**: React, Node.js, Three.js, TIFF Processing
- **URL**: https://biologic-project-3ob2cyge7-nacho995s-projects.vercel.app

### 3. Portfolio Gilberto
Portfolio profesional con diseño moderno.
- **Tech**: React, Tailwind CSS, Framer Motion
- **URL**: https://portfolio-gilberto-nine.vercel.app

### 4. Mundo-Tinta
E-commerce de libros de ciencia ficción y fantasía.
- **Tech**: React, Node.js, Next.js
- **URL**: https://www.mundo-tinta.com

### 5. CodLet
Plataforma de servicios de desarrollo web.
- **Tech**: React, Node.js
- **URL**: https://www.joycodlet.com

### 6. Real Estate Goza Madrid
Plataforma inmobiliaria especializada en Madrid.
- **Tech**: Next.js, React
- **URL**: https://realestategozamadrid.com

### 7. Hacienda San Carlos Borromeo
Sitio web para hacienda de bodas y eventos.
- **Tech**: React, Node.js
- **URL**: https://www.hdasancarlosborromeo.com

## 🛠️ Tecnologías

### Frontend
- **Framework**: React 19
- **Routing**: React Router v6
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 12.4
- **Icons**: React Icons 5.5
- **Build**: Vite 6.2
- **Testing**: Vitest 2.1 + React Testing Library

### Backend
- **Runtime**: Node.js 20
- **Framework**: Express 4.18
- **Database**: MongoDB (Mongoose 7.0)
- **CORS**: cors 2.8

### DevOps
- **Containerization**: Docker + docker-compose
- **CI/CD**: GitHub Actions
- **Web Server**: nginx (Frontend)
- **Deployment**: Vercel (Frontend) + Render (Backend)

## 📁 Estructura del Proyecto

```
personal-portfolio/
├── Frontend/                   # Aplicación React
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home/          # Componentes del home
│   │   │   ├── Proyectos/     # Tarjetas de proyectos
│   │   │   ├── Chatbot/       # Asistente IA
│   │   │   └── UI/            # Componentes UI
│   │   ├── context/           # Context API (Language, Theme)
│   │   ├── service/           # API calls
│   │   └── styles/            # CSS modules
│   ├── public/                # Assets estáticos
│   ├── Dockerfile             # Container config
│   ├── nginx.conf             # Web server config
│   └── package.json
│
├── Backend/                    # API Express
│   ├── controllers/           # Lógica de negocio
│   ├── models/                # Esquemas MongoDB
│   ├── routes/                # Endpoints
│   ├── Dockerfile             # Container config
│   └── package.json
│
├── .github/
│   └── workflows/
│       └── ci-cd.yml          # Pipeline CI/CD
│
├── docker-compose.yml         # Orquestación de servicios
├── .dockerignore              # Archivos ignorados en build
├── .gitignore                 # Archivos ignorados en Git
└── README.md                  # Este archivo
```

## 🚀 Instalación

### Prerrequisitos
- Node.js 20+
- MongoDB (local o Atlas)
- Docker + docker-compose (opcional)

### Instalación Local

1. **Clonar el repositorio**
```bash
git clone https://github.com/nacho995/personal-portfolio.git
cd personal-portfolio
```

2. **Configurar variables de entorno**

Backend:
```bash
cd Backend
cp .env.example .env
# Editar .env con tus credenciales de MongoDB
```

Frontend:
```bash
cd Frontend
echo "VITE_PUBLIC_API_URL=http://localhost:3000" > .env
```

3. **Instalar dependencias**
```bash
# Backend
cd Backend
npm install

# Frontend
cd ../Frontend
npm install
```

4. **Iniciar en desarrollo**
```bash
# Terminal 1 - Backend
cd Backend
npm run dev

# Terminal 2 - Frontend
cd Frontend
npm run dev
```

La aplicación estará disponible en:
- Frontend: http://localhost:5173
- Backend: http://localhost:3000

## 🐳 Docker

### Desarrollo con Docker Compose

```bash
# Construir e iniciar todos los servicios
docker-compose up --build

# En modo detached (background)
docker-compose up -d

# Ver logs
docker-compose logs -f

# Detener servicios
docker-compose down
```

### Variables de Entorno para Docker

Crear un archivo `.env` en la raíz:

```env
MONGODB_URI=mongodb://localhost:27017/portfolio
FRONTEND_URL=http://localhost
```

## 🧪 Testing

### Frontend Tests

```bash
cd Frontend

# Ejecutar todos los tests
npm test

# Tests en modo watch
npm test -- --watch

# Coverage
npm test -- --coverage
```

### Tests Disponibles
- ✅ Projects component tests (3 tests)
- ✅ Ratings integration tests
- ⚠️ CustomCursor tests (2 failing - no afectan funcionalidad)

## 🔄 CI/CD

El proyecto incluye un pipeline automático de GitHub Actions que:

1. **Frontend Tests**: Lint + Tests + Build
2. **Backend Tests**: Verification
3. **Docker Build**: Build de imágenes (cache optimizado)
4. **Deploy**: Automático a producción en push a `main`

### Workflow Trigger
- Push a `main`, `master`, `develop`
- Pull requests a estas ramas

## 🌐 Despliegue

### Frontend (Vercel)
1. Conectar repositorio a Vercel
2. Configurar build command: `npm run build`
3. Output directory: `dist`
4. Environment variables:
   - `VITE_PUBLIC_API_URL`: URL del backend

### Backend (Render/Railway)
1. Conectar repositorio
2. Root directory: `Backend`
3. Build command: `npm install`
4. Start command: `node index.js`
5. Environment variables:
   - `MONGODB_URI`: Connection string
   - `FRONTEND_URL`: URL del frontend
   - `PORT`: 3000

### Docker Deploy
```bash
# Build production images
docker build -t portfolio-frontend:latest ./Frontend
docker build -t portfolio-backend:latest ./Backend

# Push to registry
docker push your-registry/portfolio-frontend:latest
docker push your-registry/portfolio-backend:latest
```

## 📝 Scripts Disponibles

### Frontend
```bash
npm run dev       # Desarrollo
npm run build     # Build producción
npm run preview   # Preview del build
npm test          # Tests
npm run lint      # ESLint
```

### Backend
```bash
npm start         # Producción
npm run dev       # Desarrollo (nodemon)
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: Amazing Feature'`)
4. Push a la branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y de uso personal.

## 👤 Autor

**Ignacio Dalesio**
- GitHub: [@nacho995](https://github.com/nacho995)
- LinkedIn: [Ignacio Dalesio](https://www.linkedin.com/in/ignacio-dalesio/)
- Portfolio: [En construcción]

---

⭐ Si te gusta este proyecto, dale una estrella en GitHub!
