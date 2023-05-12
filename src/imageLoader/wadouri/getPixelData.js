import getEncapsulatedImageFrame from './getEncapsulatedImageFrame.js';
import getUncompressedImageFrame from './getUncompressedImageFrame.js';

function getPixelData(dataSet, frameIndex = 0) {
  console.log(' ----> getPixelData');
  const pixelDataElement =
    dataSet.elements.x7fe00010 || dataSet.elements.x7fe00008;

  if (!pixelDataElement) {
    console.log(' --- No pixel data returns null ---');
    return null;
  }

  console.log(' ----> !!pixelDataElement.encapsulatedPixelData', Boolean(pixelDataElement.encapsulatedPixelData));

  if (pixelDataElement.encapsulatedPixelData) {
    console.log(' ===> passed in if !!pixelDataElement.encapsulatedPixelData');
    return getEncapsulatedImageFrame(dataSet, frameIndex);
  }

  return getUncompressedImageFrame(dataSet, frameIndex);
}

export default getPixelData;
