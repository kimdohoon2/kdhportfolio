"use client";

import { useState } from "react";
import styles from "@/app/components/Header/Header.module.scss";
import Logo from "@/app/components/Header/Logo";
import Navigation from "@/app/components/Header/Navigation";
import NavTrigger from "@/app/components/Header/NavTrigger";

export default function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <header className={`${styles.headerContainer} ${isMenuActive ? "on" : ""}`}>
      <div className={styles.headerWrap}>
        <Logo />
        <NavTrigger isActive={isMenuActive} onClick={toggleMenu} />
        <Navigation isActive={isMenuActive} />
      </div>
    </header>
  );
}
