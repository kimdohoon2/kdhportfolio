"use client";

import { useEffect, useRef } from "react";
import styles from "@/app/components/SecondSection/SecondSection.module.scss";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRightIcon, GithubIcon, LinkIcon } from "@/app/components/Icons";
import { useCircleMove } from "@/app/hooks/useCircleMove";

// 작업 데이터 정의
const works = [
  {
    id: 1,
    title: "여행 어디가?",
    description:
      "한국관광공사 API를 활용하여 전국 숙박, 맛집, 관광지, 여행지 정보를 제공하는 여행 정보 서비스입니다.",
    tech: "기술 스택 : Next.js, TypeScript, Tailwind CSS, React Query, Zustand",
    projectLink: "./work1.html",
    siteLink: "https://koreantrip.vercel.app/",
    gitLink: "https://github.com/kimdohoon2/trip",
    imgSrc: "/work_bg/1_1.jpg",
    bgSrc: "/work_bg/1.jpg",
  },
  {
    id: 2,
    title: "Coworks",
    description: "To-do 리스트 형태로 업무 배정 및 현황 공유 서비스입니다.",
    tech: "기술 스택 : Next.js, TypeScript, Tailwind css, React-Query, Redux",
    projectLink: "./work2.html",
    siteLink: "https://team8-coworkers.vercel.app/",
    gitLink: "https://github.com/codeit-sprint-FE11-part4-8team/coworkers",
    imgSrc: "/work_bg/2_1.jpg",
    bgSrc: "/work_bg/2.jpg",
  },
  {
    id: 3,
    title: "다섯번째 계절과 카라반",
    description: "Website : 반응형 웹사이트",
    tech: "기술 스택 : HTML5, CSS3, JAVASCRIPT, JQUERY, GSAP, PHP",
    projectLink: "./work3.html",
    siteLink: "http://www.5th-season.co.kr/html/index.html",
    imgSrc: "/work_bg/3_1.jpg",
    bgSrc: "/work_bg/3.jpg",
  },
  {
    id: 4,
    description:
      "대표적으로 기재한 3개의 프로젝트 외에도 10개 이상의 웹사이트 구축을 하였습니다.",
    imgSrc: "/work_bg/4_1.jpg",
    bgSrc: "/work_bg/4.jpg",
  },
];

