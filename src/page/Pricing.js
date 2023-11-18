import { Box, Card, CardActions, CardContent, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import CustomButton from '../components/CustomButton'
import Accessible from '../svgIcons/access'
import NotAccessible from '../svgIcons/noAccess'

const Pricing = (props) => {

    const variant = props.theme.typography
    const shade = props.theme.palette

    return (
        <Container maxWidth="xl">
            <Typography style={variant.header.bold} sx={{ color: shade.text.main, marginTop:'2%' }}>
                PRICING
            </Typography>
            <Grid container spacing={4} sx={{marginTop:'2%'}}>
                <Grid item xs={4}>
                    <Card spacing={3} sx={{border: `2.5px solid ${shade.tertiary.main}`}} variant="outlined" style={{ background: `${props.theme.palette.text.main}10`, borderRadius: "0.5rem", }}>
                        <CardContent style={{flexDirection:'column', justifyContent:'center'}}>
                            <Typography style={variant.header.bold} sx={{ color: shade.text.main }}>
                                Beginner
                            </Typography>
                            <Typography style={variant.header.bold} sx={{ color: shade.tertiary.main }}>
                                Free
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography style={variant.subHeader_2.light} sx={{ color: shade.text.main }}>
                                For those who want to start learning and explore VibeNote
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <CustomButton text="Start for Free" color={shade.text.main} theme={props.theme}></CustomButton>
                        </CardContent>
                        <CardContent>
                            <div style={{display:'flex', alignItems:'center', gap:'3px'}}>
                                <Accessible />
                                <Typography style={variant.subHeader_2.light} sx={{ color: shade.tertiary.main }}>
                                    100 credits free
                                </Typography>
                            </div>
                        </CardContent>
                        <CardContent>
                            <div style={{display:'flex', alignItems:'center', gap:'3px'}}>
                                <Accessible />
                                <Typography style={variant.subHeader_2.light} sx={{ color: shade.tertiary.main }}>
                                    Access to Lyrics and Stock Music
                                </Typography>
                            </div>
                        </CardContent>
                        <CardContent>
                            <div style={{display:'flex', alignItems:'center', gap:'3px'}}>
                                <NotAccessible />
                                <Typography style={variant.subHeader_2.light} sx={{ color: shade.text.main }}>
                                    Premium Song Control Features
                                </Typography>
                            </div>
                        </CardContent>
                        <CardContent>
                            <div style={{display:'flex', alignItems:'center', gap:'3px'}}>
                                <NotAccessible />
                                <Typography style={variant.subHeader_2.light} sx={{ color: shade.text.main }}>
                                    Stock Music Control Panel
                                </Typography>
                            </div>
                        </CardContent>
                        <CardContent>
                            <div style={{display:'flex', alignItems:'center', gap:'3px'}}>
                                <NotAccessible />
                                <Typography style={variant.subHeader_2.light} sx={{ color: shade.text.main }}>
                                    Unlimited Music Recommendation
                                </Typography>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>    

                <Grid item xs={4}>
                    <Card spacing={3} sx={{border: `2.5px solid ${shade.tertiary.main}`}} variant="outlined" style={{
                        background: `${props.theme.palette.text.main}40`, borderRadius: "0.5rem"}}>
                        <CardContent style={{flexDirection:'column', justifyContent:'center'}}>
                            <Typography style={variant.header.bold} sx={{ color: shade.text.main }}>
                                Intermediate
                            </Typography>
                            <Typography style={variant.header.bold} sx={{ color: shade.tertiary.main }}>
                                Rs 499
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography style={variant.subHeader_2.light} sx={{ color: shade.text.main }}>
                                For learning instrument players and singers who want to grow more
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <CustomButton text="Continue" color={shade.tertiary.main} theme={props.theme}></CustomButton>
                        </CardContent>
                        <CardContent>
                            <div style={{display:'flex', alignItems:'center', gap:'3px'}}>
                                <Accessible />
                                <Typography style={variant.subHeader_2.light} sx={{ color: shade.tertiary.main }}>
                                    1000 credits free
                                </Typography>
                            </div>
                        </CardContent>
                        <CardContent>
                            <div style={{display:'flex', alignItems:'center', gap:'3px'}}>
                                <Accessible />
                                <Typography style={variant.subHeader_2.light} sx={{ color: shade.tertiary.main }}>
                                    Access to Lyrics and Stock Music
                                </Typography>
                            </div>
                        </CardContent>
                        <CardContent>
                            <div style={{display:'flex', alignItems:'center', gap:'3px'}}>
                                <Accessible />
                                <Typography style={variant.subHeader_2.light} sx={{ color: shade.tertiary.main }}>
                                    Premium Song Control Features
                                </Typography>
                            </div>
                        </CardContent>
                        <CardContent>
                            <div style={{display:'flex', alignItems:'center', gap:'3px'}}>
                                <Accessible />
                                <Typography style={variant.subHeader_2.light} sx={{ color: shade.tertiary.main }}>
                                    Stock Music Control Panel
                                </Typography>
                            </div>
                        </CardContent>
                        <CardContent>
                            <div style={{display:'flex', alignItems:'center', gap:'3px'}}>
                                <NotAccessible />
                                <Typography style={variant.subHeader_2.light} sx={{ color: shade.text.main }}>
                                    Unlimited Music Recommendation
                                </Typography>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card spacing={3} sx={{border: `2.5px solid ${shade.tertiary.main}`}} variant="outlined"  style={{ background: `${props.theme.palette.text.main}10`, borderRadius: "0.5rem", }}>
                        <CardContent style={{flexDirection:'column', justifyContent:'center'}}>
                            <Typography style={variant.header.bold} sx={{ color: shade.text.main }}>
                                Advanced
                            </Typography>
                            <Typography style={variant.header.bold} sx={{ color: shade.tertiary.main }}>
                                Rs 1999
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography style={variant.subHeader_2.light} sx={{ color: shade.text.main }}>
                                For using in public events and accessing all features
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <CustomButton text="Continue" color={shade.text.main} theme={props.theme}></CustomButton>
                        </CardContent>
                        <CardContent>
                            <div style={{display:'flex', alignItems:'center', gap:'3px'}}>
                                <Accessible />
                                <Typography style={variant.subHeader_2.light} sx={{ color: shade.tertiary.main }}>
                                    10000 credits free
                                </Typography>
                            </div>
                        </CardContent>
                        <CardContent>
                            <div style={{display:'flex', alignItems:'center', gap:'3px'}}>
                                <Accessible />
                                <Typography style={variant.subHeader_2.light} sx={{ color: shade.tertiary.main }}>
                                    Access to Lyrics and Stock Music
                                </Typography>
                            </div>
                        </CardContent>
                        <CardContent>
                            <div style={{display:'flex', alignItems:'center', gap:'3px'}}>
                                <Accessible />
                                <Typography style={variant.subHeader_2.light} sx={{ color: shade.tertiary.main }}>
                                    Premium Song Control Features
                                </Typography>
                            </div>
                        </CardContent>
                        <CardContent>
                            <div style={{display:'flex', alignItems:'center', gap:'3px'}}>
                                <Accessible />
                                <Typography style={variant.subHeader_2.light} sx={{ color: shade.tertiary.main }}>
                                    Stock Music Control Panel
                                </Typography>
                            </div>
                        </CardContent>
                        <CardContent>
                            <div style={{display:'flex', alignItems:'center', gap:'3px'}}>
                                <Accessible />
                                <Typography style={variant.subHeader_2.light} sx={{ color: shade.tertiary.main }}>
                                    Unlimited Music Recommendation
                                </Typography>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Pricing