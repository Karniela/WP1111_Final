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
import '../css/description.css'
import { SINGLE_ARWORK_QUERY } from '../graphql'
import { useQuery } from '@apollo/client'

const Description = () => {
    const { id } = useParams() //get the id from the parameter of link
    //query artworks by id (backend's part)
    //here I use example result 

    const {data,loading} = useQuery(SINGLE_ARWORK_QUERY,{variables:{id:id}})

    
    return (
        loading? <p>Loading</p> : 
        <>
            <Navbar />
            <div className="description">
                <div className="left">
                    <h1>{data?.artwork.name}</h1>
                    <div className="picture">
                        <img src={data?.artwork.imgURL}></img>
                    </div>
                </div>
                <div className="right">
                    <div className="info">
                        <p>Create by : {data?.artwork.artist}</p>
                        <p>Date : {data?.artwork.auction_date}</p>
                        <p>Price : {data?.artwork.price}</p>
                        <p>Material : {data?.artwork.material}</p>
                        <p>Size : {data?.artwork.dimension}</p>
                        <p>Auction House : {data?.artwork.auction_house}</p>
                        <p>Area : {data?.artwork.area}</p>
                        <p>Price Centimeter : {data?.artwork.priceCentimeter}</p>
                    </div>
                </div>
            </div>
        </>   
    )
}

export default Description;