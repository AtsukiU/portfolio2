import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import HTMLIcon from "../public/html5-fill.svg";
import JavascriptIcon from "../public/logo-javascript.svg";
import ChakraIcon from "../public/chakraui.svg";
import NextIcon from "../public/next-js.svg";
import TailwindIcon from "../public/tailwind-css.svg";
import GsapIcon from "../public/greensock.svg";
import ReactIcon from "../public/react.svg";

import GraphQlIcon from "../public/graphql-fill.svg";
import NodeIcon from "../public/logo-nodejs.svg";
import FireBaseIcon from "../public/logo-firebase.svg";

import GitIcon from "../public/git.svg";
import EnglishIcon from "../public/english-input.svg";
import Layout from "../components/Layout";

const Skill = () => {
  const FrontEndSkills = [
    {
      title: "HTML CSS",
      Discription:
        "HTML CSSを利用したWEB制作。レスポンシブデザイン等のコーディング。CSSでのアニメーション導入。",
      svg: HTMLIcon,
    },
    {
      title: "JavaScript",
      Discription:
        "React、Next.jsを用いたWEB制作、WEB開発。SPA(react-router,Next/Link)の導入。",
      svg: JavascriptIcon,
    },
    {
      title: "React",
      Discription:
        "ReactでのSPA開発(react-router)。レスポンシブデザインの導入。",
      svg: ReactIcon,
    },
    {
      title: "Next.js",
      Discription: "Next.jsでのSPA開発(Next/Link)。",
      svg: NextIcon,
    },
    {
      title: "ChakraUI",
      Discription:
        "ChakraUIを用いたレスポンシブデザイン、アニメーションの導入、ダークテーマの導入",
      svg: ChakraIcon,
    },
    {
      title: "TailwindCSS",
      Discription:
        "TailwindCSSを用いたレスポンシブデザイン、アニメーションの導入。",
      svg: TailwindIcon,
    },
    {
      title: "GSAP",
      Discription: "GSAPを用いたアニメーション、ページ遷移の導入。",
      svg: GsapIcon,
    },
  ];

  const BackEndSkills = [
    {
      title: "GraphQL",
      Discription: "",
      svg: GraphQlIcon,
    },
    { title: "Node.js", Discription: "", svg: NodeIcon },
    {
      title: "Firebase",
      Discription: "FireBaseを用いたCRUD操作。",
      svg: FireBaseIcon,
    },
  ];

  const OtherSkills = [
    {
      title: "Git",
      Discription: "Gitでのリポジトリーの管理、更新",
      svg: GitIcon,
    },
    {
      title: "TOEIC L&R 850",
      Discription: "L&R 850",
      svg: EnglishIcon,
    },
  ];

  const [activeFrontEnd, setActiveFrontEnd] = useState(true);
  const [activeBackEnd, setActiveBackEnd] = useState(false);
  const [activeOthers, setActiveOthers] = useState(false);

  const OnClickFrontEnd = () => {
    setActiveFrontEnd(true);
    setActiveBackEnd(false);
    setActiveOthers(false);
    console.log(activeFrontEnd);
  };
  const OnClickBackend = () => {
    setActiveFrontEnd(false),
      setActiveBackEnd(true),
      setActiveOthers(false),
      console.log(activeBackEnd);
  };
  const OnClickOthers = () => {
    setActiveFrontEnd(false),
      setActiveBackEnd(false),
      setActiveOthers(true),
      console.log(activeOthers);
  };

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <Layout>
      <div
        className=" lg:mt-28   pt-10 w-full lg:w-8/12 lg:mx-auto lg:min-h-[calc(100vh-136px)] min-h-screen mt-14 flex lg:flex-col justify-center lg:justify-start  bg-white border-black text-black  "
        id="Skills"
      >
      
        <div className="  pt-0 lg:pt-10 lg:px-0 ">
          <div className=" pb-10   gap-2 text-base  lg:text-lg flex flex-col lg:flex-row">
            <div
              onClick={OnClickFrontEnd}
              isActive={OnClickFrontEnd}
              className={classNames(
                activeFrontEnd
                  ? " px-10 py-2  text-black flex justify-center cursor-pointer border border-black rounded-full  duration-300 "
                  : "  px-10 py-2  text-zinc-300 flex justify-center cursor-pointer border rounded-full border-zinc-300 hover:border-zinc-600 hover:text-zinc-600  duration-300"
              )}
            >
              FRONTEND{" "}
            </div>

            <div
              onClick={OnClickBackend}
              isActive={OnClickFrontEnd}
              className={classNames(
                activeBackEnd
                  ? " px-10 py-2  text-black flex justify-center cursor-pointer border border-black rounded-full  duration-300 "
                  : "  px-10 py-2  text-zinc-300 flex justify-center cursor-pointer border rounded-full border-zinc-300 hover:border-zinc-600 hover:text-zinc-600  duration-300"
              )}
            >
              BACKEND
            </div>

            <div
              onClick={OnClickOthers}
              isActive={OnClickFrontEnd}
              className={classNames(
                activeOthers
                  ? " px-10 py-2  text-black flex justify-center cursor-pointer border border-black rounded-full  duration-300 "
                  : "  px-10 py-2  text-zinc-300 flex justify-center cursor-pointer border rounded-full border-zinc-300 hover:border-zinc-600 hover:text-zinc-600 duration-300"
              )}
            >
              OTHRES
            </div>
          </div>

          <div className=" lg:mb-20  lg:px-0 -mx-10 lg:-mx-0">
            {activeFrontEnd ? (
              <div className="w-full h-full grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10">
                {FrontEndSkills.map((skill, index) => {
                  return (
                    <div
                      className="w-full pb-2 relative flex flex-col group border-black"
                      key={index}
                    >
                      <div className="w-full my-10 lg:my-28 opacity-10">
                        <Image
                          src={skill.svg}
                          alt={skill.title}
                          layout="fill"
                          objectFit="cover"
                        ></Image>
                      </div>
                      <div className="text-sm  lg:text-lg">{skill.title}</div>
                      <div className="my-2  text-zinc-600 text-xs lg:text-sm font-light  hidden">
                        {skill.Discription}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div></div>
            )}
            {activeBackEnd ? (
              <div className="w-full h-full mx-auto  grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-10">
                {BackEndSkills.map((skill, index) => {
                  return (
                    <div
                      className="w-full relative  flex flex-col border-black pb-2"
                      key={index}
                    >
                      <div className="w-full my-10 lg:my-20 opacity-5">
                        <Image
                          src={skill.svg}
                          alt={skill.title}
                          layout="fill"
                          objectFit="cover"
                        ></Image>
                      </div>
                      <div className="text-sm lg:text-lg">{skill.title}</div>
                      <div className="my-2 text-zinc-600 text-xs lg:text-base font-light  hidden ">
                        {skill.Discription}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div></div>
            )}

            {activeOthers ? (
              <div className="w-full h-full mx-auto  grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-10">
                {OtherSkills.map((skill, index) => {
                  return (
                    <div
                      className="relative flex flex-col border-black pb-2 "
                      key={index}
                    >
                      <div className="w-full my-10 lg:my-20 opacity-5">
                        <Image
                          src={skill.svg}
                          alt={skill.title}
                          layout="fill"
                          objectFit="cover"
                        ></Image>
                      </div>
                      <div className="text-sm lg:text-lg ">{skill.title}</div>
                      <div className="my-2 text-zinc-600 text-xs lg:text-base font-light  hidden ">
                        {skill.Discription}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Skill;
