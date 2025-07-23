import mongoose from 'mongoose'
import type { Category } from './category.d';

const categorySchema = new mongoose.Schema<Category, mongoose.Model<Category>>({
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

  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})

categorySchema.virtual('products', {
  ref: 'products',
  localField: '_id',
  foreignField: 'categoryId'
});

export const categoryModel = mongoose.model('categories', categorySchema)

export default categoryModel