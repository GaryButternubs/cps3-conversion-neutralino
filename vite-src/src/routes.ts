import { createBrowserRouter } from "react-router";
import Home from "./views/Home";

const router = createBrowserRouter([
  {
    index: true,
    Component: Home,
  },
]);

export default router;
