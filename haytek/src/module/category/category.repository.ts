import type { Category, CategoryStore, CategoryUpdate } from "./category";
import { categoryModel } from './category.model'

const getAll = (): Promise<Category[] | string> => {
  try {
    return categoryModel.find().populate('products').lean()
  } catch (error: any) {
    return error.message
  }

}

const getById = (_id: string): Promise<Category | null | string> => {
  try {
    return categoryModel.findById(_id).lean()
  } catch (error: any) {
    return error.message
  }
}

const store = async (param: CategoryStore): Promise<Category | string> => {
  try {
    return await categoryModel.create(param)
  } catch (error: any) {
    return error.message
  }
}

const update = async (_id: string, param: CategoryUpdate): Promise<any | string> => {
  try {
    return await categoryModel.updateOne({
      _id
    }, {
      $set: param
    })
  } catch (error: any) {
    return error.message
  }
}

const destroy = async (_id: string): Promise<any | string> => {
  try {
    return await categoryModel.deleteOne({ _id })
  } catch (error: any) {
    return error.message
  }
}

export default {
  getAll,
  getById,
  store,
  update,
  destroy,
}