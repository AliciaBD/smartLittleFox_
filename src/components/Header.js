import { Link } from "react-router-dom";

const Header = () => {
  const logoUrl = "https://i.ibb.co/0tQLhQK/logo.png";
  const logoName = "smartlittlefox-logo";
  return (
    <header>
      <Link
        to="/"
        // onClick={() => {
        //   const page = document.querySelector("button[id='navmenu-home-btn']");
        //   page.click();
        // }}
      >
        <img src={logoUrl} alt={logoName} width={"200px"} />
      </Link>

      <div className="header--user-area">
        <ul>{/* here would go list that goes right */}</ul>
      </div>
    </header>
  );
};

export default Header;
