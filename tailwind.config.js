/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/feature/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 텍스트 색상
        white: '#e4e4e5', // 기본 흰색 텍스트
        brightWhite: '#fdfdff', // 밝은 흰색 텍스트
        lightGray: '#c3c3c3', // 연한 회색 텍스트
        gray: '#8b8b8e', // 중간 회색 텍스트
        darkGray: '#9292a4', // 진한 회색 텍스트
        tapBackground: '#3A3A3C',

        // 주식 관련 색상
        stockRedUp: '#ff4444', // 상승 빨간색
        stockBlueDown: '#449bff', // 하락 파란색

        // 배경/하이라이트 색상
        hoverHighlight: '#D1D1FD', // 호버 시 하이라이트 색상

        // 슬라이더 관련 색상
        dark: '#17171c', // 어두운 배경색
        darkHover: '#3c3c3e', // 어두운 호버 색상
        borderGray: '#3c3c47', // 테두리 회색

        // 거래 상태 관련 색상
        hoverDark: '#2C2C2E', // 거래 상태 호버 배경색
      },
    },
  },
  plugins: [],
  important: true,
};
