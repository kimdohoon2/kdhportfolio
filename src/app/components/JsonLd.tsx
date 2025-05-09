import Script from "next/script";

export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "김도훈",
    jobTitle: "프론트엔드 개발자",
    url: "https://kdhportfolio.vercel.app/",
    image: "https://kdhportfolio.vercel.app/meta/sum-logo.jpg",
    sameAs: ["https://github.com/kimdohoon2", "https://kimdohoon2.github.io/"],
    description:
      "항상 도전하고 성장해나가는 삶을 추구하는 프론트엔드 개발자 입니다.",
    knowsAbout: [
      "ReactJS",
      "NextJS",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "SCSS",
      "TailwindCSS",
      "Shadcn",
      "Radix",
      "Zustand",
      "React Query",
    ],
    hasSkill: [
      {
        "@type": "DefinedTerm",
        name: "프론트엔드 개발",
        description: "웹 애플리케이션의 사용자 인터페이스와 사용자 경험을 개발",
      },
      {
        "@type": "DefinedTerm",
        name: "반응형 웹 디자인",
        description: "다양한 화면 크기에 최적화된 사용자 인터페이스 구현",
      },
      {
        "@type": "DefinedTerm",
        name: "웹 성능 최적화",
        description: "웹 애플리케이션의 로딩 속도와 성능 개선",
      },
    ],
    workExample: [
      {
        "@type": "SoftwareApplication",
        name: "여행 어디가?",
        description:
          "한국관광공사 API를 활용하여 전국 숙박, 맛집, 관광지, 여행지 정보를 제공하는 여행 정보 서비스입니다.",
        url: "https://koreantrip.vercel.app/",
        sameAs: "https://github.com/kimdohoon2/trip",
        about: ["여행", "관광", "React Query", "무한스크롤", "위치 기반 추천"],
      },
      {
        "@type": "SoftwareApplication",
        name: "Coworks",
        description: "To-do 리스트 형태로 업무 배정 및 현황 공유 서비스입니다.",
        url: "https://team8-coworkers.vercel.app/",
        sameAs: "https://github.com/codeit-sprint-FE11-part4-8team/coworkers",
        about: [
          "업무 관리",
          "JWT 인증",
          "CI/CD",
          "Container/Presentational 패턴",
        ],
      },
    ],
  };

  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
