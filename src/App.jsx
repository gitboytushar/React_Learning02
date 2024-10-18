import axios from 'axios'
import React, { useState } from 'react'

const App = () => {

  // create a list of data
  const [data, setData] = useState([])

  // getting data from lorem picsum api provider
  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=40')
    setData(response.data)
  }

  return (
    <>
      {/* showing data with custom designs with tailwind */}
      <div className="px-10 py-10 flex items-center justify-center flex-col">
        <button
          onClick={getData}
          className='text-xl font-bold bg-gradient-to-r from-red-200 to-red-500 hover:bg-gradient-to-l shadow rounded px-6 py-3 active:scale-80 text-black'>
          Get Data
        </button>
        <div className="mt-5 p-5 py-7 rounded w-full flex items-center justify-evenly gap-6 flex-wrap">
          {data.map(function (elem, idx) {
            return <div key={idx} className="bg-gradient-to-l from-red-200 to-red-500 p-1 rounded animate-fadeIn shadow">
              <p className='px-2 absolute z-20 text-white'>{parseInt(elem.id) + 1}</p>
              <img className='w-80 h-52 rounded' src={elem.download_url} alt="" />
              <p className='pt-1 text-center text-black font-medium'>{elem.author}</p>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App