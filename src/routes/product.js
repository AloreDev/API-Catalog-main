
const express = require('express')
const productSchema = require('../models/product')

const router = express.Router()

// ----------------------------------- Create Products
router.post('/product', (req, res) => {
   const product = productSchema(req.body)

   product
      .save()
      .then((data) => res.json(data))
      .catch((err) => res.json({ message: err }))
})

// ----------------------------------- Get All Products
router.get('/product', (req, res) => {
   productSchema
      .find()
      .then((data) => res.json(data))
      .catch((err) => res.json({ message: err }));
})

// ----------------------------------- Get Product
router.get('/product/:id', (req, res) => {
   const { id } = req.params

   productSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((err) => res.json({ message: err }));
})

// ----------------------------------- Update
router.put('/product/:id', (req, res) => {
   const { id } = req.params
   const {name, description, linkId, releaseDate} = req.body

   productSchema
      .updateOne({ _id: id }, { $set: {name, description, linkId, releaseDate} })
      .then((data) => res.json(data))
      .catch((err) => res.json({ message: err }))
})

// ----------------------------------- Delete
router.delete('/product/:id', (req, res) => {
   const { id } = req.params

   productSchema
      .deleteOne({ _id: id })
      .then((data) => res.json(data))
      .catch((err) => res.json({ message: err }))
})


module.exports = router