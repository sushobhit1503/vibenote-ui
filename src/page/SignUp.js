import { Card, CardContent, Typography } from '@mui/material'
import React, { useState } from 'react'
import Illustration from "../svgIcons/Illustration.png"
import UserInput from '../components/UserInput'
import CustomButton from '../components/CustomButton'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const SignUp = (props) => {
    const variant = props.theme.typography
    const shade = props.theme.palette
    const [username, setUsername] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const navigate = useNavigate()

    const handleSignup = async () => {
        if (!username || !phoneNumber) {
            console.log('Enter the fields')
        }

        try {
            const config = {
                headers: {
                "Content-Type" : "application/json"
                }
            }
            const { data } = await axios.post('http://localhost:3003/sign-up', { username, phoneNumber }, config)
            console.log(data)
            navigate("/login/otp")

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
            <div xs={6} >
                <img src={Illustration} style={{ width: '100%' }} />
            </div>
            <div xs={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography style={variant.subHeader.bold} sx={{ color: shade.text.main }}>SIGN UP</Typography>
                <Card sx={{ bgcolor: `${props.theme.palette.text.main}33`, marginTop: "1rem", borderRadius: "0.5rem" }} >
                    <CardContent>
                        <Typography style={variant.header.bold} sx={{ color: shade.text.main }}>
                            Welcome to world of Music!
                        </Typography>
                        <Typography style={variant.subHeader_1.light} sx={{ color: shade.text.main }}>
                            Sign up to continue
                        </Typography>
                    </CardContent>
                    <div style={{ margin: '1rem', display: "flex", flexDirection: "column", gap: "2rem" }}>
                        <UserInput text="Please enter your name" theme={props.theme} onChange={(e) => setUsername(e)} />
                        <UserInput text="Please Enter your phone number" countryCode="+91" theme={props.theme} onChange={(e) => setPhoneNumber(e)}/>
                        <CustomButton text="GET OTP" theme={props.theme} color={shade.tertiary.main}  onClick={handleSignup} />
                    </div>
                </Card>
            </div>
        </div>
    )

}

export default SignUp
