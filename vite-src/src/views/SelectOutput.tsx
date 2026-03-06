import { MouseEvent, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ConvertContext } from "../ConvertContext";
import { GameData, GameList } from "../types/types";
import RequiredFiles from "./selectInput/RequiredFiles";

function SelectOutput() {
  const { type, game } = useParams();
  const setOutputDir = useContext(ConvertContext)?.setOutputDir;
  const [tempOutputDir, setTempOutputDir] = useState<string>("");

  const navigate = useNavigate();

  const BeginConversion = (e: MouseEvent) => {
    e.preventDefault();
    if (setOutputDir) setOutputDir(tempOutputDir);
    navigate(`/convert/${type}/${game}`);
  };

  return (
    <>
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold">
          {GameData[game as keyof GameList].title}
        </h1>
        <h2 className="text-md">
          Converting from {type === "combined" ? "Combined" : "Split"} ROM to{" "}
          {type === "combined" ? "Split" : "Combined"} ROM
        </h2>
      </header>
      <main>
        <h2 className="text-center text-md font-bold">
          Please select a directory to store the following newly created files:
        </h2>
        <RequiredFiles
          type={(type ?? "combined") === "combined" ? "split" : "combined"}
          game={GameData[game as keyof GameList]}
        />
      </main>
    </>
  );
}

export default SelectOutput;
