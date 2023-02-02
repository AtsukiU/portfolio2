import React, { useState } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import Portfolio1Img from "../public/Portfolio1.png";
import Portfolio2Img from "../public/PortFolio.png";
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
    },

    {
      title: "Portfolio 2",
      src: Portfolio2Img,
      subTitle: "Next.js / TailwindCSS / ReactSwiper / EmailJS / FramerMotion",
      PortfolioDiscriptionURL: "https://portfolio2-three-gamma.vercel.app/",
      PortfolioDiscription:
        "2つ目のポートフォリオサイト。より自由度が高く、自分が好きだと思えるサイトを目指し制作。",
      PortfolioDiscription2:
        " Next.js、TailwindCSSを使い制作開始。Next.jsはReactに比べルーティングやSSRの点で優位性があると考え採用。デザイン性を高めたかったのでChakraUIより自由度の高いTailwindCSSを導入。",
    },
  ];

  return (
    <Layout>
      <div className="bg-zinc-100 w-full min-h-screen  text-black">
        <div className="pt-20 text-4xl lg:text-6xl px-4 lg:px-8 flex uppercase">
          Portfolio
        </div>
        <div className="pt-4 pb-4 flex lg:flex-row flex-col">
          <div className="lg:w-1/2 lg:min-h-[90vh] border-t lg:border-t lg:border-b hover:border-b-0 lg:border-r border-black ">
            {PortfolioCards.map((Cards, index) => {
              return (
                <Link key="index" href={Cards.PortfolioDiscriptionURL}>
                  <div
                    onMouseEnter={() => {
                      console.log("changeimage");
                      setHoverBackgroundImage(Cards.src);
                    }}
                    className="lg:px-8 px-4 flex flex-col group border-b border-black cursor-pointer"
                  >
                    <div className="relative flex lg:hidden min-h-[50vh] mt-5 lg:mt-0 w-full">
                      <Image
                        alt="card"
                        src={Cards.src}
                        objectFit={"cover"}
                        layout={"fill"}
                      />
                    </div>
                    <div className="px-4">
                      <div className="lg:h-28 h-12 mt-10 lg:mt-0  text-3xl lg:text-5xl w-full flex items-center">
                        {Cards.title}
                      </div>
                      <div className="lg:group-hover:mb-20 mb-10 text-zinc-400 text-xs lg:text-sm">
                        {Cards.subTitle}
                      </div>
                      <div className="group-hover:h-full  lg:px-0 lg:pr-10  lg:hidden group-hover:flex text-sm lg:text-sm  duration-500 mb-5">
                        {Cards.PortfolioDiscription}
                      </div>
                      <div className="group-hover:h-full lg:px-0 pb-20 lg:pr-10 lg:hidden group-hover:flex text-sm lg:text-sm  duration-500 mb-10">
                        {Cards.PortfolioDiscription2}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="lg:w-1/2 lg:h-9/12 lg:border-y p-4 border-black">
            <div className="relative h-full w-full">
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
