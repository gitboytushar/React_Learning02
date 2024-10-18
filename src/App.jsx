import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Account from './pages/Account'

const App = () => {
  return (
    <div>
      {/* Add the navbar that will be shown on all pages */}
      <Navbar />

      {/* Add different pages here */}
      <div className='text-white text-5xl flex items-center justify-center mt-52'>
        {/* Below is the container for all routes */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </div>

    </div>
  )
}

export default App