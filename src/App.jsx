import "./App.css";
import "./App.scss";
import About from "./about/About";
import Header from "./header/Header";
import "./index.css";
import Navbar from "./navbar/Navbar";
import Projects from "./projects/Projects";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 300,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Projects />
    </>
  );
}

export default App;
