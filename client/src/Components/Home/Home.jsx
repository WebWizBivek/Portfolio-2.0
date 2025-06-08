import React from "react";
import "remixicon/fonts/remixicon.css";

function Home() {
  return (
    <div className='w-full h-screen bg-[url("/assets/bg.jpg")] bg-center bg-cover bg-no-repeat relative'>
      <div className="w-full h-full absolute top-0 bg-[#00000030] flex items-center justify-center font-[font1] uppercase flex-col">
        <h3 className="text-zinc-300 tracking-[5px] max-sm:text-[0.8rem] text-xl">
          Bivek Singha
        </h3>
        <h1 className="textPro text-[8vw] leading-[7rem] mt-[2rem] font-bold text-zinc-200 max-[992px]:leading-[42px] max-sm:text-[2.5rem]">
          I am
        </h1>
        <h1 className="textPro text-[8vw] leading-[7rem] font-bold text-[#eb5939] max-[992px]:leading-[2rem] max-sm:mt-[4px] max-sm:text-[2.5rem]">
          Full Stack
        </h1>
        <h1 className="textPro text-[8vw] leading-[7rem] font-bold text-zinc-200 max-sm:leading-[50px] max-sm:text-[2.5rem]">
          developer
        </h1>

        <ul className="text-white fixed left-[3rem] bottom-[3rem] flex items-center flex-col gap-[20px] cursor-pointer z-50">
          <a href="www.linkedin.com/in/zaheer-rahman-755b18280">
            <i class="ri-linkedin-fill text-[1.5rem] hover:text-[#eb5939] transition duration-[0.3s]"></i>
          </a>
          <i class="ri-twitter-x-line text-[1.5rem] hover:text-[#eb5939] transition duration-[0.3s]"></i>
          <a href="https://github.com/zaheerali34?tab=repositories">
            {" "}
            <i class="ri-github-fill text-[1.5rem] hover:text-[#eb5939] transition duration-[0.3s]"></i>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Home;
