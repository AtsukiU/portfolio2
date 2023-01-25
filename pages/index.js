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
import ContactImage from "../public/Iphone.jpg";

import { FaTwitterSquare, FaGithubSquare } from "react-icons/fa";

export default function Home() {
  return (
    <Layout>
      <div className="bg-black">
        <div className="w-full mx-auto  px-4 lg:px-20  pt-20 lg:pt-28 pb-20 lg:pb-20  min-h-[100vh] gap-2 lg:gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4    relative">
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
            discription="Programming and other skill"
            src="/AboutMe/#Skills"
          />{" "}
          <HomeCard
            image={ContactImage}
            title="Contact"
            discription="Email Twitter Github"
            src="/Contact"
          />
        </div>
      </div>
    </Layout>
  );
}