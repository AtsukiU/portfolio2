import React, { useState } from "react";
import Layout from "../components/Layout";
import MyImage from "../public/000030.JPG";
import Image from "next/image";
import Link from "next/link";

import Fishing from "../public/IMG_0248.jpg";
import Guitar from "/public/IMG_0528.jpg";
import Okinawa from "/public/5857d74e-586d-45e2-bacc-bc710ee82c7d-0.jpg";
import Football from "/public/IMG_1128.JPG";
import Pc from "/public/IMG_2472.jpg";
import Wiskey from "/public/IMG_4261.jpg";
import Aquarium from "/public/IMG_5773.jpg";
import Cat from "/public/IMG_6278.jpg";
import Car from "/public/IMG_8069.jpg";
import Mouse from "/public/tenzmouse.jpg";
import Unaghi from "/public/unaghi.jpg";
import Yume from "/public/yume.jpg";

import Portfolio1Img from "../public/MyPortfolio.png";
import Portfolio2Img from "../public/screencapture-localhost-3001-2022-04-13-23_06_31.png";
import Portfolio3Img from "../public/screencapture-localhost-3001-2022-05-08-19_26_22.png";
import Portfolio4Img from "../public/screencapture-localhost-3001-2022-09-25-21_03_33.png";
import Portfolio5Img from "../public/hands-typing.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Mousewheel,
  FreeMode,
  Autoplay,
  EffectCards,
} from "swiper";
import "swiper/css/effect-coverflow";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import "swiper/css/effect-cards";

