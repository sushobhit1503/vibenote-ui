const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/authMiddlewares')
const passport = require('passport')
const authController = require('../controllers/authControllers')
const protect = require('../middlewares/authMiddlewares')

router.use(express.json())

router.route('/').get(protect)
router.post('/login', authController.login)
router.post('/sign-up', authController.signup)

router.get('/auth/spotify', passport.authenticate('spotify'),
    function (req, res) {
        console.log('failed auth');
    })

router.get(
    '/auth/spotify/callback',
    passport.authenticate('spotify', { failureRedirect: '/login', successRedirect: '/' }),
  
    function (req, res) {
        console.log("hell")
        res.redirect(302, '/');
  }
)

module.exports = router