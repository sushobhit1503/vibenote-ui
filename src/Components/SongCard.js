import { Container, Stack } from '@mui/material'
import React from 'react'
import InputDropDown from '../components/InputDropDown';

const SongSelection = (props) => {
    return (
        <Container>
            <Stack>
                <InputDropDown inputText="Search Song" />
            </Stack>
        </Container>
    );
};


export default SongSelection