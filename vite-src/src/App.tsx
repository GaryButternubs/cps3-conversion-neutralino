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
        <RouterProvider router={router} />
      </DynamicBackground>
    </GameContext>
  );
}

export default App;
