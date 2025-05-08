"use client";

import { GithubIcon, BlogIcon } from "@/app/components/Icons";
import styles from "@/app/components/SnsBox.module.scss";
import { useCircleMove } from "@/app/hooks/useCircleMove";
import Link from "next/link";

export default function SnsBox() {
  const handleCircleMove = useCircleMove(styles.smallCircle);

  return (
    <div className={styles.snsBoxContainer}>
      <div className={styles.snsBoxItem}>
        <Link
          className={styles.snsBoxLink}
          href="https://github.com/kimdohoon2"
          target="_blank"
          onMouseMove={handleCircleMove}
          onMouseEnter={handleCircleMove}
          aria-label="김도훈 깃허브"
        >
          <span className={styles.smallCircle}></span>
          <div className={styles.snsBoxLinkIcon}>
            <GithubIcon className={styles.githubIcon} fill="black" />
          </div>
        </Link>
        <Link
          className={styles.snsBoxLink}
          href="https://kimdohoon2.github.io/"
          target="_blank"
          onMouseMove={handleCircleMove}
          onMouseEnter={handleCircleMove}
          aria-label="김도훈 블로그"
        >
          <span className={styles.smallCircle}></span>
          <div className={styles.snsBoxLinkIcon}>
            <BlogIcon className={styles.blogIcon} fill="black" />
          </div>
        </Link>
      </div>
    </div>
  );
}
