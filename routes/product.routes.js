const express = require("express");
const app = express();
const Product = require('./models/productModel');



app.get('/getpro', async (req,res) => {
    try {
       const product = await Product.find({})
       res.status(200).json(product)
    }catch (error) {
       console.log(error.message);
       res.status(500).json({message: error.message})
    }
 })