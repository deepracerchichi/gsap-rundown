// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { ScrollAnimation, Home, GsapTo, GsapFrom } from './comps';



function App() {
  

  return (
    
    <div>
      <Router>
        <Routes>
          <Route path="/gsapto" element={<GsapTo />} />
          <Route path="/gsapfrom" element={<GsapFrom />} />
          <Route path="/scrollanimation" element={<ScrollAnimation />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>

    </div>
    
  )
}

export default App
