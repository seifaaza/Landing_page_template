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
import Skills from "./skills/Skills";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

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
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
