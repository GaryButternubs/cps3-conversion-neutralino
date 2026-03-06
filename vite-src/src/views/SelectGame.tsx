import { NavLink, useParams } from "react-router";
import { Game, GameData } from "../types/types";
import Heading from "../components/Heading";

function SelectGame() {
  const { type } = useParams();

  return (
    <>
      <Heading title="Which game do you want to convert?" type={type ?? ""} />
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
