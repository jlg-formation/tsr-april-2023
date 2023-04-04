type Class<T> = new () => T;

export const $ = <T extends Element>(
  cssSelector: string,
  type?: Class<T>
): T => {
  const result = document.querySelector(cssSelector);
  if (result === null) {
    throw new Error(`Cannot find css selector: ${cssSelector}`);
  }
  if (type && !(result instanceof type)) {
    throw new Error(
      `found the selector ${cssSelector} but it is not of type ${type}`
    );
  }
  return result as T;
};

export const setAttribute = (
  elt: Element,
  name: string,
  value: number
): void => {
  elt.setAttributeNS(null, name, value + "");
};

export const getKeys = <T extends object>(object: T) => {
  return Object.keys(object) as (keyof T)[];
};

export const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};
