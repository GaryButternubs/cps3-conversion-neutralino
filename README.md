# CPS3 ROM Conversion Tool

A simple tool designed to convert between the Split and Combined ROM formats used by the six titles released on the [Capcom Play System III (CPS3)](https://en.wikipedia.org/wiki/CP_System_III). Built using [Neutralinojs](https://neutralino.js.org/), [TailwindCSS](https://tailwindcss.com/), and [daisyUI](https://daisyui.com/).

## Installation

### Download

You can get the latest build of the project from the [Releases](https://github.com/GaryButternubs/cps3-conversion-neutralino/releases/) page.

### Build

You can build the project manually as well by cloning this repo and using the following command:

```bash
neu build
```

Doing so will require you to install the neu CLI. Instructions can be found [here](https://neutralino.js.org/docs/getting-started/your-first-neutralinojs-app). The resulting project will be available in the "dist" directory for use.

## How to use

1. On startup, you'll have the option to convert a combined ROM to a split ROM, or a split ROM into a combined ROM. The combined ROM is used for FightCade 1 as well as earlier builds of Mame and Final Burn Alpha. It's also used for several older romhacking tools such as X.C.O.P.Y. The split ROM is the format used on FightCade 2, the more recent builds of Mame, and all builds of Final Burn Neo.

2. After selecing either option, pick the game you're attempting to convert, of which there are six:
   - Red Earth
   - Street Fighter III: New Generation
   - Street Fighter III Second Impact: Giant Attack
   - JoJo's Bizarre Adventure / JoJo's Venture
   - Street Fighter III Third Strike: Fight for the Future
   - JoJo's Bizarre Adventure: Heritage for the Future

3. You will be asked to select the file directory where the ROM you want to convert is located. Make sure it has been extracted from the .zip file.

4. You will then need to select the directory where you want the converted ROM to go. This can be the same directory, or a different one. When I use this tool, I make an "input" directory that I use for the previous step, and an "output" directory that I use for this step.

5. The ROM should be successfully converted, and will end up in whatever directory you chose for the previous step. When I use this tool, it ends up in the "output" directory.

## Special Thanks

Thank you to Cloudwerk for their [Neutralinojs + Vite + React + Typescript template](https://github.com/Cloudwerk/neutralinojs-vite-react-ts) to help speed up development.

## License

[MIT](LICENSE)
