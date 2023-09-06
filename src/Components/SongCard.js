import React from 'react'
import { Card, Box, CardContent, Typography, CardMedia } from "@mui/material"
import SongCover from "../svgIcons/song-image.svg"

const SongCard = (props) => {
    return (
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ padding: "16px", width: "150px" }}
                image={SongCover}
                alt="Jadui"
            />
            <Box>
                <CardContent>
                    <Typography variant='subHeader'>
                        Jaadui (Tu Jhooti Mein Makkar)
                    </Typography>
                    <Typography variant="subHeader_1">
                        Arijit Singh
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
};


export default SongCard