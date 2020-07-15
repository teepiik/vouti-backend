import { ObjectID } from 'mongodb'

export type User = 'Nikke' | 'Jukka' | 'Teemu'
export interface DebtEntry {
  id?: number
  date_origin: string
  date_paid: string
  debtor: User
  receiver: User
  debt_item: string
  comment?: string
}

export interface IDbDebt {
  _id: ObjectID
  date_origin: string
  date_paid: string
  debtor: User
  receiver: User
  debt_item: string
  comment?: string
  __v?: number
}
