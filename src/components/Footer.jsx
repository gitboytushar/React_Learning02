import React from 'react'
import Subfooter from './Subfooter'

const Footer = () => {
    return (
        <div className='bg-slate-800 w-full flex flex-col gap-y-2 items-center justify-center p-5 absolute bottom-0'>
            All rights reserved. Copyright Tushar verma.
            <Subfooter />
        </div>
    )
}

export default Footer