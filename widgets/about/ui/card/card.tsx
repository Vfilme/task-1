import React from "react";
import styles from "./card.module.scss";
import Image from "next/image";
import Vector from "../../assets/vector.svg";
import Barcode from "../../assets/barcode.svg";

interface Props {
  title: string;
  description: string;
  iconSrc: string;
}

export const Card: React.FC<Props> = ({ title, description, iconSrc }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <Image className={styles.bolt} src={iconSrc} alt="" />
        <div className={styles.text}>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.paragraph}>{description}</p>
        </div>
      </div>
      <Image src={Vector} alt="" />
      <Image src={Barcode} alt="" />
    </div>
  );
};
