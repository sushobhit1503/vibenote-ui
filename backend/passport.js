const express = require('express')
const passport = require('passport')
const SpotifyStrategy = require('passport-spotify').Strategy
const { User } = require('./model/User')
const cookieParser = require('cookie-parser')
const session = require('express-session')

app.use(cookieParser())
app.use(
  session({
    secret: 'asp',
    resave: true,
    saveUninitialized: true,
  })
)


