const express = require('express')

const controller = require('../controller/transaction')

const router = express.Router()

router.get('/', controller.index)
router.get('/getAll', controller.getAll)
module.exports = router