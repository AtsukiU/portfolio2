import React, { useState } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import Portfolio1Img from "../public/Portfolio1.png";
import Portfolio2Img from "../public/ AUZ's Portfolio.png";
import EC from "../public/FireShot Capture 010 - HP by Nextjs - ec-demo-tau.vercel.app.png"
import PostItMemo from "../public/PostItMemo.png";

import Link from "next/link";
import PortfolioDiscription from "./PortfolioDiscription";
import { MdTransitEnterexit } from "react-icons/md";

export default function Portfolio() {
  const [hoverBackgroundImage, setHoverBackgroundImage] =
    useState(Portfolio1Img);

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
    },{
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

  return (
    <Layout>
      <div className="bg-white lg:mt-28 w-full min-[calc(100vh-136px)]  text-black">
        <div className="flex lg:flex-row flex-col">
          <div className="lg:w-2/5 mt-16 px-2 lg:px-0  lg:mt-0 lg:froat-left lg:overflow-auto  lg:h-[calc(100vh-136px)]  lg:border-r border-black ">
            {PortfolioCards.map((Cards, index) => {
              return (
                <Link key="index" href={Cards.PortfolioDiscriptionURL}>
                  <div
                    onMouseEnter={() => {
                      console.log("changeimage");
                      setHoverBackgroundImage(Cards.src);
                    }}
                    className=" flex flex-col group lg:border-b border-black cursor-pointer"
                  >
                    <div className="relative flex lg:hidden group min-h-[40vh] lg:min-h-[50vh]  w-ful brightness-95 lg:brightness-100">
                      <Image
                        alt="card"
                        src={Cards.src}
                        objectFit={"cover"}
                        layout={"fill"}
                        className="rounded-2xl"
                      />
          
                    </div>
                    <div className="mb-10 lg:mb-0">
                      <div className="hover:bg-black  hover:text-stone-200 duration-700 px-2 lg:px-4 pt-2 lg:pt-10 pb-4 lg:pb-0 text-2xl  border-black lg:text-4xl uppercase w-full flex justify-between  items-center">
                        <div>{Cards.title}</div>
                        <div className="text-base font-normal mt-auto">
                          {index + 1}/{PortfolioCards.length}
                        </div>
                      </div>
                      <div className="hidden">
                        <div className="lg:group-hover:mb-10 lg:mb-10 mb-10 mt-10 lg:mt-10 lg:hidden flex text-black text-sm lg:text-base">
                          {Cards.subTitle}
                        </div>
                        <div className="group-hover:h-full lg:w-full tracking-widest lg:tracking-normal lg:hidden pb-5 lg:px-0 lg:pr-10   group-hover:flex text-sm lg:text-base  duration-500 mb-2">
                          {Cards.PortfolioDiscription}
                        </div>
                        <div className="group-hover:h-full lg:w-full tracking-widest lg:tracking-normal   lg:px-0 pb-20 lg:pr-10 lg:hidden group-hover:flex text-sm lg:text-base  duration-500 mb-10">
                          {Cards.PortfolioDiscription2}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="lg:w-3/5 lg:float-right lg:h-9/12  border-black">
            <div className="relative h-full w-full brightness-100">
              <Image
                alt="card"
                src={hoverBackgroundImage}
                objectFit={"cover"}
                layout={"fill"}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
