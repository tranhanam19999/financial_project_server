const express = require('express')

const controller = require('../controller/user')
const router = express.Router()

router.get('/', controller.index)
router.post('/check', controller.checkUser)
router.post('/updateUser',controller.updateUser)
module.exports = router