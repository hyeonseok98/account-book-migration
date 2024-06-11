import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layouts/Layout";
import DetailPage from "../pages/deatil/page";
import HomePage from "../pages/home/page";

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
    ],
  },
]);

export default router;
