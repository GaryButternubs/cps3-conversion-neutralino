import { MouseEvent, useContext, useMemo, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router";
import { GameData, GameList } from "../types/types";
import DirectorySelect from "../components/DirectorySelect";
import RequiredFiles from "./selectInput/RequiredFiles";
import { DirectoryEntry } from "@neutralinojs/lib";
import { ConvertContext } from "../ConvertContext";

function SelectInput() {
  const { type, game } = useParams();
  const [contents, setContents] = useState<Array<DirectoryEntry>>([]);
  const setFiles = useContext(ConvertContext)?.setFiles;

  const navigate = useNavigate();

  const missingFiles: string[] = useMemo(() => {
    if (contents.length === 0) return [];

    const missing: string[] = [];
    // Ensure all required files are found, otheriwse prevent moving on
    const filenames: string[] = contents.map((file) => file.entry);

    if (type === "combined") {
      const combFiles = GameData[game as keyof GameList].combinedFiles;

      for (let i = 0; i < combFiles.length; i++) {
        if (!filenames.includes(combFiles[i])) missing.push(combFiles[i]);
      }
    } else {
      const splitFiles = GameData[game as keyof GameList].splitFiles;

      for (let i = 0; i < splitFiles.length; i++) {
        for (let j = 0; j < splitFiles[i].length; j++) {
          if (!filenames.includes(splitFiles[i][j]))
            missing.push(splitFiles[i][j]);
        }
      }
    }

    return missing;
  }, [contents, game, type]);

  const SelectOutputDir = (e: MouseEvent) => {
    e.preventDefault();
    if (setFiles) {
      const filteredContents = contents.filter((file) => {
        if (type === "combined") {
          return GameData[game as keyof GameList].combinedFiles.includes(
            file.entry,
          );
        } else {
          const splitFiles = GameData[game as keyof GameList].splitFiles;
          let hasFile = false;

          for (let i = 0; i < splitFiles.length; i++)
            if (splitFiles[i].includes(file.entry)) hasFile = true;

          return hasFile;
        }
      });

      setFiles(filteredContents);
    }

    navigate(`/selectOutput/${type}/${game}`);
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
          Please select the directory containing the following files:
        </h2>
        <RequiredFiles
          type={type ?? "combined"}
          game={GameData[game as keyof GameList]}
          contentLen={contents.length}
          missingFiles={missingFiles}
        />
        <p className="text-center">
          Make sure they've been extracted from the .zip file, and that there's
          no duplicates.
        </p>
        <div className="mt-5 flex justify-center">
          <DirectorySelect setContents={setContents} />
        </div>
        <div className="mt-5 flex justify-center items-center gap-2">
          <button
            className="btn"
            disabled={missingFiles.length !== 0}
            onClick={SelectOutputDir}
          >
            Continue
          </button>
          <NavLink to={"/"} className={"btn btn-secondary"}>
            Cancel
          </NavLink>
        </div>
        {contents.length > 0 && missingFiles.length !== 0 && (
          <div className="flex justify-center items-center mt-2">
            <p className="text-error">
              All required files must be found before continuing.
            </p>
          </div>
        )}
      </main>
    </>
  );
}

export default SelectInput;
