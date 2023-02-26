import React from "react";

import { FaGithubSquare, FaTwitterSquare } from "react-icons/fa";
export default function Footer() {
  return (
    <div className=" z-50 ">
      {" "}
      <div className="w-full text-black bg-stone-200 py-2 duration-500  filter  flex items-center px-10">
        <div className="w-full h-full justify-end items-center flex  ">
          &copy;2023 - AUZ
        </div>
      </div>
    </div>
  );
}
