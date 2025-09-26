import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './routes/about'
import Contact from './routes/contact'
import Navbar from './components/ui/navbar'
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>


      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
