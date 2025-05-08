import styles from "@/app/components/Header/Logo.module.scss";
import Link from "next/link";

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <Link href="/" className={styles.logoText}>
        KDH
      </Link>
    </div>
  );
}
