import { bigCircle } from "./constants";
import { Point } from "./interfaces/Point";

export const getAngleFromIndex = (
  index: number,
  totalSamples: number
): number => (index * 2 * Math.PI) / totalSamples;

export const getCoordinates = (angle: number): Point => {
  const x = bigCircle.center.x + bigCircle.radius * Math.cos(angle);
  const y = bigCircle.center.y + bigCircle.radius * Math.sin(angle);
  return { x, y };
};
