import express from 'express'
//import dotenv from 'dotenv'
import debtService from '../services/debtService'

/* eslint @typescript-eslint/no-unsafe-assignment: 0 */
/* eslint @typescript-eslint/restrict-plus-operands: 0 */

const router = express.Router()
//const password = process.env.PASSWORD ?? ''

router.get('/', async (_req, res) => {
  const debts = await debtService.getAllDebts()
  res.send(debts)
})

router.post('/', async (req, res) => {
  // add password check here req.body.password
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
