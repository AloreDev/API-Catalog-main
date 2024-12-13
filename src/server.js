
const express = require('express')
const mongoose = require('mongoose')
const productRoutes = require('./routes/products')
require('dotenv').config()

app = express()

const port = process.env.PORT || 3000
const appKey = process.env.APPKEY_MONGO;
const appToken = process.env.APPTOKEN_MONGO;
const uriTemplate = process.env.MONGODB_URI_TEMPLATE;

const mongodbUri = uriTemplate
  .replace('{APPKEY_MONGO}', appKey)
  .replace('{APPTOKEN_MONGO}', appToken);


// ----------------------------------- Middleware
app.use(express.json())
app.use('/api', productRoutes)


// ----------------------------------- Route
app.get('/', (req, res) => {
   res.send('Bienvenido a API Catalog', )
})


// ----------------------------------- MongoDB connection
mongoose
   .connect(mongodbUri)
   .then(() => console.info('Connected to MongoDB'))
   .catch((err) => console.error(err))


// ----------------------------------- Server connection
app.listen(port, (req, res) => console.info('Server listening on', port))
