import ImageMiddleware from "../middlewares/image";

const imageMiddleware = new ImageMiddleware();
class ImageService {
  async resizeImageUrl(urlImage: string) {
    if (await imageMiddleware.checkImage(urlImage)) {
      await console.log("urlImage");
    }
  }
}

export default ImageService;
