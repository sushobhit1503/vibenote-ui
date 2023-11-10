import { Avatar, Box, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import InputSlider from '../components/InputSlider'
import Drum from '../svgIcons/drum'
import { Piano } from '@mui/icons-material'
import Acoustic from '../svgIcons/acoustic'
import Electric from '../svgIcons/electric'
import CustomIconButton from '../components/CustomIconButton'
import Mute from '../svgIcons/mute'
import { Vocals } from '../svgIcons/vocals'
import UserInput from "../components/UserInput"
import Minus from '../svgIcons/minus'
import Plus from '../svgIcons/plus'
import { deepPurple } from '@mui/material/colors';
import Sharp from '../svgIcons/sharp'
import Flat from '../svgIcons/flat'
import Metronome from '../svgIcons/metronome'
import CurrentTrack from '../svgIcons/currentTrack'
import Trim from '../svgIcons/trim'
import { useLocation } from 'react-router-dom'
import Play from '../svgIcons/play'
import Backward from '../svgIcons/backward'
import Download from '../svgIcons/download'
import Language from '../svgIcons/language'
import Settings from '../svgIcons/settings'
import Expand from '../svgIcons/expand'
import Forward from '../svgIcons/forward'
import Loop from '../svgIcons/loop'


const Karaoke = (props) => {
    console.log(props);
    // const location = useLocation();
    const variant = props.theme.typography
    const shade = props.theme.palette

    // const { songDetails } = location.state

    return (
        <Container maxWidth="xl">
            <div className='flex-align-center margin-top-max'>
                <UserInput text="Search any song" icon={true} theme={props.theme} />
            </div>
            <Grid container spacing={2}>
                <Grid item xs={9} >
                    <Typography style={variant.header.bold} sx={{ color: shade.text.main }}>LYRICS</Typography>
                    <Box sx={{ maxHeight: "31.25rem", overflow: "scroll", overflowX: "hidden", whiteSpace: "pre-line" }}>
                        <Typography style={variant.subHeader.light} sx={{ color: shade.tertiary.main }}>
                            {/* {songDetails.lyricsData.lyricsBody} */}
                        </Typography>
                    </Box>
                    <InputSlider theme={props.theme} width='100%' height='0.313rem' thumbSize='1rem' />
                    <Box sx={{ maxHeight: "31.25rem", bgcolor: `${props.theme.palette.text.main}33`, marginTop: '-16px', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px', display: 'flex', paddingBottom: '8px', display: 'flex', flexDirection: 'column' }}>

                        <Typography style={variant.subHeader_2.light} sx={{ color: shade.text.main, marginBottom: '1rem', marginLeft: '16px' }}>
                            3:26 / 5:26
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ marginRight: '16px' }}><Backward /></div>
                                <div style={{ marginRight: '16px' }}><CustomIconButton theme={props.theme} icon={<Play />} size='3.5rem' sx={{ width: '1rem', margin: "0 1rem" }}></CustomIconButton></div>
                                <div style={{ marginRight: '16px' }}><Forward /></div>
                            </Box>

                            <Box sx={{ display: 'inline-flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                <div style={{ marginRight: '16px' }}><Loop /></div>
                                <div style={{ marginRight: '16px' }}><Download /></div>
                                <div style={{ marginRight: '16px' }}><Language /></div>
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
                    <Card sx={{ bgcolor: `${props.theme.palette.text.main}33`, marginTop: "1rem", borderRadius: "0.5rem" }}>
                        <Box>
                            <CardContent>
                                <Typography style={variant.subHeader.bold} sx={{ color: shade.text.main }}>
                                    Track Instruments
                                </Typography>
                            </CardContent>
                        </Box>
                        <Box sx={{ margin: "-1rem 0px 1rem 1rem" }} display='flex' flexDirection='column' gap='1rem'>
                            <Box display="flex" gap='1rem' alignItems='center'>
                                <CustomIconButton theme={props.theme} icon={<Mute />} size='2.25rem' sx={{ width: '1rem', marginRight: "1rem" }}></CustomIconButton>
                                <InputSlider theme={props.theme} width='7.25rem' height='0.188rem' thumbSize='0.5rem' />
                                <CustomIconButton theme={props.theme} icon={<Vocals />} sx={{ marginRight: "1rem" }}></CustomIconButton>
                            </Box>
                            <Box display="flex" gap='1rem' alignItems='center'>
                                <CustomIconButton theme={props.theme} icon={<Mute />} size='2.25rem' sx={{ marginRight: "1rem" }}></CustomIconButton>
                                <InputSlider theme={props.theme} width='7.25rem' height='0.188rem' thumbSize='0.5rem' />
                                <CustomIconButton theme={props.theme} icon={<Drum />} sx={{ marginRight: "1rem" }}></CustomIconButton>
                            </Box>
                            <Box display="flex" gap='1rem' alignItems='center'>
                                <CustomIconButton theme={props.theme} icon={<Mute />} size='2.25rem' sx={{ marginRight: "1rem" }}></CustomIconButton>
                                <InputSlider theme={props.theme} width='7.25rem' height='0.188rem' thumbSize='0.5rem' />
                                <CustomIconButton theme={props.theme} icon={<Piano />} sx={{ marginRight: "1rem" }}></CustomIconButton>
                            </Box>
                            <Box display="flex" gap='1rem' alignItems='center'>
                                <CustomIconButton theme={props.theme} icon={<Mute />} size='2.25rem' sx={{ marginRight: "1rem" }}></CustomIconButton>
                                <InputSlider theme={props.theme} width='7.25rem' height='0.188rem' thumbSize='0.5rem' />
                                <CustomIconButton theme={props.theme} icon={<Acoustic />} sx={{ marginRight: "1rem" }}></CustomIconButton>
                            </Box>
                            <Box display="flex" gap='1rem' alignItems='center'>
                                <CustomIconButton theme={props.theme} icon={<Mute />} size='2.25rem' sx={{ marginRight: "1rem" }}></CustomIconButton>
                                <InputSlider theme={props.theme} width='7.25rem' height='0.188rem' thumbSize='0.5rem' />
                                <CustomIconButton theme={props.theme} icon={<Electric />} sx={{ marginRight: "1rem" }}></CustomIconButton>
                            </Box>
                        </Box>
                    </Card>
                    <Card sx={{ bgcolor: `${props.theme.palette.text.main}33`, marginTop: "1rem" }} >
                        <Box sx={{ display: "flex", justifyContent: "between" }}>
                            <Stack direction="row" sx={{ margin: "1rem 0px 1rem 1rem" }} justifyContent="space-between">
                                <Typography style={variant.subHeader.bold} sx={{ color: shade.text.main }}>
                                    Transpose
                                </Typography>
                                <Typography style={variant.subHeader.bold} sx={{ color: shade.text.main }}>
                                    G#
                                </Typography>
                            </Stack>
                        </Box>
                        <Stack spacing={2} direction="row" sx={{ margin: "0px 0px 1rem 1rem" }} alignItems="center">
                            <Avatar sx={{ bgcolor: deepPurple[500] }}>
                                <Flat />
                            </Avatar>
                            <InputSlider theme={props.theme} width='7.25rem' height='0.188rem' thumbSize='0.5rem' />
                            <Avatar sx={{ bgcolor: deepPurple[500] }}>
                                <Sharp />
                            </Avatar>
                        </Stack>
                    </Card>
                    <Card sx={{ bgcolor: `${props.theme.palette.text.main}33`, marginTop: "1rem" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Stack direction="row" sx={{ margin: "1rem 0px 1rem 1rem" }} justifyContent="space-between">
                                <Typography style={variant.subHeader.bold} sx={{ color: shade.text.main }}>
                                    Tempo
                                </Typography>
                                <Typography style={variant.subHeader.bold} sx={{ color: shade.text.main }}>
                                    50%
                                </Typography>
                            </Stack>
                        </Box>
                        <Stack spacing={2} direction="row" sx={{ margin: "0px 0px 1rem 1rem" }} alignItems="center">
                            <Avatar sx={{ bgcolor: deepPurple[500] }}>
                                <Minus />
                            </Avatar>
                            <InputSlider theme={props.theme} width='7.25rem' height='0.188rem' thumbSize='0.5rem' />
                            <Avatar sx={{ bgcolor: deepPurple[500] }}>
                                <Plus />
                            </Avatar>
                        </Stack>
                    </Card>
                    {/* <Card sx={{ bgcolor: `${props.theme.palette.text.main}33`, marginTop: "1rem"}}>
                        <Box sx={{ display: "flex", justifyContent: "between" }}>
                            <CardContent >
                                <Typography style={variant.subHeader.bold} sx={{color: shade.text.main}}>
                                    Edit Controls
                                </Typography>
                            </CardContent>
                        </Box>
                        <Stack spacing={2} direction="row" sx={{ margin: "0px 0px 1rem 1rem" }} alignItems="center">
                            <Box sx={{ margin: "0px 0px 1rem 1rem" }} display= 'flex' gap='1rem'>
                                <CustomIconButton theme={props.theme} icon={ <Trim />} sx={{ marginRight: "1rem" }}></CustomIconButton>
                                <CustomIconButton theme={props.theme} icon={<Loop />} sx={{ marginRight: "1rem" }}></CustomIconButton>
                                <CustomIconButton theme={props.theme} icon={ <Metronome />} sx={{ marginRight: "1rem" }}></CustomIconButton>
                                <CustomIconButton theme={props.theme} icon={ <CurrentTrack />} sx={{ marginRight: "1rem" }}></CustomIconButton>
                                <CustomIconButton theme={props.theme} icon={ <Mute />} sx={{ marginRight: "1rem" }}></CustomIconButton>
                            </Box>
                        </Stack>
                    </Card> */}

                </Grid>
            </Grid>
        </Container>
    )
}

export default Karaoke
