import mongoose from 'mongoose'
import type { User } from './user.d'

const userSchema = new mongoose.Schema<User, mongoose.Model<User>>({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
})

export const userModel = mongoose.model('users', userSchema)

export default userModel