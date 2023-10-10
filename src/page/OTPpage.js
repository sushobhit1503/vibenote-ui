import { Card, CardContent, Typography } from '@mui/material'
import React, { useState } from 'react'
import Illustration from "../svgIcons/Illustration.png"
import UserInput from '../components/UserInput'
import CustomButton from '../components/CustomButton'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const OTPpage = (props) => {
    const variant = props.theme.typography
    const shade = props.theme.palette
    const [otp, setOTP] = useState()
    const navigate = useNavigate()

        const handleOTP = async () => {
        if (!otp) {
            console.log('Enter the OTP')
        }

        try {
            const config = {
                headers: {
                "Content-Type" : "application/json"
                }
            }
            const { data } = await axios.post('http://localhost:3003/login/otp', { otp }, config)
            console.log(data)
            navigate("/")

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div maxWidth="xl" className='flex-align-center'>
            <div style={{ display: "flex" }}>
                <div xs={6}>
                    <img src={Illustration}/>
                </div>
                <div xs={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography style={variant.subHeader.bold} sx={{ color: shade.text.main }}>LOGIN</Typography>
                    <Card sx={{ bgcolor: `${props.theme.palette.text.main}33`, marginTop: "1rem", borderRadius: "0.5rem" }} >
                        <div>
                            <CardContent>
                                <Typography style={variant.header.bold} sx={{ color: shade.text.main }}>
                                    Welcome Back!!
                                </Typography>
                                <div sx={{ display: 'flex', flexDirection: "column", alignSelf: 'flex-start' }}>
                                    <UserInput text="Please enter 6 digit OTP sent" theme={props.theme} onChange={(e) => setOTP(e)}/>
                                    <Typography style={variant.subHeader_2.light} sx={{ display: "flex", color: shade.text.main, justifyContent: 'flex-end' }}>
                                        Resend OTP in 00:29 secs
                                    </Typography>
                                </div>
                                <CustomButton text="Login" theme={props.theme} color={shade.tertiary.main} onClick={handleOTP}/>
                            </CardContent>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )

}

export default OTPpage
