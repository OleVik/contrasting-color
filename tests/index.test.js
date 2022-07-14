import Color from "color";
import { contrastingColor } from "../index.js";

const Foreground = Color("#ffffff"),
  Background = Color("#ea4335"),
  ratio = 4.5,
  increments = 0.005;
let correctedBackground = contrastingColor({
  Foreground: Foreground,
  Background: Background,
  ratio: ratio,
  increments: increments,
});

describe("Presumptions", () => {
  test(`Foreground of ${Foreground.hex()} is an instance of Color`, () => {
    expect(Foreground).toBeInstanceOf(Color);
  });
  test(`Background of ${Background.hex()} is an instance of Color`, () => {
    expect(Background).toBeInstanceOf(Color);
  });
  test("Ratio of " + ratio + " is a Number", () => {
    expect(typeof ratio).toBe("number");
  });
  test(`Increments of ${increments} is a Number`, () => {
    expect(typeof increments).toBe("number");
  });
});
describe("Logic in module", () => {
  test(`Contrast of ${Foreground.contrast(Background).toFixed(
    2
  )} is below ratio`, () => {
    expect(Foreground.contrast(Background)).toBeLessThan(ratio);
  });
  test(`Corrected contrast of ${Foreground.contrast(
    correctedBackground
  ).toFixed(2)} is at or above ratio`, () => {
    expect(Foreground.contrast(correctedBackground)).toBeGreaterThanOrEqual(
      ratio
    );
  });
});
