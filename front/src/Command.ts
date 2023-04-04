import { Config } from "./interfaces/Config";
import { getKeys, querySelector } from "./misc";

type OnChangeCallback = (newConfig: Config) => void;

export class Command {
  callback: OnChangeCallback = () => {};
  config: Config = {
    multiplicationFactor: 0,
    samples: 0,
  };

  constructor() {
    this.setActions();
    this.render();
  }

  onChange(callback: OnChangeCallback) {
    this.callback = callback;
  }

  setConfig(config: Config) {
    this.config = config;
    this.render();
  }

  render() {
    const keys = getKeys(this.config);
    console.log("keys: ", keys);
    for (const key of keys) {
      const valueElt = querySelector(`div.command .${key} .value`);
      console.log("valueElt: ", valueElt);
      valueElt.innerHTML = this.config[key] + "";

      const sliderElt = querySelector(
        `div.command .${key} input`,
        HTMLInputElement
      );
      console.log("sliderElt: ", sliderElt);
      sliderElt.value = this.config[key] + "";
    }
  }

  setActions() {
    const keys = getKeys(this.config);
    for (const key of keys) {
      const sliderElt = querySelector(
        `div.command .${key} input`,
        HTMLInputElement
      );
      sliderElt.addEventListener("input", () => {
        console.log("input change");
      });
    }
  }
}
