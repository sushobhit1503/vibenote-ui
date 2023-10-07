const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/login')
}

const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    return next()
  }
    res.status(403).send('Access denied')
    res.redirect('/login')
}

module.exports = {isAuthenticated, isAdmin}