import asyncHandler from '../middleware/asyncHandler.js'
import Order from '../models/orderModel.js'

const addOrderItems = asyncHandler(async (req, res) => {
  res.send('Add order items.')
})

const getMyOrders = asyncHandler(async (req, res) => {
  res.send('Get my orders.')
})

const getOrderById = asyncHandler(async (req, res) => {
  res.send('Get order by ID.')
})

const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send('Update order to paid.')
})

const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send('Update order to delivered.')
})

const getOrders = asyncHandler(async (req, res) => {
  res.send('Get all orders.')
})

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders
}
