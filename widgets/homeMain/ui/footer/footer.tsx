import React from 'react';
import styles from './footer.module.scss';
import HeroButtonIcon from '../../assets/heroButtonIcon.svg';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <p>Bold Visions. Precise Execution</p>
      <hr className={styles.line} />
      <button className={styles.button}>
        <span>discover our work</span>
        <Image src={HeroButtonIcon} alt="" />
      </button>
    </div>
  );
};
