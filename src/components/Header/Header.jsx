import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import catMoon from "../../assets/cat-moon.png";
import userIcon from "../../assets/user-black-24.png";
import userInfoStore from "../../stores/userInfoStore";

function Header() {
  const { clearUserInfo, isLoggedIn } = userInfoStore((state) => ({
    clearUserInfo: state.clearUserInfo,
    isLoggedIn: state.isLoggedIn(),
  }));
  const navigate = useNavigate();

  const handleLogOut = () => {
    confirm("로그아웃 하시겠습니까?");
    clearUserInfo();
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  const handleGoToLogin = () => {
    navigate("/login");
  };

  return (
    <Nav>
      <StDiv>
        <Link to="/">
          <img src={catMoon} alt="logo" />
          <span>가계부</span>
        </Link>
        <div>
          {isLoggedIn ? (
            <>
              <LogInToggleButton onClick={handleLogOut}>
                로그아웃
              </LogInToggleButton>
              <Link to="/mypage">
                <img src={userIcon} alt="마이페이지" />
              </Link>
            </>
          ) : (
            <LogInToggleButton onClick={handleGoToLogin}>
              로그인
            </LogInToggleButton>
          )}
        </div>
      </StDiv>
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  background: rgba(255, 255, 255, 0.7);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
`;

const StDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 800px;

  a {
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      width: 48px;
      height: 48px;
      cursor: pointer;
    }

    span {
      font-size: 1.8rem;
      font-weight: 600;
      margin-left: 4px;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 12px;
    gap: 20px;

    img {
      width: 24px;
      height: 24px;
    }
  }
`;

const LogInToggleButton = styled.button`
  width: 76px;
  height: 32px;
  margin-top: 4px;
  border: 1px solid #2ec4b6;
  border-radius: 10px;
  font-size: 1.4rem;
  font-weight: 600;

  &:hover,
  &:active {
    background-color: #2ec4b6;
    color: white;
  }
`;
