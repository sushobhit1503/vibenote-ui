const authenticateOAuth = (req, res, next) => {
  const token = req.headers.authorization
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized, missing access token' })
  }
  next()
}

module.exports =  authenticateOAuth 