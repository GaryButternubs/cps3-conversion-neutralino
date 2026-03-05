import { NavLink, useParams } from "react-router";
import { Game, GameData } from "../types/types";

function SelectGame() {
  const { type } = useParams();

  return (
    <>
      <header className="text-center mb-20">
        <h1 className="text-3xl font-bold">
          Which game do you want to convert?
        </h1>
        <h2 className="text-md">
          Converting from {type === "combined" ? "Combined" : "Split"} to{" "}
          {type === "combined" ? "Split" : "Combined"}
        </h2>
      </header>
      <main className="flex flex-wrap gap-2 justify-center">
        {Object.values(GameData).map((game: Game, index) => (
          <NavLink
            to={`/selectInput/${type}/${Object.keys(GameData)[index]}`}
            className="btn p-4 flex justify-self-stretch items-center"
            key={game.abbrTitle ?? game.title}
          >
            {game.abbrTitle ?? game.title}
          </NavLink>
        ))}
      </main>
    </>
  );
}

export default SelectGame;
