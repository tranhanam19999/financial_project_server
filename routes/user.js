const express = require('express')

const controller = require('../controller/user')
const router = express.Router()

router.get('/', controller.index)
router.post('/check', controller.checkUser)
router.post('/updateUser',controller.updateUser)
router.post('/getAdmin', controller.getAdmin)
router.get('/getAll',controller.getAll)
module.exports = router