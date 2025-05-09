"use client";

import styles from "@/app/components/FirstSection/FirstSection.module.scss";
import Meteor from "@/app/components/Meteor";
import { useState, useEffect } from "react";
import StarBackground from "@/app/components/StarBackground";
export default function FirstSection() {
  // 애니메이션 상태를 관리하는 state
  const [titleVisible, setTitleVisible] = useState(false);
  const [contentVisibility, setContentVisibility] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    // 세션스토리지에서 애니메이션 재생 여부 확인
    const animationPlayed = sessionStorage.getItem("introAnimationPlayed");

    if (animationPlayed) {
      // 이미 애니메이션이 재생되었다면 모든 요소를 바로 표시
      setTitleVisible(true);
      setContentVisibility([true, true, true, true, true]);
      return;
    }

    const titleTimer = setTimeout(() => {
      setTitleVisible(true);
    }, 50);

    // 본문 p 태그 애니메이션은 제목 애니메이션 이후 순차적으로 시작
    const contentTimers: NodeJS.Timeout[] = [];

    for (let i = 0; i < 5; i++) {
      const timer = setTimeout(
        () => {
          setContentVisibility((prev) => {
            const updated = [...prev];
            updated[i] = true;
            return updated;
          });

          // 마지막 애니메이션이 끝나면 세션스토리지에 재생 완료 표시
          if (i === 4) {
            sessionStorage.setItem("introAnimationPlayed", "true");
          }
        },
        300 + i * 500
      );

      contentTimers.push(timer);
    }

    // 컴포넌트 언마운트 시 타이머 정리
    return () => {
      clearTimeout(titleTimer);
      contentTimers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  return (
    <section id="home" className={styles.firstSectionContainer}>
      <StarBackground />
      <Meteor count={4} />
      <div className={styles.firstSectionWrap}>
        <div className={styles.firstSectionBox}>
          <p
            className={`${styles.firstSectionText} ${titleVisible ? styles.visible : ""}`}
          >
            Frontend Developer
          </p>
          <div className={styles.firstSectionTextWrap}>
            <div className={styles.firstSectionTextContent}>
              <p className={contentVisibility[0] ? styles.visible : ""}>
                안녕하세요. UI를 넘어, 사용자 경험과 기술 완성도를 추구하는
                <span className={styles.firstSectionTextContentSpan}>
                  프론트엔드 개발자 김도훈
                </span>
                입니다.
              </p>
              <p className={contentVisibility[1] ? styles.visible : ""}>
                저는 단순한 UI 구현에 그치지 않고,
                <span className={styles.firstSectionTextContentSpan}>
                  리팩토링과 성능 개선을 통해
                </span>
                사용자가 불편함 없이 서비스를 이용할 수 있도록 개발합니다.
              </p>
              <p className={contentVisibility[2] ? styles.visible : ""}>
                또한,
                <span className={styles.firstSectionTextContentSpan}>
                  재사용성과 유지보수를
                </span>
                고려한 코드 작성은 물론, 웹 표준과 접근성 까지 신경 쓰며,
              </p>
              <p className={contentVisibility[3] ? styles.visible : ""}>
                <span className={styles.firstSectionTextContentSpan}>
                  문제 해결과 지속적인 개선을 통해 더 나은 사용자 경험을
                </span>
                만드는 개발자로 성장하고자 합니다.
              </p>
              <p className={contentVisibility[4] ? styles.visible : ""}>
                스크롤을 내려 더 많은 정보를 확인하세요!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
