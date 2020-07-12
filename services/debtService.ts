import debtData from '../mockDebtData.json'
import { DebtEntry } from '../types'

const debts: Array<DebtEntry> = debtData as Array<DebtEntry>

const getDebt = (): Array<DebtEntry> => {
  return debts
}

const createDebt = (newDebt: DebtEntry): null => {
  console.log(newDebt)
  return null
}

const updateDebt = (id: number): DebtEntry | undefined | null => {
  //const debt = debts.find(d => d.id === id)
  console.log(id)
  return null
}

export default {
  getDebt,
  createDebt,
  updateDebt,
}
