const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
   name: {
      type: String,
      required: false
   },
   "description": {
      type: String,
      required: false
   },
   "linkId": {
      type: String,
      required: false
   },
   "releaseDate": {
      type: String,
      required: false
   },
})

module.exports = mongoose.model('Product', productSchema)