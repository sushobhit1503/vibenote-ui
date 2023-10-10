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
                "Content-Type" : "application/json"
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
        <div maxWidth="xl" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
            <div style={{ display: "flex" }} spacing={2} sx={{ width: '100%' }}>
                <div xs={6}>
                    <img src={Illustration} style={{ width: '100%' }} />
                </div>
                <div xs={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography style={variant.subHeader.bold} sx={{ color: shade.text.main }}>LOGIN</Typography>
                    <Card sx={{ bgcolor: `${props.theme.palette.text.main}33`, marginTop: "1rem", borderRadius:'8px'}} >
                        <div style={{borderRadius:'8px'}}>
                            <CardContent sx={{ p:'16px', '&:last-child': { pb: '16px' }}}>
                                <Typography style={variant.header.bold} sx={{ color: shade.text.main }}>
                                    Welcome Back!!
                                </Typography>
                                {/* <UserInput sx={{marginBottom: "1rem"}} text="Please Enter your phone number" countryCode="+91" theme={props.theme} onChange={(e) => setPhoneNumber(e)}/>
                                <CustomButton text="GET OTP" theme={props.theme} color={shade.tertiary.main} /> */}
                                <Typography style={variant.subHeader_1.light} sx={{ color: shade.text.main }}>
                                    Login to continue
                                </Typography>
                                <UserInput text="Please Enter your phone number" countryCode="+91" theme={props.theme} onChange={(e) => setPhoneNumber(e)}/>
                                <CustomButton text="GET OTP" theme={props.theme} color={shade.tertiary.main} onClick={handleLogin}/>
                                <Typography style={variant.header.bold} sx={{ color: shade.text.main }}>
                                    New to our talenthub? <a href='/sign-up' style={{ color: shade.background.main, textDecoration: 'underline' }}>Click here</a>
                                </Typography>
                            </CardContent>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )

}

export default Login
