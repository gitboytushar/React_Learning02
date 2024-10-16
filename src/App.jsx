import { useState } from 'react'

function App () {
  const [num, setNum] = useState(0)

  return (
    <div>
      <h3>Number is = {num}</h3>
      <button onClick={() => setNum(num + 10)}>Increment by 10</button>
      <button onClick={() => setNum(num - 5)}>Decrement by 5</button>
    </div>
  )
}

export default App
