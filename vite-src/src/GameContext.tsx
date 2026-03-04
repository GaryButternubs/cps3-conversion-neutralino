import { createContext } from "react";
import { GameContexType } from "./types/types";

export const GameContext = createContext<GameContexType | null>(null);
