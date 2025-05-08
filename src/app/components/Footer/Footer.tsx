"use client";

import styles from "@/app/components/Footer/Footer.module.scss";

import { DownloadIcon, MailIcon, PhoneIcon } from "@/app/components/Icons";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Footer() {
  const resumePath = "/resume/김도훈-이력서.pdf";
  const btnWrapRef = useRef<HTMLDivElement>(null);
  const btnGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // hover 버튼 대상 요소
    const btnWrap = btnWrapRef.current;
    const btnGlow = btnGlowRef.current;

    if (!btnWrap || !btnGlow) return;

    // 초기 radial-gradient 값 설정
    gsap.set(btnGlow, {
      background:
        "radial-gradient(20.7% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
    });

    // hover 애니메이션 생성
    const enterAnimation = gsap.to(btnGlow, {
      background:
        "radial-gradient(77.7% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
      duration: 0.5,
      ease: "power2.out",
      paused: true,
    });

    // hover 이벤트 리스너 추가
    btnWrap.addEventListener("mouseenter", () => enterAnimation.play());
    btnWrap.addEventListener("mouseleave", () => enterAnimation.reverse());

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      btnWrap.removeEventListener("mouseenter", () => enterAnimation.play());
      btnWrap.removeEventListener("mouseleave", () => enterAnimation.reverse());
    };
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerTopLine}></div>
        <div className={styles.footerContentWrap}>
          <div>
            <p className={styles.contactTitle}>Contact me</p>
            <p className={styles.contactText}>
              함께 일하고 싶은 프론트엔드 개발자 찾고 계신가요?
            </p>
            <p className={styles.contactText}>언제든 연락주세요!</p>
          </div>
          <div className={styles.downloadBtnWrap} ref={btnWrapRef}>
            <a
              className={styles.profileDownloadBtn}
              href={resumePath}
              download="김도훈-이력서.pdf"
            >
              <DownloadIcon className={styles.profileDownloadBtnIcon} />
              <p className={styles.profileDownloadBtnText}>이력서 다운로드</p>
            </a>
            <div className={styles.downloadBtn2} ref={btnGlowRef}></div>
          </div>
          <div className={styles.contactWrap}>
            <div className={styles.contactWrapItem}>
              <a
                className={styles.contactWrapItemCircle}
                href="tel:010-5703-3994"
                data-tel="010-5703-3994"
              >
                <PhoneIcon className={styles.contactWrapItemIcon} />
              </a>
              <a
                className={styles.contactWrapItemText}
                href="tel:010-5703-3994"
                target="_parent"
              >
                010-5703-3994
              </a>
            </div>
            <div className={styles.contactWrapItem}>
              <a
                className={styles.contactWrapItemCircle}
                href="mailto:kingyska@nate.com"
                data-email="kingyska@naver.com"
              >
                <MailIcon className={styles.contactWrapItemIcon} />
              </a>
              <a
                className={styles.contactWrapItemText}
                href="mailto:kingyska@nate.com"
                data-email="kingyska@naver.com"
              >
                kingyska@nate.com
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottomLine}></div>
      </div>
      <div className={styles.copyrightWrap}>
        <p className={styles.copyright}>
          &copy; 2025 Kim Do Hoon. All rights reserved. Design & Development by
          Kim Do Hoon.
        </p>
      </div>
    </footer>
  );
}
