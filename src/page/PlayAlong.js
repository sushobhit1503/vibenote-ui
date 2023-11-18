import {Typography, Card, CardContent, Avatar, Box, Container, Grid } from '@mui/material'
import React from 'react'
import Drum from "../svgIcons/drum"
import Acoustic from "../svgIcons/acoustic"
import Piano from "../svgIcons/piano"
import Electric from "../svgIcons/electric"
import Flat from "../svgIcons/flat"
import Plus from "../svgIcons/plus"
import Minus from "../svgIcons/minus"
import Sharp from "../svgIcons/sharp"
import Metronome from "../svgIcons/metronome"
import Mute from "../svgIcons/mute"
import Trim from "../svgIcons/trim"
import Loop from "../svgIcons/loop"
import CurrentTrack from "../svgIcons/currentTrack"
import Notes from "../assets/Notes.png"
import InputSlider from "../components/InputSlider"
import { deepPurple } from '@mui/material/colors';
import CustomIconButton from '../components/CustomIconButton'
import { useLocation } from 'react-router-dom'
import UserInput from '../components/UserInput'
import Backward from '../svgIcons/backward'
import Play from '../svgIcons/play'
import { Download, Settings } from '@mui/icons-material'
import Expand from '../svgIcons/expand'
import Forward from '../svgIcons/forward'
import Language from '../svgIcons/language'

