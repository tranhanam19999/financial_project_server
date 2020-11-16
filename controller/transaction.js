const Transaction = require('../model/transaction')

module.exports.index = async (req,res) => {
    res.json('You have come to the transaction!')
}
module.exports.getAll = async (req,res) => {
    let trans = Trans.find({})
    res.json(trans)
}
module.exports.createTrans = async (req,res) => {
    let today = new Date()
    let transDetails = {
        product: req.body.items.map(val => {
            return val
        }),
        user: req.body.user._id,
        status: 'PENDING',
        date: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    }
    const newTrans = new Transaction(transDetails)
    const savedTrans = await newTrans.save()
    res.status(200).send({ trans: savedTrans })
}