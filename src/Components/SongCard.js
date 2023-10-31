import React from 'react'
import { Card, Box, CardContent, Typography, CardMedia } from "@mui/material"
import SongCover from "../svgIcons/song-image.svg"
import { useNavigate } from 'react-router-dom'
import { backendHostUrl } from '../config/constant';
import axios from 'axios';

const SongCard = (props) => {

    const defaultDetails = {
        image: SongCover 
    }
    
    const navigate = useNavigate()

    // handling the selection and fetching lyrics
    const handleCard = async () => {

        try {
            const response = await axios.get(`${backendHostUrl}/song/lyrics`, {
            params: {
                 trackId: props.trackId
                },      
            })

            const res = response.data.message.body.lyrics
        
            const songDetails = {
                lyricsData: {
                    lyricsId: res.lyrics_id,
                    lyricsBody: res.lyrics_body,
                    scriptTag: res.script_tracking_url,
                    pixelTag: res.pixel_tracking_url,
                },
                songData: {
                    trackId:props.trackId,
                    commonTrackId:props.commonTrackId,
                    trackName:props.trackName,
                    artistName:props.artistName,
                    albumName:props.albumName
                }
            }

            if(props.keyId === 'play-along')
                navigate('/play-along', { state: { songDetails } })
            else
                navigate('/karaoke', { state: { songDetails } })
            
        } catch (error) {
            
        }
        
    }
    const variant = props.theme.typography
    const shade = props.theme.palette
  
    return (
        <Card sx={{
            display: 'flex', margin: "16px", padding: "16px", bgcolor: `${shade.text.main}33`, borderRadius: '8px', width:'40%',
            '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                cursor: 'pointer'
                }
            }}
            onClick = { handleCard }
         >
            <CardMedia
                component="img"
                sx={{maxWidth: "150px" }}
                image={defaultDetails.image}
                alt={defaultDetails.title}
            />
            <div>
                <CardContent>
                    <Typography style={variant.subHeader_1.bold} sx={{color: shade.text.main}}>
                        {props.trackName}
                    </Typography>
                    <Typography style={variant.subHeader_2.bold} sx={{color: shade.text.main}}>
                        {props.albumName}
                    </Typography>
                    <Typography style={variant.subHeader_3.bold} sx={{color: shade.text.main}}>
                        {props.artistName}
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
};


export default SongCard