import { Card, CardContent, Typography } from '@mui/material'
import React, { useState } from 'react'
import Illustration from "../svgIcons/Illustration.png"
import UserInput from '../components/UserInput'
import CustomButton from '../components/CustomButton'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

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
            navigate("/otp")
        }
    }

    return (
        <div maxWidth="xl" className='flex-align-center main-container' >
            <div style={{ display: "flex" }} spacing={2}>
                <div xs={4}>
                    <img src={Illustration} />
                </div>
                <div xs={8}>
                    <Typography style={variant.subHeader.bold} sx={{ color: shade.text.main }}>LOGIN</Typography>
                    <Card sx={{ bgcolor: `${props.theme.palette.text.main}33`, marginTop: "1rem", borderRadius: '0.5rem', gap: "2rem" }} >
                        <CardContent sx={{ p: '1rem', '&:last-child': { pb: '1rem' } }}>
                            <Typography style={variant.header.bold} sx={{ color: shade.text.main, marginBottom: "2rem" }}>
                                Welcome Back !!
                            </Typography>
                            <UserInput text="Please Enter your Phone Number" countryCode="+91" theme={props.theme} onChange={(e) => setPhoneNumber(e)} />
                            <CustomButton text="GET OTP" theme={props.theme} color={shade.tertiary.main} onClick={handleLogin} />
                            <div className='flex-align-center' style={{ margin: "2rem 0rem" }}>
                                OR
                            </div>
                            <CustomButton text="LOGIN WITH SPOTIFY" theme={props.theme} color="#1DB954" link="http://localhost:3003/auth/spotify" />
                            <Typography style={variant.header.bold} sx={{ color: shade.text.main, marginTop: "2rem" }}>
                                New to our talenthub ? <a href='/sign-up' style={{ color: shade.tertiary.main, textDecoration: 'underline' }}>Click here</a>
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )

}

export default Login
