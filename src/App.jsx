import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import BackgroundGradient from './components/Home/BackgroundGradient'
import Name from './components/Home/name'
import Header from './components/Home/header'
import Skills from './components/Home/skills'
import AboutMe from './components/Home/aboutMe'
import Projects from './components/Proyectos/Projects'

function App() {
  return (
    <Router>
      <Header />
      <BackgroundGradient />
      <div className="relative min-h-screen w-full">
        <Routes>
          <Route path="/" element={
            <>
              <Name />
              <AboutMe />
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
  )
}

export default App
