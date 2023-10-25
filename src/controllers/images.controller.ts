import path from "path";
import express, { Request, Response } from "express";
import ImageService from "../services/image.service";
import sharp from "sharp";
const imageService = new ImageService();

export const ImageController = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    // const imageUrl = path.join(__dirname, "../img/summer.jpg");
    const imageUrl = "../img/summer.jpg";
    const { width, height } = req.params;
    // const resizeUrl = await imageService.resizeImageUrl(imageUrl);
    console.log(width, height);
    await sharp(imageUrl)
      .resize({ width: parseInt(width), height: parseInt(height) })
      .toBuffer()
      .then((data) => {
        // Set the response content type based on the image format (e.g., jpeg, png)
        res.setHeader("Content-Type", "image/jpeg");
        // Send the resized image data in the response
        res.send(data);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send("Error processing the image");
      });
    res.status(200).sendFile(imageUrl);
    // res.sendFile(path.join(__dirname, "../img/summer.jpg"));
  } catch (err) {
    res.status(500).json({ err: "error" });
  }
};
