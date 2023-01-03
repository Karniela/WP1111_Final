import React, { useState, useEffect } from 'react'
import tony from '../videos/tony.mp4'
import woman from '../pictures/woman.png'
import '../css/homepage.css'
import Logo from '../components/logo'
import Navbar from '../components/navbar'
import '../css/artworks.css'
import example from '../pictures/example.jpg'
import Artcard from '../components/artcard'

const Artworks = () => {
    const [art, setArt] = useState([
        {picture:example,title:"Monalisa",painter:"Da Vinci"},
        {picture:example,title:"Mountain",painter:"Jason"},
        {picture:example,title:"Sun Moon Lake",painter:"Tania"},
        {picture:example,title:"A-li Shan",painter:"廖雅淇"},
        {picture:example,title:"Monalisa",painter:"Da Vinci"},
        {picture:example,title:"Mountain",painter:"Jason"},
        {picture:example,title:"Sun Moon Lake",painter:"Tania"},
        {picture:example,title:"A-li Shan",painter:"廖雅淇"},
    ])
    return(
        <>
            <Navbar />
            <h1>The Best Arts Gather Here</h1>
            <br></br>
            <div className="art-container">
                {art.map(({picture,title,painter}) => (
                    <Artcard picture={picture} title={title} painter={painter} key={`${title}-${painter}`}/>
                ))}
            </div>
        </>    
    )
}

export default Artworks