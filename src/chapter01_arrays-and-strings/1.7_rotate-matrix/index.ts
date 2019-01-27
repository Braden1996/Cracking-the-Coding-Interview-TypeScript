import { Image } from './types';

const swapPixels = (image: Image, [x0, y0]: number[], [x1, y1]: number[]) => {
  [image[x0][y0], image[x1][y1]] = [image[x1][y1], image[x0][y0]];
};

export function rotate90deg(image: Image) {
  const layers = Math.floor(image.length / 2);
  for (let first = 0; first < layers; first++) {
    const last = image.length - first - 1;
    for (let i = 0; i < last - first; i++) {
      const topPixel = [first, i + first];
      swapPixels(image, topPixel, [i + first, last]); // Swap top with right
      swapPixels(image, topPixel, [last, last - i]); // Swap top with bottom
      swapPixels(image, topPixel, [last - i, first]); // Swap top with left
    }
  }
  return image;
}
