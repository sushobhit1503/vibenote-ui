import { Container, Stack, Typography } from '@mui/material'
import React from 'react'
import UserInput from "../components/UserInput"
import SongCard from '../components/SongCard';

const SongSelection = (props) => {
    const variant = props.theme.typography
    const shade = props.theme.palette

    return (
        <Container>
            <div style={{display: "flex", justifyContent:"center", alignItems:"center"}}>
                <UserInput text="Search any song" icon={true} theme={props.theme} />
            </div>
            <Stack spacing={2} marginTop="16px" marginLeft="60px">
                <Typography style={variant.subHeader_1.bold} sx={{color: shade.text.main}}>MOST TRENDING SONGS</Typography>
            </Stack>
            <Stack direction="row" flexWrap="wrap" justifyContent="center">
                <SongCard theme={props.theme} />
                <SongCard theme={props.theme} />
                <SongCard theme={props.theme} />
                <SongCard theme={props.theme} />
                <SongCard theme={props.theme} />
                <SongCard theme={props.theme} />
            </Stack>
        </Container>
    );
};


export default SongSelection