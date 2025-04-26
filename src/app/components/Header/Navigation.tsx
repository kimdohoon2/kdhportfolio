"use client";

import styles from "@/app/components/Header/Navigation.module.scss";
import NavItem from "@/app/components/Header/NavItem";

interface NavigationProps {
  isActive: boolean;
}

const MENU_ITEMS = ["HOME", "WORK", "ABOUT", "CONTACT"];

export default function Navigation({ isActive }: NavigationProps) {
  return (
    <nav
      className={`${styles.navigationContainer} ${isActive ? styles.active : ""}`}
    >
      <ul className={styles.navigationList}>
        {MENU_ITEMS.map((item, index) => (
          <NavItem key={index} item={item} />
        ))}
      </ul>
    </nav>
  );
}
