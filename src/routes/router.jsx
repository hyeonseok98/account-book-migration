import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layouts/Layout";
import DetailPage from "../pages/Deatil/Detail";
import HomePage from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/spending/:id",
        element: <DetailPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
