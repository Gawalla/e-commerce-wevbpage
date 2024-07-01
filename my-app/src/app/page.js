'use client'
import React from "react";
import {app} from './firebase.js'
import "./globals.css";
import styles2 from "./styles/home.module.css";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./components/sidebar";
import { image } from "./images/index.js";
import { SidebarContext } from "./context/sidebar.context";
import { useContext } from "react";
const page = () => {
const sidebarshow=useContext(SidebarContext)
  const categories = [
    {
      title: "Men fashion",
      image: image.image1,
      link: "/men-fashion",
    },
    {
      title: "Women fashion",
      image: image.image1,
      link: "/kids-fashion",
    },
    {
      title: "Mobiles",
      image: image.image1,
      link: "/mobiles",
    },
    {
      title: "Electronic",
      image: image.image1,
      link: "/electronics",
    },
    {
      title: "Beauty",
      image: image.image1,
      link: "/beauty",
    },
    {
      title: "Sports",
      image: image.image1,
      link: "/sports",
    },
  ];
  return (
    <>
     <div className={styles2.box}>
      <div className={styles2.nav}>
      <span>
          <Link href="/">home</Link>
        </span>
        <span>
          <Link href="/fashion">fashion</Link>
        </span>
        <span>
          <Link href="/fashion">fashion</Link>
        </span>
        <span>
          <Link href="/fashion">fashion</Link>
        </span>
        <span>
          <Link href="/fashion">fashion</Link>
        </span>
        <span>
          <Link href="/fashion">fashion</Link>
        </span>
        <span>
          <Link href="/fashion">fashion</Link>
        </span>
        <span>
          <Link href="/fashion">fashion</Link>
        </span>
      </div>
      <div className={`${styles2.category} `}>
        <div className={styles2.squareimg}>
          <Image width={0} height={0} src={image.image2} />
        </div>
        <div className={styles2.rectimg}>
          <Image width={0} height={0} src={image.image3} />
        </div>
        <div className={styles2.squareimg}>
          <Image width={0} height={0} src={image.image4} />
        </div>
        <div className={styles2.rectimg}>
          <Image width={0} height={0} src={image.image6} />
        </div>
        <div className={styles2.squareimg}>
          <Image width={0} height={0} src={image.image5} />
        </div>
        
        <div className={styles2.squareimg}>
          <Image width={0} height={0} src={image.image7} />
        </div>
        <div className={styles2.squareimg}>
          <Image width={0} height={0} src={image.image8} />
        </div>
        <div className={styles2.rectimg}>
          <Image width={0} height={0} src={image.image9} />
        </div>
       
        <div className={styles2.squareimg}>
          <Image width={0} height={0} src={image.image9} />
        </div>
      </div>
    </div>


    {/* <div className={styles2.box}>
    <Sidebar/>
      <div className={styles2.nav}>
      <span>
          <Link href="/">home</Link>
        </span>
        <span>
          <Link href="/fashion">fashion</Link>
        </span>
        <span>
          <Link href="/fashion">fashion</Link>
        </span>
        <span>
          <Link href="/fashion">fashion</Link>
        </span>
        <span>
          <Link href="/fashion">fashion</Link>
        </span>
        <span>
          <Link href="/fashion">fashion</Link>
        </span>
        <span>
          <Link href="/fashion">fashion</Link>
        </span>
        <span>
          <Link href="/fashion">fashion</Link>
        </span>
      </div>
      <div className={`${styles2.category} `}>
        <div className={styles2.squareimg}>
          <Image width={0} height={0} src={image.image2} />
        </div>
        <div className={styles2.rectimg}>
          <Image width={0} height={0} src={image.image3} />
        </div>
        <div className={styles2.squareimg}>
          <Image width={0} height={0} src={image.image4} />
        </div>
        <div className={styles2.rectimg}>
          <Image width={0} height={0} src={image.image6} />
        </div>
        <div className={styles2.squareimg}>
          <Image width={0} height={0} src={image.image5} />
        </div>
        
        <div className={styles2.squareimg}>
          <Image width={0} height={0} src={image.image7} />
        </div>
        <div className={styles2.squareimg}>
          <Image width={0} height={0} src={image.image8} />
        </div>
        <div className={styles2.rectimg}>
          <Image width={0} height={0} src={image.image9} />
        </div>
       
        <div className={styles2.squareimg}>
          <Image width={0} height={0} src={image.image9} />
        </div>
      </div>
    </div> */}
 </>
  );
};

export default page;
