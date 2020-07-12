import express from 'express'
import debtRouter from './routes/debts'

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/', (_req, res) => {
  res.send('hello')
})

// API routes
app.use('/api/debts', debtRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
