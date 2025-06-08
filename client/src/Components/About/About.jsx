import React from "react";

function About() {
  return (
    <section id="about">
      <div className="w-full h-screen flex items-start justify-center flex-col px-[15rem] max-[992px]:w-full max-[992px]:px-[5rem] max-sm:px-[1rem] max-sm:h-full max-sm:mt-[8rem]">
        <h3 className="text-zinc-400 uppercase font-[font1] tracking-[5px] text-[15px]">
          about me
        </h3>
        <p className="text-zinc-300 text-[2.5rem] pt-4 uppercase font-[font1] leading-[55px] max-[992px]:text-[2rem] max-md:text-[1.5rem] max-md:leading-[40px] max-sm:w-full max-sm:text-[1rem] max-sm:leading-[30px]">
          I’m a passionate{" "}
          <span className="text-[#eb5939]">Full Stack Developer</span> with a
          strong focus on building seamless, scalable, and high-performance web
          applications. I thrive on transforming creative ideas into fully
          functional digital experiences — from crafting intuitive front-end
          interfaces to developing robust and secure back-end systems.
        </p>
      </div>
    </section>
  );
}

export default About;
