# Contrasting Color

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
![Prerequisite](https://img.shields.io/badge/node-%3E%3D14.16-blue.svg)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/OleVik/contrasting-color#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/OleVik/contrasting-color/graphs/commit-activity)
[![License: MIT](https://img.shields.io/github/license/OleVik/contrasting-color)](https://github.com/OleVik/contrasting-color/blob/master/LICENSE)

> Generate contrasting color between two colors according to ratio.

## Usage

```js
import { contrastingColor } from "../index.js";
let correctedBackground = contrastingColor({
  Foreground: "#ffffff",
  Background: "#ea4335",
  ratio: 4.5,
  increments: 0.005,
});
console.log(correctedBackground.hex());
```

The named export, `contrastingColor({})`, receives an object and returns an object. See the parameters in code or in the example above. The returned object is an instance of [Color](https://github.com/Qix-/color), and can be accessed through its [getters](https://github.com/Qix-/color#getters).

The `ratio`-parameter corresponds to [WCAG's A (lowest), AA (mid range), and AAA (highest) levels for contrast](https://usecontrast.com/guide), 3, 4.5, and 7, respectively. The `increments`-parameter determines how small, and thus how many, steps are taken to achieve the corrected contrast from the base. Numbers closer to 1 are faster, to 0 slower.

## Install

Tested with node >=14.16.

```sh
yarn install
```

## Test

```sh
yarn test
```

## Acknowledgements

Inspiration taken from ["Generating accessible color combinations for the web"](https://dev.to/kartiknair/generating-accessible-color-combinations-for-the-web-4al7).

## License

Copyright © 2022 [Ole Vik](https://github.com/OleVik), [MIT](https://github.com/OleVik/contrasting-color/blob/master/LICENSE)-licensed.
