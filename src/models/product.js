const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
   imageId: { type: String, required: true },
   imageLabel: { type: String, required: false },
   imageTag: { type: String, required: false },
   imageUrl: { type: String, required: true },
   imageText: { type: String, required: false },
   imageLastModified: { type: Date, required: false },
});

const itemSchema = new mongoose.Schema({
   images: [imageSchema],
});

const skuValueSchema = new mongoose.Schema({
   id: { type: String, required: true },
   name: { type: String, required: true },
   position: { type: Number, required: true },
});

const skuSpecificationSchema = new mongoose.Schema({
   values: [skuValueSchema],
});

const productSchema = new mongoose.Schema({
   productId: { type: String, required: true },
   productName: { type: String, required: true },
   brand: { type: String, required: true },
   linkText: { type: String, required: true },
   releaseDate: { type: Date, required: true },
   categories: { type: [String], required: true },
   link: { type: String, required: true },
   "País de fabricación": { type: [String], required: false },
   RegistroSic: { type: [String], required: false },
   Composición: { type: [String], required: false },
   Especificaciones: { type: [String], required: false },
   Color: { type: [String], required: false },
   Cuidado: { type: [String], required: false },
   Categoría: { type: [String], required: false },
   Género: { type: [String], required: false },
   items: [itemSchema],
   skuSpecifications: [skuSpecificationSchema],
});


module.exports = mongoose.model('Product', productSchema);