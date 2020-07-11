import debtData from '../mockDebtData.json'
import { DebtEntry } from '../types'

const debts: Array<DebtEntry> = debtData as Array<DebtEntry>

const getEntries = (): Array<DebtEntry> => {
  return debts
}

const addEntry = (newDebt: DebtEntry): null => {
  console.log(newDebt)
  return null
}

export default {
  getEntries,
  addEntry,
}
