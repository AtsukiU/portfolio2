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
        className="min-h-[50vh] flex flex-col rounded-2xl  relative "
      >
        <Image
          className=" w-full h-full  object-cover filter rounded-2xl  sm:opacity-100  "
          layout="fill"
          src={props.image}
          alt="cardImage"
        />

        <div className="w-full h-full pb-2  lg:pb-4 pl-4  lg:pl-8  items-start justify-end group flex flex-col rounded-2xl  transition cursor-pointer backdrop-brightness-75 ">
          <div className="flex justify-center lg:translate-y-7 group-hover:translate-y-0 duration-500 tracking-wide font-light  text-white text-xl lg:text-3xl ">
            {props.title}
          </div>

          <div className="lg:opacity-0 group-hover:opacity-100 lg:translate-y-7 group-hover:translate-y-0  group-hover:visible duration-500 py-2 justify-center tracking-wide font-light text-zinc-200 text-xs lg:text-sm ">
            {props.discription}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeCard;
