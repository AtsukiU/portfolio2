import React from "react";

import { FaGithubSquare, FaTwitterSquare } from "react-icons/fa";
export default function Footer() {
  return (
    <div className=" z-50 mb-10 lg:flex hidden">
      {" "}
      <div className="w-full rounded  text-white duration-500  filter  flex items-center justify-end">
        <div className="w-full h-full justify-center items-center flex  ">
          <div className="backdrop-opacity-10 flex items-center text-zinc-400 hover:text-white duration-500 hover:-translate-y-1">
            <a href="https://github.com/AtsukiU">
              {" "}
              <FaGithubSquare size={60} />
            </a>
          </div>{" "}
          <div className="flex items-cemter ml-2 text-zinc-400 hover:text-white duration-500 hover:-translate-y-1">
            <a href="https://twitter.com/itwebzozo">
              <FaTwitterSquare size={60} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
