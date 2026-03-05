import { ReactNode, useContext } from "react";
import { GameContext } from "../GameContext";
import { Game, GameList, GameData } from "../types/types";
import CrossfadeCarousel from "./CrossfadeCarousel";

function DynamicBackground({ children }: { children: ReactNode }) {
  const fadeinDuration = 1500; // 1.5 seconds to fade-in
  const transitionDuration = 6000; // 6 seconds between images

  const game = useContext(GameContext)?.game;

  return (
    <div className="w-screen h-screen relative">
      {game ? (
        <img
          src={GameData[game as keyof GameList].bgImage}
          className="absolute w-full h-full object-cover blur-sm"
        />
      ) : (
        <CrossfadeCarousel
          interval={transitionDuration}
          transition={fadeinDuration}
          images={Object.values(GameData).map((game: Game) => game.bgImage)}
        />
      )}
      {children}
    </div>
  );
}

export default DynamicBackground;
