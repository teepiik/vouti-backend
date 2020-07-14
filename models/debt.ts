import mongoose, { Schema, Document } from 'mongoose'
import { User } from '../types'
export interface IDebt extends Document {
  date_origin: string
  date_paid: string
  debtor: User
  receiver: User
  debt_item: string
  comment?: string
}

const DebtSchema: Schema = new Schema({
  date_origin: { type: String, required: true },
  date_paid: { type: String, required: true },
  debtor: { type: String, required: true },
  receiver: { type: String, required: true },
  debt_item: { type: String, required: true },
  comment: { type: String },
})

export default mongoose.model<IDebt>('Debt', DebtSchema)
