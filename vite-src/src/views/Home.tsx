import { NavLink } from "react-router";
import CombinedModal from "./home/CombinedModal";
import SplitModal from "./home/SplitModal";

function Home() {
  return (
    <>
      <header className="text-center mb-20">
        <h1 className="text-4xl font-bold">CPS3 ROM Conversion Tool</h1>
        <h2 className="text-md">
          Select one of the options below to get started.
        </h2>
      </header>
      <main className="flex justify-between gap-8">
        <div className="flex flex-col gap-1">
          <div className="tooltip">
            <div className="tooltip-content p-3">
              ie. (10, 20, 30, etc.) to (xxx-simm1.0, xxx-simm1.1, xxx-simm1.2,
              etc.)
            </div>
            <NavLink to="/selectGame/combined" className="btn btn-neutral p-4">
              Convert Combined ROM to Split ROM
            </NavLink>
          </div>
          <CombinedModal />
        </div>

        <div className="flex flex-col gap-1">
          <div className="tooltip">
            <div className="tooltip-content p-3">
              ie. (xxx-simm1.0, xxx-simm1.1, xxx-simm1.2, etc.) to (10, 20, 30,
              etc.)
            </div>
            <NavLink to="/selectGame/split" className="btn btn-neutral p-4">
              Convert Split ROM to Combined ROM
            </NavLink>
          </div>
          <SplitModal />
        </div>
      </main>
    </>
  );
}

export default Home;
