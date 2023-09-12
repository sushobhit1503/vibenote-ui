import { Grid, Typography, Container, Card, CardContent, Box, Button, Stack, Avatar } from '@mui/material'
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
import Notes from "../svgIcons/Notes.png"
import InputSlider from "../components/InputSlider"
import { deepPurple } from '@mui/material/colors';
import CustomIconButton from '../components/CustomIconButton'

const PlayAlong = (props) => {
    const variant = props.theme.typography
    const shade = props.theme.palette

    return (
        <Container maxWidth="xl">
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <Typography style={variant.header.bold} sx={{color: shade.text.main}}>DRUM NOTES</Typography>
                    <Box sx={{ maxHeight: "500px", overflow: "scroll", overflowX: "hidden" }}>
                        <img src={Notes} />
                        <img src={Notes} />
                        <img src={Notes} />
                    </Box>
                    <InputSlider theme={props.theme} />
                    <Typography style={variant.subHeader.bold} sx={{color: shade.text.main}}>
                        3:26 / 5:26
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography style={variant.header.bold} sx={{color: shade.text.main}}>SONG CONTROLS</Typography>
                    <Card sx={{ bgcolor: `${props.theme.palette.text.main}33`, marginTop: "16px"}}>
                        <Box>
                            <CardContent>
                                <Typography style={variant.subHeader.bold} sx={{color: shade.text.main}}>
                                    Track Instruments
                                </Typography>
                            </CardContent>
                        </Box>
                        <Box sx={{ margin: "0px 0px 16px 16px" }} display= 'flex' gap='32px'>
                            <CustomIconButton theme={props.theme} icon={ <Drum />} sx={{ marginRight: "16px" }}></CustomIconButton>
                            <CustomIconButton theme={props.theme} icon={ <Piano />} sx={{ marginRight: "16px" }}></CustomIconButton>
                            <CustomIconButton theme={props.theme} icon={ <Acoustic />} sx={{ marginRight: "16px" }}></CustomIconButton>
                            <CustomIconButton theme={props.theme} icon={ <Electric />} sx={{ marginRight: "16px" }}></CustomIconButton>
                        </Box>
                    </Card>
                    <Card sx={{ bgcolor: `${props.theme.palette.text.main}33`, marginTop: "16px"}} >
                        <Box sx={{ display: "flex", justifyContent: "between" }}>
                            <Stack direction="row" sx={{ margin: "16px 0px 16px 16px" }} justifyContent="space-between">
                                <Typography style={variant.subHeader.bold} sx={{color: shade.text.main}}>
                                    Transpose
                                </Typography>
                                <Typography style={variant.subHeader.bold} sx={{color: shade.text.main}}>
                                    G#
                                </Typography>
                            </Stack>
                        </Box>
                        <Stack spacing={2} direction="row" sx={{ margin: "0px 0px 16px 16px" }} alignItems="center">
                            <Avatar sx={{ bgcolor: deepPurple[500] }}>
                                <Flat />
                            </Avatar>
                            <InputSlider theme={props.theme} />
                            <Avatar sx={{ bgcolor: deepPurple[500] }}>
                                <Sharp />
                            </Avatar>
                        </Stack>
                    </Card>
                    <Card sx={{ bgcolor: `${props.theme.palette.text.main}33`, marginTop: "16px"}}>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Stack direction="row" sx={{ margin: "16px 0px 16px 16px" }} justifyContent="space-between">
                                <Typography style={variant.subHeader.bold} sx={{color: shade.text.main}}>
                                    Tempo
                                </Typography>
                                <Typography style={variant.subHeader.bold} sx={{color: shade.text.main}}>
                                    50%
                                </Typography>
                            </Stack>
                        </Box>
                        <Stack spacing={2} direction="row" sx={{ margin: "0px 0px 16px 16px" }} alignItems="center">
                            <Avatar sx={{ bgcolor: deepPurple[500] }}>
                                <Minus />
                            </Avatar>
                            <InputSlider theme={props.theme} />
                            <Avatar sx={{ bgcolor: deepPurple[500] }}>
                                <Plus />
                            </Avatar>
                        </Stack>
                    </Card>
                    <Card sx={{ bgcolor: `${props.theme.palette.text.main}33`, marginTop: "16px"}}>
                        <Box sx={{ display: "flex", justifyContent: "between" }}>
                            <CardContent >
                                <Typography style={variant.subHeader.bold} sx={{color: shade.text.main}}>
                                    Track Controls
                                </Typography>
                            </CardContent>
                        </Box>
                        <Stack spacing={2} direction="row" sx={{ margin: "0px 0px 16px 16px" }} alignItems="center">
                            <Box sx={{ margin: "0px 0px 16px 16px" }} display= 'flex' gap='32px'>
                                <CustomIconButton theme={props.theme} icon={ <Metronome />} sx={{ marginRight: "16px" }}></CustomIconButton>
                                <CustomIconButton theme={props.theme} icon={ <CurrentTrack />} sx={{ marginRight: "16px" }}></CustomIconButton>
                                <CustomIconButton theme={props.theme} icon={ <Mute />} sx={{ marginRight: "16px" }}></CustomIconButton>
                            </Box>
                        </Stack>
                    </Card>
                    <Card sx={{ bgcolor: `${props.theme.palette.text.main}33`, marginTop: "16px"}}>
                        <Box sx={{ display: "flex", justifyContent: "between" }}>
                            <CardContent >
                                <Typography style={variant.subHeader.bold} sx={{color: shade.text.main}}>
                                    Edit Controls
                                </Typography>
                            </CardContent>
                        </Box>
                        <Stack spacing={2} direction="row" sx={{ margin: "0px 0px 16px 16px" }} alignItems="center">
                            <Box sx={{ margin: "0px 0px 16px 16px" }} display= 'flex' gap='32px'>
                                <CustomIconButton theme={props.theme} icon={ <Trim />} sx={{ marginRight: "16px" }}></CustomIconButton>
                                <CustomIconButton theme={props.theme} icon={ <Loop />} sx={{ marginRight: "16px" }}></CustomIconButton>
                            </Box>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};


export default PlayAlong