import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signUp } from "../../api/auth.api";
import { Input } from "../../components/Commons/Input";
import authValidation from "../../utils/authValidation";

function SignUp() {
  const navigate = useNavigate();
  const idRef = useRef(null);
  const passwordRef = useRef(null);
  const nicknameRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = idRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    const nickname = nicknameRef.current.value.trim();

    if (authValidation(id, password, nickname)) {
      await signUp({ id, password, nickname });
      alert("회원가입 되었습니다.");
      idRef.current.value = "";
      passwordRef.current.value = "";
      nicknameRef.current.value = "";
      navigate("/login");
    }
  };

  const handleGoToLogin = () => {
    navigate("/login");
  };

  return (
    <Section>
      <StDiv>
        <h2>[회원가입]</h2>
        <form onSubmit={handleSubmit}>
          <h3>아이디</h3>
          <Input type="text" placeholder="아이디" width="100%" ref={idRef} />

          <h3>비밀번호</h3>
          <Input
            type="password"
            placeholder="비밀번호"
            width="100%"
            ref={passwordRef}
          />

          <h3>닉네임</h3>
          <Input
            type="text"
            placeholder="닉네임"
            width="100%"
            ref={nicknameRef}
          />
          <SignUpButton type="submit">회원가입</SignUpButton>
          <LoginButton type="button" onClick={handleGoToLogin}>
            로그인하러 가기
          </LoginButton>
        </form>
      </StDiv>
    </Section>
  );
}

export default SignUp;

const Section = styled.section`
  display: flex;
  flex-direction: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 450px;
  height: 540px;
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

const SignUpButton = styled(Button)`
  margin-top: 20px;
  background-color: #f5df73;
`;

const LoginButton = styled(Button)`
  background-color: #f4dfa1;
`;
