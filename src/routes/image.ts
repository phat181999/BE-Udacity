import express from 'express'
import { ImageController } from '~/controllers/images.controller'

const imageRouter = express.Router()
const imageController = new ImageController(ImageService)
imageRouter.get('/api/images', imageController.imageController)

export default imageRouter
