import mongoose, { Types } from 'mongoose'

const userSchema = new mongoose.Schema({
  _id: Types.ObjectId,
  name: String,
  email: String,
  password: String
}, {
  timestamps: true,
})

export const userModel = mongoose.model('users', userSchema)

export default userModel