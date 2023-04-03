import { cx0, r0, cy0 } from "./constants";
import { Point } from "./interfaces/Point";

export const getAngleFromIndex = (
  index: number,
  totalSamples: number
): number => (index * 2 * Math.PI) / totalSamples;

export const getCoordinates = (angle: number): Point => {
  const x = cx0 + r0 * Math.cos(angle);
  const y = cy0 + r0 * Math.sin(angle);
  return { x, y };
};
