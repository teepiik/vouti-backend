import express from 'express'
import debtService from '../services/debtService'

const router = express.Router()

/* eslint @typescript-eslint/no-unsafe-assignment: 0 */

router.get('/', (_req, res) => {
  res.send('Listing of debts')
})

router.post('/', (req, res) => {
  const {
    date_origin,
    date_paid,
    debtor,
    receiver,
    debt_item,
    comment,
  } = req.body

  const newDebt = debtService.createDebt({
    date_origin,
    date_paid,
    debtor,
    receiver,
    debt_item,
    comment,
  })
  res.json(newDebt)
})

export default router
