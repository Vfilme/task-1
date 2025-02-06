import React from "react";
import styles from "./services.module.scss";
import { ServicesHover } from "./ui/servicesHover";

export const Services: React.FC = () => {
  return (
    <section className={styles.services}>
      <div className={styles.text}>
        <h3 className={styles.title}>What we provide</h3>
        <p className={styles.description}>
          we transform ideas into impactful designs. From brand identities to
          digital experiences, our services blend creativity and strategy to
          make your vision stand out
        </p>
      </div>
      <ServicesHover />
    </section>
  );
};
