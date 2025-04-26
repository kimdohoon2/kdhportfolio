"use client";

import { GithubIcon, BlogIcon } from "@/app/components/Icons";
import styles from "@/app/components/SnsBox.module.scss";
import { useCircleMove } from "@/app/hooks/useCircleMove";

export default function SnsBox() {
  const handleCircleMove = useCircleMove(styles.smallCircle);

  return (
    <div className={styles.snsBoxContainer}>
      <div className={styles.snsBoxItem}>
        <a
          className={styles.snsBoxLink}
          href="https://github.com/kimdohoon2"
          target="_blank"
          onMouseMove={handleCircleMove}
          onMouseEnter={handleCircleMove}
        >
          <span className={styles.smallCircle}></span>
          <div className={styles.snsBoxLinkIcon}>
            <GithubIcon fill="white" />
          </div>
        </a>
        <a
          className={styles.snsBoxLink}
          href="https://kimdohoon2.github.io/"
          target="_blank"
          onMouseMove={handleCircleMove}
          onMouseEnter={handleCircleMove}
        >
          <span className={styles.smallCircle}></span>
          <div className={styles.snsBoxLinkIcon}>
            <BlogIcon fill="white" />
          </div>
        </a>
      </div>
    </div>
  );
}
