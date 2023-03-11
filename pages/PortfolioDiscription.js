import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import PortfolioImage from "../public/PostItMemo.png";

const PortfolioDiscription = () => {
  return (
    <Layout>
      <div className=" mt-28   min-w-full min-h-[calc(100vh-136px)]  flex   bg-white text-white">
        {/* <div className=" w-full"> </div> */}

        <div className="w-3/4 m-10  drop-shadow-xl  rounded-2xl min-h-[calc(100vh-400px)] relative text-black  ">
          <Image
            className="brightness-90  object-cover"
            layout="fill"
            alt="portfolioImage"
            src={PortfolioImage}
          />
          <div className="text-white  relative h-full w-full flex flex-col justify-center items-center p-20 ">
            <div className=" font-bold text-4xl uppercase lg:text-8xl">
              Portfolio
            </div>
          </div>
        </div>
       
          <div className="w-1/4  z-0 border-x border-black   text-black grid grid-cols-1 lg:grid-cols-1 text-sm ">
            <div className="flex flex-col ">
              <div className="w-full text-lg lg:text-base  px-2 py-1 border-b border-black  lg:mb-2 ">
                About this project
              </div>
              <div className="w-full pb-1 text-xs border-b border-black lg:text-base px-2">
                自身のポートフォリオサイトを作成。こだわりはシンプルなデザインとモダンなUIUXです。chakraUIの良さを生かすため、ダークモードも導入しました。
              </div>
            </div>
           
            
          </div>
        </div>
 
    </Layout>
  );
};

export default PortfolioDiscription;
