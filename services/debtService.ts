import debtData from '../mockDebtData.json'
import { DebtEntry, IDbDebt } from '../types'
import Debt from '../models/debt'

const debts: Array<DebtEntry> = debtData as Array<DebtEntry>

const getDebt = (): Array<DebtEntry> => {
  return debts
}

const createDebt = async (newDebt: DebtEntry): Promise<IDbDebt> => {
  console.log(newDebt)
  const debtObject = new Debt({
    ...newDebt,
  })
  const saved = await debtObject.save()
  return saved
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
