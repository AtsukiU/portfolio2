import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { Divide as Hamburger } from "hamburger-react";

const Header = () => {
  const headers = [
    { list: "Home", url: "/" },
    { list: "About", url: "/AboutMe" },
    { list: "Portfolio", url: "/Portfolio" },
    { list: "Contact", url: "/Contact" },
  ];

  const [isOpen, setOpen] = useState(false);

  return (
    <header className="w-full  items-center fixed   text-white    font-Montserrat   z-50 ">
      <div className="px-2 sm:px-4 lg:px-20 pt-0 lg:pt-6 mix-blend-difference bg-black lg:bg-opacity-100 flex filter  tracking-widest   w-full h-full items-center justify-between">
        <div className=" h-full  items-center  flex text-2xl lg:text-4xl  font-handwriting">
          {" "}
          <Link href="/">AUZ</Link>
        </div>

        <div className=" h-full flex items-center  ">
          <ul className="h-full  filter gap-8 text-md flex  items-end ">
            {headers.map((header, index) => {
              return (
                <li
                  className="items-center  hidden lg:flex mix-blend-difference   duration-300 lg:hover:brightness-90 lg:hover:-translate-y-1"
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
      {isOpen ? (
        <div className="flex lg:hidden w-screen h-[100vh] -mt-12 lg:mt-0 pt-12 lg:pt-0 bg-black bg-opacity-90 lg:bg-opacity-100 z-0  lg:-z-1">
          <ul className="h-full w-full flex flex-col items-center ">
            {headers.map((header, index) => {
              return (
                <li
                  className=" w-full h-[15vh] flex justify-center items-center  duration-300 tracking-widest  border-y border-zinc-600 text-base sm:text-xl"
                  key={index}
                >
                  <Link href={header.url}>{header.list}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div></div>
      )}
    </header>
  );
};

export default Header;
