import { useState } from "react";
import { useParams } from "react-router";
import { GameData, GameList } from "../types/types";
import Heading from "../components/Heading";

function Convert() {
  const { type, game } = useParams();
  const [progress, setProgress] = useState<number>(0);
  const [text, setText] = useState<string>("");

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
      </main>
    </>
  );
}

export default Convert;
