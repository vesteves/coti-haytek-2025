import mongoose from 'mongoose'
import type { Product } from './product.d'

const productSchema = new mongoose.Schema<Product, mongoose.Model<Product>>({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'categories'
  }
}, {
  timestamps: true,
})

export const productModel = mongoose.model('products', productSchema)

export default productModel