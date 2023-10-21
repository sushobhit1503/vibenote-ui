const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/authMiddlewares')
const passport = require('passport')
const authController = require('../controllers/authControllers')
const protect = require('../middlewares/authMiddlewares')
const User = require('../model/User')
const generateToken = require('../config/generateToken')

router.use(express.json())

// unprotected routes
router.get('/', authController.home)
router.post('/login', authController.login)
router.post('/sign-up', authController.signup)
router.post('/otp', authController.token)

router.get('/auth/spotify', passport.authenticate('spotify'),
    function (req, res) {
        res.status(404).json({message: "The spotify login has failed"})
    })

router.get('/auth/spotify/callback', (req, res, next) => {
    passport.authenticate('spotify', (err, userData) => {
        if (err) {
            console.error(err)
            return next(err)
        }

        res.cookie('user', JSON.stringify( userData ), { httpOnly: true })

        res.redirect('http://localhost:3000')
    })(req, res, next)
})

module.exports = router