import React from "react";
export default function Footer() {
  return (
    <div className="fixed z-50 m-3">
      {" "}
      <div className=" rounded  text-white duration-500  filter  flex items-center justify-center">
        <div className="w-full h-full justify-center items-center flex flex-col ">
          <div className="backdrop-opacity-10 text-xl">@Auzoweb</div>
          <div className="backdrop-opacity-10 text-xl">@Github</div>
        </div>
      </div>
    </div>
  );
}
