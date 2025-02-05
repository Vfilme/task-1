import React from 'react';
import styles from './heroSection.module.scss';
import BlobTopRigth from '../../assets/blobTopRigth.svg';
import Barcode from '../../assets/barcode.svg';
import BlobCenter from '../../assets/blobCenter.svg';
import BlobBottomLeft from '../../assets/blobBottomLeft.svg';
import EllipseTop from '../../assets/ellipseTop.svg';
import EllipseBottom from '../../assets/ellipseBottom.svg';
import Star from '../../assets/star.svg';
import Image from 'next/image';

export const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroText}>
        <h3 className={styles.heroDate}>EST 21.12.24</h3>
        <p className={styles.heroDescription}>
          A place where design philosophy blends innovation and clarity to
          create impactful solutions
        </p>
      </div>

      <Image className={styles.barcode} src={Barcode} alt="21.12.24"></Image>

      <Image src={EllipseTop} className={styles.ellipse} alt="" />
      <Image src={EllipseBottom} className={styles.ellipse} alt="" />

      <Image
        className={`${styles.blobs} ${styles.blobTopRigth}`}
        src={BlobTopRigth}
        alt=""
      />
      <Image
        className={`${styles.blobs} ${styles.blobCenter}`}
        src={BlobCenter}
        alt=""
      />
      <Image
        className={`${styles.blobs} ${styles.blobBottomLeft}`}
        src={BlobBottomLeft}
        alt=""
      />

      <Image
        src={Star}
        alt=""
        className={`${styles.stars} ${styles.starRigth}`}
      />
      <Image
        src={Star}
        alt=""
        className={`${styles.stars} ${styles.starLeft}`}
      />

      <div className={styles.heroTitleContainer}>
        <h1 className={styles.heroTitle}>The Art of Bold Precision</h1>
      </div>
    </section>
  );
};
