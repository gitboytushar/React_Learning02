import React, { useState } from 'react'

// learn form handling with react

const App = () => {
  const [username, setUsername] = useState('')

  const submitHandler = (e) => {
    e.preventDefault() // used to stop default behaivour of form i.e; loading after submit
    console.log(username) // print the input value on console
    setUsername('') // after getting the value empty the input field
  }

  return (
    <div>
      <form className='flex items-center justify-center gap-x-5' onSubmit={e => submitHandler(e)}>
        <input
          value={username} // getting the value from the browser
          onChange={(e) => {
            setUsername(e.target.value); // change value and state of the username
          }}
          className='px-4 py-2 bg-white text-black rounded' type="text" placeholder="Enter your name" />
        <button className='px-4 py-2 bg-emerald-600 rounded'>Submit</button>
      </form>
    </div>
  )
}

export default App