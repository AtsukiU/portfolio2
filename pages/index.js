import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import HomeCard from "../components/HomeCard";
import { useState } from "react";
import React from "react";

import AboutMeImage from "../public/000030.JPG";
import PortfolioImage from "../public/safar-safarov-koOdUvfGr4c-unsplash.jpg";
import SkillImage from "../public/kobu-agency-ipARHaxETRk-unsplash.jpg";
import Slider from "react-slick";

import {FaTwitterSquare ,FaGithubSquare} from "react-icons/fa"

export default function Home() {
  return (
    <Layout>
      <div className="bg-black">
        <div className="w-full mx-auto lg:gap-10 px-10 lg:px-20  py-20 lg:py-28 gap-6  min-h-[180vh] grid grid-cols-1 lg:grid-cols-2    relative">
          <HomeCard
            image={AboutMeImage}
            title="About Me"
            discription="Hello.I'm AUZ"
            src="/AboutMe"
          />

          <HomeCard
            image={PortfolioImage}
            title="Portfolio"
            discription="My Portfolio"
            src="/Portfolio"
          />
          <HomeCard
            image={SkillImage}
            title="Skills"
            discription="Programming and english skill"
            src="/"
          />
          <div className=" rounded-2xl   text-gray-300 duration-500 relative filter  flex items-center justify-center">
            <div className="w-full max-w-full justify-center items-center flex flex-row  mt-10 lg:mt-0   ">
              <div className="backdrop-opacity-10 text-zinc-200 lg:text-zinc-400 hover:text-zinc-200 duration-500 hover:-translate-y-3"><a href="https://twitter.com/itwebzozo"><FaTwitterSquare size={100} /></a></div>
              <div className="backdrop-opacity-10 text-zinc-200 lg:text-zinc-400 hover:text-zinc-200 duration-500 hover:-translate-y-3"><a href="https://github.com/AtsukiU"><FaGithubSquare size={100}/></a></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
