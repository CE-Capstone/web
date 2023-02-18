import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

function GoogleLoginButton() {
  return (
    <GoogleOAuthProvider clientId="670154900312-tqtanvlmi26hp9c453q22439qbfeiqsp.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </GoogleOAuthProvider>
  );
}

export default GoogleLoginButton;
