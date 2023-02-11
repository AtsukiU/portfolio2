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

import HTMLIcon from "../public/html5-fill.svg";
import JavascriptIcon from "../public/logo-javascript.svg";
import ChakraIcon from "../public/chakraui.svg";
import NextIcon from "../public/next-js.svg";
import TailwindIcon from "../public/tailwind-css.svg";
import GsapIcon from "../public/greensock.svg";
import ReactIcon from "../public/react.svg";

import GraphQlIcon from "../public/graphql-fill.svg";
import NodeIcon from "../public/logo-nodejs.svg";
import FireBaseIcon from "../public/logo-firebase.svg";

import GitIcon from "../public/git.svg";
import EnglishIcon from "../public/english-input.svg";

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
      svg: HTMLIcon,
    },
    {
      title: "JavaScript",
      Discription:
        "React、Next.jsを用いたWEB制作、WEB開発。SPA(react-router,Next/Link)の導入。",
      svg: JavascriptIcon,
    },
    {
      title: "React",
      Discription:
        "ReactでのSPA開発(react-router)。レスポンシブデザインの導入。",
      svg: ReactIcon,
    },
    {
      title: "Next.js",
      Discription: "Next.jsでのSPA開発(Next/Link)。",
      svg: NextIcon,
    },
    {
      title: "ChakraUI",
      Discription:
        "ChakraUIを用いたレスポンシブデザイン、アニメーションの導入、ダークテーマの導入",
      svg: ChakraIcon,
    },
    {
      title: "TailwindCSS",
      Discription:
        "TailwindCSSを用いたレスポンシブデザイン、アニメーションの導入。",
      svg: TailwindIcon,
    },
    {
      title: "GSAP",
      Discription: "GSAPを用いたアニメーション、ページ遷移の導入。",
      svg: GsapIcon,
    },
  ];

  const BackEndSkills = [
    {
      title: "GraphQL",
      Discription: "",
      svg: GraphQlIcon,
    },
    { title: "Node.js", Discription: "", svg: NodeIcon },
    {
      title: "Firebase",
      Discription: "FireBaseを用いたCRUD操作。",
      svg: FireBaseIcon,
    },
  ];

  const OtherSkills = [
    {
      title: "Git",
      Discription: "Gitでのリポジトリーの管理、更新",
      svg: GitIcon,
    },
    {
      title: "TOEIC L&R 850",
      Discription: "L&R 850",
      svg: EnglishIcon,
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
        <div className="min-h-screen  min-w-full  bg-stone-200">
          <div className="w-full h-[100vh] lg:mb-10 lg:pb-10 px-10 flex  items-center text-black ">
            <div className="w-full  flex  flex-col items">
              <div
                id="Title"
                className="lg:w-8/12 lg:mt-10  break-all text-black font-bold text-4xl sm:text-6xl lg:text-8xl  "
              >
                <a>Welcome to my personal website. </a>
                <nobr className="text-black ">I&apos;m AUZ</nobr>
                <a className="">. Web developer and web designer.</a>
              </div>
              <div className="text-base lg:text-lg font-bold mt-20">Men</div>
              <div className="text-base lg:text-lg font-bold">Age 25</div>
              <div className="text-base lg:text-lg font-bold">
                {" "}
                Web devoloper
              </div>
              <Link href="/Contact">
                <div className=" mt-20 mr-10 border border-black lg:ml-auto flex group px-8 py-3 rounded-full text-base lg:text-lg cursor-pointer">
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
          </div>

          {/* <div className="text-white -mt-4"></div> */}

          <div className=" w-full lg:pb-40 pb-20 border-black bg-black text-stone-200 px-10 cursor-pointer">
            {" "}
            <div className="mt-10 text-4xl lg:text-6xl"></div>
            <div className="flex flex-col  border-stone-200 col-span-2 ">
              <div className="lg:w-2/3 lg:mt-20 mt-20 mb-10 font-bold text-4xl sm:text-6xl lg:text-6xl  ">
                I love technology and design.<br></br>
                <Link href="/Portfolio">
                  <div className="flex   group  hover:text-stone-400 duration-500">
                    <div className="pr-2 lg:pr-5 lg:group-hover:opacity-0 opacity-100 duration-300 border-b-2 border-stone-200">
                      View
                    </div>
                    <div className=" lg:group-hover:-translate-x-40 duration-700 border-b-2 border-stone-200">
                      Portfolio
                    </div>
                    <div className="lg:group-hover:-translate-x-40 invisible lg:group-hover:visible duration-1000 ml-4">
                      →
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex">
                <div className="lg:w-1/2 pr-8 lg:pr-0  flex flex-col text-sm  lg:text-lg border-stone-200 py-10 lg:py-20">
                  <div className="flex ">React / Next.js</div>
                  <div className="flex  mt-1">
                    ChakraUI / TailwindCSS / styled-components
                  </div>
                  <div className="flex  mt-1">FramerMotion / GSAP </div>
                  <div className="flex  mt-1">Firebase / GraphQL / Node.js</div>
                  <div className="flex mt-1">Git</div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="pt-20 pb-20 px-10 w-full border-t bg-yellowbg border-black text-black tracking-wide grid lg:grid-cols-3"
            id="Skills"
          >
            <div className="text-4xl lg:text-6xl font-bold">
              <div>Skills</div>{" "}
              <div className="text-sm lg:text-lg mt-10 lg:mt-20 lg:pr-20 font-normal">
                I am working on acquiring skills in JavaScript frameworks such
                as Next.js and React, as well as technologies such as Firebase
                and GraphQL, as well as improving my English proficiency. I will
                continue to acquire various skills in the future.
              </div>
            </div>
            <div className="col-span-2 pt-10 lg:pt-0 ">
              <div className=" pb-20  gap-2 text-base  lg:text-lg flex flex-col lg:flex-row">
                <div
                  onClick={OnClickFrontEnd}
                  isActive={OnClickFrontEnd}
                  className={classNames(
                    activeFrontEnd
                      ? " px-8 py-2  text-black flex justify-center cursor-pointer border border-black rounded-full  duration-300 "
                      : "  px-8 py-2  text-zinc-300 flex justify-center cursor-pointer border rounded-full border-zinc-300 hover:border-zinc-600 hover:text-zinc-600  duration-300"
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
                      : "  px-8 py-2  text-zinc-300 flex justify-center cursor-pointer border rounded-full border-zinc-300 hover:border-zinc-600 hover:text-zinc-600  duration-300"
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
                      : "  px-8 py-2  text-zinc-300 flex justify-center cursor-pointer border rounded-full border-zinc-300 hover:border-zinc-600 hover:text-zinc-600 duration-300"
                  )}
                >
                  OTHRES
                </div>
              </div>

              <div className=" lg:mb-20">
                {activeFrontEnd ? (
                  <div className="w-full h-full grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10">
                    {FrontEndSkills.map((skill, index) => {
                      return (
                        <div
                          className="w-full pb-2 relative flex flex-col group border-black"
                          key={index}
                        >
                          <div className="w-full my-20 opacity-10">
                            <Image
                              src={skill.svg}
                              alt={skill.title}
                              layout="fill"
                              objectFit="cover"
                            ></Image>
                          </div>
                          <div className="text-sm  lg:text-lg">
                            {skill.title}
                          </div>
                          <div className="my-2  text-zinc-600 text-xs lg:text-sm font-light  hidden">
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
                  <div className="w-full h-full mx-auto  grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-10">
                    {BackEndSkills.map((skill, index) => {
                      return (
                        <div
                          className="w-full relative  flex flex-col border-black pb-2"
                          key={index}
                        >
                          <div className="w-full my-20 opacity-5">
                            <Image
                              src={skill.svg}
                              alt={skill.title}
                              layout="fill"
                              objectFit="cover"
                            ></Image>
                          </div>
                          <div className="text-sm lg:text-lg">
                            {skill.title}
                          </div>
                          <div className="my-2 text-zinc-600 text-xs lg:text-base font-light  hidden ">
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
                  <div className="w-full h-full mx-auto  grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-10">
                    {OtherSkills.map((skill, index) => {
                      return (
                        <div
                          className="relative flex flex-col border-black pb-2 "
                          key={index}
                        >
                          <div className="w-full my-20 opacity-5">
                            <Image
                              src={skill.svg}
                              alt={skill.title}
                              layout="fill"
                              objectFit="cover"
                            ></Image>
                          </div>
                          <div className="text-sm lg:text-lg ">
                            {skill.title}
                          </div>
                          <div className="my-2 text-zinc-600 text-xs lg:text-base font-light  hidden ">
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

        <div className="pt-20 pb-20 lg:pb-0 bg-bluebg text-white border-t border-black  min-h-screen px-10 ">
          {" "}
          <div className="w-full grid lg:grid-cols-3">
            <div className="text-4xl lg:text-6xl pb-0 lg:pb-20 font-bold">
              <div>Favorite</div>
              <div className="text-sm lg:text-lg mt-10 lg:mt-20 lg:pr-20 font-normal">
                I have a variety of hobbies such as traveling, playing the
                guitar, and keeping an aquarium, and I enjoy life .
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
        <div className=" bg-stone-200  text-black">
          <div className="border-t border-black px-10 pt-10 lg:pt-20 pb-20 lg:pb-40">
            {" "}
            <Link href="/Contact">
              <div className="text-black font-bold flex cursor-pointer text-4xl lg:text-6xl group  hover:text-zinc-600 duration-500">
                Contact Me
                <div className=" lg:invisible lg:translate-x-20 lg:group-hover:translate-x-0 lg:group-hover:visible duration-500 ml-4">
                  →
                </div>
              </div>
            </Link>
            <div className="lg:w-1/3 text-sm lg:text-lg mt-10 lg:mt-20 lg:pr-20 font-normal">
              If you are interested in me and would like to offer me a job,
              please click on this title to get in touch with me.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutMe;
