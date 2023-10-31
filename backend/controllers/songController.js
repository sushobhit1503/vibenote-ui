const axios = require('axios')
const { createClient } = require('redis')

// setting up redis client
const redisConnect = async () => {
    try {
        const client = createClient()
        client.on('error', err => console.log('Redis Client Error', err))
        await client.connect()
        return client

    } catch (error) {
        console.log(error)
        process.exit()
    }

}

// for searching the songs
const searchTrack = async (req, res) => {
    const q_track_artist = req.query.q_track_artist
    const api = process.env.apiKey
    const s_track_rating = 'desc'
    const baseURL = `http://api.musixmatch.com/ws/1.1/track.search?apikey=${api}&q_track_artist=${q_track_artist}&s_track_rating=${s_track_rating}&f_lyrics_language=en`

    const redisClient = await redisConnect()

    try {
        console.log(q_track_artist)
        const redisData = await redisClient.get(q_track_artist)

        if (redisData) {
            console.log('fetching data from redis')
            return res.json(JSON.parse(redisData))
        }

        console.log('fetching data from musixmatch')
        const response = await axios.get(baseURL)
        const jsonResponse = JSON.stringify(response.data.message.body.track_list)

        await redisClient.set(q_track_artist, jsonResponse)
        res.json(response.data.message.body.track_list)

    }
    catch (error) {
        console.error('Error searching for songs:', error)
        res.status(500).json({ error: 'Internal server error' })
    }
    finally {
        redisClient.quit()
  }

}

// for getting lyrics of the selected song card
const getLyrics = async (req, res) => {
    const track_id = req.query.trackId
    const api = process.env.apiKey
    const baseURL = `http://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=${api}&track_id=${track_id}`

    try {
        const response = await axios.get(baseURL)
        res.json(response.data)
    } catch (error) {
        console.error('Error getting lyrics:', error)
        res.status(500).json({ error: 'Internal server error' })
    }
}

// runs on useEffect for song selection page
const getTrending = async (req, res) => {
    const api = process.env.apiKey
    const baseURL = `http://api.musixmatch.com/ws/1.1/chart.tracks.get?apikey=${api}&chart_name=top&f_lyrics_language=en`

    try {
        const response = await axios.get(baseURL)
        res.json(response.data)
    } catch (error) {
        console.error('Error getting trending songs:', error)
        res.status(500).json({ error: 'Internal server error' })
    }
}



module.exports = {searchTrack, getLyrics, getTrending}