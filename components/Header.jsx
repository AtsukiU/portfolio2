import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FaGithubSquare, FaTwitterSquare } from "react-icons/fa";
import { Divide as Hamburger } from "hamburger-react";

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
  Autoplay,
} from "swiper";
import "swiper/css/effect-coverflow";
import "swiper/css/bundle";
import "swiper/css/effect-fade";

import { useRouter } from "next/router";

const pageContent = require("./pageContent.json");

const Header = () => {
  const headers = [
    { list: "Home", url: "/" },
    { list: "AboutMe", url: "/AboutMe" },
    { list: "Portfolio", url: "/Portfolio" },
    { list: "Skill", url: "/Skill" },
    { list: "Contact", url: "/Contact" },
  ];

  const introduction = [];

  const birthdate = "1998/2/6";

  const ageCalculation = (birthDate, nowDate) => {
    const birthNumber =
      birthDate.getFullYear() * 10000 +
      (birthDate.getMonth() + 1) * 100 +
      birthDate.getDate();
    const nowNumber =
      nowDate.getFullYear() * 10000 +
      (nowDate.getMonth() + 1) * 100 +
      nowDate.getDate();

    return Math.floor((nowNumber - birthNumber) / 10000);
  };

  const age = ageCalculation(new Date(birthdate), new Date());

  const ageOutput = age + " years old";

  const [isOpen, setOpen] = useState(false);

  const router = useRouter();
  const path = router.pathname;
  const content = pageContent[path];
  const componentName = router.pathname.substring(1);

  return (
    <header className=" w-full lg:border-black text-black  fixed font-Montserrat  z-50">
      <div className="lg:h-28 border-b border-black bg-white  flex items-center justify-between">
        <Link href="/">
          <div className="font-audiowide cursor-pointer pl-4 lg:pl-0 w-1/5 lg:border-r h-full text-4xl sm:text-6xl lg:text-7xl xl:text-8xl flex items-center justify-center  border-black">
            AUZ
          </div>
        </Link>
        <div className="w-4/5 h-full lg:flex flex-col hidden">
          <div className="h-14 pl-4 border-b border-black flex items-center justify-center">
            {" "}
            <Swiper
              modules={[
                Scrollbar,
                Mousewheel,
                Thumbs,
                EffectCoverflow,
                EffectFade,
                Mousewheel,
                Autoplay,
              ]}
              slidesPerView={5}
              loop={true}
              mousewheel={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={5000}
              spaceBetween={20}
            >
              <SwiperSlide>
                <div className="">I&apos;m AUZ </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>Japan </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>{ageOutput}</div>
              </SwiperSlide>
              <SwiperSlide>
                <div>Web developer</div>
              </SwiperSlide>
              <SwiperSlide>
                <div>Web designer</div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="">I&apos;m AUZ </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>Japan </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>{ageOutput}</div>
              </SwiperSlide>
              <SwiperSlide>
                <div>Web developer</div>
              </SwiperSlide>
              <SwiperSlide>
                <div>Web designer</div>
              </SwiperSlide>
            </Swiper>
          </div>

          <ul className="w-full h-14 grid grid-cols-5 ">
            {" "}
            {headers.map((header, index) => {
              return (
                <li
                  className="flex items-center hover:underline justify-center border-r border-black"
                  key={index}
                >
                  <Link href={header.url}>{header.list}</Link>
                </li>
              );
            })}
          </ul>
        </div>{" "}
        <div className="visible lg:hidden flex items-start">
          <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
        </div>
      </div>
      <Link href={`/${componentName}`}>
        <div className=" bg-white cursor-pointer hover:bg-black hover:text-white duration-700  w-14 h-[calc(100vh-136px)] lg:flex justify-center items-center  border-r border-black fixed hidden ">
          <Swiper
            modules={[
              Scrollbar,
              Mousewheel,
              Thumbs,
              EffectCoverflow,
              EffectFade,
              Mousewheel,
              Autoplay,
            ]}
            slidesPerView={1}
            loop={true}
            mousewheel={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={3000}
            spaceBetween={0}
          >
            <SwiperSlide>
              <div className="-rotate-90 h-[calc(100vh-136px)] items-center uppercase justify-center  flex ">
                {content}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="-rotate-90 h-[calc(100vh-136px)] items-center uppercase justify-center  flex ">
                {content}
              </div>
            </SwiperSlide>
          </Swiper>{" "}
        </div>
      </Link>
      {isOpen ? (
        <div className="flex flex-col lg:hidden w-screen h-[100vh]  -mt-16 lg:mt-0 pt-24 lg:pt-0 text-black  bg-white  z-0  lg:-z-1">
          <ul className="h-full w-full flex flex-col mt-20 ">
            {headers.map((header, index) => {
              return (
                <li
                  className=" w-full  flex ml-4 items-center uppercase duration-300 border-black text-5xl  sm:text-xl"
                  key={index}
                >
                  <Link href={header.url}>{header.list}</Link>
                </li>
              );
            })}
            <div className="mt-20 ml-4 flex flex-col text-2xl  sm:text-xl">
              <a href="https://twitter.com/itwebzozo">Twitter</a>
              <a className="" href="https://github.com/AtsukiU">
                Github
              </a>
            </div>
          </ul>
        </div>
      ) : (
        <div></div>
      )}
    </header>
  );
};

export default Header;
