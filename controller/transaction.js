const Transaction = require('../model/transaction')

module.exports.index = async (req,res) => {
    res.json('You have come to the transaction!')
}
module.exports.getAll = async (req,res) => {
    let trans = await Transaction.find({})
    res.json(trans)
}
module.exports.createTrans = async (req,res) => {
    let today = new Date()
    let transDetails = {
        product: req.body.items.map(val => {
            return val
        }),
        user: req.body.user,
        status: 'PENDING',
        date: today.getDay() + '/' + today.getMonth() + '/' + today.getFullYear() 
              + ' at ' + 
              today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    }
    const newTrans = new Transaction(transDetails)
    const savedTrans = await newTrans.save()
    res.status(200).send({ trans: savedTrans })
}
module.exports.updateTran = async (req, res) => {
    try {
        let fieldToUpdate = req.body
        const newProduct = await Transaction.findOneAndUpdate({_id:req.body._id}, fieldToUpdate)
        res.status(200).send(await {newProduct})
    }
    catch {
        res.status(500).send('Failed to update')
    }
}
module.exports.deleteTran = async (req,res) => {
    try {
        let idToDelete = req.body._id
        let deleted = await Transaction.findByIdAndDelete(idToDelete)
        res.status(200).send(await deleted)
    }
    catch (e) {
        res.status(500).send('Error while deleting')
    }
}