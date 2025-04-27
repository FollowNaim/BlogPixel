import NewsDetail from "@/components/news/NewsDetail";
import Signin from "@/pages/Signin";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/news/:id",
        element: <NewsDetail />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
    ],
  },
]);
