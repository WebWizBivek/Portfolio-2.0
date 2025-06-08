import React from "react";

function Header() {
  return (
    <>
      <div className="w-full flex items-start justify-between p-[3rem] fixed top-0 left-0 right-0 z-10">
        <img src="/assets/logo.png" alt="" className="w-[60px] rounded-md" />

        <nav>
          <ul className="uppercase font-[font1] text-[0.9rem] text-end cursor-pointer">
            <li className="text-zinc-100 hover:text-zinc-500 transition duration-[0.4s]">
              Home
            </li>
            <li className="text-zinc-100 hover:text-zinc-500 transition duration-[0.4s]">
              About
            </li>
            <li className="text-zinc-100  hover:text-zinc-500 transition duration-[0.4s]">
              work
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
