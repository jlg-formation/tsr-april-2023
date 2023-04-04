import { url } from "./constants";
import { Config } from "./interfaces/Config";
import { getKeys, $, sleep } from "./misc";

type OnChangeCallback = (newConfig: Config) => void;

const step = 0.01;

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

  async play() {
    while (this.isPlaying) {
      await sleep(50);
      let mf = this.config.multiplicationFactor;
      mf = +((mf + step) % 100).toFixed(2);
      this.config.multiplicationFactor = mf;
      this.render();
      this.callback(this.config);
    }
  }

  render() {
    const keys = getKeys(this.config);

    for (const key of keys) {
      const valueElt = $(`div.command .${key} .value`);

      valueElt.innerHTML = this.config[key] + "";

      $(`div.command .${key} input`, HTMLInputElement).value =
        this.config[key] + "";
    }

    $("div.command button.play").innerHTML = this.isPlaying
      ? "Arrêter"
      : "Démarrer";
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

    const buttonElt = $("div.command button.play");
    console.log("buttonElt: ", buttonElt);
    buttonElt.addEventListener("click", () => {
      console.log("click");
      this.isPlaying = !this.isPlaying;
      this.render();
      if (this.isPlaying) {
        this.play();
      }
    });

    const randomButtonElt = $("div.command button.random");
    console.log("randomButtonElt: ", randomButtonElt);

    randomButtonElt.addEventListener("click", () => {
      console.log("click random");

      (async () => {
        try {
          const response = await fetch(url);
          console.log("response: ", response);
          const config: Config = await response.json();
          this.config = config;
          this.render();
          this.callback(this.config);
        } catch (err) {
          console.log("err: ", err);
        }
      })();
    });
  }

  setConfig(config: Config) {
    this.config = config;
    this.render();
  }
}
