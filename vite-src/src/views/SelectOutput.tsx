import { MouseEvent, useContext, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router";
import { ConvertContext } from "../ConvertContext";
import { GameData, GameList } from "../types/types";
import RequiredFiles from "./selectInputOutput/RequiredFiles";
import DirectorySelect from "../components/DirectorySelect";
import Heading from "../components/Heading";

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
      <Heading
        title={GameData[game as keyof GameList].title}
        type={type ?? ""}
      />
      <main>
        <h2 className="text-center font-bold">
          Please select a directory to store the following newly created files:
        </h2>
        <RequiredFiles
          type={(type ?? "combined") === "combined" ? "split" : "combined"}
          game={GameData[game as keyof GameList]}
        />
        <p className="text-center">
          Any duplicate files in this directory will be overwritten.
        </p>
        <div className="mt-5 flex justify-center">
          <DirectorySelect setOutputDir={setTempOutputDir} />
        </div>
        <div className="mt-5 flex justify-center items-center gap-2">
          <button
            className="btn"
            disabled={!tempOutputDir}
            onClick={BeginConversion}
          >
            Continue
          </button>
          <NavLink to="/" className={"btn btn-secondary"}>
            Cancel
          </NavLink>
        </div>
      </main>
    </>
  );
}

export default SelectOutput;
