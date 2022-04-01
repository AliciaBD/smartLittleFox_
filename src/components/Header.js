import { Link } from "react-router-dom";

const Header = () => {
  const logoUrl = "https://i.ibb.co/0tQLhQK/logo.png";
  const logoName = "smartlittlefox-logo";
  return (
    <header>
      <Link
        to="/"
      >
        <img src={logoUrl} alt={logoName} width={"200px"} />
      </Link>

      <div className="header--user-area">
        <ul>{/* here goes login and user */}</ul>
      </div>
    </header>
  );
};

export default Header;
