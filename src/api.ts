export async function getGoogleUserInfo(accessToken: string) {
  const response = await fetch(
    `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`
  );
  return await response.json();
}
