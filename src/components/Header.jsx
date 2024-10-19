import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext' // Important step: I fix this as a bug to show my data on browser

const Header = () => {
    // get that username as data here also 
    const data = useContext(DataContext)

    return (
        <div>
            <h1>Header component</h1>
            <p>We are Inside header, {data.username} is {data.age} years old.</p>
        </div>
    )
}

export default Header