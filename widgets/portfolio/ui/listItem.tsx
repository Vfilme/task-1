import React from "react";
import styles from "./listItem.module.scss";
import Image from "next/image";

interface Props {
  number: number;
  title: string;
  svgSrc: string;
}

export const ListItem: React.FC<Props> = ({ number, title, svgSrc }) => {
  return (
    <div className={styles.listItem}>
      <div className={styles.text}>
        <span>0{number}</span>
        <span>{title}</span>
      </div>
      <Image
        src={svgSrc}
        alt=""
        className={number % 2 == 0 ? styles.rotate : ""}
      />
    </div>
  );
};
