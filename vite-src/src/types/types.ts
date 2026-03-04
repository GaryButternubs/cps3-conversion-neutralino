import { Dispatch, SetStateAction } from "react";

import redearthBG from "../assets/redearth.jpg";
import newgenBG from "../assets/ng.png";
import secondimpactBG from "../assets/2i.jpg";
import ventureBG from "../assets/venture.jpg";
import thirdstrikeBG from "../assets/3s.jpg";
import heritageBG from "../assets/heritage.jpg";

export type GameContexType = {
  game: string;
  setGame: Dispatch<SetStateAction<string>>;
};

export interface Images {
  redearth: string;
  sfiii: string;
  sfiii2: string;
  jojo: string;
  sfiii3: string;
  jojoba: string;
}

export interface Game {
  title: string;
  abbrTitle?: string;
  combinedFiles: Array<string>;
  splitFiles: Array<Array<string>>;
  bgImage: string;
}

export interface GameList {
  redearth: Game;
  sfiii: Game;
  sfiii2: Game;
  jojo: Game;
  sfiii3: Game;
  jojoba: Game;
}

export const GameData: GameList = {
  redearth: {
    title: "Red Earth",
    combinedFiles: ["10", "30", "31", "40", "41", "50"],
    splitFiles: [
      [
        "redearth-simm1.0",
        "redearth-simm1.1",
        "redearth-simm1.2",
        "redearth-simm1.3",
      ],
      [
        "redearth-simm3.0",
        "redearth-simm3.1",
        "redearth-simm3.2",
        "redearth-simm3.3",
      ],
      [
        "redearth-simm3.4",
        "redearth-simm3.5",
        "redearth-simm3.6",
        "redearth-simm3.7",
      ],
      [
        "redearth-simm4.0",
        "redearth-simm4.1",
        "redearth-simm4.2",
        "redearth-simm4.3",
      ],
      [
        "redearth-simm4.4",
        "redearth-simm4.5",
        "redearth-simm4.6",
        "redearth-simm4.7",
      ],
      ["redearth-simm5.0", "redearth-simm5.1"],
    ],
    bgImage: redearthBG,
  },

  sfiii: {
    title: "Street Fighter III: New Generation",
    abbrTitle: "SFIII: New Generation",
    combinedFiles: ["10", "30", "31", "40", "41", "50"],
    splitFiles: [
      ["sfiii-simm1.0", "sfiii-simm1.1", "sfiii-simm1.2", "sfiii-simm1.3"],
      ["sfiii-simm3.0", "sfiii-simm3.1", "sfiii-simm3.2", "sfiii-simm3.3"],
      ["sfiii-simm3.4", "sfiii-simm3.5", "sfiii-simm3.6", "sfiii-simm3.7"],
      ["sfiii-simm4.0", "sfiii-simm4.1", "sfiii-simm4.2", "sfiii-simm4.3"],
      ["sfiii-simm4.4", "sfiii-simm4.5", "sfiii-simm4.6", "sfiii-simm4.7"],
      ["sfiii-simm5.0", "sfiii-simm5.1"],
    ],
    bgImage: newgenBG,
  },

  sfiii2: {
    title: "Street Fighter III Second Impact: Giant Attack",
    abbrTitle: "SFIII: Second Impact",
    combinedFiles: ["10", "20", "30", "31", "40", "41", "50", "51"],
    splitFiles: [
      ["sfiii2-simm1.0", "sfiii2-simm1.1", "sfiii2-simm1.2", "sfiii2-simm1.3"],
      ["sfiii2-simm2.0", "sfiii2-simm2.1", "sfiii2-simm2.2", "sfiii2-simm2.3"],
      ["sfiii2-simm3.0", "sfiii2-simm3.1", "sfiii2-simm3.2", "sfiii2-simm3.3"],
      ["sfiii2-simm3.4", "sfiii2-simm3.5", "sfiii2-simm3.6", "sfiii2-simm3.7"],
      ["sfiii2-simm4.0", "sfiii2-simm4.1", "sfiii2-simm4.2", "sfiii2-simm4.3"],
      ["sfiii2-simm4.4", "sfiii2-simm4.5", "sfiii2-simm4.6", "sfiii2-simm4.7"],
      ["sfiii2-simm5.0", "sfiii2-simm5.1", "sfiii2-simm5.2", "sfiii2-simm5.3"],
      ["sfiii2-simm5.4", "sfiii2-simm5.5", "sfiii2-simm5.6", "sfiii2-simm5.7"],
    ],
    bgImage: secondimpactBG,
  },

  jojo: {
    title: "JoJo's Bizarre Adventure / JoJo's Venture",
    abbrTitle: "JoJo's Venture",
    combinedFiles: ["10", "20", "30", "31", "40", "41", "50"],
    splitFiles: [
      ["jojo-simm1.0", "jojo-simm1.1", "jojo-simm1.2", "jojo-simm1.3"],
      ["jojo-simm2.0", "jojo-simm2.1", "jojo-simm2.2", "jojo-simm2.3"],
      ["jojo-simm3.0", "jojo-simm3.1", "jojo-simm3.2", "jojo-simm3.3"],
      ["jojo-simm3.4", "jojo-simm3.5", "jojo-simm3.6", "jojo-simm3.7"],
      ["jojo-simm4.0", "jojo-simm4.1", "jojo-simm4.2", "jojo-simm4.3"],
      ["jojo-simm4.4", "jojo-simm4.5", "jojo-simm4.6", "jojo-simm4.7"],
      ["jojo-simm5.0", "jojo-simm5.1"],
    ],
    bgImage: ventureBG,
  },

  sfiii3: {
    title: "Street Fighter III Third Strike: Fight for the Future",
    abbrTitle: "SFIII: Third Strike",
    combinedFiles: ["10", "20", "30", "31", "40", "41", "50", "51", "60", "61"],
    splitFiles: [
      ["sfiii3-simm1.0", "sfiii3-simm1.1", "sfiii3-simm1.2", "sfiii3-simm1.3"],
      ["sfiii3-simm2.0", "sfiii3-simm2.1", "sfiii3-simm2.2", "sfiii3-simm2.3"],
      ["sfiii3-simm3.0", "sfiii3-simm3.1", "sfiii3-simm3.2", "sfiii3-simm3.3"],
      ["sfiii3-simm3.4", "sfiii3-simm3.5", "sfiii3-simm3.6", "sfiii3-simm3.7"],
      ["sfiii3-simm4.0", "sfiii3-simm4.1", "sfiii3-simm4.2", "sfiii3-simm4.3"],
      ["sfiii3-simm4.4", "sfiii3-simm4.5", "sfiii3-simm4.6", "sfiii3-simm4.7"],
      ["sfiii3-simm5.0", "sfiii3-simm5.1", "sfiii3-simm5.2", "sfiii3-simm5.3"],
      ["sfiii3-simm5.4", "sfiii3-simm5.5", "sfiii3-simm5.6", "sfiii3-simm5.7"],
      ["sfiii3-simm6.0", "sfiii3-simm6.1", "sfiii3-simm6.2", "sfiii3-simm6.3"],
      ["sfiii3-simm6.4", "sfiii3-simm6.5", "sfiii3-simm6.6", "sfiii3-simm6.7"],
    ],
    bgImage: thirdstrikeBG,
  },

  jojoba: {
    title: "JoJo's Bizarre Adventure: Heritage for the Future",
    abbrTitle: "JoJo's HFTF",
    combinedFiles: ["10", "20", "30", "31", "40", "41", "50", "51"],
    splitFiles: [
      ["jojoba-simm1.0", "jojoba-simm1.1", "jojoba-simm1.2", "jojoba-simm1.3"],
      ["jojoba-simm2.0", "jojoba-simm2.1", "jojoba-simm2.2", "jojoba-simm2.3"],
      ["jojoba-simm3.0", "jojoba-simm3.1", "jojoba-simm3.2", "jojoba-simm3.3"],
      ["jojoba-simm3.4", "jojoba-simm3.5", "jojoba-simm3.6", "jojoba-simm3.7"],
      ["jojoba-simm4.0", "jojoba-simm4.1", "jojoba-simm4.2", "jojoba-simm4.3"],
      ["jojoba-simm4.4", "jojoba-simm4.5", "jojoba-simm4.6", "jojoba-simm4.7"],
      ["jojoba-simm5.0", "jojoba-simm5.1", "jojoba-simm5.2", "jojoba-simm5.3"],
      ["jojoba-simm5.4", "jojoba-simm5.5", "jojoba-simm5.6", "jojoba-simm5.7"],
    ],
    bgImage: heritageBG,
  },
};
