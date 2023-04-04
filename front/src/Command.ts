import { Config } from "./interfaces/Config";
import { getKeys, $ } from "./misc";

type OnChangeCallback = (newConfig: Config) => void;

export class Command {
  callback: OnChangeCallback = () => {};
  config: Config = {
    multiplicationFactor: 0,
    samples: 0,
  };
  isPlaying = false;

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

    for (const key of keys) {
      const valueElt = $(`div.command .${key} .value`);

      valueElt.innerHTML = this.config[key] + "";

      $(`div.command .${key} input`, HTMLInputElement).value =
        this.config[key] + "";
    }

    $("div.command button").innerHTML = this.isPlaying ? "Arrêter" : "Démarrer";
  }

  setActions() {
    const keys = getKeys(this.config);
    for (const key of keys) {
      const sliderElt = $(`div.command .${key} input`, HTMLInputElement);

      sliderElt.addEventListener("input", () => {
        const newValue = Number(sliderElt.value);
        this.config[key] = newValue;
        this.render();
        this.callback(this.config);
      });
    }

    const buttonElt = $("div.command button");
    console.log("buttonElt: ", buttonElt);
    buttonElt.addEventListener("click", () => {
      console.log("click");
      this.isPlaying = !this.isPlaying;
      this.render();
    });
  }
}
