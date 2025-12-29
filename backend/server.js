import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js' 
dotenv.config()
import products from './data/products.js'
import productRoutes from './routes/productRoutes.js'

connectDB()

const port = process.env.PORT || 5000
const app = express()

app.get('/', (req, res) => {
  res.send('API is running')
})

app.listen(port, () => console.log(`Server running on Port ${port}`)) 