export default function SecondSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyWrapRef = useRef<HTMLDivElement>(null);
  const workRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleCircleMove = useCircleMove(styles.smallCircle);

  useEffect(() => {
    // 클라이언트 사이드에서만 실행
    if (typeof window === "undefined") return;

    // 모든 ScrollTrigger 인스턴스 정리 (중요)
    const cleanup = () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };

    // 컴포넌트 마운트 시 기존 ScrollTrigger 정리
    cleanup();

    // GSAP 초기화
    gsap.registerPlugin(ScrollTrigger);

    // 애니메이션 설정 지연 실행 (DOM이 완전히 로드된 후)
    const timer = setTimeout(() => {
      if (!sectionRef.current || !stickyWrapRef.current) return;

      console.log("Setting up GSAP animations");

      // 메인 섹션에 pin 설정 - 이 부분이 중요!
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: stickyWrapRef.current,
          anticipatePin: 1,
          scrub: 1,
          id: "work_section_pin",
          markers: false, // 디버깅용 마커 (필요 없으면 false로 설정)
        },
      });

      // 각 작업에 대한 애니메이션 설정
      workRefs.current.forEach((ref, index) => {
        if (!ref) return; // ref가 없는 경우 건너뛰기

        // 모든 작업에 동일한 애니메이션 적용 (마지막 작업 포함)
        const totalSegments = works.length; // 전체 작업 수
        const segmentSize = 100 / totalSegments; // 각 작업에 할당된 스크롤 비율

        // 각 작업의 시작과 끝 위치 계산
        const startPos = `${index * segmentSize}% top`;
        const endPos = `${(index + 1) * segmentSize}% top`;

        // 모든 작업에 동일한 애니메이션 적용
        gsap.fromTo(
          ref,
          { y: "0%" }, // 시작 위치
          {
            y: "-100%", // 끝 위치 (위로 밀어올림)
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: startPos,
              end: endPos,
              scrub: 1,
              id: `work_animation_${index + 1}`,
              onEnter: () => console.log(`Entering work ${index + 1}`),
              onLeave: () => console.log(`Leaving work ${index + 1}`),
            },
          }
        );
      });

      console.log("GSAP animations setup complete");
    }, 500);

    // 컴포넌트 언마운트 시 정리
    return () => {
      clearTimeout(timer);
      cleanup();
    };
  }, []);

  // 작업 요소의 ref 설정을 위한 헬퍼 함수
  const setWorkRef = (element: HTMLDivElement | null, index: number) => {
    workRefs.current[index] = element;
  };

  return (
    <section id="work" ref={sectionRef} className={styles.workSection}>
      <div ref={stickyWrapRef} className={styles.workStickyWrap}>
        {works.map((work, index) => (
          <div
            key={work.id || `work-${index}`}
            ref={(el) => setWorkRef(el, index)}
            className={`${styles.workCon} ${styles[`work${index + 1}`]}`}
            style={{ zIndex: works.length - index }} // 중요: z-index 동적 설정
          >
            <div className={styles.wrokWrap}>
              <div className={styles.workTextWrap}>
                <div className={styles.workInfoBox}>
                  {work.title && (
                    <h2 className={styles.workTitle}>{work.title}</h2>
                  )}
                  {work.description && (
                    <p className={styles.workInfoText1}>
                      {work.description}
                      <br />
                      {work.tech}
                    </p>
                  )}
                </div>

                {work.projectLink && (
                  <div className={styles.workLinkBox}>
                    <div className={styles.pdfBox}>
                      <Link href={work.projectLink} target="_blank">
                        프로젝트 설명 바로가기
                      </Link>
                      <Link
                        className={styles.aCircle}
                        href={work.projectLink}
                        target="_blank"
                        onMouseMove={handleCircleMove}
                        onMouseEnter={handleCircleMove}
                      >
                        <span className={styles.smallCircle}></span>
                        <ArrowRightIcon
                          className={styles.arrowIcon}
                          fill="black"
                        />
                      </Link>
                    </div>

                    {work.siteLink && (
                      <div className={styles.linkBox}>
                        <Link href={work.siteLink} target="_blank">
                          홈페이지 바로가기
                        </Link>
                        <Link
                          className={styles.aCircle}
                          href={work.siteLink}
                          target="_blank"
                          onMouseMove={handleCircleMove}
                          onMouseEnter={handleCircleMove}
                        >
                          <span className={styles.smallCircle}></span>
                          <LinkIcon className={styles.linkIcon} fill="black" />
                        </Link>
                      </div>
                    )}
                    {work.gitLink && (
                      <div className={styles.linkBox}>
                        <Link href={work.gitLink} target="_blank">
                          깃헙 바로가기
                        </Link>
                        <Link
                          className={styles.aCircle}
                          href={work.gitLink}
                          target="_blank"
                          onMouseMove={handleCircleMove}
                          onMouseEnter={handleCircleMove}
                        >
                          <span className={styles.smallCircle}></span>
                          <GithubIcon className={styles.gitIcon} fill="black" />
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className={styles.workBox}>
                <div className={styles.workImg}>
                  {work.siteLink ? (
                    <Link href={work.siteLink} target="_blank">
                      <div className={styles.imageWrapper}>
                        <Image
                          src={work.imgSrc}
                          alt={work.title || "프로젝트 이미지"}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          style={{ objectFit: "cover" }}
                          priority={index < 2} // 처음 2개 이미지는 빠르게 로드
                        />
                      </div>
                    </Link>
                  ) : (
                    <div className={styles.imageWrapper}>
                      <Image
                        src={work.imgSrc}
                        alt="추가 프로젝트 이미지"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
