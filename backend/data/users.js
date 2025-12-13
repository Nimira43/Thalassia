import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    pasword: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  }
]