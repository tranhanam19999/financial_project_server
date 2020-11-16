const User = require('../model/user')

module.exports.index = (req,res) => {
    res.json('Hello user!')
}
module.exports.getAll = async (req,res) => {
    let user = await User.find({})
    res.json(user)
}
module.exports.getAdmin = async (req,res) => {
    console.log('req.body ', req.body)
    User.aggregate([
        {
            $match: {
                'local.email': req.body.username,
                'local.password': req.body.password,
                'address': req.body.address
            }
        }
    ], (err, user) => {
        if(err)
            res.send(err)
        res.json(user)
    })
}
module.exports.checkUser = async (req,res) => {
    User.aggregate([
        {
            $match: {
                'local.email': req.body.username,
                'local.password': req.body.password
            }
        }
    ], (err, user) => {
        if(err)
            res.send(err)
        res.json(user)
    })
}
module.exports.deleteUser = async (req,res) => {
    try {
        let idToDelete = req.body._id
        const deletedUser = await User.findOneAndDelete({_id:idToDelete})
        res.status(200).send(await {deletedUser})
    }
    catch {
        res.status(500).send('Error while trying to delete')
    }
}
module.exports.updateUser = async (req, res) => {
    try {
        let fieldToUpdate = req.body
        const newUser = await User.findOneAndUpdate({_id:req.body._id}, fieldToUpdate)
        res.status(200).send(await {newUser})
    }
    catch {
        res.status(500).send('Failed to update')
    }
}