const express = require("express");
const mongoose = require('mongoose')
const Product = require('./models/productModel')
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)

app.get("/", (req, res)=>{
    res.send("Hello World")
})

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

mongoose.connect('mongodb+srv://DA-DevSJ:oqzhgBKod5yypaIN@cluster0.fiqtnrn.mongodb.net/test')
.then(() => {
   app.listen(5000, () => {
      console.log(`Server is running on port 5000.`);
    });
   console.log('connected')
}).catch(() => {
   console.log('error')
})





// app.use(bodyParser.json())
// app.use(
//   bodyParser.urlencoded({
//     extended: false,
//   }),
// )
// app.use(cors())
// // Static directory path
// app.use(express.static(path.join(__dirname, 'dist/angular-mean-crud-tutorial')))
// // API root
// app.use('/api', productRoute)
// // PORT
// const port = process.env.PORT || 5000
// app.listen(port, () => {
//    console.log('Listening on port ' + port)
// })
// // 404 Handler
// app.use((req, res, next) => {
//   next(createError(404))
// })
// // Base Route
// app.get('/', (req, res) => {
//   res.send('Invaild endpoint')
// })
// app.get('*', (req, res) => {
//   res.sendFile(
//     path.join(__dirname, 'dist/angular-mean-crud-tutorial/index.html'),
//   )
// })
// // error handler
// app.use(function (err, req, res, next) {
//   console.error(err.message)
//   if (!err.statusCode) err.statusCode = 500
//   res.status(err.statusCode).send(err.message)
// })
