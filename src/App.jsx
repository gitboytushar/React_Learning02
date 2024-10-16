import React from 'react'

const App = () => {
  let user = 'Tushar'

  const abc = () => {
    console.log('button clicked')
  }

  const change_name = () => {
    console.log(user)
    user = 'Aryan'
    console.log(user)
  }

  return (
    <div>
      <h1>hello {user}</h1>
      <button onClick={change_name}>Change Name</button>
    </div>
  )
}

export default App
