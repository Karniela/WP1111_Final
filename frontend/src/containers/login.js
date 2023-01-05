import React, { useState, useEffect } from 'react'
import tony from '../videos/tony.mp4'
import woman from '../pictures/woman.png'
import '../css/homepage.css'
import Logo from '../components/logo'
import Navbar from '../components/navbar'
import '../css/login.css'
import SignInForm from '../components/signInForm'
import Chair from '../pictures/chair.jpg'
import { useAccount } from './hooks/useAccount'
import { useNavigate, useLocation } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { USERLOGIN_MUTATION } from '../graphql'

const Login = () => {
    const navigate = useNavigate();
    const [goLogin,messages] =  useMutation(USERLOGIN_MUTATION)
    const {setSignedIn, setUsername} = useAccount();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [valid, setValid] = useState(true)
    const handleSubmit = (e) => {
        //send to backend and wait for respond
        //if respond is not correct, setValid(false), else navigate and set signed in === true
        goLogin({variables:{
            email:email,
            pwd:password
        }})
        if(messages.data.userLogin.message === "Log in successful"){
            setSignedIn(true);
            navigate('/collections')
            console.log(messages.data)
        }
        else{
            setValid(false)
            e.preventDefault();
        }
    }

    return(
        <>
            <Navbar />
            <div className="gap"></div>
            <div className="gap"></div>
            <div className="body">
                <div className="chair">
                    <img src={Chair}></img>
                </div>
                <div className="form">
                    <SignInForm setEmail={setEmail} setPassword={setPassword} valid={valid} handleSubmit={(e)=>handleSubmit(e)} />
                </div>
            </div>
        </>    
    )
}

export default Login