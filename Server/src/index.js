import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import rateLimit from 'express-rate-limit'

import inquiryRouter from './routes/inquiry.js'

dotenv.config()

const app = express()
app.set('trust proxy', 1) // ✅ Fix Render proxy issue

const PORT = process.env.PORT || 3001

app.use(helmet())
app.use(
  cors({
    origin: process.env.CLIENT_URL?.replace(/\/$/, '') || 'http://localhost:5173',
  })
)
app.use(express.json({ limit: '200kb' }))

const apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  message: { ok: false, error: 'Too many requests, please try again later.' },
})

app.use('/api/', apiLimiter)
app.use('/api/inquiry', inquiryRouter)

app.get('/', (req, res) => {
  res.json({ ok: true, service: 'weftora-mailer' })
})
app.use((req, res) => res.status(404).json({ ok: false, error: 'Route not found' }))

app.use((err, req, res, next) => {
  console.error('Global Error:', err)
  res.status(500).json({ ok: false, error: 'Internal Server Error' })
})

app.listen(PORT, () => console.log(`✅ Weftora mailer running on port ${PORT}`))
