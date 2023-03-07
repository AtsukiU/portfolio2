import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import PortfolioImage from "../public/PostItMemo.png";

const PortfolioDiscription = () => {
  return (
    <Layout>
      <div className="px-10 pt-10  pb-20 min-w-full min-h-screen items-center flex flex-col   bg-stone-200 text-white">
        {/* <div className=" w-full"> </div> */}

        <div className="w-full drop-shadow-xl rounded-2xl h-[36rem] sm:h-[36rem] lg:h-[40rem] xl:h-[48rem] mx-auto  relative text-black  ">
          <Image
            className="brightness-95  object-cover "
            layout="fill"
            alt="portfolioImage"
            src={PortfolioImage}
          />
          <div className="text-white  relative h-full w-full flex flex-col justify-center items-center p-20 ">
            <div className=" font-bold text-4xl uppercase lg:text-9xl">
              Portfolio
            </div>
          </div>
        </div>
        <div className=" mt-20  gap-10 w-full flex  justify-end items-center text-black">
          <div className="text-xs lg:text-base">WEBSITE</div>
          <div className=" text-xs lg:text-base">DESIGN・FRONTEND</div>

          <div className="text-xs lg:text-base">WEB・MOBILE</div>
          <div className=" text-xs lg:text-base">2023</div>
        </div>
        <div className="w-full mt-20 lg:mt-40 lg:mb-40 z-0   text-black grid grid-cols-1 lg:grid-cols-1 text-sm ">
          <div className="flex lg:px-40">
            <div className="w-1/2 text-lg lg:text-base    lg:mb-5 ">
              About this project
            </div>
            <div className="w-1/2 text-xs lg:text-base ">
              自身のポートフォリオサイトを作成。こだわりはシンプルなデザインとモダンなUIUXです。chakraUIの良さを生かすため、ダークモードも導入しました。
            </div>
          </div>
          <div className="flex lg:px-40 lg:pt-10">
            <div className="w-1/2 text-lg lg:text-base    lg:mb-5 ">
              About this project
            </div>
            <div className="w-1/2 text-xs lg:text-base ">
              自身のポートフォリオサイトを作成。こだわりはシンプルなデザインとモダンなUIUXです。chakraUIの良さを生かすため、ダークモードも導入しました。
            </div>
          </div>
          <div className="flex lg:px-40 lg:pt-10">
            <div className="w-1/2 text-lg lg:text-base    lg:mb-5 ">
              About this project
            </div>
            <div className="w-1/2 text-xs lg:text-base ">
              自身のポートフォリオサイトを作成。こだわりはシンプルなデザインとモダンなUIUXです。chakraUIの良さを生かすため、ダークモードも導入しました。
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PortfolioDiscription;
