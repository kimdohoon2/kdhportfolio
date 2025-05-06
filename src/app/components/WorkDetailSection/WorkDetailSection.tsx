"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import styles from "@/app/components/WorkDetailSection/WorkDetailSection.module.scss";
import { GithubIcon, LinkIcon } from "@/app/components/Icons";
import { useCircleMove } from "@/app/hooks/useCircleMove";
import { Project } from "@/app/types/project";
import headerStyles from "@/app/components/Header/Header.module.scss";

interface WorkDetailSectionProps {
  project: Project;
}

export default function WorkDetailSection({ project }: WorkDetailSectionProps) {
  const handleCircleMove = useCircleMove(styles.smallCircle);

  useEffect(() => {
    // 모바일 환경에서만 헤더에 mix-blend-mode 적용
    const mobileMediaQuery = window.matchMedia("(max-width: 768px)");

    const applyBlendMode = () => {
      if (mobileMediaQuery.matches) {
        const header = document.querySelector(
          `.${headerStyles.headerContainer}`
        ) as HTMLElement;
        if (header) {
          header.style.mixBlendMode = "difference";
        }
      }
    };

    applyBlendMode();
    mobileMediaQuery.addEventListener("change", applyBlendMode);

    return () => {
      const header = document.querySelector(
        `.${headerStyles.headerContainer}`
      ) as HTMLElement;
      if (header) {
        header.style.mixBlendMode = "";
      }
      mobileMediaQuery.removeEventListener("change", applyBlendMode);
    };
  }, []);

  return (
    <>
      <section className={styles.detailSection}>
        <div className={styles.workInfoBox}>
          <h1>{project.title}</h1>

          <div className={styles.workTxtBox}>
            <p>{project.detailInfo?.description1}</p>
            {project.detailInfo?.description2 && (
              <p>{project.detailInfo?.description2}</p>
            )}
          </div>
          <div className={styles.workSkillBox}>
            {project.detailInfo?.projectType && (
              <p className={styles.workSkill}>
                <strong>프로젝트 타입</strong> :{" "}
                {project.detailInfo.projectType}
              </p>
            )}
            {project.detailInfo?.time && (
              <p className={styles.workSkill}>
                <strong>제작 기간</strong> : {project.detailInfo.time}
              </p>
            )}
            {project.detailInfo?.TeamRole && (
              <p className={styles.workSkill}>
                <strong>팀 구성과 담당 역할</strong> :{" "}
                {project.detailInfo.TeamRole}
              </p>
            )}
            {project.detailInfo?.techDetail && (
              <p className={styles.workSkill + " " + styles.workMarginTop}>
                <strong>기술 스택</strong> : {project.detailInfo.techDetail}
              </p>
            )}
            {project.siteLink && (
              <div className={styles.linkBox}>
                <strong>프로젝트 링크</strong> :{" "}
                <div className={styles.linkBoxItem}>
                  <Link
                    className={styles.aCircle}
                    href={project.siteLink}
                    target="_blank"
                    onMouseMove={handleCircleMove}
                    onMouseEnter={handleCircleMove}
                  >
                    <span className={styles.smallCircle}></span>
                    <LinkIcon className={styles.linkIcon} fill="black" />
                  </Link>
                  <p>홈페이지 바로가기</p>
                </div>
                {project.gitLink && (
                  <div className={styles.linkBoxItem}>
                    <Link
                      className={styles.aCircle}
                      href={project.gitLink}
                      target="_blank"
                      onMouseMove={handleCircleMove}
                      onMouseEnter={handleCircleMove}
                    >
                      <span className={styles.smallCircle}></span>
                      <GithubIcon className={styles.gitIcon} fill="black" />
                    </Link>
                    <p>깃헙 바로가기</p>
                  </div>
                )}
              </div>
            )}
            {project.technicalChallenges && (
              <div className={styles.workSkill}>
                <strong>기술적 도전 및 해결</strong>
                <div className={styles.challengeList}>
                  {(project.technicalChallenges?.challenges || []).map(
                    (challenge, index) => (
                      <div key={index} className={styles.challengeItem}>
                        <strong>{challenge.title}</strong>
                        <div className={styles.challengeDetail}>
                          <p>
                            <span>
                              {challenge.title.includes("검색 UX") ||
                              challenge.title.includes("위치 기반")
                                ? "목적:"
                                : "문제:"}
                            </span>{" "}
                            {challenge.issue}
                          </p>
                          <div className={styles.solutionBox}>
                            <h4>해결 방법</h4>
                            <ul>
                              {Object.entries(challenge)
                                .filter(
                                  ([key, value]) =>
                                    key.startsWith("solution") &&
                                    value !== undefined &&
                                    value !== ""
                                )
                                .map(([, value], idx) => (
                                  <li key={idx}>{String(value)}</li>
                                ))}
                            </ul>
                          </div>
                          <div className={styles.resultBox}>
                            <h4>결과</h4>
                            <ul>
                              {Object.entries(challenge)
                                .filter(
                                  ([key, value]) =>
                                    key.startsWith("result") &&
                                    value !== undefined &&
                                    value !== ""
                                )
                                .map(([, value], idx) => (
                                  <li key={idx}>{String(value)}</li>
                                ))}
                            </ul>
                          </div>
                        </div>
                        {index <
                          (project.technicalChallenges?.challenges?.length ||
                            0) -
                            1 && (
                          <div className={styles.challengeDivider}></div>
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={styles.blogContainer}>
          <h2>관련 블로그</h2>
          {project.blog && (
            <div className={styles.blogList}>
              {project.blog.map((blogItem, index) => (
                <Link
                  href={blogItem.link}
                  target="_blank"
                  key={index}
                  className={styles.blogItem}
                >
                  <div className={styles.blogImageWrapper}>
                    <Image
                      src={blogItem.blogImgSrc || "/placeholder.jpg"}
                      alt={blogItem.title || "블로그 이미지"}
                      width={300}
                      height={200}
                      className={styles.blogImage}
                    />
                    <div className={styles.blogOverlay}></div>
                    <h3 className={styles.blogTitle}>{blogItem.title}</h3>
                    <span className={styles.blogReadMore}>자세히 보기</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
