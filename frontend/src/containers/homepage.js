import React, { useState, useEffect } from 'react'
import tony from '../videos/tony.mp4'
import woman from '../pictures/woman.png'
import Logo from '../components/logo'
import Navbar from '../components/navbar'
import '../css/homepage.css'
import '../css/featured.css'
import '../css/new.css'
import Artcard from '../components/artcard'
import example from '../pictures/example.jpg'
import { useNavigate, useLocation } from 'react-router-dom'

const Homepage = () => {
    const navigate = useNavigate();
    const [featured, setFeatured] = useState([ //below is just an example of featured's art
        {id:1,picture:example,title:"Monalisa",painter:"Da Vinci"},
        {id:2,picture:example,title:"Mountain",painter:"Jason"},
        {id:3,picture:example,title:"Sun Moon Lake",painter:"Tania"},
        {id:4,picture:example,title:"A-li Shan",painter:"廖雅淇"},
        
    ])
    const [newest, setNewest] = useState([
        {id:1,picture:example,title:"Monalisa",painter:"Da Vinci"},
        {id:2,picture:example,title:"Mountain",painter:"Jason"},
        {id:3,picture:example,title:"Sun Moon Lake",painter:"Tania"},
        {id:4,picture:example,title:"A-li Shan",painter:"廖雅淇"},
       
    ])
    const handleClick = (key) => {
        navigate(`/description/${key}`)
        console.log(key)
    }
    return(
        
        
        
        <div className="homepage">
        <header>
            <Navbar/>
            <div>
            <div id="intro" class="bg-image shadow-2-strong">
                
                <div class="container d-flex align-items-center justify-content-center text-center h-100">
                
                <div class="text-white">
                    <h1 class="mb-3">An artist is not paid for his labor but for his vision.</h1>
                    <h5 class="mb-4">Best art market analysis just for you.</h5>
                    
                
                </div>
                </div>
            </div>
            </div>
        </header>

        <div className="featured">
                <div className="featured-heading"><h1>FEATURED</h1></div>
                <div className="featured-container">
                    {featured.map(({id,picture,title,painter}) => (
                        <Artcard picture={picture} title={title} painter={painter} key={id} id={id} handleClick={handleClick}/>
                    ))}
                </div>
            </div>
            <div className="gap"></div>
            <div className="new">
                <div className="new-heading"><h1>NEWEST</h1></div>
                <div className="new-container">
                {newest.map(({id,picture,title,painter}) => (
                        <Artcard picture={picture} title={title} painter={painter} key={id} id={id} handleClick={handleClick}/>
                    ))}
                </div>
        </div>
        </div>     
    )
}

export default Homepage