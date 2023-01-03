import React, { useState, useEffect } from 'react'
import tony from '../videos/tony.mp4'
import woman from '../pictures/woman.png'
import '../css/homepage.css'
import Logo from '../components/logo'
import Navbar from '../components/navbar'
import '../css/artists.css'
import example from '../pictures/example.jpg'
import Artistcard from '../components/artistcard'

const Artists = () => {
    const [artist, setArtist] = useState([
        {picture:example,name:"Da Vinci"},
        {picture:example,name:"Jason"},
        {picture:example,name:"Tania"},
        {picture:example,name:"廖雅淇"},
        {picture:example,name:"Da Vinci"},
        {picture:example,name:"Jason"},
        {picture:example,name:"Tania"},
        {picture:example,name:"廖雅淇"},
    ])
    return(
        <>
            <Navbar />
            <h1>We Find The Most Capable Artists For You</h1>
            <br></br>
            <div className="art-container">
                {artist.map(({picture,name}) => (
                    <Artistcard picture={picture} name={name} key={name}/>
                ))}
            </div>
        </>    
    )
}

export default Artists