import { MouseEvent } from "react";
import { os } from "@neutralinojs/lib";

function DirectorySelect() {
  const ReadDirectory = async (e: MouseEvent) => {
    const entry = await os.showFolderDialog("Select installation directory", {
      defaultPath: "/home/my/directory/",
    });
    console.log("You have selected:", entry);
  };

  return (
    // <input
    //   type="file"
    //   className="file-input"
    //   webkitdirectory
    //   onChange={ReadDirectory}
    // />
    <button className="file-input" onClick={ReadDirectory}>
      Select Directory:
    </button>
  );
}

export default DirectorySelect;
