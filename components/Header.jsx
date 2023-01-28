import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { Divide as Hamburger } from "hamburger-react";

const Header = () => {
  const headers = [
    { list: "Home", url: "/" },
    { list: "About ME", url: "/AboutMe" },
    { list: "Portfolio", url: "/Portfolio" },
    { list: "Contact", url: "/Contact" },
  ];

  const [isOpen, setOpen] = useState(false);

  return (
    <header className="w-full  items-center fixed mix-blend-normal  lg:mix-blend-difference  font-Montserrat  z-50">
      <div className="">
        <div className="px-2 sm:px-4 lg:px-20 pt-0 lg:py-3 flex filter  text-black lg:text-white   w-full h-full items-center justify-between">
          <div className=" items-center  flex  text-lg">
            {" "}
            <Link href="/">AUZ</Link>
          </div>

          <div className=" h-full flex items-center ">
            <ul className="h-full  filter gap-8 text-sm flex uppercase items-end ">
              {headers.map((header, index) => {
                return (
                  <li
                    className="items-center  hidden lg:flex duration-300 lg:hover:brightness-90 lg:hover:-translate-y-1"
                    key={index}
                  >
                    <Link href={header.url}>{header.list}</Link>
                  </li>
                );
              })}
              <div className="visible lg:hidden ">
                <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
              </div>
            </ul>
          </div>
        </div>
      </div>
      {isOpen ? (
        <div className="flex flex-col lg:hidden w-screen h-[100vh] -mt-12 lg:mt-0 pt-24 lg:pt-0 text-black  bg-white  z-0  lg:-z-1">
          <ul className="h-full w-full flex flex-col ">
            {headers.map((header, index) => {
              return (
                <li
                  className=" w-full h-[10vh] flex ml-4 items-center uppercase duration-300 border-black text-base sm:text-xl"
                  key={index}
                >
                  <Link href={header.url}>{header.list}</Link>
                </li>
              );
            })}
            <div className="mt-20 ml-4 uppercase flex flex-col text-base sm:text-xl">
              <a href="https://twitter.com/itwebzozo">
               twitter
              </a>
              <a className="mt-8" href="https://github.com/AtsukiU">
              github
              </a>
            </div>
          </ul>
        </div>
      ) : (
        <div></div>
      )}
    </header>
  );
};

export default Header;
