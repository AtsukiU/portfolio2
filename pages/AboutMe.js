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

import Portfolio1Img from "../public/Portfolio1.png";
import Portfolio2Img from "../public/PortFolio.png";
import PostItMemo from "../public/PostItMemo.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectFade, Pagination, FreeMode } from "swiper";

const AboutMe = () => {
  const PortfolioCards = [
    {
      title: "Portfolio1",
      src: Portfolio1Img,
      subTitle: "React",
      PortfolioDiscriptionURL: "/PortfolioDiscription",
      PortfolioDiscription:
        "自身初のポートフォリオサイト。コンセプトはモダンなUIUXです。ダークモードとライトモードの切り替えを実装。直接コンタクトが取れるコンタクトフォームを導入しました。スライダーも導入し、どういったスキルを持っているかなどを視覚的に分かりやすくしています。",
    },
    {
      title: "Post It Memo",
      src: PostItMemo,
      subTitle: "React",
      PortfolioDiscriptionURL: "/PortfolioDiscription",
      PortfolioDiscription:
        "付箋型のメモアプリ。簡単に使うことが出来るシンプルなアプリを目指し制作。データの入力、読み込み、削除が出来ます。",
    },
    {
      title: "Portfolio2",
      src: Portfolio2Img,
      subTitle: "React",
      PortfolioDiscriptionURL: "/PortfolioDiscription",
      PortfolioDiscription:
        "2つ目のポートフォリオサイト。より自由度が高く、自分が好きだと思えるサイトを目指し制作。",
    },
  ];

  const FrontEndSkills = [
    {
      title: "HTML CSS",
      Discription:
        "HTML CSSを利用したWEB制作。レスポンシブデザイン等のコーディング。CSSでのアニメーション導入。",
    },
    {
      title: "JavaScript",
      Discription:
        "React、Next.jsを用いたWEB制作、WEB開発。SPA(react-router,Next/Link)の導入。",
    },
    {
      title: "React",
      Discription:
        "ReactでのSPA開発(react-router)。レスポンシブデザインの導入。",
    },
    { title: "Next.js", Discription: "Next.jsでのSPA開発(Next/Link)。" },
    {
      title: "ChakraUI",
      Discription:
        "ChakraUIを用いたレスポンシブデザイン、アニメーションの導入、ダークテーマの導入",
    },
    {
      title: "TailwindCSS",
      Discription:
        "TailwindCSSを用いたレスポンシブデザイン、アニメーションの導入。",
    },
    {
      title: "GSAP",
      Discription: "GSAPを用いたアニメーション、ページ遷移の導入。",
    },
  ];

  const BackEndSkills = [
    {
      title: "GraphQL",
      Discription: "",
    },
    { title: "Node.js", Discription: "" },
    { title: "Firebase", Discription: "FireBaseを用いたCRUD操作。" },
  ];

  const OtherSkills = [
    {
      title: "Git",
      Discription: "Gitでのリポジトリーの管理、更新",
    },
    {
      title: "TOEIC L&R 850",
      Discription: "L&R 850",
    },
  ];

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

  const [activeFrontEnd, setActiveFrontEnd] = useState(true);
  const [activeBackEnd, setActiveBackEnd] = useState(false);
  const [activeOthers, setActiveOthers] = useState(false);

  const OnClickFrontEnd = () => {
    setActiveFrontEnd(true);
    setActiveBackEnd(false);
    setActiveOthers(false);
    console.log(activeFrontEnd);
  };
  const OnClickBackend = () => {
    setActiveFrontEnd(false),
      setActiveBackEnd(true),
      setActiveOthers(false),
      console.log(activeBackEnd);
  };
  const OnClickOthers = () => {
    setActiveFrontEnd(false),
      setActiveBackEnd(false),
      setActiveOthers(true),
      console.log(activeOthers);
  };

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <Layout>
      <div>
        <div className="min-h-screen  min-w-full px-4 lg:px-20   bg-zinc-100">
          <div className="w-full h-[100vh] lg:mb-20 lg:pb-20 flex  items-center text-white ">
            <div className="w-full px-4 lg:px-20 items-center flex  flex-col">
              <div
                id="Title"
                className="lg:w-9/12  break-all text-zinc-200 uppercase text-6xl sm:text-8xl lg:text-9xl  "
              >
                <a>Welcome to my personal website.</a>
                <nobr className="breake-keep text-zinc-600">I&apos;m AUZ</nobr>
                <a className="">,Web Developer and web designer.</a>
              </div>
            </div>
          </div>

          <div
            id="Title"
            className=" h-full  lg:pt-0 lg:mt-40 flex flex-col justify-center bg-zinc-100 text-black border-t border-black backdrop-brightness-50"
          >
            <div className="grid lg:grid-cols-3">
              <div className=" flex flex-col mt-20 lg:mt-0 lg:pr-10 lg:border-r lg:border-black ">
                <div className="text-4xl lg:text-6xl mb-0  lg:mt-20 lg:pb-10 ">
                  AUZ
                </div>
                <div className="lg:mt-0 mt-5">
                  {" "}
                  <div className="text-base  lg:text-3xl">
                    Age 24 / Web Devoloper 
                  </div>
                  <div className="text-sm  lg:text-base border-black  pt-5 lg:pt-20">
                    1998年山梨で生まれる。大学では経済学を学び、語学の習得にも注力。大学卒業後は金融系企業で窓口営業を経験。働く中で自分が何を本当にしたいかを考え、独学でプログラミングを始める。
                    <br></br>
                    <br></br>
                    人の心を動かせるものを作るということを目標にしています。是非お声がけいただければと思います。
                  </div>
                </div>
                <Link href="/Contact">
                  <div className="lg:mt-20 mt-10 mb-10 border border-black mr-auto flex group uppercase px-8 py-3 rounded-full text-base cursor-pointer">
                    <div className=" -translate-x-6 mr-3 group-hover:opacity-100 opacity-0 duration-700 group-hover:translate-x-5">
                      →
                    </div>{" "}
                    <div className="mx-3  group-hover:translate-x-3 -translate-x-3 duration-500 ">
                      Contact me
                    </div>
                    <div className="group-hover:opacity-0 duration-500 group-hover:translate-x-3">
                      →
                    </div>
                  </div>
                </Link>{" "}
              </div>
              <div className="col-span-2 lg:mt-10 mt-0 mb-10 min-h-[50vh] lg:min-h-[90vh] lg:ml-10 relative">
                <Image
                  className=" filter brightness-75   duration-1000 "
                  objectFit="cover"
                  layout="fill"
                  src={MyImage}
                  alt="PortfolioCards"
                />
              </div>
            </div>
          </div>

          {/* <div className="text-white -mt-4"></div> */}

          <div className="w-full min-h-[70vh] grid lg:grid-cols-3  border-t border-black text-black cursor-pointer">
            {" "}
            <div className="mt-10 text-4xl lg:text-6xl"></div>
            <div className="flex flex-col  border-black col-span-2 ">
              <div className="w-full mt-20 mb-10 text-4xl sm:text-6xl lg:text-8xl uppercase text-zinc-300">
                I love Technology and Design.<br></br>
                <Link href="/Portfolio">
                  <div className="text-black border-b-2 flex  group border-black hover:text-zinc-600 duration-500">
                    <div className="mr-2 lg:mr-5 lg:group-hover:opacity-0 opacity-100 duration-300">
                      View
                    </div>
                    <div className=" lg:group-hover:-translate-x-64 duration-700">
                      Portfolio
                    </div>
                    <div className="lg:group-hover:-translate-x-64 lg:invisible group-hover:visible duration-1000 ml-4">
                      →
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex flex-col justify-end  text-sm  lg:text-3xl text-black py-10 lg:py-20">
                <div className="flex justify-end">React / Next.js</div>
                <div className="flex justify-end mt-1">
                  ChakraUI / TailwindCSS / styled-components
                </div>
                <div className="flex justify-end mt-1">
                  FramerMotion / GSAP{" "}
                </div>
                <div className="flex justify-end mt-1">
                  Firebase / GraphQL / Node.js
                </div>
                <div className="flex justify-end mt-1">Git</div>
              </div>
              <div className="w-full"></div>
            </div>
          </div>

          <div
            className="pt-20 pb-40 w-full border-t border-black text-black tracking-wide grid lg:grid-cols-3"
            id="Skills"
          >
            <div className="text-4xl lg:text-6xl">Skills</div>
            <div className="col-span-2 pt-10 lg:pt-0 ">
              <div className=" pb-20  gap-2 text-base  lg:text-3xl flex flex-col lg:flex-row">
                <div
                  onClick={OnClickFrontEnd}
                  isActive={OnClickFrontEnd}
                  className={classNames(
                    activeFrontEnd
                      ? " px-8 py-2  text-black flex justify-center cursor-pointer border border-black rounded-full  duration-300 "
                      : "  px-8 py-2  text-zinc-300 flex justify-center cursor-pointer border rounded-full border-zinc-300 hover:border-zinc-600 hover:text-zinc-600 hover:bg-zinc-100 duration-300"
                  )}
                >
                  FRONTEND{" "}
                </div>

                <div
                  onClick={OnClickBackend}
                  isActive={OnClickFrontEnd}
                  className={classNames(
                    activeBackEnd
                      ? " px-8 py-2  text-black flex justify-center cursor-pointer border border-black rounded-full  duration-300 "
                      : "  px-8 py-2  text-zinc-300 flex justify-center cursor-pointer border rounded-full border-zinc-300 hover:border-zinc-600 hover:text-zinc-600 hover:bg-zinc-100 duration-300"
                  )}
                >
                  BACKEND
                </div>

                <div
                  onClick={OnClickOthers}
                  isActive={OnClickFrontEnd}
                  className={classNames(
                    activeOthers
                      ? " px-8 py-2  text-black flex justify-center cursor-pointer border border-black rounded-full  duration-300 "
                      : "  px-8 py-2  text-zinc-300 flex justify-center cursor-pointer border rounded-full border-zinc-300 hover:border-zinc-600 hover:text-zinc-600 hover:bg-zinc-100 duration-300"
                  )}
                >
                  OTHRES
                </div>
              </div>

              <div className=" lg:mb-40">
                {activeFrontEnd ? (
                  <div className="w-full h-full mx-auto   grid grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-10">
                    {FrontEndSkills.map((skill, index) => {
                      return (
                        <div
                          className=" pb-2  flex flex-col border-b border-black"
                          key={index}
                        >
                          <div className="text-sm  lg:text-2xl font-light">
                            {skill.title}
                          </div>
                          <div className="mt-2  text-zinc-600 text-xs lg:text-sm font-light  hidden lg:flex">
                            {skill.Discription}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div></div>
                )}
                {activeBackEnd ? (
                  <div className="w-full h-full mx-auto  grid grid-cols-1 lg:grid-cols-1 gap-2 lg:gap-10">
                    {BackEndSkills.map((skill, index) => {
                      return (
                        <div
                          className="   flex flex-col border-b border-black pb-2 lg:pb-4"
                          key={index}
                        >
                          <div className="text-sm lg:text-2xl font-light">
                            {skill.title}
                          </div>
                          <div className="mt-2 text-zinc-600 text-xs lg:text-sm font-light  hidden lg:flex">
                            {skill.Discription}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div></div>
                )}

                {activeOthers ? (
                  <div className="w-full h-full mx-auto  grid grid-cols-1 lg:grid-cols-1 gap-2 lg:gap-10">
                    {OtherSkills.map((skill, index) => {
                      return (
                        <div
                          className="flex flex-col border-b border-black pb-2 lg:pb-4"
                          key={index}
                        >
                          <div className="text-sm lg:text-2xl  font-light">
                            {skill.title}
                          </div>
                          <div className="mt-2 text-zinc-600 text-xs lg:text-sm font-light  hidden lg:flex">
                            {skill.Discription}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-20 pb-20 lg:pb-0  border-black border-t bg-zinc-100 text-black min-w-full  min-h-screen px-4 lg:px-20 tracking-widest">
          {" "}
          <div className="w-full grid lg:grid-cols-3">
            <div className="text-4xl lg:text-6xl pb-10  lg:pb-20">Favorite</div>
            <div className="col-span-2">
              <div className="text-sm lg:text-3xl">
                Travel Football Fishing Car Aquarium Cat Game Guiter PC Books
                Wiskey and more...
              </div>
              <div className="pt-20 lg:mb-40 text-white  grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 lg:gap-2">
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
      </div>
    </Layout>
  );
};

export default AboutMe;
