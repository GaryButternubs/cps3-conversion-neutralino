import { Game } from "../../types/types";

function RequiredFiles({ type, game }: { type: string; game: Game }) {
  return (
    <div className="my-5">
      {type === "combined" ? (
        <div className="flex flex-wrap justify-center gap-2">
          {game.combinedFiles.map((file) => (
            <div className="card card-border bg-base-100" key={file}>
              <div className="card-body flex justify-center items-center p-3">
                <p className="text-lg font-bold">{file}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex-col justify-center items-center space-y-2">
          {game.splitFiles.map((splitArr, index) => (
            <div
              className="flex justify-center items-center gap-2"
              key={game.combinedFiles[index]}
            >
              {splitArr.map((file) => (
                <div className="card card-border bg-base-100" key={file}>
                  <div className="card-body p-4">
                    <p className="text-xs font-bold">{file}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RequiredFiles;
