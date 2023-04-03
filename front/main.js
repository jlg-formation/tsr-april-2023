console.log("hello");

const cx0 = 50;
const cy0 = 50;
const r0 = 45;

const samples = 10;

const svgns = "http://www.w3.org/2000/svg";
const svgElement = document.querySelector("svg g.samples");
for (let i = 0; i < samples; i++) {
  const angle = (i * 2 * Math.PI) / samples;

  const cx = cx0 + r0 * Math.cos(angle);
  const cy = cy0 + r0 * Math.sin(angle);

  const circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", cx);
  circle.setAttributeNS(null, "cy", cy);
  circle.setAttributeNS(null, "r", 1);

  svgElement.appendChild(circle);
}
