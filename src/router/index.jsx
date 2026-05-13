import { createBrowserRouter } from "react-router-dom";
// import Home from '../pages/Home'
// import Home from "../pages/Home";
// import Layout from "../pages/Layouts/Layout";
// import Create from "../pages/Create";
// import Search from "../pages/Search";

// import Home from "../pages/Home";
import Home from "../pages/Home";
import Layout from "../pages/Layouts/Layout";
import Create from "../pages/Create";
import Search from "../pages/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // Use index: true instead of path: ""
        element: <Home />,
      },
      {
        path: "create", // Remove leading "/" to make it relative
        element: <Create />,
      },
      {
        path: "search", // Remove leading "/" to make it relative
        element: <Search />,
      },
    ],
  },
]);

export default router;
