import React, { useContext } from 'react'
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'
import { DataContext } from './context/UserContext'

const App = () => {

  // get data from the UserContext's Context that we've created and exported
  const data = useContext(DataContext)
  // console.log(data); // should prints the username

  return (
    <div className='flex flex-col gap-10 text-center'>
      {/* Now we can show that data here or within any other component like this */}
      <h1>Hello I am <span className='text-white text-6xl'>{data.username}</span></h1>
      <hr />
      <h1 className='text-7xl'>We are On App.jsx Page</h1>
      <h2 className='text-5xl'>Learning {data.Learning} for web development </h2>
      <hr />
      <Header />
      <hr />
      <Section />
      <hr />
      <Footer />

    </div>
  )
}

export default App