import asyncHandler from '../middleware/asyncHandler.js'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id)
    
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password.')
  }

  res.send('Auth User')
})

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400) 
    throw new Error('User already exists.')
  }

  const user = await User.create({
    name,
    email,
    password
  })

  if (user) {
    generateToken(res, user._id)

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data.')
  }
})

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0)
  })

  res.status(200).json({
    message: 'Logged out successfully.'
  })
})

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(404) 
    throw new Error('User not found.')
  }
})

const updateUserProfile = asyncHandler(async (req, res) => {
  res.send('Update User Profile')
})

const getUsers = asyncHandler(async (req, res) => {
  res.send('Get Users')
})

const getUserByID = asyncHandler(async (req, res) => {
  res.send('Get User By ID')
})

const deleteUser = asyncHandler(async (req, res) => {
  res.send('Delete User')
})

const updateUser = asyncHandler(async (req, res) => {
  res.send('Update User')
})

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserByID,
  updateUser
}

