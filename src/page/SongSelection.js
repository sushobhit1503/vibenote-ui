import { Container, Stack } from '@mui/material'
import React from 'react'
import UserInput from "../components/UserInput"
import SongCard from '../components/SongCard';

const SongSelection = (props) => {
    return (
        <Container>
            <Stack>
                <UserInput text="Search any song" icon={true} theme={props.theme} />
                <SongCard />
            </Stack>
        </Container>
    );
};


export default SongSelection