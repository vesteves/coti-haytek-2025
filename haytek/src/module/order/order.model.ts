import mongoose from 'mongoose'
import type { Order } from './order.d'

const orderSchema = new mongoose.Schema<Order, mongoose.Model<Order>>({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
}, {
  timestamps: true,
})

export const orderModel = mongoose.model('orders', orderSchema)

export default orderModel