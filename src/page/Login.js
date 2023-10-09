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

        try {
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            const { data } = await axios.post('http://localhost:3003/login', { phoneNumber }, config)
            console.log(data)
            navigate("/login/otp")

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div maxWidth="xl" className='flex-align-center main-container'>
            <div xs={6}>
                <img src={Illustration} />
            </div>
            <div xs={6}>
                <Typography style={variant.header.bold} sx={{ color: shade.text.main }}>LOGIN</Typography>
                <Card className='margin-top-max' sx={{ bgcolor: `${props.theme.palette.text.main}33` }} >
                    <div>
                        <CardContent>
                            <Typography style={variant.header.bold} sx={{ color: shade.text.main, marginBottom: "2rem" }}>
                                Welcome Back !!
                            </Typography>
                            <UserInput  text="Please enter your Phone Number" countryCode="+91" theme={props.theme} />
                            <CustomButton text="GET OTP" theme={props.theme} color={shade.tertiary.main} />
                            <Typography style={variant.subHeader_1.light} sx={{ color: shade.text.main }}>
                                Login to continue
                            </Typography>
                            <UserInput text="Please Enter your phone number" countryCode="+91" theme={props.theme} onChange={(e) => setPhoneNumber(e)} />
                            <CustomButton text="GET OTP" theme={props.theme} color={shade.tertiary.main} onClick={handleLogin} />
                            <Typography style={variant.header.bold} sx={{ color: shade.text.main }}>
                                New to our talenthub? <a href='/sign-up'><span style={{ color: shade.background.main, textDecoration: 'underline' }}>Click here</span></a>
                            </Typography>
                        </CardContent>
                    </div>
                </Card>
            </div>
        </div>
    )

}

export default Login
