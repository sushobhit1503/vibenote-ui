const express = require('express')
const authenticateOAuth = require('./auth');
const { controlSearch } = require('./controller');
const router = express.Router()

router.use(express.json())

router.route('/search').get(authenticateOAuth, controlSearch)

module.exports = router