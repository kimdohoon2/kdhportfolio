"use client";

import styles from "@/app/components/Header/Logo.module.scss";
import Link from "next/link";

export default function Logo() {
  const handleLogoClick = () => {
    // 메인 페이지로 이동 후 비디오를 찾아 재생하는 것은
    // 페이지 로드 이벤트에서 처리해야 함
    // 여기서는 글로벌 변수를 설정해 페이지 로드 시 비디오를 재생해야 함을 표시
    if (typeof window !== "undefined") {
      window.localStorage.setItem("play_video", "true");
    }
  };

  return (
    <div className={styles.logoContainer}>
      <Link href="/" onClick={handleLogoClick} className={styles.logoText}>
        KDH
      </Link>
    </div>
  );
}
