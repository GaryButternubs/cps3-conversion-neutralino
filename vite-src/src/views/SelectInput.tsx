import { useParams } from "react-router";
import { Game, GameData, GameList } from "../types/types";
import { MouseEvent } from "react";
import DirectorySelect from "../components/DirectorySelect";

function SelectInput() {
  const { type, game } = useParams();

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
          Please select the directory containing the following files:
        </h2>
        <p className="text-center">
          {type === "combined"
            ? GameData[game as keyof GameList].combinedFiles.join(", ")
            : ""}
        </p>
        <p className="text-center">
          Make sure they've been extracted from {game}.zip.
        </p>
        <div className="mt-5 flex justify-center">
          <DirectorySelect />
        </div>
      </main>
    </>
  );
}

export default SelectInput;
