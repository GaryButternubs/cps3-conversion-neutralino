import { memo } from "react";
import { Game } from "../../types/types";

const RequiredFiles = memo(function RequiredFiles({
  type,
  game,
  contentLen = 0,
  missingFiles = [],
}: {
  type: string;
  game: Game;
  contentLen?: number;
  missingFiles?: string[];
}) {
  return (
    <div className="my-5">
      {type === "combined" ? (
        <div className="flex flex-wrap justify-center gap-2">
          {game.combinedFiles.map((file) => (
            <div
              className={`card card-border ${contentLen > 0 ? `${missingFiles.includes(file) ? "bg-error text-error-content" : "bg-success text-success-content"}` : "bg-base-100"}`}
              key={file}
            >
              <div className="card-body flex justify-center items-center p-3">
                <p className="text-center text-lg font-bold">{file}</p>
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
                <div
                  className={`card card-border ${contentLen > 0 ? `${missingFiles.includes(file) ? "bg-error text-error-content" : "bg-success text-success-content"}` : "bg-base-100"}`}
                  key={file}
                >
                  <div className="card-body p-4">
                    <p className="text-center text-xs font-bold">{file}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

export default RequiredFiles;
