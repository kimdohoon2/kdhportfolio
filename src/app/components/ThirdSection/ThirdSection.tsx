"use client";

import styles from "@/app/components/ThirdSection/ThirdSection.module.scss";
import Image from "next/image";
import profile from "/public/about/profile.png";
import { DownloadIcon, MailIcon, PhoneIcon } from "@/app/components/Icons";
import Footer from "@/app/components/Footer/Footer";
export default function ThirdSection() {
  // PDF 파일 경로
  const resumePath = "/resume/김도훈-이력서.pdf";

  return (
    <section id="about" className={styles.thirdSection}>
      <p className={styles.thirdSectionTitle}>About Me</p>
      <div className={styles.thirdContainer}>
        <div className={styles.thirdSectionWrap}>
          <div className={styles.profileWrap}>
            <Image
              className={styles.profileImg}
              src={profile}
              alt="증명사진"
              width={280}
              height={201}
            />
          </div>
          <p className={styles.profilename}>Kim Do Hoon</p>
          <div className={styles.profileTextWrap}>
            <p className={styles.profileText1}>
              프론트엔드 개발은 단순히 UI를 구현하는 것을 넘어,
            </p>
            <p>
              사용자가 편리하게 서비스를 경험할 수 있도록 도와주는 일이라고
              생각합니다.
            </p>
            <p>
              저는 코드 한 줄 한 줄에 사용자 중심의 가치와 기술적 완성도를 담기
              위해 노력하며,
            </p>
            <p>
              문제 해결과 지속적인 개선을 통해 더 나은 사용자 경험을 추구하는
              프론트엔드 개발자로 성장하고자 합니다.
            </p>
          </div>
          <a
            href={resumePath}
            download="김도훈-이력서.pdf"
            className={styles.profileDownloadBtn}
          >
            <DownloadIcon className={styles.profileDownloadBtnIcon} />
            <p className={styles.profileDownloadBtnText}>이력서 다운로드</p>
          </a>
        </div>
        <div className={styles.aboutRightBox}>
          <div>
            <p className={styles.careerTitle}>Career</p>
            <p className={styles.careerText}>
              <span className={styles.careerTextSpan1}>2022.07 - 2023.10</span>
              <span>언제나 디자인 | 웹 퍼블리셔</span>
            </p>
            <p className={styles.careerText}>
              <span className={styles.careerTextSpan1}>2022.12 - 2024.05</span>
              <span>프리랜서 | 웹 디자이너 & 퍼블리셔</span>
            </p>
          </div>
          <div className={styles.educationBox}>
            <p className={styles.educationTitle}>Education</p>
            <p className={styles.educationText}>
              <span className={styles.careerTextSpan1}>2024.08 - 2025.02</span>
              <span>코드잇 스프린트 (프론트앤드 부트캠프 11기) | 수료</span>
            </p>
            <p className={styles.educationText}>
              <span className={styles.careerTextSpan1}>2016.03 - 2022.02</span>
              <span>한경대학교 영어학과 | 졸업</span>
            </p>
            <p className={styles.educationText}>
              <span className={styles.careerTextSpan1}>2021.01 - 2021.09</span>
              <span>SBS아카데미컴퓨터아트학원(웹 퍼블리셔 과정) | 수료</span>
            </p>
          </div>
          <div>
            <p className={styles.contactTitle}>Contact me</p>
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
        </div>
      </div>
      <Footer />
    </section>
  );
}
