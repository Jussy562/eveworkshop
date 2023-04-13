import { useState } from 'react'
import './App.css'
import './components/navbar/navbar.css'
import './components/hero/hero.css'
import './pages/home/home.css'
import './components/mentorship/slide.css'
import './components/workshop/workshop.css'

import Home from './pages/home/home'
import Footer from './components/footer/footer'
import Navbar from './components/navbar/navbar'

function App() {
  
  return (
    <div className="text-black h-full">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
