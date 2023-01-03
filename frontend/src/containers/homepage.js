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

const Homepage = () => {
    const [featured, setFeatured] = useState([ //below is just an example of featured's art
        {picture:example,title:"Monalisa",painter:"Da Vinci"},
        {picture:example,title:"Mountain",painter:"Jason"},
        {picture:example,title:"Sun Moon Lake",painter:"Tania"},
        {picture:example,title:"A-li Shan",painter:"廖雅淇"},
        {picture:example,title:"Monalisa",painter:"Da Vinci"},
        {picture:example,title:"Mountain",painter:"Jason"},
        {picture:example,title:"Sun Moon Lake",painter:"Tania"},
        {picture:example,title:"A-li Shan",painter:"廖雅淇"},
    ])
    const [newest, setNewest] = useState([
        {picture:example,title:"Monalisa",painter:"Da Vinci"},
        {picture:example,title:"Mountain",painter:"Jason"},
        {picture:example,title:"Sun Moon Lake",painter:"Tania"},
        {picture:example,title:"A-li Shan",painter:"廖雅淇"},
        {picture:example,title:"Sun Moon Lake",painter:"Tania"},
        {picture:example,title:"Sun Moon Lake",painter:"Tania"}
    ])
    return(
        <div className="homepage">
            <Navbar/>
            <div className="gap"></div> 
            <div className="image">
                <img src={woman}/>
            </div>
            <div className="gap"></div>
            <div className="featured">
                <div className="featured-heading"><h1>FEATURED</h1></div>
                <div className="featured-container">
                    {featured.map(({picture,title,painter}) => (
                        <Artcard picture={picture} title={title} painter={painter} key={`${title}-${painter}`} />
                    ))}
                </div>
            </div>
            <div className="gap"></div>
            <div className="new">
                <div className="new-heading"><h1>NEWEST</h1></div>
                <div className="new-container">
                {newest.map(({picture,title,painter}) => (
                        <Artcard picture={picture} title={title} painter={painter} key={`${title}-${painter}`} />
                    ))}
                </div>
            </div>
        </div>     
    )
}

export default Homepage