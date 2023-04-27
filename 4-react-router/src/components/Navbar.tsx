import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Hem</Link>
        </li>
        <li>
          <Link to="/about">Om oss</Link>
        </li>
        <li>
          <Link to="/superheroes">Superhjältar</Link>
        </li>
      </ul>
    </nav>
  );
};
