import Lenis from "lenis";
import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skill from "./Components/Skill/Skill";
import Project from "./Components/Project/Project";
import Footer from "./Components/Footer/Footer";

function App() {
  const lenis = new Lenis({
    autoRaf: true,
  });

  return (
    <div className="w-full h-full bg-[#0B0B0B]">
      <Header />
      <Home />
      <About />
      <Skill />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
