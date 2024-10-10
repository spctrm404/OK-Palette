export const degToRad = (deg: number): number => {
  return (deg * Math.PI) / 180;
};

export const quantize = (num: number, step: number): number => {
  const floatLength = (step.toString().split('.')[1] || '').length;
  let quantizedValue = Math.round(num / step) * step;
  quantizedValue = parseFloat(quantizedValue.toFixed(floatLength));
  return quantizedValue;
};

export const clamp = (
  num: number,
  minValue: number,
  maxValue: number
): number => {
  return Math.min(Math.max(num, minValue), maxValue);
};
