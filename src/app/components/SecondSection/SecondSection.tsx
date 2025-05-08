"use client";

import { useEffect, useRef } from "react";
import styles from "@/app/components/SecondSection/SecondSection.module.scss";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRightIcon, GithubIcon, LinkIcon } from "@/app/components/Icons";
import { useCircleMove } from "@/app/hooks/useCircleMove";
import { projects } from "@/app/data/project";

export default function SecondSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyWrapRef = useRef<HTMLDivElement>(null);
  const workRefs = useRef<(HTMLDivElement | null)[]>([]);
  const handleCircleMove = useCircleMove(styles.smallCircle);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const cleanup = () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };

    cleanup();
    gsap.registerPlugin(ScrollTrigger);

    const timer = setTimeout(() => {
      if (!sectionRef.current || !stickyWrapRef.current) return;

      const maxScrollHeight = `${projects.length * 100}vh`;
      sectionRef.current.style.height = maxScrollHeight;

      const workAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: stickyWrapRef.current,
          pinSpacing: true,
          scrub: 0.5,
          anticipatePin: 0.5,
          markers: false,
          id: "work_pin_section",
        },
      });

      workRefs.current.forEach((ref, index) => {
        if (!ref || index === projects.length - 1) return;

        gsap.set(`.${styles[`work${index + 1}`]}`, {
          bottom: "0%",
        });

        workAnimation.to(
          `.${styles[`work${index + 1}`]}`,
          {
            bottom: "100%",
            duration: 1,
            ease: "power1.inOut",
          },
          index > 0 ? ">" : 0
        );
      });
    }, 300);

    return () => {
      clearTimeout(timer);
      cleanup();
    };
  }, []);

  const setWorkRef = (element: HTMLDivElement | null, index: number) => {
    workRefs.current[index] = element;
  };

  return (
    <section id="work" ref={sectionRef} className={styles.workSection}>
      <div ref={stickyWrapRef} className={styles.workStickyWrap}>
        {projects.map((work, index) => (
          <div
            key={work.id}
            ref={(el) => setWorkRef(el, index)}
            className={`${styles.workCon} ${styles[`work${index + 1}`]}`}
            style={{ zIndex: -(index + 1) }}
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

                <div className={styles.workLinkBox}>
                  {work.id !== 3 && work.id !== 4 && (
                    <div className={styles.pdfBox}>
                      <Link href={`/work/${work.id}`}>
                        프로젝트 설명 바로가기
                      </Link>
                      <Link
                        className={styles.aCircle}
                        href={`/work/${work.id}`}
                        onMouseMove={handleCircleMove}
                        onMouseEnter={handleCircleMove}
                        aria-label={`프로젝트 설명 바로가기 ${work.title}`}
                      >
                        <span className={styles.smallCircle}></span>
                        <ArrowRightIcon
                          className={styles.arrowIcon}
                          fill="black"
                        />
                      </Link>
                    </div>
                  )}

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
                        aria-label={`홈페이지 바로가기 ${work.title}`}
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
                        aria-label={`깃헙 바로가기 ${work.title}`}
                      >
                        <span className={styles.smallCircle}></span>
                        <GithubIcon className={styles.gitIcon} fill="black" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              <div className={styles.workBox}>
                <div className={styles.workImg}>
                  {work.siteLink ? (
                    <Link
                      href={work.siteLink}
                      target="_blank"
                      aria-label={`프로젝트 이미지 ${work.title}`}
                    >
                      <div className={styles.imageWrapper}>
                        <Image
                          src={work.imgSrc || ""}
                          alt={work.title || ""}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          style={{ objectFit: "cover" }}
                          priority={index < 2}
                          aria-label={`프로젝트 이미지 ${work.title}`}
                        />
                      </div>
                    </Link>
                  ) : (
                    <div className={styles.imageWrapper}>
                      <Image
                        src={work.imgSrc || ""}
                        alt="추가 프로젝트 이미지"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: "cover" }}
                        aria-label={`추가 프로젝트 이미지 ${work.title}`}
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
