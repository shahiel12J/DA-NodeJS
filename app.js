const express = require("express");
const mongoose = require('mongoose')
const Product = require('./models/productModel')
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

app.use(cors())

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)
app.get('/getpro', async (req,res) => {
   try {
      const product = await Product.find({})
      res.status(200).json(product)
   }catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})
   }
})

app.post('/addpro', async(req,res) => {
   try {
      const product = await Product.create( req.body)
      res.status(200).json(product)
   }catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})
   }
})
app.get('/getIpro/:id', async (req,res) => {
   try {
      const {id} = req.params;
      const product = await Product.findById(id)
      res.status(200).json(product)
   }catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})
   }
})

app.delete('/delete/:id', async (req,res) => {
   try {
      const {id} = req.params;
      const product = await Product.findByIdAndDelete(id)
      res.status(200).json(product)
   }catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})
   }
})

app.put('/update/:id', async (req,res) => {
   try {
      const {id} = req.params;
      const product = await Product.findByIdAndUpdate(id,req.body)
      res.status(200).json(product)
   }catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})
   }
})


mongoose.connect(process.env.MONGODB_URL)
.then(() => {
   app.listen(5000, () => {
      console.log(`Server is running on port 5000.`);
    });
   console.log('connected')
}).catch(() => {
   console.log('error')
})



