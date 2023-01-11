import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { Divide as Hamburger } from "hamburger-react";

const Header = () => {
  const headers = [
    { list: "home", url: "/" },
    { list: "about", url: "/AboutMe" },
    { list: "portfolio", url: "/Portfolio" },
    { list: "contact", url: "/" },
  ];

  const [isOpen, setOpen] = useState(false);

  return (
    <header className="w-full  items-center fixed px-2 sm:px-8 lg:px-20 pt-0 lg:pt-6 text-white  mix-blend-difference bg-none   font-Montserrat   z-50 ">
      <div className="flex w-full h-full items-center justify-between">
        <div className=" h-full  items-center   flex text-2xl lg:text-4xl  font-handwriting">
          {" "}
          <Link href="/">AUZ</Link>
        </div>

        <div className=" h-full flex items-center  ">
          <ul className="h-full  filter gap-8 text-md flex  items-end ">
          
            {headers.map((header, index) => {
              return (
                <li
                  className="items-center  hidden lg:flex   duration-300 "
                  key={index}
                >
                  <Link href={header.url}>{header.list}</Link>
                </li>
              );
            })}
            <div className="visible lg:hidden ">
              <Hamburger toggled={isOpen} toggle={setOpen} size={24}/>
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
