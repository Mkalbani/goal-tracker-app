import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/how-to"
            className={location.pathname === "/how-to" ? "active" : ""}
          >
            How to
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};
