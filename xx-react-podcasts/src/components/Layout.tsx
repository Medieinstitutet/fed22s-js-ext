import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header>
        <Link to={"/podcasts"}>Listan</Link>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </>
  );
};
