import { os } from "@neutralinojs/lib";

function DirectorySelect() {
  const ReadDirectory = async () => {
    const entry = await os.showFolderDialog("Select input directory", {
      defaultPath: "/home/my/directory/",
    });
    console.log("You have selected:", entry);
  };

  return (
    <>
      <button className="file-input" onClick={ReadDirectory}>
        <div
          className="bg-base-200 border-r-2 rounded-l-4xl h-full font-semibold flex flex-nowrap justify-center items-center px-4"
          style={{
            borderRightColor:
              "color-mix(in oklab, var(--color-base-200), #000 calc(1 * 5%))",
          }}
        >
          Choose File
        </div>
        <div className="h-full flex flex-nowrap justify-center items-center px-4">
          No folder selected.
        </div>
      </button>
    </>
  );
}

export default DirectorySelect;
