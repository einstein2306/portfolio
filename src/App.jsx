import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Project from './components/projects.jsx'
import {Intro} from './components/Intro.jsx'
import {About} from './components/About.jsx'
import {Routes, Route, NavLink} from 'react-router-dom'
import './App.css'
import { Experience } from './components/experience.jsx'
import { Certifications } from './components/certifications.jsx'


function App() {

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white sticky-top">
          <div className='container-fluid'>
              <NavLink className="navbar-brand" to="#">Yaswanth</NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <NavLink className={({isActive}) => isActive ? "nav-link nav-active" : "nav-link"} to='/'>Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({isActive}) => isActive ? "nav-link nav-active" : "nav-link"} to='/About'>About</NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className={({isActive}) => isActive ? "nav-link nav-active" : "nav-link"} to='/projects'>Projects</NavLink>
                  </li>
                   <li className="nav-item">
                    <NavLink className={({isActive}) => isActive ? "nav-link nav-active" : "nav-link"} to='/experience'>Experience</NavLink>
                  </li>
                   <li className="nav-item">
                    <NavLink className={({isActive}) => isActive ? "nav-link nav-active" : "nav-link"} to='/certifications'>Certifications</NavLink>
                  </li>
                </ul>
              </div>
          </div>
      </nav>  
      <div> 
        <Routes>
            <Route path='/' element={<Intro/>}></Route>
            <Route path="/projects" element={<Project/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/experience" element={<Experience/>}></Route>
            <Route path="/certifications" element={<Certifications/>}></Route>
        </Routes>
      </div>
      </div>
  )
}

export default App
