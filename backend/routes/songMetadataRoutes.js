const express = require('express')
const router = express.Router()
const protect = require('../middlewares/authMiddlewares')
const songController = require('../controllers/songController')

router.use(express.json())

router.get('/searchSongs', songController.searchTrack)
router.get('/lyrics', songController.getLyrics)

module.exports = router