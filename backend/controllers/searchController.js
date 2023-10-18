const axios = require('axios');
// test
const controlSearch = async (req, res) => {
  try {
    const query = 'remaster%2520track%3ARanjha%2520artist%3AJasleen%2520Royal&type=album'
    const token = '____'
      
    const spotifyApiBaseUrl = 'https://api.spotify.com/v1';
    const searchEndpoint = `${spotifyApiBaseUrl}/search?q=${query}`
    
    const response = await axios.get(searchEndpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const data = response.data
    console.log(data.albums.items[0])
    res.json(data)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching data from Spotify API' })
  }
}

module.exports = {controlSearch}