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
      title: "About Me",
      src: "/AboutMe",
      discription: "im auz",
    },
    {
      img: PostItMemo,
      title: "Portfolio",
      src: "/Portfolio",
      discription:
        "my portfolio it is my hopecrazy inre¥tresut jkfenfi fjiefjpeifpe dikfjifjefpei jfiejfeifjefjejfdfjdfkdfjdkfjdkf  jfeikanitem eirjd ",
    },
    { img: Portfolio2Img, title: "Skills", src: "/", discription: "my skill" },
  ];

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Layout>
      <div className="w-full h-full pt-20 px-20 hidden lg:flex">
        <div className="min-w-full min-h-screen bg-black  relative   ">
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
                  <div className="w-full h-[80vh] mx-auto relative   z-0 hidden lg:flex">
                    <Image
                      className="filter brightness-75 "
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

          <div className="h-full  w-screen absolute pl-10 z-99 top-0 bottom-0 right-0 left-0 lg:flex justify-center hidden">
            <div className="w-screen h-full  flex">
              <Swiper
                modules={[
                  Navigation,
                  Pagination,
                  Scrollbar,
                  Mousewheel,
                  Thumbs,
                ]}
                slidesPerView={1}
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
                <div className="h-full w-screen z-99 flex items-center">
                  {HomeCards.map((HomeCard, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className="h-full w-screen text-white ">
                          {" "}
                          <div className=" text-8xl font-semibold  tracking-wide ">
                            {HomeCard.title}
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
      </div>

      <div className="min-h-screen h-full w-full  bg-black lg:hidden ">
        <div className="pt-20 pb-10 sm:py-28 sm:pb-24 text-white w-10/12 font-semibold mx-auto  items-center flex  flex-col ">
          <h1 className="flex justify-center text-2xl sm:text-3xl lg:text-5xl  ">
            I&apos;m AUZ. Front End Developer based on Yamanashi,Japan. Welcome
            to my personal website.
          </h1>
        </div>

        <div className=" h-full  mb-6 my-auto  lg:hidden">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, Mousewheel, Thumbs]}
            spaceBetween={0}
            slidesPerView={1.1}
            loop={true}
            centeredSlides={true}
            Pagination={{ clickable: true }}
            mousewheel={true}
          >
            <SwiperSlide>
              <HomeCard
                image={Portfolio1Img}
                title="About Me"
                discription="I'm AUZ "
                src="/AboutMe"
              />
            </SwiperSlide>

            <SwiperSlide>
              <HomeCard
                image={PostItMemo}
                title="Portfolio"
                discription="My Portfolio "
                src="/Portfolio"
              />
            </SwiperSlide>

            <SwiperSlide>
              <HomeCard
                image={Portfolio2Img}
                title="Skills"
                discription="My Skills"
                src="/"
              />
            </SwiperSlide>
          </Swiper>
          <div className="text-white flex items-center justify-center my-10 sm:my-10 font-bold ">
            T----M
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TestSlick;
