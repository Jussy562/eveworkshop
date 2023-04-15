import { useState } from 'react'
import './App.css'
import './components/navbar/navbar.css'
import './components/hero/hero.css'
import './pages/home/home.css'
import './components/mentorship/slide.css'
import './components/workshop/workshop.css'
import './pages/about/about.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/home/home'
import Footer from './components/footer/footer'
import Navbar from './components/navbar/navbar'
import Eveworkshop from './pages/workshop/workshopPage'
import MentorList from './pages/mentorspage.jsx/mentorList'
import Community from './pages/community/community'
import About from './pages/about/about'
import Login from './pages/login/login'
import ProjectDetails from './components/workshop/projectDetails'

function App() {
  
  
  return (
    
      <div className="text-black h-full">
        <Router>
        <div>
            <Navbar />
            <Routes>
            
                <Route path='/*' exact element={ <Home /> } />
                <Route path="/login" exact element={ <Login /> } />
                <Route>
                <Route path="/workshopPage" element={ <Eveworkshop /> } />
                <Route path='/projectDetails/:name' exact element={<ProjectDetails />} />
                </Route>
                <Route path="/mentorList" element={ <MentorList /> } />
                <Route path="/community" element={ <Community /> } />
                <Route path="/about" element={ <About /> } />
            
            </Routes>
            
            <Footer />
            </div>
      
          </Router>
    </div>
    
  )
}

export default App
