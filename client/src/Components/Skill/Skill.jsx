import React, { useEffect } from "react";
import gsap from "gsap";

function Skill() {
  function SkillAnim() {
    let Elems = document.querySelectorAll(".elem");

    Elems.forEach(function (elem) {
      elem.addEventListener("mouseenter", function () {
        gsap.to(elem.childNodes[1], {
          opacity: 1,
          scale: 1,
        });
      });
      elem.addEventListener("mouseleave", function () {
        gsap.to(elem.childNodes[1], {
          opacity: 0,
          scale: 0,
        });
      });
      elem.addEventListener("mousemove", function (dets) {
        gsap.to(elem.childNodes[1], {
          x: dets.x - elem.getBoundingClientRect().x - 90,
          y: dets.y - elem.getBoundingClientRect().y - 215,
        });
      });
    });
  }
  useEffect(() => {
    SkillAnim();
  });

  return (
    <div className="w-full h-full relative overflow-hidden cursor-pointer leading-[7rem] max-sm:w-full">
      <h3 className="text-zinc-400 font-[font1] pt-[8rem] px-[10rem] text-[17px] uppercase tracking-[5px] max-[992px]:px-[7rem] max-sm:px-[1rem]">
        Skills
      </h3>
      <div className="elem w-full flex items-center relative px-[10rem] border-t-[1px] border-gray-800 mt-7 max-[992px]:px-[7rem] max-sm:px-[1rem] ">
        <h1 className="text-zinc-200 font-[font1] text-[7vw] transition duration-[0.3s] max-sm:text-[3.5rem] ">
          HTML
        </h1>
        <img
          src="./assets/1.png"
          alt=""
          className="w-[10%] absolute opacity-0 scale-0 object-cover -bottom-[10rem] left-[4%]  transition duration-[0.8s] ease-out delay-[1]"
        />
      </div>
      <div className="elem w-full px-[10rem] border-t-[1px] border-gray-800  max-[992px]:px-[7rem] max-sm:px-[1rem]">
        <h1 className="text-zinc-200 font-[font1] text-[7vw] hover:text-zinc-900 transition duration-[0.3s] max-sm:text-[3.5rem]">
          CSS
        </h1>
        <img
          src="./assets/2.png"
          alt=""
          className="w-[10%] absolute opacity-0 scale-0 object-cover left-0  transition duration-[0.8s] ease-out delay-[1]"
        />
      </div>
      <div className="elem w-full px-[10rem] border-t-[1px] border-gray-800  max-[992px]:px-[7rem] max-sm:px-[1rem]">
        <h1 className="text-zinc-200 font-[font1] text-[7vw]  hover:text-zinc-900 transition duration-[0.3s] max-sm:text-[3.5rem]">
          JAVASCRIPT
        </h1>
        <img
          src="./assets/3.png"
          alt=""
          className="w-[10%] absolute opacity-0 scale-0 object-cover left-0  transition duration-[0.8s] ease-out delay-[1]"
        />
      </div>
      <div className="elem w-full px-[10rem] border-t-[1px] border-gray-800  max-[992px]:px-[7rem] max-sm:px-[1rem]">
        <h1 className="text-zinc-200 font-[font1] text-[7vw] hover:text-zinc-900 transition duration-[0.3s] max-sm:text-[3.5rem]">
          REACT JS
        </h1>
        <img
          src="./assets/4.png"
          alt=""
          className="w-[10%] absolute opacity-0 scale-0 object-cover left-0  transition duration-[0.8s] ease-out delay-[1]"
        />
      </div>
      <div className="elem w-full px-[10rem] border-t-[1px] border-gray-800  max-[992px]:px-[7rem] max-sm:px-[1rem]">
        <h1 className="text-zinc-200 font-[font1] text-[7vw] hover:text-zinc-900 transition duration-[0.3s] max-sm:text-[3.5rem]">
          TAILWIND CSS
        </h1>
        <img
          src="./assets/6.png"
          alt=""
          className="w-[10%] absolute opacity-0 scale-0 object-cover left-0  transition duration-[0.8s] ease-out delay-[1]"
        />
      </div>
      <div className="elem w-full px-[10rem] border-t-[1px] border-gray-800  max-[992px]:px-[7rem] max-sm:px-[1rem]">
        <h1 className="text-zinc-200 font-[font1] text-[7vw] hover:text-zinc-900 transition duration-[0.3s] max-sm:text-[3.5rem]">
          SASS
        </h1>
        <img
          src="./assets/7.png"
          alt=""
          className="w-[10%] absolute opacity-0 scale-0 object-cover left-0  transition duration-[0.8s] ease-out delay-[1]"
        />
      </div>
      <div className="elem w-full px-[10rem] border-t-[1px] border-gray-800  max-[992px]:px-[7rem] max-sm:px-[1rem]">
        <h1 className="text-zinc-200 font-[font1] text-[7vw] hover:text-zinc-900 transition duration-[0.3s] max-sm:text-[3.5rem]">
          TYPESCRIPT
        </h1>
        <img
          src="./assets/9.png"
          alt=""
          className="w-[10%] absolute opacity-0 scale-0 object-cover left-0  transition duration-[0.8s] ease-out delay-[1]"
        />
      </div>
      <div className="elem w-full px-[10rem] border-t-[1px] border-gray-800  max-[992px]:px-[7rem] max-sm:px-[1rem]">
        <h1 className="text-zinc-200 font-[font1] text-[7vw] hover:text-zinc-900 transition duration-[0.3s] max-sm:text-[3.5rem]">
          FIGMA
        </h1>
        <img
          src="./assets/12.png"
          alt=""
          className="w-[10%] absolute opacity-0 scale-0 object-cover left-0  transition duration-[0.8s] ease-out delay-[1]"
        />
      </div>
      <div className="elem w-full px-[10rem] border-t-[1px] border-gray-800  max-[992px]:px-[7rem] max-sm:px-[1rem]">
        <h1 className="text-zinc-200 font-[font1] text-[7vw] hover:text-zinc-900 transition duration-[0.3s] max-sm:text-[3.5rem]">
          NODE.JS
        </h1>
        <img
          src="./assets/12.png"
          alt=""
          className="w-[10%] absolute opacity-0 scale-0 object-cover left-0  transition duration-[0.8s] ease-out delay-[1]"
        />
      </div>
      <div className="elem w-full px-[10rem] border-t-[1px] border-gray-800  max-[992px]:px-[7rem] max-sm:px-[1rem]">
        <h1 className="text-zinc-200 font-[font1] text-[7vw] hover:text-zinc-900 transition duration-[0.3s] max-sm:text-[3.5rem]">
          EXPRESS.JS
        </h1>
        <img
          src="./assets/12.png"
          alt=""
          className="w-[10%] absolute opacity-0 scale-0 object-cover left-0  transition duration-[0.8s] ease-out delay-[1]"
        />
      </div>
      <div className="elem w-full px-[10rem] border-t-[1px] border-gray-800  max-[992px]:px-[7rem] max-sm:px-[1rem]">
        <h1 className="text-zinc-200 font-[font1] text-[7vw] hover:text-zinc-900 transition duration-[0.3s] max-sm:text-[3.5rem]">
          FIGMA
        </h1>
        <img
          src="./assets/12.png"
          alt=""
          className="w-[10%] absolute opacity-0 scale-0 object-cover left-0  transition duration-[0.8s] ease-out delay-[1]"
        />
      </div>
    </div>
  );
}

export default Skill;
