import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import BackgroundGradient from './components/Home/BackgroundGradient'
import Name from './components/Home/name'
import { Header } from './components/Home/header'
import Skills from './components/Home/skills'
import AboutMe from './components/Home/aboutMe'
import Projects from './components/Proyectos/Projects'
import { ThemeProvider } from './context/ThemeContext'
import Signs from './components/Home/Signs'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <BackgroundGradient />
        <div className="relative min-h-screen w-full">
          <Routes>
            <Route path="/" element={
              <>
                <Name />
                <AboutMe />
                <Signs />
                <Skills />
              </>
            } />
            <Route path="/proyectos" element={
              <>
              <Projects />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
