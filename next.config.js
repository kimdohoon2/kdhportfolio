/** @type {import('next').NextConfig} */
const nextConfig = {
  // 타입스크립트 오류는 표시하되 빌드 중단은 방지
  typescript: {
    ignoreBuildErrors: true, // 빌드 중에만 오류 무시, 개발 중에는 정상 표시
  },

  // SASS 설정 - @import 경고만 필터링
  sassOptions: {
    logger: {
      warn: function (message) {
        // @import 관련 경고만 무시
        return message.includes("@import") ? null : console.warn(message);
      },
    },
  },

  // 필요한 컴파일러 설정
  compiler: {
    styledComponents: true,
  },

  // SVG 파일 지원 설정
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
