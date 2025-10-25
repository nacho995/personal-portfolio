import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './index.css'
import BackgroundGradient from './components/Home/BackgroundGradient'
import Name from './components/Home/name'
import { Header } from './components/Home/header'
import { ThemeProvider } from './context/ThemeContext'
import Chatbot from './components/Chatbot/Chatbot'

// Lazy loading de componentes para mejor rendimiento
const Skills = lazy(() => import('./components/Home/skills'))
const AboutMe = lazy(() => import('./components/Home/aboutMe'))
const Signs = lazy(() => import('./components/Home/Signs'))
const Projects = lazy(() => import('./components/Proyectos/Projects'))
const WordpressProjects = lazy(() => import('./components/Proyectos/WordpressProjects'))

// Componente de loading profesional
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-white/20 border-t-white/80 rounded-full animate-spin"></div>
      <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-purple-500/50 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
    </div>
  </div>
)

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <BackgroundGradient />
        <div className="relative min-h-screen w-full">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={
                <>
                  <Name />
                  <Suspense fallback={<LoadingFallback />}>
                    <AboutMe />
                    <Signs />
                    <Skills />
                  </Suspense>
                </>
              } />
              <Route path="/proyectos" element={
                <Suspense fallback={<LoadingFallback />}>
                  <Projects />
                  <WordpressProjects />
                </Suspense>
              } />
            </Routes>
          </Suspense>
        </div>
        <Chatbot />
      </Router>
    </ThemeProvider>
  )
}

export default App
