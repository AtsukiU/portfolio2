import React, { useState, useEffect, useRef } from "react";
import Layout from "../components/Layout";

import MyImage from "../public/000030.JPG";
import Image from "next/image";
import Link from "next/link";

import Fishing from "../public/IMG_0248.jpg";
import Guitar from "/public/IMG_0528.jpg";
import Trip from "/public/000009.JPG";
import Football from "/public/IMG_1128.JPG";
import Pc from "/public/IMG_2472.jpg";
import Wiskey from "/public/IMG_4261.jpg";
import Aquarium from "/public/IMG_5773.jpg";
import Cat from "/public/cat.jpg";
import Car from "/public/IMG_8069.jpg";
import Unaghi from "/public/unaghi.jpg";
import Book from "/public/book.jpg";
import Programming from "../public/programming.jpg";

import Age from "./Age";

import Avatar from "../public/VL6HQ5td_b.jpg";

const AboutMe = () => {
  const birthdate = "1998/2/6";

  const ageCalculation = (birthDate, nowDate) => {
    const birthNumber =
      birthDate.getFullYear() * 10000 +
      (birthDate.getMonth() + 1) * 100 +
      birthDate.getDate();
    const nowNumber =
      nowDate.getFullYear() * 10000 +
      (nowDate.getMonth() + 1) * 100 +
      nowDate.getDate();

    return Math.floor((nowNumber - birthNumber) / 10000);
  };

  const age = ageCalculation(new Date(birthdate), new Date());

  const ageOutput = "Age" + age;

  const MyFavorites = [
    { title: "Trip", discription: "旅行が好きです。", src: Trip },
    { title: "Car", discription: "愛車のCX-5です。", src: Car },
    {
      title: "Fishing",
      discription: "釣りが好きで海・川・湖行きます。",
      src: Fishing,
    },
    {
      title: "Football",
      discription: "サッカーが好きで、メッシとクリロナを生で見たのが自慢です。",
      src: Football,
    },
    {
      title: "Wiskey",
      discription: "酒屋巡りして掘り出し物を探しています。",
      src: Wiskey,
    },
    { title: "Eel", discription: "大好物はうなぎです", src: Unaghi },
    { title: "Aquarium", discription: "", src: Aquarium },
    {
      title: "Guitar",
      discription: "学生時代からギター弾いてます",
      src: Guitar,
    },
    { title: "PC", discription: "興味本位でパソコンを組んでみました", src: Pc },
    {
      title: "Book",
      discription: "本を読むのも好きです。最近はAudible",
      src: Book,
    },
    {
      title: "Programming",
      discription: "本を読むのも好きです。最近はAudible",
      src: Programming,
    },
    {
      title: "Cat",
      discription: "本を読むのも好きです。最近はAudible",
      src: Cat,
    },
  ];

  return (
    <Layout>
      <div className="min-h-[100vh] flex flex-col lg:flex-row w-full items-center px-10 lg:px-0  bg-white">
        <div className="lg:w-1/2 min-h-[100vh] lg:py-10 pt-20 border-black lg:pl-10 h-full flex flex-col justify-center">
          <div className="mt-10 mx-auto my-auto w-[200px] h-[300px] flex lg:hidden  relative">
            <Image
              src={Avatar}
              layout="fill"
              objectFit="cover"
              alt="Avatar"
              className=""
            />
          </div>
          <div className="text-black font-bold text-4xl lg:text-6xl mt-10 lg:mt-0 ">
            AUZ
          </div>
          <div className="flex gap-2 mt-10 lg:mt-20">
            <div className="rounded-full text-black text-base  border py-2 px-4 border-black">
              {ageOutput}
            </div>
            <div className="rounded-full text-black text-base  border py-2 px-4 border-black">
              Man
            </div>
            <div className="rounded-full text-black  text-base  border py-2 px-4 border-black">
              Japan
            </div>
          </div>
          <div className="lg:mt-20 mt-10 text-black  text-sm lg:text-lg ">
            Welocome to my personal website.Welcome to my personal website. My
            name is AUZ and I love technology and design.I was born in
            Yamanashi, Japan and I am {age} years old. After graduating from a
            4-year university with a degree in economics, I gained experience in
            customer service as a sales representative.While working, I became
            interested in the idea of creating something and decided to start
            studying programming and design. With the goal of creating new
            value, I am acquiring knowledge related to web development and web
            application development.
          </div>
          <div className="mt-10 mb-20 lg:mb-20 text-black text-xs lg:text-base tracking-wide ">
            ポートフォリオサイトをご覧頂き有難うございます。AUZです。山梨生まれ。
            {age}
            歳。4年制大学の経済学部を卒業後、窓口営業を経験。働いている中で、何かを生み出すことへの興味関心に気づき、プログラミングとデザインの勉強を始めました。新しい技術やデザインが好きで、日々新しい価値を生み出すことを目標にWEB制作やWEB開発に関する知識の習得に励んでいます。お声がけお待ちしています。
          </div>
        </div>
        <div className="lg:mb-20 mx-auto w-[200px] h-[300px] lg:w-[400px] lg:h-[600px] lg:flex   hidden  relative">
          <Image
            src={Avatar}
            layout="fill"
            objectFit="cover"
            alt="Avatar"
            className=""
          />
        </div>
      </div>
      <div className="pt-20 pb-20 lg:pb-0 bg-bluebg text-white border-t border-black  min-h-screen px-10 ">
        {" "}
        <div className="w-full grid lg:grid-cols-3">
          <div className="text-4xl lg:text-6xl pb-0 lg:pb-20 font-bold">
            <div>Favorite</div>
            <div className="text-sm lg:text-lg mt-10 lg:mt-20 lg:pr-20 font-normal">
              I have a variety of hobbies such as traveling, playing the guitar,
              and keeping an aquarium, and I enjoy life .
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="lg:pt-20 pt-10 lg:mb-40 text-white  grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 lg:gap-2">
              {MyFavorites.map((MyFavorite, index) => {
                return (
                  <div
                    className="h-[15vh] sm:h-[20vh] lg:h-[25vh] sm:hover:h-[50vh]  duration-700 relative group flex justify-center"
                    key={index}
                  >
                    <Image
                      className="filter brightness-75 hover:brightness-50 duration-700"
                      objectFit="cover"
                      lauout="fill"
                      src={MyFavorite.src}
                      alt="okinawa"
                      loading="lazy"
                    />
                    <div className="absolute bottom-1 sm:bottom-4 left-0 px-1 sm:px-4 sm:-translate-y-10 sm:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-400 duration-1000">
                      <div className="text-xs sm:text-2xl font-normal ">
                        {MyFavorite.title}
                      </div>
                      <div className="text-xs font-light text-zinc-300 pt-2 hidden ">
                        {MyFavorite.discription}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutMe;
