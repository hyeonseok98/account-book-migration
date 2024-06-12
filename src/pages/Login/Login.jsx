import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../../api/auth.api";
import { Input } from "../../components/Commons/Input";
import authValidation from "../../utils/authValidation";

function Login() {
  const navigate = useNavigate();
  const idRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    const id = idRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    if (authValidation(id, password)) {
      const data = await login({ id, password });
      // await login({ id, password });
      console.log(data);
      idRef.current.value = "";
      passwordRef.current.value = "";
      navigate("/");
    }
  };

  const handleGoToSignUp = () => {
    navigate("/sign-up");
  };

  return (
    <Section>
      <StDiv>
        <h2>[로그인]</h2>
        <form onSubmit={handleLogin}>
          <h3>아이디</h3>
          <Input type="text" placeholder="아이디" width="100%" ref={idRef} />

          <h3>비밀번호</h3>
          <Input
            type="password"
            placeholder="비밀번호"
            width="100%"
            ref={passwordRef}
          />
          <LoginButton type="submit">로그인</LoginButton>
          <SignUpButton type="button" onClick={handleGoToSignUp}>
            회원가입하러 가기
          </SignUpButton>
        </form>
      </StDiv>
    </Section>
  );
}

export default Login;

const Section = styled.section`
  display: flex;
  flex-direction: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 450px;
  height: 450px;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
`;

const StDiv = styled.div`
  width: 400px;

  h2,
  h3 {
    font-size: 2rem;
    font-weight: 600;
    margin: 15px 0;
  }

  h2 {
    font-size: 2.4rem;
    margin-bottom: 20px;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 1.4rem;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  margin: 10px 0;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const LoginButton = styled(Button)`
  margin-top: 20px;
  background-color: #f5df73;
`;

const SignUpButton = styled(Button)`
  background-color: #f4dfa1;
`;
