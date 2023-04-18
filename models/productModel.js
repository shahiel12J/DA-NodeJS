const mongoose = require('mongoose')

const product = new mongoose.Schema(
    {
        title : {
            type: String,
            required: [true, "Please enter a product title"]
        },
        price : {
            type: Number,
            required: true,
            default: 0
        },
        description : {
            type: String,
            required: [true, "Please enter a product description"]
        },
        image : {
            type: String,
            required: false
        },
        category : {
            type: String,
            required: [true, "Please enter a product category"]
        }
    },
    // {
    //     timestamps: true
    // }
    // {
    //     title: String,
    //     price: Number,
    //     description: String,
    //     image: String,
    //     category: String,

    // }
)

const Product = mongoose.model('Product', product);

module.exports = Product;