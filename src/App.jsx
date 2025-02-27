import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import BackgroundGradient from './components/Home/BackgroundGradient'

import Name from './components/Home/name'
import Header from './components/Home/header'

function App() {
  return (
    <Router>
      <Header />
      <BackgroundGradient />
      <div className="relative min-h-screen w-full">
        <Routes>
          <Route path="/" element={
            <Name />
          } />
          <Route path="/proyectos" element={
            <div className="relative z-10 p-4">
              <h1 className="text-white text-4xl">Proyectos</h1>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
