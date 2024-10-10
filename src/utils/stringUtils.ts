export const formatNumDigits = (
  num: number,
  intLength: number,
  floatLength: number
): string => {
  const [intPart, floatPart] = num.toFixed(floatLength).split('.');
  const paddedInt = intPart ? intPart.padStart(intLength, '0') : '0';
  return `${intLength > 0 ? paddedInt : intLength < 0 ? intPart : ''}${
    floatLength > 0 ? `.${floatPart}` : ''
  }`;
};

export const formatNumQuantize = (num: number, step: number): string => {
  const floatLength = (step.toString().split('.')[1] || '').length;
  return formatNumDigits(num, -1, floatLength);
};

export const camelCaseToKebabCase = (camelString: string): string => {
  const trimmedString = camelString.trim();
  const kebabString = trimmedString
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .replace(/([a-zA-Z])(\d)/g, '$1-$2')
    .replace(/(\d)([a-zA-Z])/g, '$1-$2')
    .toLowerCase();
  return kebabString;
};

export const replaceWordInCamelCase = (
  camelString: string,
  targetWord: string,
  replacementWord: string
): string => {
  const trimmedString = camelString.trim();
  return trimmedString.replace(new RegExp(targetWord, 'gi'), () => {
    return replacementWord
      .toLowerCase()
      .replace(/(?:^|\s)\S/g, (char) => char.toUpperCase());
  });
};
