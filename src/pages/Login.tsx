import styled from "styled-components";
import GoogleLoginButton from "../components/LoginButton/GoogleLoginButton";
import KakaoLoginButton from "../components/LoginButton/KakaoLoginButton";
import NaverLoginButton from "../components/LoginButton/NaverLoginButton";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #dddddd;
  gap: 80px;
  background-image: url(https://images.unsplash.com/photo-1549226024-48875665c1ea);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Logo = styled.div`
  width: 80px;
  height: 80px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  border-radius: 100%;
  background-color: black;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

function Login() {
  return (
    <Wrapper>
      <Logo />
      <Buttons>
        <GoogleLoginButton />
        <NaverLoginButton />
        <KakaoLoginButton />
      </Buttons>
    </Wrapper>
  );
}

export default Login;
