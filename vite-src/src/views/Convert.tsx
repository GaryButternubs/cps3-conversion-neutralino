import { MouseEvent, useContext, useState } from "react";
import { NavLink, useParams } from "react-router";
import { GameData, GameList } from "../types/types";
import convertROM from "../convert-helper";
import Heading from "../components/Heading";
import { ConvertContext } from "../ConvertContext";

function Convert() {
  const { type, game } = useParams();
  const [converting, setConverting] = useState(false);
  const [progress, setProgress] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const [complete, setCompleted] = useState(false);

  const files = useContext(ConvertContext)?.files;
  const outputDir = useContext(ConvertContext)?.outputDir;

  const ConvertROM = async (e: MouseEvent) => {
    e.preventDefault();

    if (files && outputDir) {
      setConverting(true);
      await convertROM(
        type ?? "",
        game ?? "",
        files,
        outputDir,
        setProgress,
        setText,
      );
      setConverting(false);
      setCompleted(true);
    }
  };

  return (
    <>
      <Heading
        title={GameData[game as keyof GameList].title}
        type={type ?? ""}
      />
      <main className="flex flex-col items-center justify-center gap-2">
        <div className="w-full px-20">
          <progress
            className="progress w-full"
            value={progress}
            max="100"
          ></progress>
        </div>
        <p className="text-center">{text}</p>
        <div className="mt-10 flex flex-col gap-2 justify-center items-center">
          {complete ? (
            <>
              <NavLink to="/" className="btn">
                Return to Main Menu
              </NavLink>
              <p className="text-success">Conversion Successful!</p>
            </>
          ) : (
            <button className="btn" onClick={ConvertROM} disabled={converting}>
              {converting ? "Converting..." : "Begin Conversion"}
            </button>
          )}
        </div>
      </main>
    </>
  );
}

export default Convert;
