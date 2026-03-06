import { createBrowserRouter } from "react-router";
import Home from "./views/Home";
import SelectGame from "./views/SelectGame";
import SelectInput from "./views/SelectInput";
import SelectOutput from "./views/SelectOutput";

const router = createBrowserRouter([
  {
    index: true,
    Component: Home,
  },
  {
    path: "selectGame/:type",
    Component: SelectGame,
  },
  {
    path: "selectInput/:type/:game",
    Component: SelectInput,
  },
  {
    path: "selectOutput/:type/:game",
    Component: SelectOutput,
  },
]);

export default router;
