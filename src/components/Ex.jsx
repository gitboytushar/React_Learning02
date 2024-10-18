import React from 'react'
import Ex2 from './Ex2'

const Ex = (props) => {
    return (
        <>
            <div className='text-7xl text-white mt-40'>
                Mein hun {props.ex_name} from ex1
            </div>
            <Ex2 username_from_ex={props.ex_name} />
        </>
    )
}

export default Ex