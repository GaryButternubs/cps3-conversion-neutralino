import { ReactNode, useContext, useEffect, useState } from "react";
import { GameContext } from "../GameContext";
import { window, WindowSizeOptions } from "@neutralinojs/lib";
import CrossfadeCarousel from "./Crossfade-Carousel";

// Really lazy way of enabling casting string as keyof
interface BGImages {
  redearth: string;
  newgeneration: string;
  secondimpact: string;
  venture: string;
  thirdstrike: string;
  heritage: string;
}

function DynamicBackground({
  children,
}: {
  game: string;
  children: ReactNode;
}) {
  const fadeinDuration = 1500; // 1.5 seconds to fade-in
  const transitionDuration = 6000; // 6 seconds between images

  const game = useContext(GameContext)?.game;

  const bgImages: BGImages = {
    redearth: "redearth.jpg",
    newgeneration: "ng.png",
    secondimpact: "2i.jpg",
    venture: "venture.jpg",
    thirdstrike: "3s.jpg",
    heritage: "heritage.jpg",
  };

  return (
    <div className="w-screen h-screen relative">
      {game ? (
        <img
          src={`/assets/${bgImages[game as keyof BGImages]}`}
          className="absolute w-full h-full object-cover blur-sm"
        />
      ) : (
        <CrossfadeCarousel
          interval={transitionDuration}
          transition={fadeinDuration}
          images={Object.values(bgImages)}
        />
      )}
      {children}
    </div>
  );
}

export default DynamicBackground;
