import React, { useState, useEffect, useRef } from "react";
import Layout from "../components/Layout";

import AiFillMail from "react-icons/ai";
import { FaGithub, FaTwitter, FaMailBulk } from "react-icons/fa";

import MyImage from "../public/000030.JPG";
import Image from "next/image";
import Link from "next/link";

import Portfolio1Img from "../public/Portfolio1.png";
import Portfolio2Img from "../public/PortFolio.png";
import PostItMemo from "../public/PostItMemo.png";
import EC from "../public/FireShot Capture 010 - HP by Nextjs - ec-demo-tau.vercel.app.png";

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
      title: "Portfolio 1",
      src: Portfolio1Img,
      subTitle: "React / ChakraUI / EmailJS ",
      PortfolioDiscriptionURL: "https://portfolio-beta-murex-17.vercel.app/",
      PortfolioDiscription:
        "自身初のポートフォリオサイト。コンセプトはモダンなUIUXです。ダークモードとライトモードの切り替えを実装。直接コンタクトが取れるコンタクトフォームを導入しました。スライダーも導入し、どういったスキルを持っているかなどを視覚的に分かりやすくしています。",
      PortfolioDiscription2:
        "Reactを使用。ダークモードの導入や簡単なアニメーションの導入、現代的なUIUXデザインでのポートフォリオサイトの作成を考えていたため、CSSフレームワークはChakraUIが最適であると考え採用しました。",
    },
    {
      title: "Post It Memo",
      src: PostItMemo,
      subTitle: "React / Firebase / styled-components / FramerMotion",
      PortfolioDiscriptionURL: "https://react-post-it.vercel.app/",
      PortfolioDiscription:
        "付箋型のメモアプリ。簡単に使うことが出来るシンプルなアプリを目指し制作。データの入力、読み込み、削除が出来ます。",
      PortfolioDiscription2:
        "Reactを使用。CSSフレームワークはstyled-componentsを使用。データの保持にはFirebaseを使用しています。FramerMotionを使用し、メモ作成時のアニメーションを導入しています。",
    },
    {
      title: "(EC Demo) ",
      src: EC,
      subTitle: "React / Firebase / styled-components / FramerMotion",
      PortfolioDiscriptionURL: "https://ec-demo-tau.vercel.app/",
      PortfolioDiscription:
        "付箋型のメモアプリ。簡単に使うことが出来るシンプルなアプリを目指し制作。データの入力、読み込み、削除が出来ます。",
      PortfolioDiscription2:
        "Reactを使用。CSSフレームワークはstyled-componentsを使用。データの保持にはFirebaseを使用しています。FramerMotionを使用し、メモ作成時のアニメーションを導入しています。",
    },

    {
      title: "Portfolio 2",
      src: Portfolio2Img,
      subTitle: "Next.js / TailwindCSS / ReactSwiper / EmailJS / FramerMotion",
      PortfolioDiscriptionURL: "https://portfolio2-three-gamma.vercel.app/",
      PortfolioDiscription:
        "このサイトです。より自由度が高く、自分が好きだと思えるサイトを目指し制作。",
      PortfolioDiscription2:
        " Next.js、TailwindCSSを使い制作開始。Next.jsはReactに比べルーティングやSSRの点で優位性があると考え採用。デザイン性を高めたかったのでChakraUIより自由度の高いTailwindCSSを導入。",
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
          <div className="w-full min-h-[100vh] lg:mb-10 lg:pb-10 px-10 flex  items-center text-black ">
            <div className="w-full  flex  flex-col items">
              <div
                id="Title"
                className="lg:w-8/12 lg:mt-10  break-all text-black font-bold text-4xl sm:text-5xl lg:text-7xl  "
              >
                <a>Welcome to my personal website. </a>
                <nobr className="text-black ">I&apos;m AUZ</nobr>
                <a className="">. Web developer and web designer.</a>
                <div className="text-base mt-20 flex flex-col">
                  <div>Man</div>
                  <div>Japan</div>
                  <div>Web developer</div>
                </div>
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

          <div className=" w-full min-h-[100vh] lg:pb-20 pb-20 border-black bg-black text-stone-200 px-10 cursor-pointer">
            {" "}
            <div className="mt-10 text-4xl lg:text-6xl"></div>
            <div className="flex flex-col  border-stone-200 col-span-2 ">
              <div className="lg:w-2/3 lg:mt-20 mt-20 mb-10  font-bold text-4xl sm:text-6xl lg:text-6xl  ">
                I love technology and design.<br></br>Please take a look at my
                portfolio site.
              </div>

              <div className="flex flex-col lg:flex-col pb-10 lg:pt-10 lg:pb-20 text-stone-200">
                <div className="lg:w-1/3  lg:my-2 lg:pr-0 flex flex-col text-sm  lg:text-base  bg-black text-stone-200 ">
                  <div className="flex ">React / Next.js</div>
                  <div className="flex  mt-1">
                    ChakraUI / TailwindCSS / styled-components
                  </div>
                  <div className="flex  mt-1">FramerMotion / GSAP </div>
                  <div className="flex  mt-1">Firebase / GraphQL / Node.js</div>
                  <div className="flex mt-1">Git /</div>
                </div>
                <div className="lg:w-full mt-10 lg:mt-20 lg:ml-0 text-2xl lg:text-4xl border-stone-200 border-t">
                  {PortfolioCards.map((Card, index) => {
                    return (
                      <Link href={Card.PortfolioDiscriptionURL} key="index">
                        <div
                          className="px-4 py-2 lg:py-2   font-bold hover:bg-stone-200 hover:border-stone-200 border-b hover:text-black border-stone-200 text-stone-200 duration-700"
                          key="index"
                        >
                          {Card.title}
                        </div>
                      </Link>
                    );
                  })}
                  <Link href="/Portfolio">
                    <div className="px-4 py-2 lg:py-4 flex justify-end  font-bold hover:bg-stone-200 hover:border-stone-200 hover:text-black border-stone-200 text-stone-200 duration-700">
                      → View all projects
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className="pt-20 pb-20 px-10 w-full border-t min-h-[100vh] bg-yellowbg border-black text-black tracking-wide grid lg:grid-cols-3"
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
                          <div className="w-full my-10 lg:my-20 opacity-10">
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
                          <div className="w-full my-10 lg:my-20 opacity-5">
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
                          <div className="w-full my-10 lg:my-20 opacity-5">
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

        <div className=" bg-bluebg  text-white">
          <div className="border-t border-white px-10 pt-20 lg:pt-40 pb-20 lg:pb-40">
            <div className=" flex items-center font-bold lg:uppercase justify-start lg:justify-center text-4xl lg:text-8xl">
              Contact me
            </div>

            <div className="flex flex-col items-center lg:justify-center mt-10 lg:mt-10 ">
              <div className="lg:w-1/3 text-sm lg:text-lg font-normal">
                If you are interested in me and would like to offer me a job,
                please click on this title to get in touch with me.
              </div>
              <div className="mt-20 text-2xl uppercase mr-auto lg:mr-0 grid gap-6 lg:gap-10 lg:grid-cols-3 grid-cols-2">
                <div className="lg:h-48 h-32 lg:w-48 w-32 flex justify-center items-center text-bluebg bg-white rounded-full hover:scale-110 duration-300">
                  <a href="https://github.com/AtsukiU">
                    <FaGithub className="" size={80} />
                  </a>
                </div>
                <div className="lg:h-48 h-32 lg:w-48 w-32 flex justify-center items-center text-bluebg bg-white rounded-full hover:scale-110 duration-300">
                  {" "}
                  <a href="https://twitter.com/itwebzozo">
                    <FaTwitter className="" size={80} />
                  </a>
                </div>{" "}
                <div className=" lg:h-48 h-32 lg:w-48 w-32 flex justify-center items-center text-bluebg bg-white rounded-full hover:scale-110 duration-300">
                  <Link href="/Contact">
                    <FaMailBulk className="" size={80} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutMe;
