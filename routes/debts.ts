import express from 'express'
import debtService from '../services/debtService'

/* eslint @typescript-eslint/no-unsafe-assignment: 0 */
/* eslint @typescript-eslint/restrict-plus-operands: 0 */
/* eslint @typescript-eslint/no-unsafe-call: 0 */

const router = express.Router()

router.get('/', (_req, res) => {
  res.send('Listing of debts')
})

router.post('/', async (req, res) => {
  try {
    const {
      date_origin,
      date_paid,
      debtor,
      receiver,
      debt_item,
      comment,
    } = req.body

    const savedDebt = await debtService.createDebt({
      date_origin,
      date_paid,
      debtor,
      receiver,
      debt_item,
      comment,
    })

    res.status(201).send(savedDebt)
  } catch (error) {
    res.json('Error: ' + error)
  }
})

export default router
