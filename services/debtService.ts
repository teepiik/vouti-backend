import { DebtEntry, IDbDebt } from '../types'
import Debt from '../models/debt'

const getAllDebts = async (): Promise<Array<IDbDebt>> => {
  const debts = await Debt.find({})
  return debts
}

const createDebt = async (newDebt: DebtEntry): Promise<IDbDebt> => {
  const debtObject = new Debt({
    ...newDebt,
  })
  const saved = await debtObject.save()
  return saved
}

const updateDebt = (id: string): IDbDebt | undefined | null => {
  //const debt = debts.find(d => d.id === id)
  // change string to MongoDB id
  console.log(id)
  return null
}

export default {
  getAllDebts,
  createDebt,
  updateDebt,
}
