import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import Illustration from "../svgIcons/Illustration.png"
import UserInput from '../components/UserInput'
import CustomButton from '../components/CustomButton'

const OTPpage = (props) => {
    const variant = props.theme.typography
    const shade = props.theme.palette

    return (
        <div maxWidth="xl" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', marginTop: "-48px" }}>
            <div style={{ display: "flex" }} spacing={2} sx={{ width: '100%' }}>
                <div xs={6}>
                    <img src={Illustration} style={{ width: '100%' }} />
                </div>
                <div xs={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography style={variant.subHeader.bold} sx={{ color: shade.text.main }}>LOGIN</Typography>
                    <Card sx={{ bgcolor: `${props.theme.palette.text.main}33`, marginTop: "16px", borderRadius: "8px" }} >
                        <div>
                            <CardContent>
                                <Typography style={variant.header.bold} sx={{ color: shade.text.main }}>
                                    Welcome Back!!
                                </Typography>
                                <Typography style={variant.subHeader_1.light} sx={{ color: shade.text.main }}>
                                    Login to continue
                                </Typography>
                                <div sx={{ display: 'flex', flexDirection: "column", alignSelf: 'flex-start' }}>
                                    <UserInput text="Please enter 6 digit OTP sent" theme={props.theme} />
                                    <Typography style={variant.subHeader_2.light} sx={{ display: "flex", color: shade.text.main, justifyContent: 'flex-end' }}>
                                        Resend OTP in 00:29 secs
                                    </Typography>
                                </div>
                                <CustomButton text="GET OTP" theme={props.theme} color={shade.tertiary.main} />
                                <Typography style={variant.header.bold} sx={{ color: shade.text.main }}>
                                    New to our talenthub? <span style={{ color: shade.background.main, textDecoration: 'underline' }}>Click here</span>
                                </Typography>
                            </CardContent>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )

}

export default OTPpage
