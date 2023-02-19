import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import GoogleIcon from "../../images/google.png";
import LoginButton from "./LoginButton";

function GoogleLoginButton() {
  const GoogleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
    flow: "auth-code",
  });

  return (
    <GoogleOAuthProvider clientId="670154900312-tqtanvlmi26hp9c453q22439qbfeiqsp.apps.googleusercontent.com">
      <LoginButton onClick={GoogleLogin} src={GoogleIcon} text="구글 로그인" />
    </GoogleOAuthProvider>
  );
}

export default GoogleLoginButton;
