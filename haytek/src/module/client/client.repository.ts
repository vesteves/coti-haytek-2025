import type { Client, ClientStore, ClientUpdate } from "./client";
import { clientModel } from './client.model'

const getAll = (): Promise<Client[] | string> => {
  try {
    return clientModel.find().lean()
  } catch (error: any) {
    return error.message
  }

}

const getById = (_id: string): Promise<Client | null | string> => {
  try {
    return clientModel.findById(_id).lean()
  } catch (error: any) {
    return error.message
  }
}

const store = async (param: ClientStore): Promise<Client | string> => {
  try {
    return await clientModel.create(param)
  } catch (error: any) {
    return error.message
  }
}

const update = async (_id: string, param: ClientUpdate): Promise<any | string> => {
  try {
    return await clientModel.updateOne({
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
    return await clientModel.deleteOne({ _id })
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