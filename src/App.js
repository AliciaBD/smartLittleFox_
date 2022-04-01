import "./App.css";
import { ThemeProvider } from "styled-components";
import { themes } from "./style/themes";
import Header from "./components/Header.js";
import Navbar from "./components/Navbar.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";

function App() {
  const theme = themes.default;
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Header />
        <Navbar />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
