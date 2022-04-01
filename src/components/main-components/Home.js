import { ButtonCTA } from "../buttons/Buttons";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <div className="bg-image"></div>
      <div className="btn-group">
        <ButtonCTA
          page="home"
          type="home"
          as={Link}
          to={"/lessons"}
          onClick={() => {
            const page = document.querySelector("button[id='nav-lessons-btn']");
            page.click();
          }}
        >
          START
        </ButtonCTA>
      </div>
    </section>
  );
};

export default Home;
