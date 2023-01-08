import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import PortfolioImage from "../public/000030.JPG";

const PortfolioDiscription = () => {
  return (
    <Layout>
      <div className="min-w-full min-h-screen items-center flex flex-col   bg-gray-100 text-white">
        {/* <div className=" w-full"> </div> */}

        <div className="w-full  rounded-2xl h-[36rem] sm:h-[36rem] lg:h-[40rem] xl:h-[46rem] mx-auto shadow-2xl  relative text-black  ">
          <Image
            className="brightness-50  object-cover "
            layout="fill"
            alt="portfolioImage"
            src={PortfolioImage}
          />
          <div className="text-white   relative h-full w-full flex flex-col justify-center items-center ">
            <div className="tracking-wider font-bold text-4xl lg:text-7xl">
              Portfolio
            </div>
            <div className="tracking-widest text-sm lg:text-lg mt-4 lg:mt-8 text-gray-200  border boder-gray-200 backdrop-blur-sm py-1 px-2">
              Go Site
            </div>
          </div>
        </div>

        <div className="w-11/12 lg:w-8/12 p-6 lg:p-20  -mt-20 z-0 bg-white rounded-xl text-black  my-10 gap-12 grid grid-cols-1 lg:grid-cols-3 text-sm font-light">
          <div className="col-span-2">
            <div className="text-lg lg:text-xl font-bold  lg:mb-5 ">overview</div>
            <div className="text-xs lg:text-sm ">
              自身のポートフォリオサイトを作成。こだわりはシンプルなデザインとモダンなUIUXです。chakraUIの良さを生かすため、ダークモードも導入しました。
            </div>
          </div>
          <div className=" flex flex-col col-span-1">
            <div className="flex flex-col">
              <div className="text-lg lg:text-xl font-bold  lg:mb-5 ">Tools</div>
              <div className="text-xs lg:text-sm  mb-5">
                JavaScript / React / ChakraUI
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-lg lg:text-xl font-bold  lg:my-5 ">Date</div>
              <div className="text-xs lg:text-sm ">Sep 2022</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PortfolioDiscription;
