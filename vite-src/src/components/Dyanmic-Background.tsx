import { ReactNode, useContext } from "react";
import { GameContext } from "../GameContext";
import CrossfadeCarousel from "./Crossfade-Carousel";

import redearth from "../assets/redearth.jpg";
import newgen from "../assets/ng.png";
import secondimpact from "../assets/2i.jpg";
import venture from "../assets/venture.jpg";
import thirdstrike from "../assets/3s.jpg";
import heritage from "../assets/heritage.jpg";

// Really lazy way of enabling casting string as keyof
interface BGImages {
  redearth: string;
  sfiii: string;
  sfiii2: string;
  jojo: string;
  sfiii3: string;
  jojoba: string;
}

function DynamicBackground({ children }: { children: ReactNode }) {
  const fadeinDuration = 1500; // 1.5 seconds to fade-in
  const transitionDuration = 6000; // 6 seconds between images

  const game = useContext(GameContext)?.game;

  const bgImages: BGImages = {
    redearth: redearth,
    sfiii: newgen,
    sfiii2: secondimpact,
    jojo: venture,
    sfiii3: thirdstrike,
    jojoba: heritage,
  };

  return (
    <div className="w-screen h-screen relative">
      {game ? (
        <img
          src={bgImages[game as keyof BGImages]}
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
