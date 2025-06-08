function Footer() {
  return (
    <div className="w-full h-full bg-black py-[6rem] px-[10rem] text-white font-[font1] max-[992px]:px-[4rem]">
      <h3 className="text-[15px] uppercase tracking-[5px] font-semibold text-zinc-400">
        Pixel by pixel, line by line — crafted with code and creativity
      </h3>
      <div className="w-full flex items-start justify-between mt-10 max-sm:flex-col max-sm:flex-wrap">
        <ul className="text-[2.5vw] font-bold leading-[45px] flex  flex-col text-zinc-300 cursor-pointer max-sm:text-[4vw]">
          <a
            href="https://x.com/Singhabivekdev"
            target="_blank"
            rel="noopener noreferrer"
            className=" transition duration-[0.3s] hover:text-[#eb5939]"
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/bivek-singha/"
            target="_blank"
            rel="noopener noreferrer"
            className=" transition duration-[0.3s] hover:text-[#eb5939]"
          >
            Linkedin
          </a>

          <a
            href="https://github.com/WebWizBivek"
            target="_blank"
            rel="noopener noreferrer"
            className=" transition duration-[0.3s] hover:text-[#eb5939]"
          >
            Github
          </a>
        </ul>
        <ul className="text-[2.5vw] font-bold leading-[45px] flex flex-col text-zinc-300 cursor-pointer max-sm:text-[4vw]">
          {/* <li className=" transition duration-[0.3s] hover:text-[#eb5939]">
            Facebook
          </li> */}

          <a
            href="https://www.instagram.com/mern_coder?igsh=NmNiejZlOHd4OW83"
            target="_blank"
            rel="noopener noreferrer"
            className=" transition duration-[0.3s] hover:text-[#eb5939]"
          >
            Instagram
          </a>
        </ul>
        <div className="flex items-start flex-col gap-4 max-sm:mt-10">
          <div>
            <h3 className="text-sm">Email</h3>
            <a
              href="mailto:biveksingha.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 text-[15px] font-[font1]"
            >
              biveksingha.dev@gmail.com
            </a>
          </div>

          <div>
            <h3 className="text-sm">Phone</h3>
            <a href="tel:+916001971918">+91 6001971918</a>
          </div>
        </div>
      </div>
      <p>copyright &copy; 2025 Bivek Singha</p>
    </div>
  );
}

export default Footer;
