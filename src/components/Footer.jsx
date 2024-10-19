import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext' // Important step: I fix this as a bug to show my data on browser

const Footer = () => {

    const data = useContext(DataContext)

    return (
        <div>
            <h1>Footer component</h1>
            <p>We are Inside footer, {data.username} lives in {data.city}</p>
        </div>
    )
}

export default Footer