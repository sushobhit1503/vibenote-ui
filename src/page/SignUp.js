import { Card, CardContent, Typography } from '@mui/material'
import React, { useState } from 'react'
import Illustration from "../assets/Illustration.png"
import UserInput from '../components/UserInput'
import CustomButton from '../components/CustomButton'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { backendHostUrl } from '../config/constant'

const SignUp = (props) => {
    const variant = props.theme.typography
    const shade = props.theme.palette
    const [name, setName] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const navigate = useNavigate()

    const handleSignup = async () => {
        if (!name || !phoneNumber) {
            console.log('Enter the fields')
        }
        else {
            localStorage.setItem("phoneNumber", phoneNumber)
            localStorage.setItem("name", name)
            navigate('/otp?auth=signup')
        }
        
    }

    return (
        <div className='flex-align-center main-container'>
            <div>
                <img src={Illustration} />
            </div>
            <div>
                <Typography style={variant.subHeader.bold} sx={{ color: shade.text.main }}>SIGN UP</Typography>
                <Card sx={{ bgcolor: `${props.theme.palette.text.main}33`, marginTop: "1rem", borderRadius: "0.5rem" }} >
                    <CardContent sx={{ p: '1rem', '&:last-child': { pb: '1rem' } }}>
                        <Typography style={variant.header.bold} sx={{ color: shade.text.main }}>
                            Welcome to world of Music !!
                        </Typography>
                    </CardContent>
                    <div style={{ margin: '1rem', display: "flex", flexDirection: "column", gap: "2rem" }}>
                        <UserInput text="Please enter your name" icon="person" theme={props.theme} onChange={(e) => setName(e)} />
                        <UserInput text="Please Enter your phone number" countryCode="+91" theme={props.theme} onChange={(e) => setPhoneNumber(e)} />
                        <CustomButton text="GET OTP" theme={props.theme} color={shade.tertiary.main} onClick={handleSignup} />
                        <Typography style={variant.header.bold} align='center' sx={{ color: shade.text.main }}>
                            Not new ? <a href='/login' style={{ color: shade.tertiary.main, textDecoration: 'underline' }}>Click here</a>
                        </Typography>
                    </div>
                </Card>
            </div>
        </div>
    )

}

export default SignUp
