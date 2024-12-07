
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const productRoutes = require('./routes/product')

app = express()

const port = process.env.PORT || 3000


// ----------------------------------- Middleware
app.use(express.json())
app.use('/api', productRoutes)


// ----------------------------------- Route
app.get('/', (req, res) => {
   res.send('Bienvenido a API Catalog', )
})


// ----------------------------------- MongoDB connection
mongoose
   .connect(process.env.MONGODB_URI)
   .then(() => console.info('Connected to MongoDB'))
   .catch((err) => console.error(err))


// ----------------------------------- Server connection
app.listen(port, (req, res) => console.info('Server listening on', port))
