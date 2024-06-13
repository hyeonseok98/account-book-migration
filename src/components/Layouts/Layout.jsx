import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import userInfoStore from "../../stores/userInfoStore";
import Header from "../Header/Header";

export default function Layout() {
  const isLoggedIn = userInfoStore((state) => state.isLoggedIn)();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return (
    <Main>
      <Header />
      <Outlet />
    </Main>
  );
}

const Main = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`;
