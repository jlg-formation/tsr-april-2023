console.log("hello");

var cx0 = 50;
var cy0 = 50;
var r0 = 45;

var samples = 10;

var svgns = "http://www.w3.org/2000/svg";
var svgElement = document.querySelector("svg g.samples");
for (var i = 0; i < samples; i++) {
  var angle = (i * 2 * Math.PI) / samples;

  var cx = cx0 + r0 * Math.cos(angle);
  var cy = cy0 + r0 * Math.sin(angle);

  var circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", cx);
  circle.setAttributeNS(null, "cy", cy);
  circle.setAttributeNS(null, "r", 1);

  svgElement.appendChild(circle);
}
