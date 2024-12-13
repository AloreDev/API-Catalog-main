const express = require('express');
const productSchema = require('../models/product');

const router = express.Router();


// Create one Product
router.post('/product', async (req, res) => {
   try {
      const product = new productSchema(req.body);
      const data = await product.save();
      res.status(201).json(data);
   } catch (err) {
      res.status(400).json({ message: err.message });
   }
});

// Get All Products
router.get('/product', async (req, res) => {
   try {
      const products = await productSchema.find();
      res.status(200).json(products);
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
});

// Get one Product
router.get('/product/:id', getProduct, (req, res) => {
   res.json(res.product);
});

// Update one Product
router.put('/product/:id', getProduct, async (req, res) => {
   try {
      const updatedFields = req.body;
      const updatedProduct = await productSchema.findByIdAndUpdate(
         res.product._id,
         { $set: updatedFields },
         { new: true }
      );
      if (!updatedProduct) {
         return res.status(404).json({ message: 'No product found to update' });
      }
      res.status(200).json(updatedProduct);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

// Delete one
router.delete('/product/:id', getProduct, async (req, res) => {
   try {
      const result = await productSchema.deleteOne({ _id: res.product._id });
      if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json({ message: 'Product deleted successfully' });
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

// Middleware
async function getProduct(req, res, next) {
   let product;
   try {
      product = await productSchema.findById(req.params.id);
      if (product == null) {
            return res.status(404).json({ message: 'Cannot find product' });
      }
   } catch (err) {
      return res.status(500).json({ message: err.message });
   }

   res.product = product;
   next();
}

module.exports = router;
