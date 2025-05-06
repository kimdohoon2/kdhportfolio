"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "@/app/components/Header/Header.module.scss";
import Logo from "@/app/components/Header/Logo";
import Navigation from "@/app/components/Header/Navigation";
import NavTrigger from "@/app/components/Header/NavTrigger";

export default function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const pathname = usePathname();

  // 상세 페이지 확인 (pathname에 /work/숫자 형태가 있는지 확인)
  const isDetailPage = /\/work\/\d+/.test(pathname);

  // 메뉴 토글 함수
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  // 메뉴 닫기 함수
  const closeMenu = () => {
    setIsMenuActive(false);
  };

  // pathname이 변경되면 메뉴를 닫음
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <header className={`${styles.headerContainer} ${isMenuActive ? "on" : ""}`}>
      <div className={styles.headerWrap}>
        <Logo />
        {!isDetailPage && (
          <>
            <NavTrigger isActive={isMenuActive} onClick={toggleMenu} />
            <Navigation isActive={isMenuActive} onNavItemClick={closeMenu} />
          </>
        )}
      </div>
    </header>
  );
}
