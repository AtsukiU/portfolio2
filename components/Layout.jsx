import React from "react";
import Footer from "./Footer";
import Head from "next/head";
import Header from "./Header";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        
        <title>Welcome to AUZ&apos;s Portfolio</title>
        <meta name="description" content="AUZ's Portfolio" />
      </Head>
      <Header />
      <main className="overflow-hidden font-extralight font-montserrat">{children}</main>
     <Footer/>
    </div>
  );
}
