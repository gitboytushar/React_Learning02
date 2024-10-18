import React from 'react'

const Card = (props) => {
    return (
        <div className='mr-5 bg-white text-black inline-block p-10 text-center rounded'>
            <img className='ml-3 h-32 w-32 rounded-full mb-3' src={props.photo} alt="" />
            <h1 className='text-2xl font-semibold mb-4'>{props.username}</h1>
            <h2 className='text-gray-600 text-lg'>{props.prof}</h2>
            <h3>{props.city}, {props.age}</h3>
            <button className='mt-5 bg-emerald-700 hover:bg-emerald-800  text-white rounded px-4 py-2 font-medium'>Add Friend</button>
        </div>
    )
}

export default Card