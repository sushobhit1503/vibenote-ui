const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/authMiddlewares')
const passport = require('passport')
const authController = require('../controllers/authControllers')

router.use(express.json())

router.post('/login', authController.login)
router.post('/login/otp', authController.otpVerify)
router.post('/sign-up', authController.signup)

// router.route('/search').get(authenticateOAuth, controlSearch)
// router.get('/admin', authMiddleware.isAuthenticated, authMiddleware.isAdmin, adminPage) 

// these role wise landing page needs to be completed (admin vs normal)

router.get('/auth/spotify', passport.authenticate('spotify'),
    function (req, res) {
        console.log('failed auth');
    })

router.get(
    '/auth/spotify/callback',
    passport.authenticate('spotify', { failureRedirect: '/login' }),
  
    function (req, res) {
        console.log("hell")
        res.redirect(302, '/home');
  }
)

module.exports = router