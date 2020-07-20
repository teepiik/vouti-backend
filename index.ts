import express from 'express'
import debtRouter from './routes/debts'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors()) // eslint-disable-line
app.use(express.static('build'))

const PORT = process.env.PORT ?? ''
const url = process.env.MONGODB_URI ?? ''

console.log('connecting to MongoDB Atlas')

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((_result) => {
    console.log('connected to MongoDB')
  })
  .catch((error: string) => {
    console.log('error connecting to MongoDB: ' + error)
  })

app.get('/', (_req, res) => {
  res.send('hello')
})

// API routes
app.use('/api/debts', debtRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
