import { NavLink } from "react-router-dom";

const Navbar = () => {
  let activeClassName = "active-link";

  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/lessons"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
            id="nav-lessons-btn"
          >
            Lessons
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
