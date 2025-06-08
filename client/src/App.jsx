import Lenis from "lenis";
import React from "react";
import { useRef } from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skill from "./Components/Skill/Skill";
import Project from "./Components/Project/Project";
import Footer from "./Components/Footer/Footer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function App() {
  // const lenis = new Lenis({
  //   autoRaf: true,
  // });

  const cursorRef = useRef(null);

  useGSAP(() => {
    const cursor = cursorRef.current;

    // Example of using gsap to animate the cursor
    const handleMouseMove = (event) => {
      gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.5,
        ease: "easein",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="w-full h-full bg-[#0B0B0B] cursor-pointer">
      <div
        ref={cursorRef}
        className="cursor bg-pink-500 w-[140px] h-[140px] opacity-40 rounded-full fixed pointer-events-none z-50"
      ></div>

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
