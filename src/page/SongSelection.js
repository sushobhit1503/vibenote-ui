import { Typography } from '@mui/material'
import React from 'react'
import UserInput from "../components/UserInput"
import SongCard from '../components/SongCard';
import { useParams } from 'react-router-dom';

const SongSelection = (props) => {
    const {keyId} = useParams()

    const variant = props.theme.typography
    const shade = props.theme.palette

    return (
        <div className='main-container'>
            <div className='flex-align-center margin-top-max'>
                <UserInput text="Search any song" icon={true} theme={props.theme} />
            </div>
            <div className='margin-left-max'>
                <Typography style={variant.subHeader_1.bold} sx={{color: shade.text.main}}>MOST TRENDING SONGS</Typography>
            </div>
            <div style={{display:"flex", flexWrap:"wrap"}}>
                <SongCard theme={props.theme} keyId={ keyId} />
                <SongCard theme={props.theme} keyId={ keyId} />
                <SongCard theme={props.theme} keyId={ keyId} />
                <SongCard theme={props.theme} keyId={ keyId} />
                <SongCard theme={props.theme} keyId={ keyId} />
                <SongCard theme={props.theme} keyId={ keyId} />
            </div>
        </div>
    );
};


export default SongSelection