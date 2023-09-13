import React from 'react'
import { Card, Box, CardContent, Typography, CardMedia } from "@mui/material"
import SongCover from "../svgIcons/song-image.svg"

const SongCard = (props) => {
    const variant = props.theme.typography
    const shade = props.theme.palette

    return (
        <Card sx={{ display: 'flex', margin: "16px", padding: "16px", bgcolor: `${shade.text.main}33`, borderRadius: '8px'}}>
            <CardMedia
                component="img"
                sx={{maxWidth: "150px" }}
                image={SongCover}
                alt="Jadui"
            />
            <div>
                <CardContent>
                    <Typography style={variant.subHeader_1.bold} sx={{color: shade.text.main}}>
                        Jaadui (Tu Jhooti Mein Makkar)
                    </Typography>
                    <Typography style={variant.subHeader_1.bold} sx={{color: shade.text.main}}>
                        Arijit Singh
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
};


export default SongCard