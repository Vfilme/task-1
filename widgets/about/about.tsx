import React from "react";
import styles from "./about.module.scss";
import AboutImage from "./assets/aboutImage.svg";
import Image from "next/image";
import Cubes from "./assets/cubes.svg";
import { Card } from "./ui/card/card";
import Circle from "./assets/circle.svg";
import Star from "./assets/star.svg";
import Lightning from "./assets/lightning.svg";

export const About: React.FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.text}>
        <h3 className={styles.title}>about schrift</h3>
        <Image className={styles.aboutImg} src={AboutImage} alt="" />
      </div>
      <div className={styles.description}>
        <p className={styles.text}>
          Schrift is a graphic design agency focused on clarity, impact, and
          purpose. We deliver designs that communicate powerfully and
          authentically
        </p>
        <div className={styles.cards}>
          <Card
            title="Precision"
            description="Every detail counts at Schrift. We believe in designing with
              intention, where every element serves a purpose."
            iconSrc={Cubes}
          />
          <Card
            title="Bold"
            description="Our style is modern, sleek, and minimal, using clean lines and bold choices that make a statement."
            iconSrc={Lightning}
          />
          <Card
            title="Client - centered"
            description=" Your vision is our priority. We work closely with clients, valuing open communication and feedback at every step."
            iconSrc={Circle}
          />
          <Card
            title="Creative excellence"
            description="Our team is composed of experienced designers who bring fresh, innovative perspectives to each project"
            iconSrc={Star}
          />
        </div>
      </div>
    </section>
  );
};
