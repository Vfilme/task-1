"use client";
import React from "react";
import styles from "./servicesHover.module.scss";
import Image from "next/image";
import Ellipse from "../assets/ellipse.svg";
import Frame from "../assets/frame.svg";
import { Card } from "./card";

export const ServicesHover: React.FC = () => {
  return (
    <div className={styles.servicesHover}>
      <Image src={Ellipse} alt="" className={styles.ellipse} />
      <Card
        title="Brand Identity Design"
        desription="We create memorable brand identities that resonate with your audience. From logos to complete visual systems, we ensure your brand stands out with clarity and impact."
        number={1}
      />
      <Card
        title="Web Design & Development"
        desription="Your website is your digital storefront. We design and develop websites that combine bold aesthetics with functionality, ensuring an intuitive experience for your users."
        number={2}
      />
      <Card
        title="Motion Graphics & Animation"
        desription="Bring your brand to life with dynamic animations and motion graphics. We create captivating visuals that engage and leave a lasting impression."
        number={3}
      />
      <Card
        title="Creative Consultation"
        desription="Have a vision but not sure how to bring it to life? Our creative experts collaborate with you to develop bold and precise strategies tailored to your brand goals."
        number={4}
      />
      <Image src={Frame} alt="" className={styles.frame}></Image>
    </div>
  );
};
