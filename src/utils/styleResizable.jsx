export const sizes = {
  SMALL: 1,
  MEDIUM: 2,
  LARGE: 3
};

export function isDeviceSize (desiredSize) {
  return getDeviceSize() === desiredSize;
}

export function getDeviceSize () {
  const width = window.innerWidth;
  let currentSize;

  if (width >= 992) {
    currentSize = sizes.LARGE;
  } else if (width >= 768) {
    currentSize = sizes.MEDIUM;
  } else { // width < 768
    currentSize = sizes.SMALL;
  }

  return currentSize;
}

export default {
  sizes,
  isDeviceSize,
  getDeviceSize
};
