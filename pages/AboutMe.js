import React, { useState } from "react";
import Layout from "../components/Layout";
import MyImage from "../public/000030.JPG";
import Image from "next/image";
import Link from "next/link";

import { MdTransitEnterexit } from "react-icons/md";

import Fishing from "../public/IMG_0248.jpg";
import Guitar from "/public/IMG_0528.jpg";
import Trip from "/public/000009.JPG";
import Football from "/public/IMG_1128.JPG";
import Pc from "/public/IMG_2472.jpg";
import Wiskey from "/public/IMG_4261.jpg";
import Aquarium from "/public/IMG_5773.jpg";
import Cat from "/public/cat.jpg";
import Car from "/public/IMG_8069.jpg";
import Mouse from "/public/tenzmouse.jpg";
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
    },
    {
      title: "PostItMemo",
      src: PostItMemo,
      subTitle: "React",
      PortfolioDiscriptionURL: "/PortfolioDiscription",
    },
    {
      title: "Portfolio2",
      src: Portfolio2Img,
      subTitle: "React",
      PortfolioDiscriptionURL: "/PortfolioDiscription",
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
    { title: "Unagi", discription: "大好物はうなぎです", src: Unaghi },
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
        <div className="min-h-screen  min-w-full  bg-black ">
          <div className="w-full flex flex-col items-center">
            <div className="w-full h-[100vh] flex  items-center text-white ">
              <div className="w-full px-4 lg:px-20  items-center flex  flex-col">
                <div className="lg:w-7/12  lg:mr-auto  flex mt-10 uppercase  text-4xl sm:text-6xl lg:text-8xl  ">
                  I&apos;m AUZ.<br></br> Welcome to my website.
                </div>
                <div className="my-20 sm:flex w-full lg:w-1/2 mr-auto text-zinc-400 text-sm">
                  AUZです。ポートフォリオサイトをご覧いただきありがとうございます。
                </div>
              </div>
            </div>

            <div
              style={{ backgroundImage: "url(000030.JPG)" }}
              className=" w-full lg:mb-28  bg-fixed bg-no-repeat"
            >
              <div className="h-full flex flex-col px-4 lg:px-20  text-zinc-300 font-light  backdrop-brightness-50">
                <div className="py-20 ">
                  <div className="text-4xl">AUZ</div>{" "}
                  <div className="text-sm mt-20">Age24 / Web Developer </div>
                </div>
                <div className="text-xs pb-20">
                  <div className="pb-5">
                    <div className="text-zinc-400 ">2022</div>
                    <div className="lg:ml-3">
                      プログラミングやデザインの魅力に惹かれ独学で制作を開始。
                    </div>{" "}
                  </div>
                  <div className="pb-5">
                    <div className="text-zinc-400 ">2020-</div>
                    <div className="lg:ml-3">
                      新卒入社した会社でカウンターセールスを学ぶ。
                    </div>{" "}
                  </div>
                  <div className="pb-5">
                    <div className="text-zinc-400">2020-2016</div>
                    <div className="lg:ml-3">
                      経済学部経済学科を卒業。TOEIC850を取得。
                    </div>{" "}
                  </div>

                  <div className="pb-5">
                    <div className="text-zinc-400">1998</div>
                    <div className="lg:ml-3">山梨で生まれる。</div>{" "}
                  </div>
                </div>
              </div>
              <div className="  h-full flex flex-col gap-2 lg:gap-2 px-6 lg:px-20 backdrop-brightness-50"></div>
            </div>

            {/* <div className="text-white -mt-4"></div> */}
          </div>
          <div className="w-full h-full px-0 lg:px-20 ml-0 lg:ml-20 bg-white text-black rounded-b-2xl lg:rounded-2xl">
            {" "}
            <div className="px-4 lg:px-10 py-20 text-4xl">Portfolio</div>
            <div className="px-4 lg:px-10 pb-10">
              <div className="text-sm">React / Next.js</div>
              <div className="text-sm">ChakraUI / TailwindCSS</div>
              <div className="text-sm">Firebase / GraphQL / Node.js</div>
              <div className="text-sm">git</div>
              <div className="py-20 flex ">
                <Link href="/Portfolio">
                  <div className="text-sm border-b border-zinc-400  cursor-pointer duration-500 hover:-translate-y-1">
                    VIEW PORTFOLIO
                  </div>
                </Link>
              </div>
            </div>
            <div className=" lg:pl-10 pb-20 ">
              <Swiper
                module={[Autoplay, EffectFade, Pagination]}
                spaceBetween={4}
                speed={1000}
                pagenation={true}
                loop={true}
                effect="fade"
                slidesPerView={1.1}
                breakpoints={{
                  1024: {
                    slidesPerView: 2.2,
                    spaceBetween: 10,
                  },
                }}
              >
                {PortfolioCards.map((PortfolioCard, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <Link href="/Portfolio">
                        <div className="min-h-[50vh]  mx-auto relative ">
                          <div>
                            <Image
                              className=" filter brightness-100 "
                              objectFit="cover"
                              layout="fill"
                              src={PortfolioCard.src}
                              alt="PortfolioCards"
                              mousewheel={true}
                            />
                          </div>
                          <div className=" p-4 lg:p-3  w-full h-full text-sm   absolute bottom flex items-end  backdrop-brightness-90  duration-500 text-white">
                            {PortfolioCard.title}
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>

          <div
            className=" w-full bg-black px-4 lg:px-20 text-white "
            id="Skills"
          >
            <div className="text-4xl pt-20 ">Skills</div>

            <div className="py-20 gap-2 text-sm flex items-center">
              <Swiper
                modules={[FreeMode]}
                slidesPerView="1.9"
                freeMode={false}
                loop="true"
                draggable="true"
                centeredSlides={true}
                spaceBetween={16}
              >
                <SwiperSlide>
                  <div
                    onClick={OnClickFrontEnd}
                    isActive={OnClickFrontEnd}
                    className={classNames(
                      activeFrontEnd
                        ? " px-3 py-2  text-white flex justify-center cursor-pointer border rounded-full hover:bg-zinc-800 duration-300 "
                        : "  px-3 py-2  text-zinc-700 flex justify-center cursor-pointer border rounded-full border-zinc-700 hover:border-zinc-500 hover:text-zinc-500 hover:bg-zinc-800 duration-300"
                    )}
                  >
                    FRONTEND{" "}
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    onClick={OnClickBackend}
                    isActive={OnClickFrontEnd}
                    className={classNames(
                      activeBackEnd
                        ? "px-3 py-2  text-white flex justify-center cursor-pointer border rounded-full hover:bg-zinc-800 duration-300 "
                        : " px-3 py-2  text-zinc-700 flex justify-center cursor-pointer border rounded-full border-zinc-700 hover:border-zinc-500 hover:text-zinc-500 hover:bg-zinc-800 duration-300"
                    )}
                  >
                    BACKEND
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    onClick={OnClickOthers}
                    isActive={OnClickFrontEnd}
                    className={classNames(
                      activeOthers
                        ? " px-3 py-2  text-white flex justify-center cursor-pointer border rounded-full hover:bg-zinc-800 duration-300 "
                        : " px-3 py-2  text-zinc-700 flex justify-center cursor-pointer border rounded-full border-zinc-700 hover:border-zinc-500 hover:text-zinc-500 hover:bg-zinc-800 duration-300"
                    )}
                  >
                    OTHRES
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="grid grid-col-1 pb-20">
              {activeFrontEnd ? (
                <div className="w-full h-full mx-auto   grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-10">
                  {FrontEndSkills.map((skill, index) => {
                    return (
                      <div
                        className=" pb-2  flex flex-col border-b border-zinc-400"
                        key={index}
                      >
                        <div className="text-sm font-light">{skill.title}</div>
                        <div className="mt-2  text-gray-400 text-xs lg:text-xs font-light  hidden lg:flex">
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
                <div className="w-full h-full mx-auto  grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-10">
                  {BackEndSkills.map((skill, index) => {
                    return (
                      <div
                        className="   flex flex-col border-b border-zinc-400 pb-2 lg:pb-4"
                        key={index}
                      >
                        <div className="text-sm lg:text-base font-light">
                          {skill.title}
                        </div>
                        <div className="mt-2 text-gray-400 text-xs lg:text-xs font-light  hidden lg:flex">
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
                <div className="w-full h-full mx-auto  grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-10">
                  {OtherSkills.map((skill, index) => {
                    return (
                      <div
                        className="flex flex-col border-b border-zinc-400 pb-2 lg:pb-4"
                        key={index}
                      >
                        <div className="text-sm lg:text-base  font-light">
                          {skill.title}
                        </div>
                        <div className="mt-2 text-zinc-400 text-xs lg:text-xs font-light  hidden lg:flex">
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

        <div className="py-20 bg-black min-w-full  min-h-screen px-4 lg:px-20">
          {" "}
          <div className="w-full  mx-auto min-h-screen justify-center  flex flex-col ">
            <div className="w-full">
              <div className="text-4xl pb-20">Favorite</div>
              <div className="">
                travel football fishing car aquarium cat game guiter pc books
                wiskey eel and more...
              </div>
            </div>

            <div className="pt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 sm:gap-1 gap-1">
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
