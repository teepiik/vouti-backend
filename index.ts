import express from 'express'
import debtRouter from './routes/debts'
import userRouter from './routes/users'

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/hello', (_req, res) => {
  res.send('hello')
})

// API routes
app.use('/api/debts', debtRouter)
app.use('/api/users', userRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
