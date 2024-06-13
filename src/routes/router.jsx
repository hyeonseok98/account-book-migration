import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layouts/Layout";
import DetailPage from "../pages/Deatil/Detail";
import ErrorPage from "../pages/Error/Error";
import HomePage from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyPage from "../pages/MyPage/MyPage";
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
        errorElement: <ErrorPage />,
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
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default router;
