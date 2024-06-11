import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function Layout() {
  return (
    <Main>
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
