import React from "react";
import styles from "./links.module.scss";
import Link from "next/link";

export const Links: React.FC = () => {
  return (
    <div className={styles.links}>
      <nav className={styles.nav}>
        <Link href="">Dribbble</Link>
        <Link href="">Behance</Link>
        <Link href="">Instagram</Link>
        <Link href="">Twitter</Link>
      </nav>
      <span className={styles.brand}>Schrift</span>
    </div>
  );
};
