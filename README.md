# 토스증권 클론 프로젝트

토스증권의 UI/UX를 클론 코딩한 프로젝트입니다.

<img width="800" alt="image" src="https://github.com/user-attachments/assets/cd1c9af2-bd65-4b5b-93bf-b07619c2a050" />

## 기술 스택

- React
- TypeScript
- Next.js
- Tailwind CSS
- Styled-components
- React Query

## 주요 기능

### 1. 홈 탭 네비게이션

- 전체/국내/해외 탭 구현
- URL 파라미터를 통한 탭 상태 관리
- 부드러운 탭 전환 애니메이션

### 2. 주식 테마 슬라이더

- react-slick을 활용한 카드 슬라이더 구현
- 반응형 디자인 지원
- 좌우 네비게이션 버튼
- 테마별 주식 정보 표시

### 3. 실시간 차트

- 거래량/거래대금 기준 실시간 데이터 표시
- 기간별 필터링 기능
- 실시간 가격 변동 표시

### 4. 커뮤니티 섹션

- 인기 급상승 종목 표시
- 종목별 게시글 필터링
- 실시간 인기 게시글 목록

## 프로젝트 구조

```
src/
├── pages/           # 페이지 컴포넌트
│   ├── LiveChart/   # 실시간 차트 관련 컴포넌트
│   ├── SelectStock/ # 주식 테마 선택 관련 컴포넌트
│   └── Community/   # 커뮤니티 관련 컴포넌트
├── hooks/           # 커스텀 훅
├── constants/       # 상수 정의
├── types/          # TypeScript 타입 정의
└── data/           # 목업 데이터
```

## 주요 컴포넌트

### HomeTab

- 메인 네비게이션 탭 컴포넌트
- URL 기반 상태 관리
- 반응형 디자인

### SelectStock

- 주식 테마 카드 슬라이더
- 테마별 주식 정보 표시
- 좌우 슬라이드 네비게이션

### LiveChart

- 실시간 주식 정보 차트
- 기간별 필터링
- 거래량/거래대금 정보 표시

### Community

- 인기 게시글 목록
- 종목별 필터링
- 실시간 데이터 업데이트
