import ImageCheckerMiddleware from '../src/midlleware/image'
import ImageCheckerService from '../src/services/image.service'
describe('ImageChecker Middles', () => {
  let checker: ImageCheckerMiddleware

  beforeEach(() => {
    checker = new ImageCheckerMiddleware()
  })

  it('should return true for valid image URLs', async () => {
    const urls = [
      'http://example.com/image.png',
      'http://example.com/photo.jpeg',
      'http://example.com/picture.jpg',
    ]

    for (const url of urls) {
      const result = await checker.checkImage(url)
      expect(result).toBe(true)
    }
  })

  it('should return false for invalid image URLs', async () => {
    const urls = [
      'http://example.com/image.gif',
      'http://example.com/photo.bmp',
      'http://example.com/picture.svg',
    ]

    for (const url of urls) {
      const result = await checker.checkImage(url)
      expect(result).toBe(false)
    }
  })

  it('should handle exceptions', async () => {
    spyOn(console, 'error') // Optionally spy on console.error to verify it gets called.

    const result = await checker.checkImage(undefined as unknown as string)
    expect(result).toBe(false)
    expect(console.error).toHaveBeenCalled()
  })

  //

  it('should return true for a URL containing the word "url"', async () => {
    const testUrl = 'http://example.com/api/urlEndpoint'
    const result = await checker.checkEndpoint(testUrl)
    expect(result).toBe(true)
  })

  it('should return false for a URL not containing the word "url"', async () => {
    const testUrl = 'http://example.com/api/endpoint'
    const result = await checker.checkEndpoint(testUrl)
    expect(result).toBe(false)
  })

  it('should return false and log an error for an invalid URL', async () => {
    const testUrl = null // This will cause an error when passed to `checkEndpoint`.
    spyOn(console, 'error')
    const result = await checker.checkEndpoint(testUrl as unknown as string)
    expect(result).toBe(false)
    expect(console.error).toHaveBeenCalled()
  })
})

describe('ImageChecker Service', () => {
  let resizer: ImageCheckerService

  beforeEach(() => {
    resizer = new ImageCheckerService()
  })

  it('should create an image buffer with the given dimensions', async () => {
    const width = 100
    const height = 100
    const imageBuffer = await resizer.resizeImage(width, height)

    expect(imageBuffer).toBeInstanceOf(Buffer)
    expect(imageBuffer.length).toBeGreaterThan(0)
  })
})
