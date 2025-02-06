import React, { useState } from "react";
import styles from "./card.module.scss";

interface Props {
  title: string;
  desription: string;
  number: number;
}

const getPosition = (number: number): string => {
  switch (number) {
    case 1:
      return "topLeft";
    case 2:
      return "topRigth";
    case 3:
      return "bottomLeft";
    default:
      return "bottomRight";
  }
};

export const Card: React.FC<Props> = ({ title, desription, number }) => {
  const position = getPosition(number);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const cardClass = `${styles.card} ${styles[position]} ${isVisible ? styles.show : ""}`;

  return (
    <div
      className={cardClass}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div className={styles.content}>
        <p className={styles.number}>0{number}</p>
        <div className={styles.text}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{desription}</p>
        </div>
      </div>
    </div>
  );
};
