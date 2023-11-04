import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import imageRouter from './routes/images/image'
import cors from 'cors'

dotenv.config()
const port = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

app.use('/api', imageRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

module.exports = app
