import React, { useState, useEffect } from 'react'
import tony from '../videos/tony.mp4'
import woman from '../pictures/woman.png'
import '../css/homepage.css'
import Logo from '../components/logo'
import Navbar from '../components/navbar'
import '../css/collections.css'
import flower from '../pictures/flower.jpg'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { useAccount } from './hooks/useAccount'
import example from '../pictures/example.jpg'
import '../css/artist.css'


const Artist = () => {
    const { id } = useParams() //get the id from the parameter of link
    //query artworks by id (backend's part)
    //here I use example result 
    const [artistInfo, setArtistInfo] = useState({
        id:id,
        name:"Tania",
        picture:example,
        description:"Tania is our group member, I don't know whether she could paint a picture or not, but she sure can carry us in this project !"
    })
    
    
    return (
        <>
            <Navbar />
            <div className="description">
                <div className="left">
                    <h1>{artistInfo.name}</h1>
                    <div className="picture">
                        <img src={example}></img>
                    </div>
                </div>
                <div className="right">
                    <div className="info">
                        <p>{artistInfo.description}</p>
                    </div>
                </div>
            </div>
            
        </>   
    )
}

export default Artist;