import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-emerald-800 flex py-5 px-10 items-center justify-between fixed top-0 w-full'>
            <h2 className='text-xl'>Tushar verma</h2>
            <div className="flex items-center justify-center gap-10">
                <h4 className='text-xl'>About</h4>
                <h4 className='text-xl'>Contact</h4>
                <h4 className='text-xl'>Services</h4>
                <h4 className='text-xl'>Your Account</h4>
            </div>
        </nav>
    )
}

export default Navbar