import type { Product, ProductStore, ProductUpdate } from "./product";
import { productModel } from './product.model'

const getAll = (): Promise<Product[] | string> => {
  try {
    return productModel.find().populate('categoryId').lean()
  } catch (error: any) {
    return error.message
  }

}

const getById = (_id: string): Promise<Product | null | string> => {
  try {
    return productModel.findById(_id).lean()
  } catch (error: any) {
    return error.message
  }
}

const store = async (param: ProductStore): Promise<Product | string> => {
  try {
    return await productModel.create(param)
  } catch (error: any) {
    return error.message
  }
}

const update = async (_id: string, param: ProductUpdate): Promise<any | string> => {
  try {
    return await productModel.updateOne({
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
    return await productModel.deleteOne({ _id })
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