import mongoose from 'mongoose'
import type { Client } from './client.d'

const clientSchema = new mongoose.Schema<Client, mongoose.Model<Client>>({
  name: {
    type: String,
    required: true
  },
  cnpj: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
}, {
  timestamps: true,
})

export const clientModel = mongoose.model('clients', clientSchema)

export default clientModel