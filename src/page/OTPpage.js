import { Card, CardContent, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Illustration from "../assets/Illustration.png"
import UserInput from '../components/UserInput'
import CustomButton from '../components/CustomButton'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { auth } from "../config/firebaseConfig"
import firebase from '../config/firebaseConfig'
import { backendHostUrl } from '../config/constant'

const OTPpage = (props) => {
    const variant = props.theme.typography
    const shade = props.theme.palette
    const [otp, setOTP] = useState()
    const [result, setResult] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        window.verifier = new firebase.auth.RecaptchaVerifier("recaptcha-container", {
            'size': 'invisible',
            'callback': (response) => {
            }
        })
        let appVerifier = window.verifier
        auth.signInWithPhoneNumber(("+91" + localStorage.getItem("phoneNumber")), appVerifier).then((result) => {
            setResult(result)
        }).catch((err) => {
            console.log(err.message)
        })
    }, [])

    const handleOTP = () => {
        const phoneNumber = localStorage.getItem("phoneNumber")
        if (!otp) {
            console.log('Enter the OTP')
        }

        try {
            result.confirm(otp).then((result) => {
                axios.post(`${backendHostUrl}/otp`, { phoneNumber }).then(data => {
                    console.log(data)
                    if (data.data.message)
                        navigate('/')
                }).catch (err => {
                    console.log(err.message)
                })
            }).catch(err => {
                console.log(err.message);
            })

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div  className='flex-align-center'>
            <div style={{ display: "flex" }}>
                <div xs={6}>
                    <img src={Illustration} />
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
                                    <UserInput text="Please enter 6 digit OTP sent" theme={props.theme} onChange={(e) => setOTP(e)} />
                                    <Typography style={variant.subHeader_2.light} sx={{ display: "flex", color: shade.text.main, justifyContent: 'flex-end' }}>
                                        Resend OTP in 00:29 secs
                                    </Typography>
                                </div>
                                <CustomButton text="Login" theme={props.theme} color={shade.tertiary.main} onClick={handleOTP} />
                            </CardContent>
                        </div>
                    </Card>
                </div>
            </div>
            <div id="recaptcha-container"></div>
        </div>
    )

}

export default OTPpage