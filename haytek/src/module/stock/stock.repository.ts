import type { Stock, StockStore, StockUpdate } from "./stock";
import { stockModel } from './stock.model'

const getAll = (): Promise<Stock[] | string> => {
  try {
    return stockModel.find().lean()
  } catch (error: any) {
    return error.message
  }

}

const getById = (_id: string): Promise<Stock | null | string> => {
  try {
    return stockModel.findById(_id).lean()
  } catch (error: any) {
    return error.message
  }
}

const store = async (param: StockStore): Promise<Stock | string> => {
  try {
    return await stockModel.create(param)
  } catch (error: any) {
    return error.message
  }
}

const update = async (_id: string, param: StockUpdate): Promise<any | string> => {
  try {
    return await stockModel.updateOne({
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
    return await stockModel.deleteOne({ _id })
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