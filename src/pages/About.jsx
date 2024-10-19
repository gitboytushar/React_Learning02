import React from 'react';
import Card from '../components/Card';

const About = () => {

    // sample list of data
    const data = [
        {
            "name": "John Doe",
            "city": "New York",
            "age": 28,
            "profession": "Software Engineer",
            "profilephoto": "https://avatar.iran.liara.run/public/32"
        },
        {
            "name": "Emma Smith",
            "city": "San Francisco",
            "age": 32,
            "profession": "Graphic Designer",
            "profilephoto": "https://avatar.iran.liara.run/public/97"
        },
        {
            "name": "Liam Johnson",
            "city": "Chicago",
            "age": 40,
            "profession": "Marketing Manager",
            "profilephoto": "https://avatar.iran.liara.run/public/28"
        },
        {
            "name": "Sophia Williams",
            "city": "Los Angeles",
            "age": 25,
            "profession": "Data Scientist",
            "profilephoto": "https://avatar.iran.liara.run/public/69"
        },
        {
            "name": "James Brown",
            "city": "Miami",
            "age": 35,
            "profession": "Financial Analyst",
            "profilephoto": "https://avatar.iran.liara.run/public/12"
        }
    ];

    return (
        <div className='flex items-center justify-center relative top-52 flex-wrap gap-5'>
            {data.map((person, idx) => (
                <Card
                    key={idx}
                    username={person.name}
                    city={person.city}
                    age={person.age}
                    prof={person.profession}
                    photo={person.profilephoto}
                />
            ))}
        </div>
    );
};

export default About;