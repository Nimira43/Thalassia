import jwt from 'jsonwebtoken'
import asyncHandler from './asyncHandler'
import User from '../models/userModel'

export const protect = asyncHandler(async (req, res, next) => {
  let token 

  token = req.cookies.jwt

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.user = await User.findById(decoded.userId).select('-password')
    } catch (error) {
      console.log(error)
      res.status(401)
      throw new Error('Not authorised - token failed.')
    }
  } else {
    res.status(401)
    throw new Error('Not authorised - no token.')
  }
})