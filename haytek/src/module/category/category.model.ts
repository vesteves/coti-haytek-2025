import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  position: {
    type: Number,
    required: true
  },
}, {
  timestamps: true,
})

export const categoryModel = mongoose.model('categories', categorySchema)

export default categoryModel