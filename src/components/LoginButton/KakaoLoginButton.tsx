import LoginButton from "./LoginButton";
import KakaoIcon from "../../images/kakao.png";
import KakaoLogin from "react-kakao-login";

function KakaoLoginButton() {
  return (
    <KakaoLogin
      token="adc3e6f5e05944b9f18bdcc9bef9295b"
      onSuccess={console.log}
      onFail={console.log}
      render={({ onClick }) => (
        <LoginButton onClick={onClick} src={KakaoIcon} text="카카오 로그인" />
      )}
    />
  );
}

export default KakaoLoginButton;
