import { Link, useLocation } from "react-router-dom";

function Home() {
  const { state } = useLocation();

  return (
    <>
      <h1>Home</h1>
      <Link to="/login">Log in</Link>
      <hr />
      <h2>회원정보</h2>
      {state && JSON.stringify(state)}
    </>
  );
}

export default Home;