const AboutMe = () => {
  const PortfolioCards = [
    {
      title: "Portfolio1",
      src: Portfolio1Img,
      subTitle: "React",
      PortfolioDiscriptionURL: "/PortfolioDiscription",
    },
    {
      title: "Portfolio2",
      src: Portfolio5Img,
      subTitle: "React",
      PortfolioDiscriptionURL: "/PortfolioDiscription",
    },
    {
      title: "Portfolio3",
      src: Portfolio3Img,
      subTitle: "React",
      PortfolioDiscriptionURL: "/PortfolioDiscription",
    },
    {
      title: "Portfolio4",
      src: Portfolio4Img,
      subTitle: "React",
      PortfolioDiscriptionURL: "/PortfolioDiscription",
    },
  ];

  const FrontEndSkills = [
    {
      title: "HTML CSS",
      Discription: "HTML CSS Javascript React Next ",
    },
    { title: "JavaScript", Discription: "HTML CSS Javascript" },
    { title: "React", Discription: "HTML CSS Javascript" },
    { title: "Next.js", Discription: "HTML CSS Javascript" },
    { title: "ChakraUI", Discription: "HTML CSS Javascript React Next" },
    { title: "TailwindCSS", Discription: "HTML CSS Javascript" },
    { title: "GSAP", Discription: "HTML CSS Javascript" },
    { title: "Next.js", Discription: "HTML CSS Javascript" },
  ];

  const BackEndSkills = [
    {
      title: "GraphQL",
      Discription: "",
    },
    { title: "Node.js", Discription: "" },
    { title: "Firebase", Discription: "" },
  ];

  const OtherSkills = [
    {
      title: "TOEIC L&R 850",
      Discription: "L&R 850",
    },
  ];

  const MyFavorites = [
    { title: "Trip", discription: "旅行が好きです。", src: Okinawa },
    { title: "Car", discription: "愛車のCX-5です。", src: Car },
    { title: "Fishing", discription: "釣りが好きで海・川・湖行きます。", src: Fishing },
    { title: "Football", discription: "サッカーが好きで、メッシとクリロナを生で見たのが自慢です。", src: Football },
    { title: "Wiskey", discription: "酒屋巡りして掘り出し物を探しています。", src: Wiskey },
    { title: "Unagi", discription: "大好物はうなぎです", src: Unaghi },
    { title: "Aquarium", discription: "", src: Aquarium },
    { title: "Guitar", discription: "学生時代からギター弾いてます", src: Guitar },
    { title: "PC", discription: "興味本位でパソコンを組んでみました", src: Pc },
    { title: "Book", discription: "本を読むのも好きです。最近はAudible", src: Yume },
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
        <div className="min-h-screen  min-w-full  bg-black ">
          <div className=" flex flex-col items-center">
            <div className="w-full h-[90vh] flex  items-center text-white ">
              <div className="w-10/12 lg:w-7/12 mx-auto lg:mx-20 items-center flex  flex-col">
                <div className="flex mt-10 uppercase  justify-center font-light text-4xl sm:text-6xl lg:text-8xl  ">
                  I&apos;m AUZ. Welcome to my website.
                </div>
                <div className="flex justify-center text-white text-xs sm:text-sm lg:text-base mt-6 mb-6">
                  AUZです。ポートフォリオサイトをご覧いただきありがとうございます。新しい技術やデザインを学ぶのが好きで、これからも新しいものを作り続けていきたいと思っています。
                </div>
              </div>
            </div>

            <div
              style={{ backgroundImage: "url(000030.JPG)" }}
              className=" w-full  min-h-[80vh] grid  lg:grid-cols-2 lg:mb-28  bg-fixed bg-no-repeat"
            >
              <div className="h-full flex flex-col px-10 lg:px-20 py-20 lg:py-48  justify-center text-xs lg:text-sm  text-zinc-300 font-light  backdrop-brightness-50">
                <div className="pb-4 sm:pb-12  text-white font-normal text-4xl sm:text-5xl lg:text-5xl ">
                  AUZ
                </div>

                <div className="grid  grid-cols-1  relative">
                  <div className="text-zinc-400">2022</div>
                  <div className="">
                    プログラミングやデザインの魅力に惹かれ独学で制作。
                  </div>{" "}
                </div>
                <div className="grid  grid-cols-1 ">
                  <div className="text-zinc-400 ">2020-</div>
                  <div className="">
                    新卒入社した会社でカウンターセールスを学ぶ。
                  </div>{" "}
                </div>
                <div className="grid  grid-cols-1 ">
                  <div className="text-zinc-400">2020-2016</div>
                  <div className="">
                    大学の経済学部経済学科を卒業。大学時代は語学の習得に挑戦。TOEIC850を取得。
                  </div>{" "}
                </div>

                <div className="grid  grid-cols-1 ">
                  <div className="text-zinc-400 ">1998</div>
                  <div className="">山梨で生まれる。</div>{" "}
                </div>
              </div>
              <div className="w-full h-full backdrop-brightness-50 flex justify-center items-center ">
                <div></div>
              </div>
            </div>

            {/* <div className="text-white -mt-4"></div> */}
          </div>
          <div className="w-full h-full  justify-center py-20 px-2 mx-auto flex flex-col bg-zinc-200 text-black rounded-2xl">
            <div className="flex justify-center items-center text-4xl sm:text-6xl ">
              Portfolio
            </div>
            <div className="mx-auto text-sm lg:text-lg mt-4 px-4 py-2 rounded-full border cursor-pointer text-black hover:text-white border-gray-400 hover:bg-zinc-700  duration-500">
              <Link href="/Portfolio">
                <div>⇨ View Portfolio</div>
              </Link>
            </div>
            <div className=" min-h-[70vh]flex items-center  ">
              <Swiper
                slidesPerGroup={1}
                slidesPerView={1.5}
                draggable={true}
                grabCursor={true}
                pagination={false}
                loop={false}
                spaceBetween={20}
                freeMode={false}
                speed={200}
                modules={[
                  Navigation,
                  Pagination,
                  Mousewheel,
                  Scrollbar,
                  FreeMode,
                  Autoplay,
                ]}
              >
                {PortfolioCards.map((PortfolioCard, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="min-h-[50vh]   mx-auto relative mt-10 lg:mt-12 ">
                        <div>
                          <Image
                            className=" filter   "
                            objectFit="cover"
                            layout="fill"
                            src={PortfolioCard.src}
                            alt="PortfolioCards"
                            mousewheel={true}
                          />
                        </div>
                        <div className="absolute bottom flex items-end p-2  w-full h-full text-2xl lg:text-4xl  font-semibold backdrop-brightness-90  duration-500 text-white ">
                          {PortfolioCard.title}
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>

          <div className="min-h-[80vh] lg:min-h-screen  w-12/12 border-b border-zinc-500 lg:mx-10 bg-black px-8  lg:px-20 pt-16 lg:pt-28 mb-10  text-white ">
            <div className=" lg:pb-28 pb-12 flex items-center justify-center  font-normal text-4xl sm:text-6xl">
              Skills
            </div>
            <div className=" lg:pb-20  pb-10 sm:gap-10  text-lg lg:text-2xl font-light flex flex-col lg:mx-auto sm:flex-row ">
              <div
                onClick={OnClickFrontEnd}
                className={classNames(
                  activeFrontEnd
                    ? "text-white cursor-pointer border rounded-full py-1 px-6 my-1 hover:bg-zinc-800 duration-300 "
                    : "text-zinc-700 cursor-pointer border rounded-full py-1 px-6 my-1 border-zinc-700 hover:border-zinc-500 hover:text-zinc-500 hover:bg-zinc-800 duration-300"
                )}
              >
                FRONTEND{" "}
              </div>
              <div
                onClick={OnClickBackend}
                className={classNames(
                  activeBackEnd
                    ? "text-white cursor-pointer border rounded-full py-1 px-6 my-1 hover:bg-zinc-800 duration-300"
                    : "text-zinc-700 cursor-pointer border rounded-full py-1 px-6 my-1 border-zinc-700 hover:border-zinc-500 hover:text-zinc-500 hover:bg-zinc-800 duration-300"
                )}
              >
                BACKEND
              </div>{" "}
              <div
                onClick={OnClickOthers}
                className={classNames(
                  activeOthers
                    ? "text-white cursor-pointer border rounded-full py-1 px-6 my-1 hover:bg-zinc-800 duration-300"
                    : "text-zinc-700 cursor-pointer border rounded-full py-1 px-6 my-1 border-zinc-700 hover:border-zinc-500 hover:text-zinc-500 hover:bg-zinc-800 duration-300"
                )}
              >
                OTHERS
              </div>
            </div>

            <div className="grid grid-col-1 pb-28">
              {activeFrontEnd ? (
                <div className="w-full h-full mx-auto   grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-5 lg:gap-16 ">
                  {FrontEndSkills.map((skill, index) => {
                    return (
                      <div className="    flex flex-col  " key={index}>
                        <div className="text-sm lg:text-2xl  font-light">
                          {skill.title}
                        </div>
                        <div className="mt-2 text-gray-400 text-xs lg:text-sm font-light tracking-tight hidden lg:flex">
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
                <div className="w-full h-full mx-auto  grid grid-cols-2 lg:grid-cols-3  gap-2 sm:gap-5 lg:gap-10 ">
                  {BackEndSkills.map((skill, index) => {
                    return (
                      <div className="   flex flex-col " key={index}>
                        <div className="text-sm lg:text-2xl font-light">
                          {skill.title}
                        </div>
                        <div className="mt-2 text-gray-400 text-xs lg:text-xs font-light tracking-tight hidden lg:flex">
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
                <div className="w-full h-full mx-auto  grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-5 lg:gap-10 ">
                  {OtherSkills.map((skill, index) => {
                    return (
                      <div className="flex flex-col " key={index}>
                        <div className="text-sm lg:text-2xl  font-light">
                          {skill.title}
                        </div>
                        <div className="mt-2 text-gray-400 text-xs lg:text-xs font-light tracking-tight hidden lg:flex">
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

        <div className="bg-black min-w-full min-h-screen py-20 ">
          {" "}
          <div className="w-10/12 mx-auto min-h-screen justify-center   flex flex-col ">
            <div className="w-full mb-4 px-8 font-normal text-4xl sm:text-6xl lg:text-6xl  text-white ">
              <div>FAVORITE</div>
              <div className="text-sm mt-2 lg:text-2xl lg:ml-1 uppercase">
                travel football fishing car aquarium cat game guiter pc books
                wiskey eel and more...
              </div>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-3 px-1 lg:px-10 sm:gap-3">
              {MyFavorites.map((MyFavorite, index) => {
                return (
                  <div
                    className="h-[25vh] sm:hover:h-[50vh] duration-700 relative group flex justify-center"
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
                    <div className="absolute bottom-2 sm:bottom-4 left-0 px-2 sm:px-4 sm:-translate-y-10 sm:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-400 duration-1000">
                      <div className=" sm:text-2xl font-normal ">
                        {MyFavorite.title}
                      </div>
                      <div className="text-sm font-light text-zinc-300 pt-2 hidden sm:flex">
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
