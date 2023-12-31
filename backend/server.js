const express = require('express')
const authRoutes = require('./routes/authRoutes')
const songMetadataRoutes = require('./routes/songMetadataRoutes')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const passport = require('passport')
const SpotifyStrategy = require('passport-spotify').Strategy
const User = require('./model/User')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const bodyParser = require('body-parser')
const path = require('path')
const generateToken = require('./config/generateToken')

dotenv.config()
connectDB()

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

app.use(
  session({
    secret: 'naruto',
    resave: true,
    saveUninitialized: true,
  })
)

app.use(passport.initialize())
app.use(passport.session())

passport.use(
  new SpotifyStrategy(
    {
      clientID: process.env.clientID,
      clientSecret: process.env.clientSecret,
      callbackURL: process.env.callbackURL,
    },
    async (accessToken, refreshToken, expires_in, profile, done) => {
      try {
        let user = await User.findOne({ spotifyId: profile.id })
        console.log(user, profile, done)
        if (!user) {
          user = await User.create({
            spotifyId: profile.id,
            name: profile.diplayName,
            role: profile.role
          })
          await user.save()
        }
        const authToken = generateToken(user._id)
        return done(null, { user, authToken })

      } catch (error) {
        return done(error)
      }
    }

  )
)


passport.serializeUser((user, done) => {
  done(null, user.spotifyId)
})

passport.deserializeUser(async (spotifyId, done) => {

  try {
    const user = await User.findOne({ spotifyId: spotifyId })
    done(null, user)

  } catch (error) {
    done(error)
  }

})

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

const port = 3003


app.use('/', authRoutes)
app.use('/song', songMetadataRoutes)


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
