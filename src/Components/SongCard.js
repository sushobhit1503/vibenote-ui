import React from 'react'
import { Card, Box, CardContent, Typography, CardMedia } from "@mui/material"
import SongCover from "../svgIcons/song-image.svg"

const SongCard = (props) => {
    const variant = props.theme.typography
    const shade = props.theme.palette

    return (
        <Card sx={{ display: 'flex', margin: "16px", padding: "16px", bgcolor: `${shade.text.main}33`}}>
            <CardMedia
                component="img"
                sx={{width: "150px" }}
                image={SongCover}
                alt="Jadui"
            />
            <Box marginTop="0px">
                <CardContent>
                    <Typography style={variant.subHeader_1.bold} sx={{color: shade.text.main}}>
                        Jaadui (Tu Jhooti Mein Makkar)
                    </Typography>
                    <Typography style={variant.subHeader_1.bold} sx={{color: shade.text.main}}>
                        Arijit Singh
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
};


export default SongCard