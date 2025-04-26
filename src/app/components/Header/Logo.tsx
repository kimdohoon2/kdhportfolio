"use client";

import Link from "next/link";
import styles from "@/app/components/Header/Logo.module.scss";

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <Link href="/" className={styles.logoText}>
        KDH
      </Link>
    </div>
  );
}
