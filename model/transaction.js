const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'product' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    status: {type: String},//PENDING, SUCCESS 
    review: {type: String},
    rating: {type: Number},
    date: {type: String}
})
const Transaction = mongoose.model('Transaction', transactionSchema,'Transaction');
module.exports = Transaction;