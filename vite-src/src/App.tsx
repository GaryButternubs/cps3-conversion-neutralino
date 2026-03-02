import { useEffect, useState } from "react";
import { RouterProvider } from "react-router";
import { GameContext } from "./GameContext";
import DynamicBackground from "./components/Dyanmic-Background";
import router from "./routes";
import "./App.css";

import { filesystem } from "@neutralinojs/lib";

function App() {
  const [game, setGame] = useState("");

  return (
    <GameContext value={{ game, setGame }}>
      <DynamicBackground>
        <div className="flex items-center justify-center w-full h-full">
          <div className="bg-base-100 my-8 mx-16 p-8 rounded-xl box-border">
            <RouterProvider router={router} />
          </div>
        </div>
      </DynamicBackground>
    </GameContext>
  );
}

export default App;
