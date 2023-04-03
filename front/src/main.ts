import "./style.css";

import { multiplicationFactor, samples, svgns } from "./constants";
import { getAngleFromIndex, getCoordinates } from "./math";
import { querySelector } from "./misc";

const gSampleElement = querySelector("svg g.samples");
for (let i = 0; i < samples; i++) {
  const angle = getAngleFromIndex(i, samples);

  const point = getCoordinates(angle);
  const r = 1;

  const circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", point.x + "");
  circle.setAttributeNS(null, "cy", point.y + "");
  circle.setAttributeNS(null, "r", r + "");

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
  line.setAttributeNS(null, "x1", p1.x + "");
  line.setAttributeNS(null, "y1", p1.y + "");
  line.setAttributeNS(null, "x2", p2.x + "");
  line.setAttributeNS(null, "y2", p2.y + "");

  gLineElement.appendChild(line);
}
