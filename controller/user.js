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
    //let user = await User.find({'authenticateMethod.local.email': req.body.username})
}
module.exports.updateUser = async (req,res) => {
    let user = await User.findOne({_id: req.body._id})
    if(user) {
        user.fullName = req.body.fullName
        user.address = req.body.address
        user.phone = req.body.phone
        user.password = req.body.password
        user.bankId = req.body.bankId
        user.workPlace = req.body.workPlace
        user.save()
        res.json(await user)
    }
    else
        console.log('no user!')  
}