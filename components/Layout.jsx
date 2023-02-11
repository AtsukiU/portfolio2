import React from "react";
import Footer from "./Footer";
import Head from "next/head";
import Header from "./Header";
import Link from "next/link";
import { Triangle } from "react-loader-spinner";

export default function Layout({ children }) {
  return (
    <div>
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
      </Head>
      <Header />
      <main className="overflow-hidden  font-montserrat lg:ml-52">{children}</main>
      <Footer />
    </div>
  );
}
