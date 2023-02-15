import styled from "styled-components";

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 288px;
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  overflow: hidden;
  align-content: center;
  flex-wrap: nowrap;
  gap: 16px;
  border-radius: 16px;
  cursor: pointer;

  header {
    flex: 1;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
  }
`;

const Logo = styled.img`
  width: 24px;
  height: 24px;
  overflow: hidden;
  border-radius: 100%;
`;

interface ILoginButtonProps {
  onClick?: () => void;
  src: string;
  text: string;
}

function LoginButton({ onClick, src, text }: ILoginButtonProps) {
  return (
    <Wrapper onClick={onClick}>
      <Logo src={src} />
      <header>{text}</header>
    </Wrapper>
  );
}

export default LoginButton;
