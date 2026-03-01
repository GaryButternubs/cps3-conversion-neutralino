import { createContext } from "react";
import { GameContexType } from "./types/game";

export const GameContext = createContext<GameContexType | null>(null);
