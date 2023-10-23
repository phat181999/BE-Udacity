import express, { Request, Response } from 'express'

export class ImageController {
  constructor(private imageService: ImageService) {}

  public async imageController(req: Request, res: Response) {
    try {
      const imageUrl = req.url
      const resizeUrl = await this.imageService.resizeImageUrl(imageUrl)
      res.status(200).json({ resizeUrl: resizeUrl })
    } catch (err) {
      res.status(500).json({ err: 'error' })
    }
  }
}
