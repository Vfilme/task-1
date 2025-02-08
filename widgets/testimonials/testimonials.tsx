import React from "react";
import styles from "./testimonials.module.scss";
import { List } from "./ui/list/list";
import Image from "next/image";
import Arrow from "./assets/arrow.svg";

export const Testimonials: React.FC = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.text}>
        <h3 className={styles.title}>What they say</h3>
        <p className={styles.description}>
          Our clients are at the heart of everything we do. Hear from the
          visionaries, innovators, and leaders who’ve partnered with Schrift to
          bring bold ideas to life through precise, impactful design.
        </p>
      </div>
      <List />
      <div className={styles.seeMore}>
        <span>see more</span>
        <Image src={Arrow} alt="" />
      </div>
    </section>
  );
};
