export type User = 'Nikke' | 'Jukka' | 'Teemu'
export interface DebtEntry {
  id: number
  date_origin: string
  date_paid: string
  debtor: User
  receiver: User
  debt_item: string
  comment?: string
}
