import { Avatar, Box, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import InputSlider from '../components/InputSlider'
import Drum from '../svgIcons/drum'
import { Loop, Piano } from '@mui/icons-material'
import Acoustic from '../svgIcons/acoustic'
import Electric from '../svgIcons/electric'
import CustomIconButton from '../components/CustomIconButton'
import Mute from '../svgIcons/mute'
import { Vocals } from '../svgIcons/vocals'
import Minus from '../svgIcons/minus'
import Plus from '../svgIcons/plus'
import { deepPurple } from '@mui/material/colors';
import Sharp from '../svgIcons/sharp'
import Flat from '../svgIcons/flat'
import Metronome from '../svgIcons/metronome'
import CurrentTrack from '../svgIcons/currentTrack'
import Trim from '../svgIcons/trim'

const Karaoke = (props) => {
    const variant = props.theme.typography
    const shade = props.theme.palette

  return (
    <Container maxWidth="xl">
        <Grid container spacing={2}>
              <Grid item xs={9}>
                  <Typography style={variant.header.bold} sx={{ color: shade.text.main }}>LYRICS</Typography>
                    <Box sx={{ maxHeight: "500px", overflow: "scroll", overflowX: "hidden" }}>
                        {/* lyrics */}
                    </Box>
                    <InputSlider theme={props.theme} width='100%' height='5px' thumbSize='16px'/>
                    <Typography style={variant.subHeader.bold} sx={{color: shade.text.main}}>
                        3:26 / 5:26
                    </Typography>
              </Grid>

              <Grid item xs={3}>
                  <Typography style={variant.header.bold} sx={{ color: shade.text.main }}>SONG CONTROLS</Typography>
                    <Card sx={{ bgcolor: `${props.theme.palette.text.main}33`, marginTop: "16px", borderRadius: "8px"}}>
                        <Box> 
                            <CardContent>
                                <Typography style={variant.subHeader.bold} sx={{color: shade.text.main}}>
                                    Track Instruments
                                </Typography>
                            </CardContent>
                        </Box>
                        <Box sx={{ margin: "-16px 0px 16px 16px" }} display='flex' flexDirection='column' gap='16px'>
                            <Box display="flex" gap='16px'  alignItems='center'>
                              <CustomIconButton theme={props.theme} icon={<Mute />} size='32px' sx={{ width: '16px', marginRight: "16px" }}></CustomIconButton>
                                <InputSlider theme={props.theme} width='116px' height='3px' thumbSize='8px'/>
                                <CustomIconButton theme={props.theme} icon={<Vocals />} sx={{ marginRight: "16px" }}></CustomIconButton>
                            </Box>
                            <Box display="flex" gap='16px'  alignItems='center'>
                                <CustomIconButton theme={props.theme} icon={<Mute />} size='32px' sx={{ marginRight: "16px" }}></CustomIconButton>
                                <InputSlider theme={props.theme} width='116px' height='3px' thumbSize='8px'/>
                                <CustomIconButton theme={props.theme} icon={<Drum />} sx={{ marginRight: "16px" }}></CustomIconButton>
                            </Box>
                            <Box display="flex" gap='16px'  alignItems='center'>
                                <CustomIconButton theme={props.theme} icon={<Mute />} size='32px' sx={{ marginRight: "16px" }}></CustomIconButton>
                                <InputSlider theme={props.theme} width='116px' height='3px' thumbSize='8px'/>
                                <CustomIconButton theme={props.theme} icon={<Piano />} sx={{ marginRight: "16px" }}></CustomIconButton>
                            </Box>
                            <Box display="flex" gap='16px'  alignItems='center'>
                                <CustomIconButton theme={props.theme} icon={<Mute />} size='32px' sx={{ marginRight: "16px" }}></CustomIconButton>
                                <InputSlider theme={props.theme} width='116px' height='3px' thumbSize='8px'/>
                                <CustomIconButton theme={props.theme} icon={<Acoustic />} sx={{ marginRight: "16px" }}></CustomIconButton>
                            </Box>
                            <Box display="flex" gap='16px'  alignItems='center'>
                                <CustomIconButton theme={props.theme} icon={<Mute />} size='32px' sx={{ marginRight: "16px" }}></CustomIconButton>
                                <InputSlider theme={props.theme} width='116px' height='3px' thumbSize='8px'/>
                                <CustomIconButton theme={props.theme} icon={<Electric />} sx={{ marginRight: "16px" }}></CustomIconButton>
                            </Box>
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
                              <Flat/>
                            </Avatar>
                            <InputSlider theme={props.theme} width='116px' height='3px' thumbSize='8px'/>
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
                            <InputSlider theme={props.theme} width='116px' height='3px' thumbSize='8px'/>
                            <Avatar sx={{ bgcolor: deepPurple[500] }}>
                                <Plus />
                            </Avatar>
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
                            <Box sx={{ margin: "0px 0px 16px 16px" }} display= 'flex' gap='16px'>
                                <CustomIconButton theme={props.theme} icon={ <Trim />} sx={{ marginRight: "16px" }}></CustomIconButton>
                                <CustomIconButton theme={props.theme} icon={<Loop />} sx={{ marginRight: "16px" }}></CustomIconButton>
                                <CustomIconButton theme={props.theme} icon={ <Metronome />} sx={{ marginRight: "16px" }}></CustomIconButton>
                                <CustomIconButton theme={props.theme} icon={ <CurrentTrack />} sx={{ marginRight: "16px" }}></CustomIconButton>
                                <CustomIconButton theme={props.theme} icon={ <Mute />} sx={{ marginRight: "16px" }}></CustomIconButton>
                            </Box>
                        </Stack>
                    </Card>
              </Grid>
        </Grid>
    </Container>
  )
}

export default Karaoke
