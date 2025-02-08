import Image from "next/image";
import React from "react";
import styles from "./stars.module.scss";
import BottomCenterStar from "../../assets/bottomCenterStar.svg";
import TopLeftStar from "../../assets/topLeftStar.svg";
import BottomLeftStar from "../../assets/bottomLeftStar.svg";
import TopRightBigStar from "../../assets/topRightBigStar.svg";
import TopRightSmallStar from "../../assets/topRightSmallStar.svg";

export const Stars: React.FC = () => {
  return (
    <>
      <Image
        className={`${styles.stars} ${styles.bottomCenter}`}
        src={BottomCenterStar}
        alt=""
      />
      <Image
        className={`${styles.stars} ${styles.topLeft}`}
        src={TopLeftStar}
        alt=""
      />
      <Image
        className={`${styles.stars} ${styles.bottomLeft}`}
        src={BottomLeftStar}
        alt=""
      />
      <Image
        className={`${styles.stars} ${styles.topRightBig}`}
        src={TopRightBigStar}
        alt=""
      />
      <Image
        className={`${styles.stars} ${styles.topRightSmall}`}
        src={TopRightSmallStar}
        alt=""
      />
    </>
  );
};
