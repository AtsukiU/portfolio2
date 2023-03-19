import React, { useState, useEffect, useRef } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";

import AiFillMail from "react-icons/ai";
import { FaGithub, FaTwitter, FaMailBulk } from "react-icons/fa";

import MyImage from "../public/000030.JPG";
import Image from "next/image";
import Link from "next/link";

import Portfolio1Img from "../public/Portfolio1.png";
import Portfolio2Img from "../public/PortFolio.png";
import PostItMemo from "../public/PostItMemo.png";
import EC from "../public/FireShot Capture 010 - HP by Nextjs - ec-demo-tau.vercel.app.png";

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

  const headers = [

    { list: "AboutMe", url: "/AboutMe" },
    { list: "Portfolio", url: "/Portfolio" },
    { list: "Skill", url: "/Skill" },

  ];

  return (
    <Layout>
      <div>
        <div className="min-h-screen  min-w-full  bg-white">
          <div className="w-full min-h-[calc(100vh-136px)] mt-28 lg:mb-10 lg:pb-10 px-10 flex  items-center text-black ">
            <div className="w-full  flex  flex-col items">
              <div
                id="Title"
                className="lg:w-8/12 lg:mt-10   text-black font-bold text-4xl sm:text-5xl lg:text-7xl  "
              >
                <a>Welcome to my personal website. </a>
                <nobr className="text-black ">I&apos;m AUZ</nobr>
                <a className="hidden">. Web developer and web designer.</a>
                <div className="text-lg lg:text-base mt-20 flex flex-col">
                  <ul className="w-full h-14 grid lg:grid-cols-4 lg:border-l  border-black">
                    {" "}
                    {headers.map((header, index) => {
                      return (
                        <li
                          className="flex items-center lg:justify-center  lg:border-r border-black hover:bg-black hover:text-white duration-700"
                          key={index}
                        >
                          <Link href={header.url}>{header.list}</Link>
                        </li>
                      );
                    })}
                  </ul>
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
          <div></div>

          <div className=" bg-bluebg  text-white min-h-[calc(100vh-136px)] flex items-center justify-center">
            <div className="px-10 ">
              <div className=" flex items-center font-bold lg:uppercase justify-start lg:justify-center text-4xl lg:text-8xl">
                Let&apos;s talk
              </div>

              <div className="flex flex-col items-center lg:justify-center mt-10 lg:mt-14 ">
                <div className="lg:w-1/3 text-sm lg:text-lg font-normal">
                  If you are interested in me and would like to offer me a job,
                  please click on this title to get in touch with me.
                </div>
                <div className="mt-14 text-2xl uppercase mr-auto lg:mr-0 grid gap-6 lg:gap-10 lg:grid-cols-3 grid-cols-2">
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
      </div>
    </Layout>
  );
};

export default AboutMe;
