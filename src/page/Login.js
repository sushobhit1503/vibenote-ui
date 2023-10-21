import { Card, CardContent, Typography, Box } from '@mui/material'
import React, { useState } from 'react'
import Illustration from "../assets/Illustration.png"
import UserInput from '../components/UserInput'
import CustomButton from '../components/CustomButton'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { backendHostUrl } from '../config/constant'

const Login = (props) => {
    const variant = props.theme.typography
    const shade = props.theme.palette
    const [phoneNumber, setPhoneNumber] = useState()
    const navigate = useNavigate()

    const handleLogin = async (req, res) => {
        if (!phoneNumber) {
            console.log('Enter the fields')
        }
        else {
            localStorage.setItem("phoneNumber", phoneNumber)
            axios.post(`${backendHostUrl}/login`, { phoneNumber }).then(result => {
                if (result.data.error) {
                    console.log("User Doesn't exist")
                }
                else navigate('/otp')
            }).catch(err => {
                console.log(err.message)
            })
        }
    }

    return (
        <div className='flex-align-center main-container' >
            <div>
                <img src={Illustration} />
            </div>
            <div>
                <Typography style={variant.subHeader.bold} sx={{ color: shade.text.main }}>LOGIN</Typography>
                <Card sx={{ bgcolor: `${props.theme.palette.text.main}33`, marginTop: "1rem", borderRadius: '0.5rem', gap: "2rem" }} >
                    <CardContent sx={{ p: '1rem', '&:last-child': { pb: '1rem' } }}>
                        <Typography style={variant.header.bold} sx={{ color: shade.text.main, marginBottom: "2rem" }}>
                            Welcome Back !!!!
                        </Typography>
                        <div className='margin-bottom-section'>
                            <UserInput text="Please Enter your Phone Number" countryCode="+91" theme={props.theme} onChange={(e) => setPhoneNumber(e)} />
                        </div>
                        <div>
                            <CustomButton text="GET OTP" theme={props.theme} color={shade.tertiary.main} onClick={handleLogin} />
                        </div>
                        <div className='flex-align-center' style={{ margin: "2rem 0rem" }}>
                            OR
                        </div>
                        <CustomButton icon="spotify" text="LOGIN WITH SPOTIFY" theme={props.theme} color="#1DB954" link={`${backendHostUrl}/auth/spotify`} />
                        <Typography align='center' style={variant.header.bold} sx={{ color: shade.text.main, marginTop: "2rem" }}>
                            New to our talenthub ? <a href='/sign-up' style={{ color: shade.tertiary.main, textDecoration: 'underline' }}>Click here</a>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )

}

export default Login
