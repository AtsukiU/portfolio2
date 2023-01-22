import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import Portfolio1Img from "../public/Portfolio1.png";
import Portfolio2Img from "../public/PortFolio.png";
import PostItMemo from "../public/PostItMemo.png";

import Link from "next/link";
import PortfolioDiscription from "./PortfolioDiscription";
import { MdTransitEnterexit } from "react-icons/md";

export default function Portfolio() {
  const PortfolioCards = [
    {
      title: "Portfolio",
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
      title: "Portfolio2",
      src: Portfolio2Img,
      subTitle: "Next.js / TailwindCSS / ReactSlick / EmailJS / GSAP",
      PortfolioDiscriptionURL: "https://portfolio2-three-gamma.vercel.app/",
      PortfolioDiscription:
        "2つ目のポートフォリオサイト。より自由度が高く、自分が好きだと思えるサイトを目指し制作。",
      PortfolioDiscription2:
        " Next.js、TailwindCSSを使い制作開始。Next.jsはReactに比べルーティングやSSRの点で優位性があると考え採用。デザイン性を高めたかったのでChakraUIより自由度の高いTailwindCSSを導入。",
    },
  ];

  return (
    <Layout>
      <div className="bg-white text-black">
        <div className=" w-full mx-auto h-full pt-10  lg:pb-40 grid grid-cols-1">
          {PortfolioCards.map((PortfolioCard, index) => {
            return (
              <div
                key={index}
                className=" grid grid-cols-1 lg:grid-cols-1 my-20 lg:my-20 "
              >
                <div className="px-4 lg:px-20 flex  items-cneter justify-between ">
                  <div className=" flex lg:flex-row flex-col pt-0 lg:pt-20 mb-20  w-full">
                    <div className=" text-4xl lg:text-8xl  uppercase text-black tracking-wide">
                      {PortfolioCard.title}
                    </div>{" "}
                    <div className="flex  items-end ">
                      <div className="text-xs lg:text-2xl lg:ml-10   flex text-zinc-800">
                        {index + 1}/{PortfolioCards.length}
                      </div>
                      <div className=" text-xs lg:text-sm lg:ml-10 text-zinc-800">
                        {PortfolioCard.subTitle}
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" lg:ml-0 lg:min-h-[80vh] flex  filter relative">
                  <a href={PortfolioCard.PortfolioDiscriptionURL}>
                    <Image
                      className=" filter brightness-95  duration-1000 cursol-pointer"
                      objectFit="cover"
                      layout="fill"
                      src={PortfolioCard.src}
                      alt="PortfolioCards"
                    />
                  </a>
                </div>

                <div className=" min-h-[100vh] lg:min-h-[50vh]  w-full">
                  <div className="h-[50vh]  flex mb-5 lg:mb-0 filter relative lg:hidden">
                    <Image
                      className=" filter brightness-90  duration-1000 "
                      objectFit="cover"
                      layout="fill"
                      src={PortfolioCard.src}
                      alt="PortfolioCards"
                    />
                  </div>
                  <div className="px-4 lg:px-10 flex flex-col tracking-widest ">
                    <div className="pt-10 lg:pt-20 lg:px-20 py-5 flex flex-col  text-xs lg:text-sm  text-black ">
                      <div className="grid grid-cols-1 gap-10 lg:gap-20 lg:grid-cols-2">
                        <div className="text-xs lg:text-base"> </div>

                        <div className=" flex flex-col text-xs lg:text-base  text-black">
                          <div>
                            {" "}
                            <div className="mb-5 lg:mb-20 text-lg lg:text-2xl ">
                              About the project
                            </div>{" "}
                            <div>{PortfolioCard.PortfolioDiscription}</div>
                          </div>
                          <div>
                            <div className="mb-5 lg:mb-10  text-lg lg:text-2xl "></div>{" "}
                            <div> {PortfolioCard.PortfolioDiscription2}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <a
                      href={PortfolioCard.PortfolioDiscriptionURL}
                      className="inline-block"
                    ></a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
