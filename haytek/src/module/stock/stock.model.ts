import mongoose from 'mongoose'
import type { Stock } from './stock.d'

const stockSchema = new mongoose.Schema<Stock, mongoose.Model<Stock>>({
  quantity: {
    type: Number,
    required: true
  },
  inventory: {
    type: String,
    required: true
  },
}, {
  timestamps: true,
})

export const stockModel = mongoose.model('stocks', stockSchema)

export default stockModel