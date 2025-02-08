import React from "react";
import styles from "./list.module.scss";
import { Card } from "../card/card";

export const List: React.FC = () => {
  return (
    <div className={styles.list}>
      <Card
        name="Sophia Nguyen"
        role="Founder of Lumina Tech"
        quote="Schrift brought our brand to life with a design that perfectly captures our identity. Their bold approach and attention to detail exceeded our expectations!"
      />
      <Card
        name="Isabelle Martinez"
        role="Director at GreenSphere"
        quote="Working with Schrift was seamless and inspiring. Their creativity and dedication made our rebranding process a complete success."
      />
      <Card
        name="Liam Carter"
        role="Co-founder of VentureStudio"
        quote="Schrift's designs are both innovative and purposeful. They helped us create a website that truly stands out and resonates with our audience."
      />
      <Card
        name="Amara Okafor"
        role="CEO of NovaEdge"
        quote="The Schrift team transformed our vision into a sleek and modern digital experience. The precision in their work is unmatched!"
      />
      <Card
        name="Priya Mehta"
        role="COO of Elevate Systems"
        quote="Their commitment to excellence is inspiring. Schrift’s work was pivotal in helping us stand out in a competitive market."
      />
      <Card
        name="Carlos Rivera"
        role="Founder of Arc & Co"
        quote="From start to finish, Schrift’s professionalism and creativity shined through. They’ve helped us establish a powerful and cohesive brand identity."
      />
    </div>
  );
};
