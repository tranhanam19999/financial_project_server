const { randomBytes } = require('crypto')
const User = require('../model/user')
const nodemailer = require('nodemailer')

module.exports.forgotPassword =  async (req,res) => {
    User.findOne({'local.email': req.body.email
    }).then(async (user) => {
        if(user == null)
        {
            res.status(404).json('nouser')
        }
        else {
            const randomPass = randomBytes(6).toString('hex')
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'tranhanam1999@gmail.com',
                    pass: '18110322Nam'
                }
            })
            const mailOptions = {
                from: 'tranhanam1999@gmail.com',
                to: user.local.email,
                subject: 'Reseting Password',
                text: 'We have generate a new password of your account in Nams BookStore\n'
                + `Your password is: ${randomPass}\n`
                + 'Please ignore this email if you didnt send it!'
            }

            await User.updateOne({_id:user._id},{$set: {'local.password': randomPass}})

            try {
                await transporter.sendMail(mailOptions)
                res.status(200).json('success')
            }
            catch {
                res.status(404).json('failed')
            }       
        }
    })
}
module.exports.verifyEmail = async (req,res) => {
    User.findOne({'local.email': req.body.email
    }).then(async (user) => {
        if(user == null)
        {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'tranhanam1999@gmail.com',
                    pass: '18110322Nam'
                }
            })

            let user = new User({
                'local.email': req.body.email,
                'local.password': req.body.password
            })
            await user.save()

            const mailOptions = {
                from: 'tranhanam1999@gmail.com',
                to: user.local.email,
                subject: 'Reseting Password',
                text: 'Click the link below to confirm your account in Nams BookStore\n'
                + `http://localhost:3000/Auth/${user._id}\n`
                + 'Please ignore this email if you didnt send it!'
            }

            try {
                await transporter.sendMail(mailOptions)
                res.status(200).json('success')
            }
            catch {
                res.status(404).json('failed')
            }       
        }
        else {
            res.status(404).json('failed') 
        }
    })
}