import React, { useState, useEffect } from 'react'
import tony from '../videos/tony.mp4'
import woman from '../pictures/woman.png'
import '../css/homepage.css'
import Logo from '../components/logo'
import Navbar from '../components/navbar'
import '../css/artworks.css'
import example from '../pictures/example.jpg'
import Artcard from '../components/artcard'
import Artistcard from '../components/artistcard'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { ARTWORKS_QUERY,ARTISTS_QUERY } from '../graphql'
import { useQuery } from '@apollo/client'

const Result = () => {
    const { parameter } = useParams()
    const navigate = useNavigate();
    const artworksResult = useQuery(ARTWORKS_QUERY,{variables:{input:parameter}})
    const artistsResult = useQuery(ARTISTS_QUERY,{variables:{input:parameter}})
    
    
    const toArtist = (id) => {
        navigate(`/artist/${id}`)
        console.log(id)
    }
    

    const handleClick = (key) => {
        navigate(`/description/${key}`)
        
    }
    return(
        (artworksResult.loading && artistsResult.loading)? <p>Loading</p> : 
        <>

            <Navbar />
            <div className="gap"></div>
            <section class="text-center" >
            <h3 class="mb-5"className="featured-heading"><strong>Result</strong></h3>
            <div className="gap"></div>
            <div class="row">   
            {artworksResult.data?.artworks.map(({id,imgURL,title,artist}) => (
                 <Artcard picture={imgURL} title={title} painter={artist} key={id} id={id} handleClick={handleClick} />
            ))}    
            {artistsResult.data?.artists.map(({id,imgURL,name}) => (
                    <Artistcard picture={imgURL} name={name} key={id} id={id} toArtist={toArtist} />
                ))} 
            </div>         
        </section>
        </>    
    )
}

export default Result