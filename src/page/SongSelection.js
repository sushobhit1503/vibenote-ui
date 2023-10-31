import { Typography } from '@mui/material'
import React, { useState } from 'react'
import UserInput from "../components/UserInput"
import SongCard from '../components/SongCard';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { backendHostUrl } from '../config/constant';


const SongSelection = (props) => {
    const {keyId} = useParams()
    const variant = props.theme.typography
    const shade = props.theme.palette

    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])


    const searchSongs = async () => {
    try {
      const response = await axios.get(`${backendHostUrl}/song/searchSongs`, {
        params: {
          q_track_artist: searchQuery,
          page_size: 6,
        },
      })
        console.log(response.data.message.body.track_list);
        setSearchResults(response.data.message.body.track_list)
        
    } catch (error) {
      console.error('Error searching for songs:', error)
    }
  }

    const handleKeyPress = (e) => {
        console.log(searchQuery);
        if (e.key === 'Enter') {
            searchSongs()
        }   
    }

    return (
        <div className='main-container'>
            <div className='flex-align-center margin-top-max'>
                <UserInput text="Search any song" icon={true} theme={props.theme} onChange={(e) => setSearchQuery(e)} onKeyPress={ handleKeyPress} />
            </div>
            <div className='margin-left-max'>
                <Typography style={variant.subHeader_1.bold} sx={{color: shade.text.main}}>MOST TRENDING SONGS</Typography>
            </div>
            <div style={{display:"flex", flexWrap:"wrap", justifyContent:'center'}}>
                {searchResults.map((result) => (
                    <SongCard
                        keyId={keyId}
                        trackId={result.track.track_id}
                        commonTrackId={result.track.commonTrackId}
                        theme={props.theme}
                        trackName={result.track.track_name}
                        artistName={result.track.artist_name}
                        albumName={result.track.album_name}
                    />
                ))}
            </div>
        </div>
    );
};


export default SongSelection