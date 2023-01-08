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
      subTitle: "React / ChakraUI / GmailJS ",
      PortfolioDiscriptionURL: "https://portfolio-beta-murex-17.vercel.app/",
      PortfolioDiscription:
        "自身初のポートフォリオサイト。コンセプトはモダンなUIUXです。ダークモードの導入にも挑戦し、ChakraUIの利点を活かしています。またコンタクトフォームに関してはGmailJSを使い、直接フォーム上からコンタクトが取れるようにしました。",
    },
    {
      title: "Post It Memo",
      src: PostItMemo,
      subTitle: "React / Firebase / ChakraUI。",
      PortfolioDiscriptionURL: "/PortfolioDiscription",
      PortfolioDiscription:
        "付箋型のメモアプリ。Firebaseを導入し、データの保持を可能に。",
    },

    {
      title: "Portfolio2",
      src: Portfolio2Img,
      subTitle: "Next / TailwindCSS / ReactSlick",
      PortfolioDiscriptionURL: "/PortfolioDiscription",
      PortfolioDiscription:
        "2つ目のポートフォリオサイト。利便性や自由度の高さを考慮しNextJSとTailwindCSSを使用。デザイン性の高いレイアウトにも対応出来るようにしました。",
    },
  ];

  return (
    <Layout>
      <div className="bg-zinc-900 text-white">
        <div className="pt-28 px-3 lg:px-20 flex  font-normal text-3xl sm:text-5xl lg:text-6xl">
          My Portfolio
        </div>
        <div className=" w-full px-4 mx-auto h-full  py-10 grid grid-cols-1  gap-4 lg:gap-4">
          {PortfolioCards.map((PortfolioCard, index) => {
            return (
              <div
                key={index}
                className=" h-full grid grid-cols-1 lg:grid-cols-2 px-0 lg:px-16 xl:px-20 lg:my-8 gap-3 "
              >
                <div className="lg:h-[50vh] flex  filter relative ">
                  <Image
                    className=" filter brightness-90  duration-1000 "
                    objectFit="cover"
                    layout="fill"
                    src={PortfolioCard.src}
                    alt="PortfolioCards"
                  />
                </div>

                <div className="min-h-[100vh] lg:min-h-[50vh] w-full bg-zinc-900 lg:bg-zinc-900 rounded-md">
                  <div className="h-1/2 lg:-p-8 flex  filter relative lg:hidden">
                    <Image
                      className=" filter brightness-90  duration-1000 rounded-t-md "
                      objectFit="cover"
                      layout="fill"
                      src={PortfolioCard.src}
                      alt="PortfolioCards"
                    />
                  </div>
                  <div className="p-4 lg:p-12 xl:p-16">
                    <div className=" flex  items-end justify-between ">
                      <div className="flex">
                        <div className="text-xl lg:text-4xl pb-2 lg:pb-0  font-light  tracking-wider  text-white">
                          {PortfolioCard.title}
                        </div>{" "}
                        <div className="text-xs lg:text-lg ml-4  flex items-center lg:items-end  text-zinc-400">
                          {index + 1}/{PortfolioCards.length}{" "}
                        </div>
                      </div>
                    </div>
                    <a
                      href={PortfolioCard.PortfolioDiscriptionURL}
                      className="inline-block"
                    >
                      <div className="text-xs lg:text-base lg:mt-8 flex items-center text-zinc-400">
                        View Project
                        <MdTransitEnterexit size={20} />
                      </div>{" "}
                    </a>
                    <div className="flex items-end text-xs lg:text-base tracking-wide text-zinc-200 pt-4 lg:pt-8">
                      {PortfolioCard.PortfolioDiscription}
                    </div>
                    <div className="text-xs lg:text-lg pt-4 lg:pt-8 text-zinc-400">
                      {PortfolioCard.subTitle}
                    </div>
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