const PlayAlong = (props) => {
    const location = useLocation();
    const { songDetails } = location.state || {};

    console.log(songDetails);
    const variant = props.theme.typography
    const shade = props.theme.palette

    return (
        <Container maxWidth="xl">
            <div className='flex-align-center margin-top-max'>
                <UserInput text="Search any song" icon={true} theme={props.theme} />
            </div>
            <Grid container spacing={2}>
                <Grid item xs={9} >
                    <Typography style={variant.header.bold} sx={{ color: shade.text.main }}>DRUM NOTES</Typography>
                    <Box sx={{ maxHeight: "31.25rem", overflow: "scroll", overflowX: "hidden", whiteSpace: "pre-line"}}>
                    <Box sx={{ maxHeight: "31.25rem", overflow: "scroll", overflowX: "hidden" }}>
                        <img src={Notes} />
                        <img src={Notes} />
                        <img src={Notes} />
                    </Box>
                    </Box>
                    <InputSlider theme={props.theme} width='100%' height='0.313rem' thumbSize='1rem' />
                    <Box sx={{ maxHeight: "31.25rem", bgcolor: `${props.theme.palette.text.main}33`, marginTop: '-1rem', borderBottomLeftRadius: '0.5rem', borderBottomRightRadius: '0.5rem', display: 'flex', paddingBottom: '1rem', display: 'flex', flexDirection: 'column' }}>

                        <Typography style={variant.subHeader_2.light} sx={{ color: shade.text.main, marginBottom: '1rem', marginLeft: '1rem' }}>
                            3:26 / 5:26
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop:'-1rem' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  marginLeft:'30rem', alignItems:'center' }}>
                                <div style={{ marginRight: '16px' }}><Backward /></div>
                                <div style={{ marginRight: '16px' }}><CustomIconButton theme={props.theme} icon={<Play />} size='3.5rem' sx={{ width: '1rem', margin: "0 1rem" }}></CustomIconButton></div>
                                <div style={{ marginRight: '16px' }}><Forward /></div>
                            </Box>

                            <Box sx={{ display: 'inline-flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                <div style={{ marginRight: '16px' }}><Loop /></div>
                                <div style={{ marginRight: '16px' }}><Download /></div>
                                <div style={{ marginRight: '16px' }}><Language/></div>
                                <div style={{ marginRight: '16px' }}><Settings /></div>
                                <div style={{ marginRight: '16px' }}><Expand /></div>
                            </Box>
                        </Box>
                    </Box>
                    <Typography style={variant.header.bold} sx={{ color: shade.text.main }}>
                        {/* {songDetails.songData.trackName} | {songDetails.songData.artistName} | {songDetails.songData.albumName} */}
                    </Typography>
                    <Typography style={variant.header.bold} sx={{ color: shade.tertiary.main }}>
                        T-Series
                    </Typography>

                </Grid>

                <Grid item xs={3}>
                    <Typography style={variant.header.bold} sx={{ color: shade.text.main }}>SONG CONTROLS</Typography>
                    <Card sx={{ bgcolor: `${props.theme.palette.text.main}33`, borderRadius: "0.5rem" }}>
                        <Box>
                            <CardContent>
                                <Typography style={variant.subHeader.bold} sx={{ color: shade.text.main }}>
                                    Track Instruments
                                </Typography>
                            </CardContent>
                        </Box>
                        <Box sx={{ margin: "-1rem 0px 1rem 1rem" }} display='flex' flexDirection='row' gap='1rem'>
                            <Box display="flex" gap='1rem' alignItems='center'>
                                <CustomIconButton theme={props.theme} icon={<Drum />} sx={{ marginRight: "1rem" }}></CustomIconButton>
                            </Box>
                            <Box display="flex" gap='1rem' alignItems='center'>
                                <CustomIconButton theme={props.theme} icon={<Piano />} sx={{ marginRight: "1rem" }}></CustomIconButton>
                            </Box>
                            <Box display="flex" gap='1rem' alignItems='center'>
                                <CustomIconButton theme={props.theme} icon={<Acoustic />} sx={{ marginRight: "1rem" }}></CustomIconButton>
                            </Box>
                            <Box display="flex" gap='1rem' alignItems='center'>
                                <CustomIconButton theme={props.theme} icon={<Electric />} sx={{ marginRight: "1rem" }}></CustomIconButton>
                            </Box>
                        </Box>
                    </Card>
                    <Card sx={{ bgcolor: `${props.theme.palette.text.main}33`, marginTop: "1rem", borderRadius: "0.5rem" }}>
                        <Box >
                            <CardContent >
                                <Typography style={variant.subHeader.bold} sx={{ color: shade.text.main }}>
                                    Transpose <span style={{ color: shade.text.main, marginLeft:'10rem' }}>G#</span>
                                </Typography>
                            </CardContent>
                        </Box>
                        <Box sx={{ margin: "-1rem 0px 1rem 1rem" }} display='flex' flexDirection='column' gap='1rem'>
                            <Box display="flex" gap='1rem' alignItems='center'>
                                <CustomIconButton theme={props.theme} icon={<Flat />} sx={{ marginRight: "1rem" }}></CustomIconButton>
                                <InputSlider theme={props.theme} width='12rem' height='0.188rem' thumbSize='0.5rem' />
                                <CustomIconButton theme={props.theme} icon={<Sharp />} sx={{ marginRight: "1rem" }}></CustomIconButton>
                            </Box>
                        </Box>
                    </Card>
                    <Card sx={{ bgcolor: `${props.theme.palette.text.main}33`, marginTop: "1rem", borderRadius: "0.5rem" }}>
                        <Box >
                            <CardContent >
                                <Typography style={variant.subHeader.bold} sx={{ color: shade.text.main }}>
                                    Tempo <span style={{ color: shade.text.main, marginLeft:'12rem' }}>50%</span>
                                </Typography>
                            </CardContent>
                        </Box>
                        <Box sx={{ margin: "-1rem 0px 1rem 1rem" }} display='flex' flexDirection='column' gap='1rem'>
                            <Box display="flex" gap='1rem' alignItems='center'>
                                <CustomIconButton theme={props.theme} icon={<Minus />} sx={{ marginRight: "1rem" }}></CustomIconButton>
                                <InputSlider theme={props.theme} width='12rem' height='0.188rem' thumbSize='0.5rem' />
                                <CustomIconButton theme={props.theme} icon={<Plus />} sx={{ marginRight: "1rem" }}></CustomIconButton>
                            </Box>
                        </Box>
                    </Card>

                </Grid>
            </Grid>
        </Container>
    );
};


