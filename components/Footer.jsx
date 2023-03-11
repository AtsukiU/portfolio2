import React from "react";

import { FaGithubSquare, FaTwitterSquare } from "react-icons/fa";
export default function Footer() {
  return (
    <div className=" z-50 ">
      {" "}
      <div className="w-full bottom-0 left-0 border-t border-black h-6 fixed bg-white text-black  px-10">
        <div className="w-full h-full justify-end items-center flex  ">
          &copy;2023 - AUZ
        </div>
      </div>
    </div>
  );
}
