import express from 'express'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send('Fetching all debts!')
})

router.post('/', (_req, res) => {
  res.send('Saving a debt!')
})

export default router
