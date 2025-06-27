import { Types } from "mongoose"

export interface DBBase {
  _id: Types.ObjectId
  createdAt: NativeDate
  updatedAt: NativeDate
}