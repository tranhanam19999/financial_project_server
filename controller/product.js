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
module.exports.update = async (req, res) => {
    let prod = await Product()
}