import React from 'react'
import { createContext } from 'react'

// create the context first
export const DataContext = createContext()

const UserContext = ({ children }) => {
    // console.log(props); // its just shows an object is present in there

    // create this json data for understanding the context api and data centralization to export and fetch the data
    const userData = {
        username: "Tushar verma",
        age: "23",
        city: "Gurgaon",
        Learning: "ReactJS"
    }

    return (
        // <div>Hello from the UserContext</div>
        <div>
            {/* wrap this in DataContext -> The give value attribute to allow the data to accessed by all the components */}
            <DataContext.Provider value={userData}>
                {children}
            </DataContext.Provider>
        </div>
    )
}

export default UserContext

// Note: directly passing the child instead of props in the function parameter is known as destructuring.