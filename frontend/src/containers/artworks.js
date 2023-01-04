import React, { useState, useEffect } from 'react'
import tony from '../videos/tony.mp4'
import woman from '../pictures/woman.png'
import '../css/homepage.css'
import Logo from '../components/logo'
import Navbar from '../components/navbar'
import '../css/artworks.css'
import example from '../pictures/example.jpg'
import Artcard from '../components/artcard'
import { useNavigate, useLocation } from 'react-router-dom'

const Artworks = () => {
    const navigate = useNavigate();
    const [art, setArt] = useState([
        {id:1,picture:example,title:"Monalisa",painter:"Da Vinci"},
        {id:2,picture:example,title:"Mountain",painter:"Jason"},
        {id:3,picture:example,title:"Sun Moon Lake",painter:"Tania"},
        {id:4,picture:example,title:"A-li Shan",painter:"廖雅淇"},
        {id:5,picture:example,title:"Monalisa",painter:"Da Vinci"},
        {id:6,picture:example,title:"Mountain",painter:"Jason"},
        {id:7,picture:example,title:"Sun Moon Lake",painter:"Tania"},
        {id:8,picture:example,title:"A-li Shan",painter:"廖雅淇"},
    ])
    const handleClick = (key) => {
        navigate(`/description/${key}`)
        console.log(key)
    }
    return(
        <>

            <Navbar />
            <div className="gap"></div>
            <section class="text-center" >
            <h3 class="mb-5"className="featured-heading"><strong>All Artwork</strong></h3>
            <div className="gap"></div>
            <div class="row">   
            {art.map(({id, picture,title,painter}) => (
                 <Artcard picture={picture} title={title} painter={painter} key={id} id={id} handleClick={handleClick} />
            ))}    
            </div>         
        </section>
        </>    
    )
}

export default Artworks