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
import { useState } from "react";

function App() {
  const [showArrowUp, setShowArrowUp] = useState(false);
  const show = () => {
    window.scrollY >= 1200 ? setShowArrowUp(true) : setShowArrowUp(false);
  };
  window.addEventListener("scroll", show);
  const arrowUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 300,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="relative">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      <img
        src="/assets/scroll-to-top.svg"
        className={`${
          showArrowUp ? "" : "block"
        }fixed right-5 bottom-10 w-10 z-40 opacity-50 hover:mb-2 hover:opacity-100 duration-700 ease-in-out cursor-pointer tablet:w-12 laptop:right-14 desktop:w-16 desktop:right-16`}
        onClick={arrowUp}
        alt="arrow-up"
      />
    </div>
  );
}

export default App;
