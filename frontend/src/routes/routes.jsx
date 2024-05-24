import Admin from "../admin/Admin";
import Layout from "../layout/Layout";
import Basket from "../pages/Basket";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Wish from "../pages/Wish";

export const routers = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
      ,
      {
        path: "/favorite",
        element: <Wish />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
  },
];
