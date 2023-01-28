import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeCard = (props) => {
  return (
    <Link href={props.src}>
      <div
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        kdrop-br
        className="min-h-[40vh] lg:min-h-[50vh] flex flex-col  relative rounded-lg lg:rounded-none "
      >
        <Image
          className=" w-full h-full  object-cover filter rounded-lg lg:rounded-none"
          layout="fill"
          src={props.image}
          alt="cardImage"
        />

        <div className="w-full h-full  pl-4  lg:pl-8  items-start justify-end group flex flex-col  transition cursor-pointer backdrop-brightness-90 hover:backdrop-brightness-50 duration-700 group">
          <div className="flex justify-center lg:translate-y-7 group-hover:translate-y-0 duration-700 tracking-wide font-light  text-white text-2xl lg:text-3xl ">
            {props.title}
          </div>

          <div className="flex lg:opacity-0 group-hover:opacity-100 lg:translate-y-7 group-hover:translate-y-0  group-hover:visible duration-700 py-5 justify-center tracking-wide font-light text-white text-sm lg:text-sm ">
            {props.discription}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeCard;
