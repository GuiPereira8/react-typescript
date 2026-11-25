import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";

import { Home } from "./pages/Home";
import { Sobre } from "./pages/Sobre";
import { Contato } from "./pages/Contato";
import { Produto } from "./pages/Produto";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
      {
        path: "/contato",
        element: <Contato />,
      },
      {
        path: "/produto/:id",
        element: <Produto />,
      },
    ],
  },
  //
  // Página notFound é sempre a última.
  {
    path: "*",
    element: <NotFound />,
  },
]);
