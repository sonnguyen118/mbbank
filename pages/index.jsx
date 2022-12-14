import Head from "next/head";
import Image from "next/image";
import Layout from "./components/layout";
import Section1 from "./components/sections/section_1";
import Section2 from "./components/sections/section_2";
import Section3a from "./components/sections/section_3a";
import Section3b from "./components/sections/section_3b";
import Section3c from "./components/sections/section_3c";
import Section1MB from "./components/sections/section_1_mobile";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { Component, useRef, useEffect } from "react";

const useMountEffect = (fun) => useEffect(fun, []);

export default function Home() {
  const router = useRouter();
  console.log(router.asPath);
  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView(); // run this function from an event handler or pass it to useEffect to execute scroll

  useEffect(() => {
    if (router.asPath == "#section_3c") {
      executeScroll();
    }
  });
  return (
    <>
      <Head>
        <title>MB NGÂN HÀNG QUÂN ĐỘI | MBBANK - MB-BANK</title>
        <meta charset="utf-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <meta name="apple-mobile-web-app-title" content="mbbank.com.vn"></meta>
        <meta
          name="description"
          content="KHACH HANG CA NHA , KHACH HANG DOANH NGHIEP , CA NHAN CAO CAP , KHACH HANG DINH CHE"
        ></meta>
        <meta name="keywords"></meta>
        <meta name="news_keywords"></meta>
        <meta property="og:image" itemProp="thumbnailUrl"></meta>
        <link rel="canonical"></link>
        <meta name="dc.publisher" />
        <meta name="dc.rights.copyright"></meta>
        <meta name="dc.creator.name"></meta>
        <meta name="dc.creator.email"></meta>
        <meta name="dc.identifier"></meta>
        <meta name="copyright"></meta>
        <meta name="author"></meta>
        <meta name="dc.language" content="vi-VN"></meta>
        <meta name="robots" content="index,follow"></meta>
        <meta httpEquiv="content-language" content="vi"></meta>
        <meta name="twitter:card" value="summary"></meta>
        <meta name="twitter:url"></meta>
        <meta
          name="twitter:title"
          content="MB NG&#194;N H&#192;NG QU&#194;N ĐỘI | MBBANK"
        ></meta>
        <meta
          name="twitter:description"
          content="KHACH HANG CA NHA , KHACH HANG DOANH NGHIEP , CA NHAN CAO CAP , KHACH HANG DINH CHE"
        ></meta>
        <meta name="twitter:image" />
        <meta name="twitter:image" />

        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <Layout>
          <div className="home">
            <div className="home-section-1">
              <Section1 />
            </div>
            <div className="home-section-1-mobile">
              <Section1MB />
            </div>
            <div className="home-section-2">
              <Section2 />
            </div>
            <div ref={myRef} className="home-section-3">
              <div className="section_3">
                <Section3a />
                <Section3b />
                <Section3c />
              </div>
            </div>
            <div className="home-section-4">{/* <Section4 /> */}</div>
          </div>
        </Layout>
      </main>

      <footer></footer>
    </>
  );
}
