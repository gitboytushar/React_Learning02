import React, { useState } from 'react'

function App() {
  const [num, setNum] = useState(0)

  function checkNumValue() {
    if (num <= 0) {
      alert("Number cannot be decreased further!!!");
    } else {
      setNum(num - 10);
    }
  }

  return (
    <div>
      <h3 className='text-8xl text-center'>Number is {num}</h3>
      <div className='flex align-middle justify-center gap-5 mt-5'>
        <button onClick={() => setNum(num + 10)}>Increment by 10</button>
        <button onClick={checkNumValue}>Decrement by 10</button>
      </div>
    </div>
  )
}

export default App
