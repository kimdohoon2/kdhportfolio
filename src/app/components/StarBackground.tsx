"use client";

import { useEffect, useRef } from "react";
import styles from "./StarBackground.module.scss";

interface Center {
  x: number;
  y: number;
}

export default function StarBackground() {
  // sky 요소에 대한 참조를 저장하기 위한 ref
  const skyRef = useRef<HTMLDivElement>(null);

  // 별을 생성하는 함수
  function createStars() {
    if (!skyRef.current) return;

    const sky = skyRef.current;
    sky.innerHTML = "";

    // 화면 중앙 좌표 계산
    const center: Center = {
      x: sky.clientWidth / 2,
      y: sky.clientHeight / 2,
    };

    // 360개의 별 생성 (360도 방향을 표현)
    for (let i = 0; i < 360; i++) {
      // 1px 또는 2px 크기의 별 랜덤 생성
      const size = Math.round(Math.random() + 1);

      // span 요소로 별 생성
      const root = document.createElement("span");

      // 별의 초기 위치를 화면 중앙으로 설정
      root.style.top = center.y + "px";
      root.style.left = center.x + "px";

      // CSS 클래스 적용:
      // - star: 별의 기본 스타일 (투명도, 색상, 그림자 등)
      // - size-1 또는 size-2: 별의 크기 지정
      // - axis-i: 별의 이동 방향과 애니메이션 속성 지정
      root.classList.add(
        styles.star,
        styles[`size-${size}`],
        styles[`axis-${i}`]
      );

      sky.appendChild(root);
    }
  }

  useEffect(() => {
    createStars();

    const handleResize = () => {
      createStars();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div id="sky" className={styles.starBackground} ref={skyRef}></div>;
}
