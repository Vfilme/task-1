import Link from "next/link";
import React from "react";
import styles from './header.module.scss';
import vectorLogo from '../../assets/vectorLogo.svg';
import Image from "next/image";

export const Header: React.FC = ()=> {
    return (
    <nav className={styles.navbar}>
    <div className={styles.logo}> 
            <span>schrift</span>
            <Image src={vectorLogo} alt="" />
    </div>
    <ul className={styles.list}>
        <li><Link href=''>about</Link></li>
        <li><Link href=''>services</Link></li>
        <li><Link href=''>portfolio</Link></li>
        <li>
            <Link href='' className={styles.contactText}>
                <span>let's talk</span><Image className={styles.arrowUpRigth} src={vectorLogo} alt=""/>
            </Link>
        </li>
    </ul>
</nav>
)
}