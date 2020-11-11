const express = require('express')

const controller = require('../controller/product')

const router = express.Router()

router.get('/', controller.index)
router.get('/getAll', controller.getAll)
router.get('/getById',controller.getById)
module.exports = router