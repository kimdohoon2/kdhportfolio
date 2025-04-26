"use client";

import Link from "next/link";
import styles from "@/app/components/Header/NavItem.module.scss";

interface NavItemProps {
  item: string;
}

export default function NavItem({ item }: NavItemProps) {
  return (
    <li className={styles.navItemContainer}>
      <div className={styles.svgWrapper}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <rect className={styles.shape} />
        </svg>
        <Link className={styles.navLink} href={`#${item.toLowerCase()}`}>
          {item}
        </Link>
      </div>
    </li>
  );
}
