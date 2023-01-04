import React, { useState, useEffect } from 'react'
import tony from '../videos/tony.mp4'
import woman from '../pictures/woman.png'
import '../css/homepage.css'
import Logo from '../components/logo'
import Navbar from '../components/navbar'
import '../css/artists.css'
import example from '../pictures/example.jpg'
import Artistcard from '../components/artistcard'
import { useNavigate, useLocation } from 'react-router-dom'

const Artists = () => {
    const navigate = useNavigate();
    const toArtist = (id) => {
        navigate(`/artist/${id}`)
        console.log(id)
    }

    const [artist, setArtist] = useState([
        {id:1,picture:example,name:"Da Vinci"},
        {id:2,picture:example,name:"Jason"},
        {id:3,picture:example,name:"Tania"},
        {id:4,picture:example,name:"廖雅淇"},
        {id:5,picture:example,name:"Da Vinci"},
        {id:6,picture:example,name:"Jason"},
        {id:7,picture:example,name:"Tania"},
        {id:8,picture:example,name:"廖雅淇"},
    ])
    return(
        <>
            <Navbar />
            
            <div className="gap"></div>
            <section class="text-center" >
            <h3 class="mb-5"className="featured-heading"><strong>All Artists</strong></h3>
            <div className="gap"></div>
            <div class="row">   
            {artist.map(({id,picture,name}) => (
                    <Artistcard picture={picture} name={name} key={id} id={id} toArtist={toArtist} />
                ))}  
            </div>         
        </section>
        </>    
    )
}

export default Artists