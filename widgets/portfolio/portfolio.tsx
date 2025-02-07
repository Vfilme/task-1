"use client";
import React, { useState } from "react";
import styles from "./portfolio.module.scss";
import Blob from "./assets/blob.svg";
import Image from "next/image";
import Barcode from "./assets/barcode.svg";
import { ListItem } from "./ui/listItem";

export const Portfolio: React.FC = () => {
  const [displayText, setDisplayText] = useState<string>("Hover on\nthe list");

  const handleEnter = (title: string) => {
    setDisplayText(title);
  };
  const handleLeave = () => {
    setDisplayText("Hover on\nthe list");
  };

  return (
    <section className={styles.portfolio}>
      <div className={styles.text}>
        <h3 className={styles.title}>Featured Portfolio</h3>
        <p className={styles.description}>
          Explore how Schrift transforms bold ideas into impactful designs. From
          branding to digital experiences, our work reflects precision, clarity,
          and purpose.
        </p>
      </div>
      <div className={styles.hoverOn}>
        <Image src={Blob} alt="" className={styles.blob} />
        <div className={styles.display}>
          <span className={styles.text}>{displayText}</span>
        </div>
        <ul className={styles.list}>
          <li
            className={styles.item}
            onMouseEnter={() => handleEnter("Caspian\nforest")}
            onMouseLeave={handleLeave}
          >
            <ListItem number={1} title="Caspian forest" svgSrc={Barcode} />
          </li>
          <li
            onMouseEnter={() => handleEnter("Alchemed")}
            onMouseLeave={handleLeave}
          >
            <ListItem number={2} title="Alchemed" svgSrc={Barcode} />
          </li>
          <li
            onMouseEnter={() => handleEnter("Capsule")}
            onMouseLeave={handleLeave}
          >
            <ListItem number={3} title="Capsule" svgSrc={Barcode} />
          </li>
          <li
            onMouseEnter={() => handleEnter("Swoosh!")}
            onMouseLeave={handleLeave}
          >
            <ListItem number={4} title="Swoosh!" svgSrc={Barcode} />
          </li>
        </ul>
      </div>
    </section>
  );
};
