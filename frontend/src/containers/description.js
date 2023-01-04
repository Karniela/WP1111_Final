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

const Description = () => {
    const { id } = useParams() //get the id from the parameter of link
    //query artworks by id (backend's part)
    //here I use example result 
    
    const [queryResult, setQueryResult] = useState(
        {
            id:id,
            name:"Monalisa",
            picture:example,
            artist:"Da Vinci",
            date:"2023-10-15",
            price:500,
            material:"oil/masonite",
            size:"154 x 77 cm",
            auction_house:"Sotheby",
            area : "Taipei",
            priceCentimeter:"22500"
        },
    )
    return (
        <>
            <Navbar />
            <div className="description">
                <div className="left">
                    <h1>{queryResult.name}</h1>
                    <div className="picture">
                        <img src={example}></img>
                    </div>
                </div>
                <div className="right">
                    <div className="info">
                        <p>Create by : {queryResult.artist}</p>
                        <p>Date : {queryResult.date}</p>
                        <p>Price : {queryResult.price}</p>
                        <p>Material : {queryResult.material}</p>
                        <p>Size : {queryResult.size}</p>
                        <p>Auction House : {queryResult.auction_house}</p>
                        <p>Area : {queryResult.area}</p>
                        <p>Price Centimeter : {queryResult.priceCentimeter}</p>
                    </div>
                </div>
            </div>
        </>   
    )
}

export default Description;