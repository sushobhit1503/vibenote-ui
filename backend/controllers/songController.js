const axios = require('axios')
const CircularJSON = require('circular-json');

const searchTrack = async (req, res) => {
    const q_track_artist = req.query.q_track_artist
    const page_size = req.query.page_size
    const api = process.env.apiKey

    const s_track_rating = 'desc'

    const baseURL = `http://api.musixmatch.com/ws/1.1/track.search?apikey=${api}&q_track_artist=${q_track_artist}&page_size=${page_size}&s_track_rating=${s_track_rating}`

    try {
        const response = await axios.get(baseURL)
        res.json(response.data)
    } catch (error) {
        console.error('Error searching for songs:', error)
        res.status(500).json({ error: 'Internal server error' })
    }

}

const getLyrics = async (req, res) => {
    const track_id = req.query.trackId
    const api = process.env.apiKey
    const baseURL = `http://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=${api}&track_id=${track_id}`

    try {
        const response = await axios.get(baseURL)

        console.log(response.data.message.body);
        res.json(response.data)
    } catch (error) {
        console.error('Error getting lyrics:', error)
        res.status(500).json({ error: 'Internal server error' })
    }
}



module.exports = {searchTrack, getLyrics}