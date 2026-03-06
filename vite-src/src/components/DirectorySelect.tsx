import { Dispatch, SetStateAction, useState } from "react";
import { DirectoryEntry, filesystem, os } from "@neutralinojs/lib";

function DirectorySelect({
  setContents,
  setOutputDir,
}: {
  setContents?: Dispatch<SetStateAction<Array<DirectoryEntry>>>;
  setOutputDir?: Dispatch<SetStateAction<string>>;
}) {
  const [directoryPath, setDirectoryPath] = useState<string>(
    "No folder selected.",
  );

  const ReadDirectory = async () => {
    const dir = await os.showFolderDialog("Select input directory", {
      defaultPath: "./",
    });
    setDirectoryPath(dir);

    // Read folder contents and pass them back to parent component for validation
    if (setContents) {
      const entries: Array<DirectoryEntry> =
        await filesystem.readDirectory(dir);
      setContents(entries.filter((entry) => entry.type === "FILE"));
    }

    if (setOutputDir) setOutputDir(dir);
  };

  return (
    <>
      <button className="file-input" onClick={ReadDirectory}>
        <div
          className="bg-base-200 border-r-2 rounded-l-4xl w-fit whitespace-nowrap h-full font-semibold flex flex-nowrap justify-center items-center px-4"
          style={{
            borderRightColor:
              "color-mix(in oklab, var(--color-base-200), #000 calc(1 * 5%))",
          }}
        >
          Choose Folder
        </div>
        <div className="h-full flex flex-nowrap justify-center items-center px-4 overflow-hidden whitespace-nowrap">
          {`...${directoryPath.substring(directoryPath.length - 25)}`}
        </div>
      </button>
    </>
  );
}

export default DirectorySelect;
