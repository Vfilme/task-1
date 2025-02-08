"use client";
import React from "react";
import styles from "./footer.module.scss";
import Arrow from "./assets/arrow.svg";
import Image from "next/image";
import { Links } from "./ui/links/links";
import Blob from "./assets/blob.svg";
import BigEllipse from "./assets/bigEllipse.svg";
import Ellipse from "./assets/ellipse.svg";
import SmallEllipse from "./assets/smallEllipse.svg";
import { Stars } from "./ui/stars/stars";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <Links />
      <Image src={BigEllipse} alt="" className={styles.ellipses} />
      <Image src={Ellipse} alt="" className={styles.ellipses} />
      <Image src={SmallEllipse} alt="" className={styles.ellipses} />
      <Image src={Blob} alt="" className={styles.blob} />
      <Stars />
      <div className={styles.contact}>
        <h3 className={styles.text}>Create bold ideas together</h3>
        <span className={styles.email}>hello@schrift.com</span>
      </div>
      <div className={styles.copyright}>
        <span>© Copyright Schrift 2024</span>
        <Image src={Arrow} alt="to up" onClick={scrollToTop} />
      </div>
    </footer>
  );
};
