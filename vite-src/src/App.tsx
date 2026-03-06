import { useEffect, useState } from "react";
import { RouterProvider } from "react-router";
import { GameContext } from "./GameContext";
import { ConvertContext } from "./ConvertContext";
import DynamicBackground from "./components/DynamicBackground";
import router from "./routes";
import "./App.css";
import { DirectoryEntry } from "@neutralinojs/lib";

function App() {
  const [files, setFiles] = useState<Array<DirectoryEntry>>([]);
  const [outputDir, setOutputDir] = useState<string>("");

  return (
    <ConvertContext value={{ files, setFiles, outputDir, setOutputDir }}>
      <DynamicBackground>
        <div className="flex items-center justify-center w-full h-full">
          <div className="overflow-y-auto max-h-[90vh] bg-base-100 my-8 mx-16 p-8 rounded-xl box-border">
            <RouterProvider router={router} />
          </div>
        </div>
      </DynamicBackground>
    </ConvertContext>
  );
}

export default App;
