import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import Illustration from "../svgIcons/Illustration.png"
import UserInput from '../components/UserInput'
import CustomButton from '../components/CustomButton'

const Login = (props) => {
    const variant = props.theme.typography
    const shade = props.theme.palette

    return (
        <div maxWidth="xl" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
            <div style={{ display: "flex" }} spacing={2} sx={{ width: '100%' }}>
                <div xs={6}>
                    <img src={Illustration} style={{ width: '100%' }} />
                </div>
                <div xs={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography style={variant.subHeader.bold} sx={{ color: shade.text.main }}>LOGIN</Typography>
                    <Card sx={{ bgcolor: `${props.theme.palette.text.main}33`, marginTop: "1rem", borderRadius: "0.5rem" }} >
                        <div>
                            <CardContent>
                                <Typography style={variant.header.bold} sx={{ color: shade.text.main }}>
                                    Welcome Back!!
                                </Typography>
                                <UserInput sx={{marginBottom: "1rem"}} text="Please Enter your phone number" countryCode="+91" theme={props.theme} />
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

export default Login
