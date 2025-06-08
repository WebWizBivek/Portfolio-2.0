import React from "react";
import BoxProject from "./BoxProject";

function Project() {
  return (
    <section id="work">
      <div className="w-full h-full py-[4rem] px-[10rem] max-[992px]:px-[2rem] max-sm:px-4">
        <h3 className="text-zinc-400 uppercase font-[font1] tracking-[5px] text-[15px]">
          Project
        </h3>
        <div className="flex items-center justify-center flex-wrap gap-10 mt-10">
          <BoxProject
            img={"/assets/nagad.png"}
            project={"https://nagadwallet.net/"}
          />
          <BoxProject
            img={"/assets/hiring.png"}
            code={"https://hiring.xeotec.in/"}
          />
          <BoxProject
            img={"/assets/project 3.jpg"}
            project={"https://html-css-js-magma.vercel.app/"}
          />
          <BoxProject
            img={"/assets/project 5.jpg"}
            code={"https://github.com/zaheerali34/HTML-CSS-JS-Project-QCLAY"}
            project={"https://qclay-weld.vercel.app/"}
          />
          <BoxProject
            img={"/assets/project 6.jpg"}
            project={
              "https://vercel.com/bivek-singhas-projects/html-css-js-magma"
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Project;
