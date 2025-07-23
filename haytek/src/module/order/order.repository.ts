import type { Order, OrderStore, OrderUpdate } from "./order";
import { orderModel } from './order.model'

const getAll = (): Promise<Order[] | string> => {
  try {
    return orderModel.find().lean()
  } catch (error: any) {
    return error.message
  }

}

const getById = (_id: string): Promise<Order | null | string> => {
  try {
    return orderModel.findById(_id).lean()
  } catch (error: any) {
    return error.message
  }
}

const store = async (param: OrderStore): Promise<Order | string> => {
  try {
    return await orderModel.create(param)
  } catch (error: any) {
    return error.message
  }
}

const update = async (_id: string, param: OrderUpdate): Promise<any | string> => {
  try {
    return await orderModel.updateOne({
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
    return await orderModel.deleteOne({ _id })
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