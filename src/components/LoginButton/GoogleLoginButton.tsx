import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { getGoogleUserInfo } from "../../api";
import LoginButton from "./LoginButton";

function GoogleLoginButton() {
  const navigate = useNavigate();

  const GoogleLogin = useGoogleLogin({
    onSuccess: async ({ access_token }) => {
      const profile = await getGoogleUserInfo(access_token);
      navigate("/", { state: { profile } });
    },
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
