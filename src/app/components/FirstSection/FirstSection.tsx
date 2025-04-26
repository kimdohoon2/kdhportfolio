"use client";

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
  return (
    <section className={styles.firstSectionContainer} id="Home">
      <video
        className={styles.video}
        src="./video/bg-video.mp4"
        autoPlay
        playsInline
        loop
        muted
      ></video>
      <div className={styles.firstSectionWrap}>
        <div>
          <div>
            <p className={styles.firstSectionText}>Frontend Developer</p>
          </div>
          <div className={styles.firstSectionTextWrap}>
            <div className={styles.firstSectionPerson}>
              <Image src={PersonIcon} alt="person" width={64} height={64} />
            </div>
            <div>
              <p className={styles.firstSectionText2}>
                안녕하세요. <span>프론트엔드 개발자 김도훈입니다.</span>
              </p>
              <p className={styles.firstSectionText2}>
                UI를 넘어, 사용자 경험과 기술 완성도를 추구하는 개발자 입니다.
              </p>
              <p className={styles.firstSectionText2}>
                스크롤을 내려 다양한 프로젝트를 만나보세요~!
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className={styles.skillsTitle}>Skills</p>
          <div className={styles.skillsContainer}>
            {SKILLS.map((skill, index) => (
              <div className={styles.skillsContainerItem} key={index}>
                <div className={styles.skillsCircle}>
                  <Icon name={skill} size={40} />
                </div>
                <p className={styles.skillsCircleText}>{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
