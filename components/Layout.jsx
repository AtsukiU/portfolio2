import React from "react";
import Footer from "./Footer";
import Head from "next/head";
import Header from "./Header";

import Link from "next/link";
import { Triangle } from "react-loader-spinner";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Looder from "../pages/Looder";

export default function Layout({ children }) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setPageLoading(true);
    const handleComplete = () => setPageLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  // TODO 正式なローディングコンポーネントにする
  const loadingComponent = <Looder />;

  return (
    <div>
      {pageLoading && loadingComponent}

      <Head>
        <title>AUZ&apos;s Portfolio</title>
        <meta name="description" content="AUZ's Portfolio" />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>

        <link
          href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=League+Gothic&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <main className="overflow-hidden  font-montserrat lg:pl-14 bg-white">
        {children}
      </main>
      <Footer />
    </div>
  );
}
