// const express = require('express');
// const app = express();
// const productRoute = express.Router();
// let Product = require('../models/productModel');

// // Add Book
// productRoute.route('/addpro').post((req, res, next) => {
//     Product.create(req.body, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// });
// // Get all Book
// productRoute.route('/').get((req, res) => {
//     Product.find((error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })
// // Get Book
// productRoute.route('/getpro/:id').get((req, res) => {
//     Product.findById(req.params.id, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })

// // Update Book
// productRoute.route('/updatepro/:id').put((req, res, next) => {
//     Product.findByIdAndUpdate(req.params.id, {
//     $set: req.body
//   }, (error, data) => {
//     if (error) {
//       return next(error);
//       console.log(error)
//     } else {
//       res.json(data)
//       console.log('Product updated successfully!')
//     }
//   })
// })
// // Delete Book
// productRoute.route('/deletepro/:id').delete((req, res, next) => {
//     Product.findByIdAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         msg: data
//       })
//     }
//   })
// })

// module.exports = productRoute;