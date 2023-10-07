const express = require('express')
const authRoutes = require('./routes/authRoutes')
const dotenv = require('dotenv')
const connectDB = require('./db')

dotenv.config()
connectDB()

const app = express()
const port = 3003

app.use('/', authRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})