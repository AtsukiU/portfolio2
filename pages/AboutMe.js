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
      <div className="lg:min-h-[calc(100vh-136px)] min-h-screen mt-14 lg:mt-28 flex flex-col lg:flex-row w-full items-center px-10 lg:px-0  bg-white">
        <div className="lg:w-1/2 min-h-[calc(100vh-136px)] lg:py-10 border-black lg:pl-10 h-full flex flex-col items-center justify-center">
          <div className=" mx-auto  w-[200px] h-[300px] flex lg:hidden  relative">
            <Image
              src={Avatar}
              layout="fill"
              objectFit="cover"
              alt="Avatar"
              className=""
            />
          </div>

          <div className=" lg:px-40 pt-20 lg:pt-0 text-black  text-sm lg:text-lg break-all">
            <div className="mb-10 text-6xl">AUZ</div>
            <div className="mb-10 flex uppercase">
              <div className="border rounded-full px-4 py-1 border-black">Web developer</div>
              <div className="ml-4 border rounded-full px-4 py-1 border-black">Web designer</div>
            </div>
            <div>
              Welcome to my personal website. My name is AUZ and I love
              technology and design.I was born in Yamanashi, Japan and I am{" "}
              {age} years old. With the goal of creating new value, I am
              acquiring knowledge related to web development and web application
              development.
            </div>
          </div>
        </div>
        <div className=" mx-auto border-l border-black w-[200px] h-[calc(100vh-136px)] lg:w-[500px]  lg:flex   hidden  relative">
          <Image
            src={Avatar}
            layout="fill"
            objectFit="cover"
            alt="Avatar"
            className=""
          />
        </div>
      </div>
    </Layout>
  );
};

export default AboutMe;
