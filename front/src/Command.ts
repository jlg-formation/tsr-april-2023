import { Config } from "./interfaces/Config";
import { querySelector } from "./misc";

type OnChangeCallback = (newConfig: Config) => void;

export class Command {
  callback: OnChangeCallback = () => {};
  config: Config = {
    multiplicationFactor: 0,
    samples: 0,
  };

  constructor() {
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
    const keys = Object.keys(this.config) as (keyof Config)[];
    console.log("keys: ", keys);
    for (const key of keys) {
      const valueElt = querySelector(`div.command .${key} .value`);
      console.log("valueElt: ", valueElt);
      valueElt.innerHTML = this.config[key] + "";
    }
  }
}
