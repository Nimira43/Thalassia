import express from 'express'
const router = express.Router()
import asyncHandler from '../middleware/asyncHandler'
import Product from '../models/productModel'

router.get('/', asyncHandler(async (req, res) => {
  res.json(products)
}))

router.get('/:id', asyncHandler(async (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
}))

export default router