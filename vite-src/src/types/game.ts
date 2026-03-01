import { Dispatch, SetStateAction } from "react";

export type GameContexType = {
  game: string;
  setGame: Dispatch<SetStateAction<string>>;
};
