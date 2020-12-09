const Product = require('../model/product')

module.exports.index = (req,res) => {
    res.json('You have come to the product!')
}
module.exports.getAll = async (req,res) => {
    let prod = await Product.find({})
    res.json(prod)
}
module.exports.getById = async (req,res) => {
    let prod = await Product.find({_id: req.body.id})
    res.json(prod)
}
module.exports.deleteBook = async (req,res) => {
    console.log(req.body)
    try {
        let idToDelete = req.body._id
        const deletedProduct = await Product.findOneAndDelete({_id:idToDelete})
        res.status(200).send(await {deletedProduct})
    }
    catch {
        res.status(500).send('Error while trying to delete')
    }
}
module.exports.updateBook = async (req, res) => {
    try {
        let fieldToUpdate = req.body
        const newProduct = await Product.findOneAndUpdate({_id:req.body._id}, fieldToUpdate)
        res.status(200).send(await {newProduct})
    }
    catch {
        res.status(500).send('Failed to update')
    }
}
module.exports.createBook = async (req,res) => {
    try {
        const newBook = new Product(req.body)
        const savedBook = await newBook.save()
        res.status(200).send({ resBook: savedBook })
        return
    }
    catch {
        res.status(500).send('Failed to create')
    }
}