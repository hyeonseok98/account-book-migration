import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layouts/Layout";
import DetailPage from "../pages/Deatil/Detail";
import HomePage from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyPage from "../pages/MyPage/MyPage";
import NotFoundPage from "../pages/NotFound/NotFound";
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
        path: "/spendings/:id",
        element: <DetailPage />,
        errorElement: <NotFoundPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/mypage",
        element: <MyPage />,
        errorElement: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
