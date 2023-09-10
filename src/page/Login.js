import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Illustration from "../svgIcons/Illustration.png"
import UserInput from '../Components/UserInput'
import CustomButton from '../Components/CustomButton'

const Login = (props) => {
    const variant = props.theme.typography
    const shade = props.theme.palette

    return (
        <Container maxWidth="xl" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
            <Grid container spacing={2} sx={{ width: '100%' }}>
                <Grid item xs={6}>
                    <img src={Illustration} style={{width: '100%'}}/>
                </Grid>
                <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography style={variant.subHeader.bold} sx={{ color: shade.text.main }}>LOGIN</Typography>
                    <Card sx={{ bgcolor: `${props.theme.palette.text.main}33`, marginTop: "16px" }} >
                        <Box>
                            <CardContent>
                                <Typography style={variant.header.bold} sx={{color: shade.text.main}}>
                                    Welcome Back!!
                                </Typography>
                                <Typography style={variant.subHeader_1.light} sx={{color: shade.text.main}}>
                                    Login to continue
                                </Typography>
                            </CardContent>
                        </Box>
                        <Box sx={{margin: '16px', display: "flex", flexDirection: "column", gap:"32px"}}>
                            <UserInput text="Please Enter your phone number" countryCode="+91" theme={props.theme} />
                            <CustomButton text="GET OTP" theme={props.theme} />
                            <Typography style={variant.header.bold} sx={{color: shade.text.main}}>
                                New to our talenthub? <span style={{color: shade.background.main, textDecoration: 'underline'}}>Click here</span>
                            </Typography>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )

}

export default Login
