import React from "react";
import { Header } from "./ui/header/header";
import { HeroSection } from "./ui/hero-section/heroSection";
import styles from './homeMain.module.scss'
import { Footer } from "./ui/footer/footer";

export const HomeMain: React.FC = ()=> {
    return (
        <div className={styles.homeMain}> 
            <Header />
            <HeroSection />
            <Footer />
        </div>
    )
}