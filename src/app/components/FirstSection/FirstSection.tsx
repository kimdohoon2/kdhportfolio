"use client";

import { useEffect, useRef } from "react";
import { Icon, PersonIcon } from "@/app/components/Icons";
import Image from "next/image";
import styles from "@/app/components/FirstSection/FirstSection.module.scss";

const SKILLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "jQuery",
  "React",
  "Next.js",
  "TypeScript",
  "Styled-components",
  "SCSS",
  "Tailwind",
  "React-query",
  "Redux",
  "Zustand",
  "Vercel",
];

export default function FirstSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // localStorage에서 play_video 플래그 확인
    const shouldPlayVideo = localStorage.getItem("play_video") === "true";

    if (shouldPlayVideo && videoRef.current) {
      // 비디오 재생
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((err) => {
        console.log(
          "자동 재생 정책 때문에 비디오를 재생할 수 없을 수 있습니다:",
          err
        );
      });

      // 플래그 초기화
      localStorage.removeItem("play_video");
    }
  }, []);

  return (
    <section id="home" className={styles.firstSectionContainer}>
      <video
        id="main-background-video"
        ref={videoRef}
        className={styles.video}
        autoPlay
        playsInline
        loop
        muted
        preload="auto"
      >
        <source src="/video/bg-video.mp4" type="video/mp4" />
        <p>
          브라우저가 HTML5 비디오를 지원하지 않습니다. 최신 브라우저로
          업데이트하세요.
        </p>
      </video>
      <div className={styles.firstSectionWrap}>
        <div>
          <div>
            <p className={styles.firstSectionText}>Frontend Developer</p>
          </div>
          <div className={styles.firstSectionTextWrap}>
            <div className={styles.firstSectionPerson}>
              <Image src={PersonIcon} alt="person" />
            </div>
            <div>
              <p className={styles.firstSectionText2}>
                안녕하세요. <span>프론트엔드 개발자 김도훈입니다.</span>
              </p>
              <p className={styles.firstSectionText2}>
                저의 포트폴리오에서 최신 웹 프로젝트를 만나보세요.
              </p>
              <p className={styles.firstSectionText2}>
                스크롤을 내려 더 많은 정보를 확인하세요!
              </p>
            </div>
          </div>
        </div>
        <p className={styles.skillsTitle}>Skills</p>
        <div className={styles.skillsContainer}>
          {SKILLS.map((skill, index) => (
            <div key={index} className={styles.skillsContainerItem}>
              <div className={styles.skillsCircle}>
                <Icon name={skill} className={styles.skillsIcon} />
              </div>
              <p className={styles.skillsCircleText}>{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
