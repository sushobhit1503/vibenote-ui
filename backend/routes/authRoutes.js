const express = require('express')
const router = express.Router()

router.use(express.json())

router.get('/', authController.Home)
router.post('/login', authController.login)
router.post('/login/otp', authController.otp)
router.post('/sign-up', authController.signup)
router.get('/logout', authController.logout)

// router.route('/search').get(authenticateOAuth, controlSearch)

module.exports = router