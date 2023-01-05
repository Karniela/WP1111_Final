import React, { useState, useEffect } from 'react'
import tony from '../videos/tony.mp4'
import woman from '../pictures/woman.png'
import '../css/homepage.css'
import Logo from '../components/logo'
import Navbar from '../components/navbar'
import SignUpForm from '../components/signUpForm'
import { useNavigate, useLocation } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { USERSIGNUP_MUTATION } from '../graphql'


const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [valid, setValid] = useState(true) //state to check whether form's datas are valid
    const navigate = useNavigate();

    const [goRegistrate,{data,loading,error}] =  useMutation(USERSIGNUP_MUTATION)

    const handleSubmit = (e) => {
        if(firstName==='' || lastName==='' || email==='' || password===''){
            setValid(false)
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            e.preventDefault();
        }
        else{
            //send data to backend
            goRegistrate({variables:{input:{ 
                    first_name:firstName,
                    last_name:lastName,
                    email:email,
                    pwd:password
                }
            }})
            console.log(data)
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            navigate('/success')
        }
    }
    return(
        <>
            <Navbar />
            <SignUpForm setFirstName={setFirstName} 
                setLastName={setLastName} 
                setEmail={setEmail} 
                setPassword={setPassword} 
                handleSubmit={handleSubmit}
                valid={valid}
            />
            
            
        </>    
    )
}

export default Signup