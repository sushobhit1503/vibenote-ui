const jwt = require('jsonwebtoken')
const User = require('../model/User')

const protect = async (req, res, next) => {
    let token
    if (
        req.headers.authorization && req.headers.authorization.startsWith("Bearer")
    ) try {
        token = req.headers.authorization.split(" ")[1]

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = await User.findOne(decoded.id)

        next()
    } catch (error) {
        res.status(401)
        throw new Error("Not authorised, token failed!")
    }

    if (!token) {
        res.status(401)
        throw new Error("Not authorized, no token")
    }
}

module.exports = protect