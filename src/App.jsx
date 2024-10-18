import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
import Ex from './components/Ex'

const App = () => {

  // sample data made from gpt
  const user = [
    {
      "name": "John Doe",
      "city": "New York",
      "age": 28,
      "profession": "Software Engineer",
      "profilephoto": "https://avatar.iran.liara.run/public/48"
    },
    {
      "name": "Emma Smith",
      "city": "San Francisco",
      "age": 32,
      "profession": "Graphic Designer",
      "profilephoto": "https://avatar.iran.liara.run/public/5"
    },
    {
      "name": "Liam Johnson",
      "city": "Chicago",
      "age": 40,
      "profession": "Marketing Manager",
      "profilephoto": "https://avatar.iran.liara.run/public/13"
    },
    {
      "name": "Sophia Williams",
      "city": "Los Angeles",
      "age": 25,
      "profession": "Data Scientist",
      "profilephoto": "https://avatar.iran.liara.run/public/34"
    },
    {
      "name": "James Brown",
      "city": "Miami",
      "age": 35,
      "profession": "Financial Analyst",
      "profilephoto": "https://avatar.iran.liara.run/public/38"
    }
  ]

  return (
    <>
      {/* <Header /> */}
      <Navbar />
      {/* <Ex ex_name="tushar verma" /> */}

      <div className=" mt-32 absolute left-52 top-20">
        {user.map(function (elem, idx) {
          return <Card key={idx} username={elem.name} age={elem.age} prof={elem.profession} city={elem.city} photo={elem.profilephoto} />
        })}
      </div>

      <Footer />
    </>
  )
}

export default App