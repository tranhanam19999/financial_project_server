const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    product: [{ type: Object, ref: 'product' }],
    user: { type: Object, ref: 'user' },
    status: {type: String},//PENDING, SUCCESS 
    review: {type: String},
    rating: {type: Number},
    date: {type: String}
})
const Transaction = mongoose.model('transactions', transactionSchema,'transactions');
module.exports = Transaction;