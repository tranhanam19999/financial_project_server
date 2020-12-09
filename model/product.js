const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {type:String},
    info: {
        description: {type:String},
        category: [{type: String}],
        publisher: {type: String},
        yearPublished: {type: String},
        author: {type: String},
        language: {type: String},
        numberOfPage: {type: String}
    },
    link: {
        demo: {type: String},
        full: {type: String},
    },
    price: {type: Number},
    pictures: {type: String},
	sale: {type: String}
});
const Product = mongoose.model('products', productSchema,'products');
module.exports = Product;
    