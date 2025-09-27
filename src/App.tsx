import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import About from './routes/about'
import Contact from './routes/contact'
import Navbar from './components/ui/navbar'
import './App.css'

function App() {
  return (
    <BrowserRouter basename="/Portfolio">
    <Navbar/>


      <Routes>
      < Route path="/" element={<Navigate to="/about" replace />}  />
      < Route path="/Portfolio/" element={<Navigate to="/about" replace />}  />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Navigate to="/about" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
