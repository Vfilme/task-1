import React from "react";
import styles from "./card.module.scss";
import Image from "next/image";
import Border from "../../assets/border.svg";

interface Props {
  name: string;
  role: string;
  quote: string;
}

export const Card: React.FC<Props> = ({ name, role, quote }) => {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <span className={styles.role}>{role}</span>
      </div>
      <Image src={Border} alt="" className={styles.border} />
      <p className={styles.quote}>{quote}</p>
    </div>
  );
};
