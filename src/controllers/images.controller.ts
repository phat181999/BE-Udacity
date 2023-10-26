import path from "path";
import express, { Request, Response } from "express";
import ImageService from "../services/image.service";
const imageService = new ImageService();

export const ImageController = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { width, height } = req.params;

    const image = await imageService.resizeImage(
      parseInt(width),
      parseInt(height)
    );
    res.set("Content-Type", "image/jpeg");
    res.status(200).send(image);
  } catch (err) {
    res.status(500).json({ err: "error" });
  }
};
