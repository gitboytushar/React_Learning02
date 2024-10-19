import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Home from './pages/Home'
import Account from './pages/Account'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      {/* Add the navbar that will be shown on all pages */}
      <Navbar />

      {/* Add different pages links here */}
      <div>
        {/* Below is the container for all routes */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </div>

      {/* Add footer to app bottom */}
      <Footer />
    </div>
  )
}

export default App