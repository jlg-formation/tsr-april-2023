import { SVGNS } from "./constants";
import { Config } from "./interfaces/Config";
import { getCoordinates, getAngleFromIndex } from "./math";
import { querySelector, setAttribute } from "./misc";

export class Board {
  #config: Config = {
    multiplicationFactor: 2,
    samples: 10,
  };

  clear() {
    querySelector("svg g.samples").innerHTML = "";
    querySelector("svg g.lines").innerHTML = "";
  }

  draw() {
    this.drawSamples();
    this.drawLines();
  }

  drawLines() {
    const gLineElement = querySelector("svg g.lines");
    for (let i = 0; i < this.#config.samples; i++) {
      const angle1 = getAngleFromIndex(i, this.#config.samples);
      const angle2 = angle1 * this.#config.multiplicationFactor;
      const point1 = getCoordinates(angle1);
      const point2 = getCoordinates(angle2);

      const line = document.createElementNS(SVGNS, "line");
      setAttribute(line, "x1", point1.x);
      setAttribute(line, "y1", point1.y);
      setAttribute(line, "x2", point2.x);
      setAttribute(line, "y2", point2.y);
      gLineElement.appendChild(line);
    }
  }

  drawSamples() {
    const gSampleElement = querySelector("svg g.samples");
    for (let i = 0; i < this.#config.samples; i++) {
      const point = getCoordinates(getAngleFromIndex(i, this.#config.samples));
      const r = 1;

      const circle = document.createElementNS(SVGNS, "circle");
      setAttribute(circle, "cx", point.x);
      setAttribute(circle, "cy", point.y);
      setAttribute(circle, "r", r);
      gSampleElement.appendChild(circle);
    }
  }

  setConfig(config: Config) {
    this.#config = config;
  }
}
