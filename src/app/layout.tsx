import type { Metadata } from "next";
import "@/app/styles/globals.scss";
import Header from "@/app/components/Header/Header";
import SnsBox from "@/app/components/SnsBox";
import ScrollButton from "@/app/components/ScrollButton";

export const metadata: Metadata = {
  title: "프론트엔드 개발자 김도훈 포트폴리오",
  description:
    "항상 도전하고 성장해나가는 삶을 추구하는 프론트엔드 개발자 입니다.",
  keywords:
    "프론트엔드 개발자, 포트폴리오, 프론트엔드 포트폴리오, 개발자 포트폴리오",
  openGraph: {
    siteName: "프론트엔드 개발자 김도훈 포트폴리오",
    title: "프론트엔드 개발자 김도훈 포트폴리오",
    type: "website",
    description:
      "항상 도전하고 성장해나가는 삶을 추구하는 프론트엔드 개발자 입니다.",
    images: [
      {
        url: "https://koreantrip.vercel.app/meta/sum-logo.jpg",
        alt: "프론트엔드 개발자 김도훈 포트폴리오",
      },
    ],
    url: "https://koreantrip.vercel.app/",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className="port_wrap">
          <Header />
          <SnsBox />
          <ScrollButton />
          {children}
        </div>
      </body>
    </html>
  );
}
