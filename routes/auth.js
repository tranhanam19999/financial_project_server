const express = require('express')

const controller = require('../controller/auth')

const router = express.Router()

router.post('/forgotPassword', controller.forgotPassword)
router.post('/verifyEmail', controller.verifyEmail)
module.exports = router