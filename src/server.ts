import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import imageRouter from './routes/image'
import cors from 'cors'

dotenv.config()
const port = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

app.use('/v1', imageRouter)
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
