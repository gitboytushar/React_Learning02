import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='bg-gradient-to-r from-indigo-500 to-green-600 flex py-5 px-16 items-center justify-between fixed top-0 w-full text-white'>
            <Link className='text-xl hover:underline' to="/" >Tushar Verma</Link>
            <div className="flex items-center justify-center gap-10">
                {/* below is old method - here when we click the page reloads - but we can skip that reloading */}
                {/* <a href='/' className='text-xl hover:underline'>Home</a>
                <a href='/about' className='text-xl hover:underline'>About</a>
                <a href='/contact' className='text-xl hover:underline'>Contact</a>
                <a href='/services' className='text-xl hover:underline'>Services</a>
                <a href='/account' className='text-xl hover:underline'>Account</a> */}

                {/* Better Approach - Link method to navigate to the pages - It Doesn't Relaod the page */}
                <Link className='text-xl hover:underline' to="/" >Home</Link>
                <Link className='text-xl hover:underline' to="/about" >About</Link>
                <Link className='text-xl hover:underline' to="/contact" >Contact</Link>
                <Link className='text-xl hover:underline' to="/services" >Services</Link>
                <Link className='text-xl hover:underline' to="/account" >Account</Link>
            </div>
        </nav>
    )
}

export default Navbar