const express = require('express')

const controller = require('../controller/transaction')

const router = express.Router()

router.get('/', controller.index)
router.get('/getAll', controller.getAll)
router.post('/updateTran',controller.updateTran)
router.post('/createTrans', controller.createTrans)
router.post('/approveTran', controller.approveTran)
router.post('/getUsersTran', controller.getUsersTran)
router.delete('/deleteTran', controller.deleteTran)

module.exports = router