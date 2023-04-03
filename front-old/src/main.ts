import {
  cx0,
  cy0,
  multiplicationFactor,
  r0,
  samples,
  svgns,
} from "./constants.js";

console.log("hello");

const gSampleElement = document.querySelector("svg g.samples");
if (gSampleElement === null) {
  throw new Error("Cannot find selector svg g.samples");
}
for (let i = 0; i < samples; i++) {
  const angle = (i * 2 * Math.PI) / samples;

  const cx = cx0 + r0 * Math.cos(angle);
  const cy = cy0 + r0 * Math.sin(angle);
  const r = 1;

  const circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", cx + "");
  circle.setAttributeNS(null, "cy", cy + "");
  circle.setAttributeNS(null, "r", r + "");

  gSampleElement.appendChild(circle);
}

// make the lines
const gLineElement = document.querySelector("svg g.lines");
if (gLineElement === null) {
  throw new Error("Cannot find selector svg g.lines");
}
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
