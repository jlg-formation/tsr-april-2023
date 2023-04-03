import "./style.css";

import { multiplicationFactor, samples, svgns } from "./constants";
import { getAngleFromIndex, getCoordinates } from "./math";
import { querySelector, setAttribute } from "./misc";

const gSampleElement = querySelector("svg g.samples");
for (let i = 0; i < samples; i++) {
  const angle = getAngleFromIndex(i, samples);

  const point = getCoordinates(angle);
  const r = 1;

  const circle = document.createElementNS(svgns, "circle");
  setAttribute(circle, "cx", point.x);
  setAttribute(circle, "cy", point.y);
  setAttribute(circle, "r", r);
  gSampleElement.appendChild(circle);
}

// make the lines
const gLineElement = querySelector("svg g.lines");
for (let i = 0; i < samples; i++) {
  const angle1 = getAngleFromIndex(i, samples);
  const angle2 = angle1 * multiplicationFactor;

  const p1 = getCoordinates(angle1);
  const p2 = getCoordinates(angle2);

  const line = document.createElementNS(svgns, "line");
  setAttribute(line, "x1", p1.x);
  setAttribute(line, "y1", p1.y);
  setAttribute(line, "x2", p2.x);
  setAttribute(line, "y2", p2.y);
  gLineElement.appendChild(line);
}
