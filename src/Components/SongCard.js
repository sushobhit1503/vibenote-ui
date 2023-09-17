import React from 'react'
import { Card, Box, CardContent, Typography, CardMedia } from "@mui/material"
import SongCover from "../svgIcons/song-image.svg"
import { useNavigate } from 'react-router-dom'

// details to be dynamically fetched in future inside handleCard and passed as prop to the Play-Along
const songDetails = {
    title: "Jaadui (Tu Jhooti Mein Makkar)",
    artist: "Arijit Singh",
    image: SongCover 
}

const SongCard = (props) => {
    
    const navigate = useNavigate()
    const handleCard = () => {
        if(props.keyId === 'play-along')
            navigate('/play-along', { state: { songDetails } })
        else
            navigate('/karaoke', { state: { songDetails } })
    }
    const variant = props.theme.typography
    const shade = props.theme.palette
  
    return (
        <Card sx={{
            display: 'flex', margin: "16px", padding: "16px", bgcolor: `${shade.text.main}33`, borderRadius: '8px',
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
                image={songDetails.image}
                alt={songDetails.title}
            />
            <div>
                <CardContent>
                    <Typography style={variant.subHeader_1.bold} sx={{color: shade.text.main}}>
                        {songDetails.title}
                    </Typography>
                    <Typography style={variant.subHeader_1.bold} sx={{color: shade.text.main}}>
                        {songDetails.artist}
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
};


export default SongCard