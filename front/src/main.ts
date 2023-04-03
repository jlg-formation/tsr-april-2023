import "./style.css";

import {
  cx0,
  cy0,
  multiplicationFactor,
  r0,
  samples,
  svgns,
} from "./constants";
import { querySelector } from "./misc";
import { getAngleFromIndex, getCoordinates } from "./math";

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
  const angle1 = (i * 2 * Math.PI) / samples;
  const angle2 = angle1 * multiplicationFactor;

  const x1 = cx0 + r0 * Math.cos(angle1);
  const y1 = cy0 + r0 * Math.sin(angle1);
  const x2 = cx0 + r0 * Math.cos(angle2);
  const y2 = cy0 + r0 * Math.sin(angle2);

  const line = document.createElementNS(svgns, "line");
  line.setAttributeNS(null, "x1", x1 + "");
  line.setAttributeNS(null, "y1", y1 + "");
  line.setAttributeNS(null, "x2", x2 + "");
  line.setAttributeNS(null, "y2", y2 + "");

  gLineElement.appendChild(line);
}
