import { useEffect, useState } from "react";
import DynamicBackground from "./components/Dyanmic-Background";
import "./App.css";

import { filesystem } from "@neutralinojs/lib";

function App() {
  const [count, setCount] = useState(0);

  // Log current directory or error after component is mounted
  useEffect(() => {
    filesystem
      .readDirectory("./")
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <DynamicBackground game="">
      <h1 className="text-center text-4xl text-white bg-black/75 p-2">
        Hello World!
      </h1>
    </DynamicBackground>
  );
}

export default App;
