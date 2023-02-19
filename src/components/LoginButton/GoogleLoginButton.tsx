import { useGoogleLogin } from "@react-oauth/google";
import LoginButton from "./LoginButton";

function GoogleLoginButton() {
  const GoogleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
    flow: "auth-code",
  });

  return (
    <LoginButton
      onClick={GoogleLogin}
      src="https://logo.clearbit.com/Google.com?size=500"
      text="Google 계정으로 로그인"
    />
  );
}

export default GoogleLoginButton;
