const Transaction = require('../model/transaction')

module.exports.index = async (req,res) => {
    res.json('You have come to the transaction!')
}
module.exports.getAll = async (req,res) => {
    let trans = Trans.find({})
    res.json(trans)
}