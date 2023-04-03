export const querySelector = (cssSelector: string): Element => {
  const result = document.querySelector(cssSelector);
  if (result === null) {
    throw new Error(`Cannot find css selector: ${cssSelector}`);
  }
  return result;
};
