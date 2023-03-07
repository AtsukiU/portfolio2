import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FaGithubSquare, FaTwitterSquare } from "react-icons/fa";
import { Divide as Hamburger } from "hamburger-react";

const Header = () => {
  const headers = [
    { list: "HOME", url: "/" },
    { list: "AboutMe", url: "/AboutMe" },
    { list: "Portfolio", url: "/Portfolio" },
    { list: "Contact", url: "/Contact" },
  ];

  const [isOpen, setOpen] = useState(false);

  return (
    <header className="lg:w-52 w-full  lg:h-screen border-r border-black fixed  font-Montserrat  z-50">
      <div className="lg:bg-stone-200 h-full">
        <div className="px-0 sm:px-4 lg:px-10 py-2 lg:py-14 flex justify-between lg:justify-start items-center lg:items-start lg:flex-col filter  text-black lg:text-black   w-full h-full ">
          <div className="flex pl-4 lg:pl-0 text-4xl font-bold tracking-wide">
            {" "}
            <Link href="/">AUZ</Link>
          </div>

          <div className="  flex items-center lg:mt-10">
            <ul className=" filter gap-4 text-base flex lg:flex-col">
              {headers.map((header, index) => {
                return (
                  <li
                    className="items-center lg:px-1  hidden lg:flex  duration-300 lg:hover:brightness-90 lg:hover:translate-x-2"
                    key={index}
                  >
                    <Link href={header.url}>{header.list}</Link>
                  </li>
                );
              })}
              <div className="visible lg:hidden flex items-start">
                <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
              </div>
            </ul>
          </div>
          <div className="hidden lg:flex items-center mt-auto">
            <div className="flex items-center text-black hover:text-stone-600 duration-500 hover:-translate-y-1">
              <a href="https://github.com/AtsukiU">
                {" "}
                <FaTwitter size={30} />
              </a>
            </div>{" "}
            <div className="flex items-cemter ml-3 mr-20 text-black hover:text-stone-600 duration-500 hover:-translate-y-1">
              <a href="https://twitter.com/itwebzozo">
                <FaGithub size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {isOpen ? (
        <div className="flex flex-col lg:hidden w-screen h-[100vh]  -mt-16 lg:mt-0 pt-24 lg:pt-0 text-black  bg-stone-200  z-0  lg:-z-1">
          <ul className="h-full w-full flex flex-col mt-20 ">
            {headers.map((header, index) => {
              return (
                <li
                  className=" w-full  flex ml-4 items-center uppercase duration-300 border-black text-5xl font-bold sm:text-xl"
                  key={index}
                >
                  <Link href={header.url}>{header.list}</Link>
                </li>
              );
            })}
            <div className="mt-20 ml-4 flex flex-col text-2xl  font-bold sm:text-xl">
              <a href="https://twitter.com/itwebzozo">Twitter</a>
              <a className="" href="https://github.com/AtsukiU">
                Github
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
