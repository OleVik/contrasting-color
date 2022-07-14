import Color from "color";

/**
 * Generate a contrasting color background based on a foreground and current background color
 * @param {string} Foreground Foreground color
 * @param {string} Background Background color
 * @param {integer} ratio Target contrast ratio, defaults to WCAG AA - 4.5
 * @param {integer} increments Integers to iterate through, defaults to 0.05
 * @param {boolean} debug Output verbose debugging information
 * @returns {string} Contrasting color in hexadecimal format
 */
export function contrastingColor({
  Foreground,
  Background,
  ratio = 4.5,
  increments = 0.05,
  debug = false,
}) {
  Foreground = Color(Foreground);
  Background = Color(Background);

  if (debug) {
    console.log("Foreground", Foreground);
    console.log("Background", Background);
    console.log("Target ratio", ratio, "using increments of", increments);
    console.log("Current contrast", Foreground.contrast(Background));
  }
  let correctedBackground = null;
  let colorMode = null;
  if (Background.isLight()) {
    colorMode = "Darken";
  } else if (Background.isDark()) {
    colorMode = "Lighten";
  }
  while (!correctedBackground) {
    if ((colorMode = "Lighten")) {
      Background = Background.darken(increments);
    } else if ((colorMode = "Darken")) {
      Background = Background.lighten(increments);
    }
    if (debug) {
      console.log(
        `${colorMode} to contrast of`,
        Foreground.contrast(Background)
      );
    }
    if (Foreground.contrast(Background) > ratio) {
      correctedBackground = Background;
    }
  }
  return correctedBackground;
}
