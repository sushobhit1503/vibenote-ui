import { Container, Stack, Typography } from '@mui/material'
import React from 'react'
import UserInput from "../components/UserInput"
import SongCard from '../components/SongCard';

const SongSelection = (props) => {
    return (
        <Container>
            <div style={{display: "flex", justifyContent:"center"}}>
                <UserInput text="Search any song" icon={true} theme={props.theme} />
            </div>
            <Stack spacing={2}>
                <Typography theme={props.theme} variant='subHeader_1'>MOST TRENDING SONGS</Typography>
            </Stack>
            <Stack direction="row" flexWrap="wrap" >
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