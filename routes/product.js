const express = require('express')

const controller = require('../controller/product')

const router = express.Router()

router.get('/', controller.index)
router.get('/getAll', controller.getAll)
router.get('/getById', controller.getById)
router.post('/createBook' , controller.createBook)
router.post('/updateBook', controller.updateBook)
router.delete('/deleteBook', controller.deleteBook)
module.exports = router