export default PlayAlong

        // <Container maxWidth="xl">
        //     <div className='flex-align-center margin-top-max'>
        //         <UserInput text="Search any song" icon={true} theme={props.theme} />
        //     </div>
        //     <Grid container spacing={2}>
        //         <Grid item xs={9} >
        //             <Typography style={variant.header.bold} sx={{ color: shade.text.main }}>DRUM NOTES</Typography>
        //             <Box sx={{ maxHeight: "31.25rem", overflow: "scroll", overflowX: "hidden", whiteSpace: "pre-line"}}>
                    // <Box sx={{ maxHeight: "31.25rem", overflow: "scroll", overflowX: "hidden" }}>
                    //     <img src={Notes} />
                    //     <img src={Notes} />
                    //     <img src={Notes} />
                    // </Box>
        //             </Box>
        //             <InputSlider theme={props.theme} width='100%' height='0.313rem' thumbSize='1rem' />
        //             <Box sx={{ maxHeight: "31.25rem", bgcolor: `${props.theme.palette.text.main}33`, marginTop: '-1rem', borderBottomLeftRadius: '0.5rem', borderBottomRightRadius: '0.5rem', display: 'flex', paddingBottom: '1rem', display: 'flex', flexDirection: 'column' }}>

        //                 <Typography style={variant.subHeader_2.light} sx={{ color: shade.text.main, marginBottom: '1rem', marginLeft: '1rem' }}>
        //                     3:26 / 5:26
        //                 </Typography>
        //                 <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop:'-1rem' }}>
        //                     <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  marginLeft:'30rem', alignItems:'center' }}>
        //                         <div style={{ marginRight: '16px' }}><Backward /></div>
        //                         <div style={{ marginRight: '16px' }}><CustomIconButton theme={props.theme} icon={<Play />} size='3.5rem' sx={{ width: '1rem', margin: "0 1rem" }}></CustomIconButton></div>
        //                         <div style={{ marginRight: '16px' }}><Forward /></div>
        //                     </Box>

        //                     <Box sx={{ display: 'inline-flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        //                         <div style={{ marginRight: '16px' }}><Loop /></div>
        //                         <div style={{ marginRight: '16px' }}><Download /></div>
        //                         <div style={{ marginRight: '16px' }}><Language /></div>
        //                         <div style={{ marginRight: '16px' }}><Settings /></div>
        //                         <div style={{ marginRight: '16px' }}><Expand /></div>
        //                     </Box>
        //                 </Box>
        //             </Box>
        //             <Typography style={variant.header.bold} sx={{ color: shade.text.main }}>
        //                 {/* {songDetails.songData.trackName} | {songDetails.songData.artistName} | {songDetails.songData.albumName} */}
        //             </Typography>
        //             <Typography style={variant.header.bold} sx={{ color: shade.tertiary.main }}>
        //                 T-Series
        //             </Typography>

        //         </Grid>

        //         <Grid item xs={3}>
        //             <Typography style={variant.header.bold} sx={{ color: shade.text.main }}>SONG CONTROLS</Typography>
        //             <Card sx={{ bgcolor: `${props.theme.palette.text.main}33`, borderRadius: "0.5rem" }}>
        //                 <Box>
        //                     <CardContent>
        //                         <Typography style={variant.subHeader.bold} sx={{ color: shade.text.main }}>
        //                             Track Instruments
        //                         </Typography>
        //                     </CardContent>
        //                 </Box>
        //                 <Box sx={{ margin: "-1rem 0px 1rem 1rem" }} display='flex' flexDirection='column' gap='1rem'>
        //                     <Box display="flex" gap='1rem' alignItems='center'>
        //                         <CustomIconButton theme={props.theme} icon={<Mute />} size='2.25rem' sx={{ width: '1rem', marginRight: "1rem" }}></CustomIconButton>
        //                         <InputSlider theme={props.theme} width='13rem' height='0.188rem' thumbSize='0.5rem' />
        //                         <CustomIconButton theme={props.theme} icon={<Vocals />} sx={{ marginRight: "1rem" }}></CustomIconButton>
        //                     </Box>
        //                     <Box display="flex" gap='1rem' alignItems='center'>
        //                         <CustomIconButton theme={props.theme} icon={<Mute />} size='2.25rem' sx={{ marginRight: "1rem" }}></CustomIconButton>
        //                         <InputSlider theme={props.theme} width='13rem' height='0.188rem' thumbSize='0.5rem' />
        //                         <CustomIconButton theme={props.theme} icon={<Drum />} sx={{ marginRight: "1rem" }}></CustomIconButton>
        //                     </Box>
        //                     <Box display="flex" gap='1rem' alignItems='center'>
        //                         <CustomIconButton theme={props.theme} icon={<Mute />} size='2.25rem' sx={{ marginRight: "1rem" }}></CustomIconButton>
        //                         <InputSlider theme={props.theme} width='13rem' height='0.188rem' thumbSize='0.5rem' />
        //                         <CustomIconButton theme={props.theme} icon={<Piano />} sx={{ marginRight: "1rem" }}></CustomIconButton>
        //                     </Box>
        //                     <Box display="flex" gap='1rem' alignItems='center'>
        //                         <CustomIconButton theme={props.theme} icon={<Mute />} size='2.25rem' sx={{ marginRight: "1rem" }}></CustomIconButton>
        //                         <InputSlider theme={props.theme} width='13rem' height='0.188rem' thumbSize='0.5rem' />
        //                         <CustomIconButton theme={props.theme} icon={<Acoustic />} sx={{ marginRight: "1rem" }}></CustomIconButton>
        //                     </Box>
        //                     <Box display="flex" gap='1rem' alignItems='center'>
        //                         <CustomIconButton theme={props.theme} icon={<Mute />} size='2.25rem' sx={{ marginRight: "1rem" }}></CustomIconButton>
        //                         <InputSlider theme={props.theme} width='13rem' height='0.188rem' thumbSize='0.5rem' />
        //                         <CustomIconButton theme={props.theme} icon={<Electric />} sx={{ marginRight: "1rem" }}></CustomIconButton>
        //                     </Box>
        //                 </Box>
        //             </Card>
        //             <Card sx={{ bgcolor: `${props.theme.palette.text.main}33`, marginTop: "1rem", borderRadius: "0.5rem" }}>
        //                 <Box >
        //                     <CardContent >
        //                         <Typography style={variant.subHeader.bold} sx={{ color: shade.text.main }}>
        //                             Transpose <span style={{ color: shade.text.main, marginLeft:'10rem' }}>G#</span>
        //                         </Typography>
        //                     </CardContent>
        //                 </Box>
        //                 <Box sx={{ margin: "-1rem 0px 1rem 1rem" }} display='flex' flexDirection='column' gap='1rem'>
        //                     <Box display="flex" gap='1rem' alignItems='center'>
        //                         <CustomIconButton theme={props.theme} icon={<Flat />} sx={{ marginRight: "1rem" }}></CustomIconButton>
        //                         <InputSlider theme={props.theme} width='12rem' height='0.188rem' thumbSize='0.5rem' />
        //                         <CustomIconButton theme={props.theme} icon={<Sharp />} sx={{ marginRight: "1rem" }}></CustomIconButton>
        //                     </Box>
        //                 </Box>
        //             </Card>
        //             <Card sx={{ bgcolor: `${props.theme.palette.text.main}33`, marginTop: "1rem", borderRadius: "0.5rem" }}>
        //                 <Box >
        //                     <CardContent >
        //                         <Typography style={variant.subHeader.bold} sx={{ color: shade.text.main }}>
        //                             Tempo <span style={{ color: shade.text.main, marginLeft:'12rem' }}>50%</span>
        //                         </Typography>
        //                     </CardContent>
        //                 </Box>
        //                 <Box sx={{ margin: "-1rem 0px 1rem 1rem" }} display='flex' flexDirection='column' gap='1rem'>
        //                     <Box display="flex" gap='1rem' alignItems='center'>
        //                         <CustomIconButton theme={props.theme} icon={<Minus />} sx={{ marginRight: "1rem" }}></CustomIconButton>
        //                         <InputSlider theme={props.theme} width='12rem' height='0.188rem' thumbSize='0.5rem' />
        //                         <CustomIconButton theme={props.theme} icon={<Plus />} sx={{ marginRight: "1rem" }}></CustomIconButton>
        //                     </Box>
        //                 </Box>
        //             </Card>

        //         </Grid>
        //     </Grid>
        // </Container>