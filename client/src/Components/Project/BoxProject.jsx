import React from "react";

function BoxProject({ img, code, project }) {
  return (
    <div className="boxPro w-[23rem] h-[20rem] bg-black rounded-xl py-4 flex items-center justify-center relative overflow-hidden max-md:w-full max-md:h-[30rem] max-sm:h-[18rem] max-sm:rounded-[15px]">
      <img
        src={img}
        alt=""
        className="w-full h-full object-contain mt-[-1rem] max-sm:w-[95%] max-sm:h-[18rem]"
      />
      <div className="w-full h-full hover:bg-[#00000080] absolute top-0 cursor-pointer transition duration-[0.3s] flex items-center justify-center text-center gap-10">
        <div className="icone">
          <a href={project} target="_blank" rel="noopener noreferrer">
            <i
              class="ri-external-link-line text-whit
        e text-[2rem] text-white"
            ></i>
            <p className="text-white text-sm font-medium">View Project</p>
          </a>
        </div>
        <div className="icone"></div>
      </div>
    </div>
  );
}

export default BoxProject;
