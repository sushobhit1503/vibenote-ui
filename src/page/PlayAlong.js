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

const PlayAlong = (props) => {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <Typography variant='subHeader_1'>DRUM NOTES</Typography>
                    <Box sx={{ maxHeight: "500px", overflow: "scroll", overflowX: "hidden" }}>
                        <img src={Notes} />
                        <img src={Notes} />
                        <img src={Notes} />
                    </Box>
                    <InputSlider theme={props.theme} />
                    <Typography variant='subHeader'>
                        3:26 / 5:26
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant='subHeader_1'>SONG CONTROLS</Typography>
                    <Card theme={props.theme}>
                        <Box>
                            <CardContent>
                                <Typography variant='subHeader'>
                                    Track Instruments
                                </Typography>
                            </CardContent>
                        </Box>
                        <Box sx={{ margin: "0px 0px 16px 16px" }}>
                            <Button variant="contained" sx={{ marginRight: "16px" }}><Drum /></Button>
                            <Button variant="contained" sx={{ marginRight: "16px" }}><Piano /></Button>
                            <Button variant="contained" sx={{ marginRight: "16px" }}><Acoustic /></Button>
                            <Button variant="contained"><Electric /></Button>
                        </Box>
                    </Card>
                    <Card theme={props.theme} sx={{ marginTop: "16px" }}>
                        <Box sx={{ display: "flex", justifyContent: "between" }}>
                            <CardContent >
                                <Typography variant='subHeader'>
                                    Tranpose
                                </Typography>
                                <Typography variant='subHeader'>
                                    G#
                                </Typography>
                            </CardContent>
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
                    <Card theme={props.theme} sx={{ marginTop: "16px" }}>
                        <Box sx={{ display: "flex", justifyContent: "between" }}>
                            <CardContent >
                                <Typography variant='subHeader'>
                                    Tempo
                                </Typography>
                                <Typography variant='subHeader'>
                                    50%
                                </Typography>
                            </CardContent>
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
                    <Card theme={props.theme} sx={{ marginTop: "16px" }}>
                        <Box sx={{ display: "flex", justifyContent: "between" }}>
                            <CardContent >
                                <Typography variant='subHeader'>
                                    Track Controls
                                </Typography>
                            </CardContent>
                        </Box>
                        <Stack spacing={2} direction="row" sx={{ margin: "0px 0px 16px 16px" }} alignItems="center">
                            <Box sx={{ margin: "0px 0px 16px 16px" }}>
                                <Button variant="contained" sx={{ marginRight: "16px" }}><Metronome /></Button>
                                <Button variant="contained" sx={{ marginRight: "16px" }}><CurrentTrack /></Button>
                                <Button variant="contained" sx={{ marginRight: "16px" }}><Mute /></Button>
                            </Box>
                        </Stack>
                    </Card>
                    <Card theme={props.theme} sx={{ marginTop: "16px" }}>
                        <Box sx={{ display: "flex", justifyContent: "between" }}>
                            <CardContent >
                                <Typography variant='subHeader'>
                                    Edit Controls
                                </Typography>
                            </CardContent>
                        </Box>
                        <Stack spacing={2} direction="row" sx={{ margin: "0px 0px 16px 16px" }} alignItems="center">
                            <Box sx={{ margin: "0px 0px 16px 16px" }}>
                                <Button variant="contained" sx={{ marginRight: "16px" }}><Trim /></Button>
                                <Button variant="contained" sx={{ marginRight: "16px" }}><Loop /></Button>
                            </Box>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};


export default PlayAlong