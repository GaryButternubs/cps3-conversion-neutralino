import { createBrowserRouter } from "react-router";
import Home from "./views/Home";
import SelectGame from "./views/SelectGame";
import SelectInput from "./views/SelectInput";

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
]);

export default router;
