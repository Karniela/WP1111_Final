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
import { SINGLE_ARTIST_QUERY } from '../graphql'
import { useQuery } from '@apollo/client'


const Artist = () => {
    const { id } = useParams() //get the id from the parameter of link
    //query artworks by id (backend's part)
    //here I use example result 

    const {data,loading} = useQuery(SINGLE_ARTIST_QUERY,{variables:{id:id}})

    
    
    
    return (
        loading? <p>Loading</p> : 
        <>
            <Navbar />
            <div className="description">
                <div className="left">
                    <h1>{data?.artist.name}</h1>
                    <div className="picture">
                        <img src={data?.artist.imgURL}></img>
                    </div>
                </div>
                <div className="right">
                    <div className="info">
                        <p>{data?.artist.description}</p>
                    </div>
                </div>
            </div>
            
        </>   
    )
}

export default Artist;