const  User  = require('../model/User')

const landingPage = (req, res) => {
    // function incomplete right now
    res.status(200).json({message: 'Landing page'})
}

const signup = async (req, res) => {

    try {
        const { username, phoneNumber, spotifyId } = req.body
        const newUser = new User({
            spotifyId,
            username,
            phoneNumber,
    })

    await newUser.save()
        
    console.log('send OTP to the user')
    return res.redirect('/login/otp')
        
} catch (error) {
    console.error(error)
    return res.render('signup', { error: 'Registration failed' })
}
}

const login = async (req, res) => {
    try {
        const { phoneNumber } = req.body
        // console.log(phoneNumber);
        const user = await User.findOne({ phoneNumber })

        if (!user) {
            return res.status(404).json({ error: 'User not found' })
        }

        // send otp and log OTP sent successfully
        // return res.status(200).json({ message: 'OTP sent successfully', otp })

    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Error Occured! Try again!' })
    }
    
}

const otpVerify = (req, res) => {
    const { otp } = req.body
    // console.log(otp)
    // console.log(req.session) // to be generated (now undefined)

  if (otp === req.session.otp) {
    return res.redirect('/')
  }
  
  else {
    return res.render('otp', { error: 'Invalid OTP' })
  }

}

module.exports = {otpVerify, signup, login, landingPage}