import React from "react";
import { useState } from "react";
import HomeCard from "../components/HomeCard";
import Layout from "../components/Layout";
import Link from "next/link";

import Image from "next/image";
import Portfolio1Img from "../public/Portfolio1.png";
import Portfolio2Img from "../public/PortFolio.png";
import PostItMemo from "../public/PostItMemo.png";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
  direction,
  Thumbs,
  EffectCoverflow,
  EffectFade,
} from "swiper";
import "swiper/css/effect-coverflow";
import "swiper/css/bundle";
import "swiper/css/effect-fade";

const TestSlick = () => {
  const [DefaultBackgroundImage, setDefaultBackgroundImage] = useState(0);

  const [hoverBackgroundImage, setHoverBackgroundImage] = useState(
    DefaultBackgroundImage
  );

  const [Title, setTitle] = useState("PORTFOLIO");
  const [Discription, setDiscription] = useState("I'm AUZ");
  const [LinkUrl, setLinkUrl] = useState("/AboutMe");

  const HomeCards = [
    {
      img: Portfolio1Img,
      title: "Portfolio1",
      src: "/AboutMe",
      discription: "im auz",
    },
    {
      img: PostItMemo,
      title: "PostItMemo",
      src: "/Portfolio",
      discription:
        "my portfolio it is my hopecrazy inre¥tresut jkfenfi fjiefjpeifpe dikfjifjefpei jfiejfeifjefjejfdfjdfkdfjdkfjdkf  jfeikanitem eirjd ",
    },
    {
      img: Portfolio2Img,
      title: "Portfolio2",
      src: "/",
      discription: "my skill",
    },
  ];

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Layout>
      <div className="w-full h-screen pt-10 lg:pt-20  bg-zinc-900 hidden lg:flex">
        <div className="min-w-full min-h-screen   relative  ">
          <Swiper
            modules={[
              Scrollbar,
              Mousewheel,
              Thumbs,
              EffectCoverflow,
              EffectFade,
            ]}
            slidesPerView={1}
            draggable={false}
            loop={true}
            effect={"fade"}
            watchSlidesProgress={true}
            onSwiper={setThumbsSwiper}
          >
            {HomeCards.map((HomeCard, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="lg:w-2/3 h-[70vh] lg:h-[80vh] ml-auto relative z-0 ">
                    <Image
                      className="filter brightness-50 contrast-100 border border-zinc-500"
                      objectFit="cover"
                      layout="fill"
                      alt="background"
                      src={HomeCard.img}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="h-full  w-screen absolute lg:pl-10 z-99 top-0 bottom-0 right-0 left-0 flex justify-center">
            <div className="w-screen h-full flex">
              <Swiper
                modules={[
                  Navigation,
                  Pagination,
                  Scrollbar,
                  Mousewheel,
                  Thumbs,
                ]}
                slidesPerView={3}
                spaceBetween={0}
                loop={true}
                mousewheel={true}
                centeredSlides={true}
                direction={"vertical"}
                watchSlidesProgress={true}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
              >
                <div className="min-h-screen w-screen z-99">
                  {HomeCards.map((HomeCard, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className="h-full w-screen min-h-[screen] flex flex-row lg:flex-col  mt-[75vh] lg:mt-[0vh]">
                          {" "}
                          <div className="text-xl  lg:text-8xl font-semibold  tracking-wide mix-blend-difference">
                            {HomeCard.title}
                          </div>
                          <div className="text-sm lg:text-4xl mt-1 lg:mt-5 ml-4 lg:ml-0  flex text-zinc-200">
                            {index + 1}/{HomeCards.length}
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </div>
              </Swiper>

              <div className="w-1/2 h-full pl-20  hidden lg:flex lg:items-center justify-end">
                <div></div>
                {/* <Swiper
                  modules={[
                    Navigation,
                    Pagination,
                    Scrollbar,
                    Mousewheel,
                    Thumbs,
                  ]}
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  navigation={{ clickable: true }}
                  spaceBetween={40}
                  slidesPerView={1.2}
                  loop={true}
                  centeredSlides={false}
                  mousewheel={true}
                  onSwiper={setThumbsSwiper}
                  watchSlidesProgress={true}
                  effect={"coverflow"}
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                >
                  {HomeCards.map((HomeCard, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className="lg:h-[380px] xl:h-[400px] w-full flex flex-col relative ">
                          <Image
                            className="filter "
                            objectFit="cover"
                            layout="fill"
                            src={HomeCard.img}
                            alt="ss"
                            onMouseEnter={() => {
                              console.log("changeimage");
                              setHoverBackgroundImage(HomeCard.img);
                              setTitle(HomeCard.title);
                              setDiscription(HomeCard.discription);
                              setLinkUrl(HomeCard.src);
                            }}
                            onIndexChanged={(index) =>
                              this.setState({ swiperIndex: index })
                            }
                          />
                        </div>
                        <div className="text-white ml-1 mt-2 text-xl font-light">
                          {HomeCard.title}
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper> */}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 min-h-screen  z-99 flex flex-col  lg:hidden">
          {HomeCards.map((HomeCard, index) => {
            return (
              <div className="h-full mb-10  min-h-[screen]  " key={index}>
                <div className="relative h-[65vh]">
                  <Image
                    className="filter brightness-50  contrast-100 border border-zinc-500"
                    objectFit="cover"
                    layout="fill"
                    alt="background"
                    src={HomeCard.img}
                  />{" "}
                  <div className="text-lg font-bold absolute right-2 top-2  flex text-zinc-400 z-99">
                    {index + 1}/{HomeCards.length}
                  </div>
                </div>
                <div className="flex my-5 ">
                  <div className="text-2xl ml-2 font-semibold  tracking-wide mix-blend-difference">
                    {HomeCard.title}
                  </div>{" "}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default TestSlick;
