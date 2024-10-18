import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {

  // create a list of data
  const [data, setData] = useState([])

  // getting data from lorem picsum api provider
  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=40')
    setData(response.data)
  }

  // this will get and show the data automatically every time we refresh the page
  useEffect(() => {
    getData()
  }, [])


  return (
    <>
      {/* showing data with custom designs with tailwind */}
      <div className="p-5 flex items-center justify-center flex-col">
        {/* <button
          onClick={getData}
          className='text-xl font-medium bg-gradient-to-t from-blue-300 to-indigo-600 rounded px-6 py-3 active:scale-90 text-white transition-transform duration-150'>
          Get Data
        </button> */}
        <div className="mt-5 p-5 py-7 rounded w-full flex items-center justify-evenly gap-x-2 gap-y-12 flex-wrap">
          {data.map(function (elem, idx) {
            return <div key={idx} className="bg-gradient-to-t from-blue-300 to-indigo-600 p-1 rounded animate-fadeIn shadow">
              <p className='bg-gradient-to-br from-blue-300 to-indigo-600 h-7 w-10 -translate-x-5 -translate-y-4 rounded-full absolute z-20 flex items-center justify-center text-white'>{parseInt(elem.id) + 1}</p>
              <img className='w-80 h-56 rounded' src={elem.download_url} alt="ImgNA" />
              <p className='pt-1 text-center text-black font-medium'>{elem.author}</p>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App