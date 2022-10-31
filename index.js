import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

import authRoute from './routes/auth.js'
import carsRoute from './routes/cars.js'
import reviewsRoute from './routes/review.js'
import applicationRoute from './routes/application.js'

const app = express()
dotenv.config()

// Constants
const PORT = process.env.PORT || 3009
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.static('uploads'))

// Routes

app.use('/api/auth', authRoute)
app.use('/api/cars', carsRoute)
app.use('/api/reviews', reviewsRoute)
app.use('/api/application', applicationRoute)

app.get('/', (req, res) => {
  res.json({ message: 'Hello' })
})

async function start() {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.andvvt1.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
    )

    app.listen(PORT, () => console.log('started'))
  } catch (error) {
    console.log(error)
  }
}

start()