import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header></header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </>
  );
};
