import { createContext } from "react";
import { ConvertContextType } from "./types/types";

export const ConvertContext = createContext<ConvertContextType | null>(null);
