import sharp from "sharp";
import express, { Request, Response } from "express";
interface ImageDimensions {
  width?: number;
  height?: number;
}

// export const resizeImage = async (
//   imageWidth?: number,
//   imageHeight?: number
// ) => {
//     try {
//         const resizeImage = await sharp("./summer.jpg")
//           .resize({ width: imageWidth, height: imageHeight })
//           .toFile("output.jpg");
//         if(resizeImage) {
//             return resizeImage;
//         }
//     }
// };

class ImageMiddleware {
  async checkImage(url: any): Promise<boolean> {
    const typeImages = [".jpg", ".png", ".jpeg"];
    const checkType = await typeImages.some((str) => url.includes(str));
    console.log(url, checkType);
    if (checkType) {
      return true;
    } else {
      console.log("Invalid image type");
      return false;
    }
  }

  // async resizeImage(imageWidth: number, imageHeight: number) {
  //   const resizeImage =
  // }
}

export default ImageMiddleware;
