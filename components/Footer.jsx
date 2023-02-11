import React from "react";

import { FaGithubSquare, FaTwitterSquare } from "react-icons/fa";
export default function Footer() {
  return (
    <div className=" z-50 lg:flex hidden">
      {" "}
      <div className="w-full text-black bg-stone-200 pb-5 duration-500  filter  flex items-center justify-end">
        <div className="w-full h-full justify-end items-center flex  ">
          <div className="backdrop-opacity-10 flex items-center text-black hover:text-stone-600 duration-500 hover:-translate-y-1">
            <a href="https://github.com/AtsukiU">
              {" "}
              <FaTwitterSquare size={40} />
            </a>
          </div>{" "}
          <div className="flex items-cemter ml-2 mr-20 text-black hover:text-stone-600 duration-500 hover:-translate-y-1">
            <a href="https://twitter.com/itwebzozo">
              <FaGithubSquare size={40} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
