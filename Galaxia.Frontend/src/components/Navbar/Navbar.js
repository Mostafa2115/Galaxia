import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";

function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="navbar">

      <div className="logo">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <span>GALAXIA</span>
        </NavLink>
      </div>

      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/map">Map</NavLink></li>
        <li><NavLink to="/missions">Missions</NavLink></li>
        <li><NavLink to="/discoveries">Discoveries</NavLink></li>
        <li><NavLink to="/archive">Archive</NavLink></li>
        <li><NavLink to="/compare">Compare</NavLink></li>
      </ul>

      <div className="nav-right">

        <input
          type="text"
          placeholder="Search..."
          className="search-input"
        />

        <NavLink to="/profile" title={user ? user.fullName : "Explorer Profile"}>
          <button className="profile-btn">
            {user && user.avatar ? (
              <img src={user.avatar} alt={user.fullName} className="navbar-avatar-img" />
            ) : (
              "👤"
            )}
          </button>
        </NavLink>

      </div>

    </nav>
  );
}

export default Navbar;