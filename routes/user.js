const express = require('express')

const controller = require('../controller/user')
const router = express.Router()

router.get('/', controller.index)
router.get('/getAll',controller.getAll)
router.post('/check', controller.checkUser)
router.post('/updateUser',controller.updateUser)
router.delete('/deleteUser', controller.deleteUser)
router.post('/getAdmin', controller.getAdmin)

module.exports = router