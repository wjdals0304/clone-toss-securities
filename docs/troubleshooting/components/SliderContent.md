# SliderContent 슬라이더 UI 트러블슈팅

## UI 구현 결과

<img src="https://github.com/user-attachments/assets/e59c82a5-a2ef-486b-816d-332557287b78" width="916" alt="SliderContent UI" />

- react-slick을 사용한 카드 슬라이더
- 좌우 네비게이션 버튼
- 그라데이션 효과가 적용된 화살표 영역
- 3개의 카드가 동시에 보이는 슬라이드 구조
- 각 카드는 테마 정보와 관련 주식 정보 표시

## 문제 상황

1. **슬라이더 여백 문제**

   - 슬라이더 카드 간 간격이 불규칙적으로 나타남
   - 양쪽 끝 카드의 여백이 일정하지 않음
   - 슬라이드 시 카드 위치가 어긋나는 현상

2. **네비게이션 버튼 위치 문제**

   - 화살표 버튼이 슬라이더 영역을 벗어나는 현상
   - 그라데이션 배경과 버튼의 위치가 맞지 않음

3. **반응형 대응 문제**
   - 화면 크기 변경 시 슬라이더 레이아웃 깨짐
   - 모바일 환경에서 터치 스와이프 동작 부자연스러움

## 해결 방법

1. **슬라이더 여백 조정**

```css
.selectStockSlider {
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 20px;
}

.selectStockSlider :global(.slick-slider) {
  margin: 0 -50px; /* 양쪽 끝 여백 보정 */
}

.selectStockSlider :global(.slick-slide) {
  padding: 0 20px; /* 각 슬라이드 간격 조정 */
}

.selectStockSlider :global(.slick-track) {
  display: flex;
  margin-left: 0;
  margin-right: 0; /* 기본 마진 제거 */
}
```

2. **네비게이션 버튼 및 그라데이션 처리**

```typescript
function NextArrow(props: any) {
  const { onClick, currentSlide, slideCount } = props;

  if (currentSlide === slideCount - 2) return null;

  return (
    <div className="absolute right-0 top-0 h-full w-[150px] bg-[linear-gradient(270deg,#17171c_9%,transparent_100%)]">
      <button
        className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-dark hover:bg-darkHover border border-solid border-borderGray"
        onClick={onClick}
      >
        <span className="text-white text-xl">›</span>
      </button>
    </div>
  );
}
```

3. **슬라이더 설정 최적화**

```typescript
const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  swipeToSlide: true,
  touchThreshold: 10, // 모바일 스와이프 감도 조정
  beforeChange: (_: number, newIndex: number) => {
    setCurrentSlide(newIndex); // 현재 슬라이드 상태 관리
  },
};
```

## 주의사항

1. **CSS 모듈 사용**

   - global 선택자를 사용하여 react-slick의 기본 클래스 스타일 재정의
   - 컴포넌트 스코프 스타일링을 위해 CSS 모듈 사용
   - 기존 라이브러리 스타일과 충돌 방지

2. **조건부 렌더링**

   - 슬라이드 위치에 따른 화살표 버튼 표시/숨김 처리
   - 첫 번째와 마지막 슬라이드에서의 예외 처리

3. **성능 최적화**
   - 불필요한 리렌더링 방지를 위한 상태 관리
   - 터치 이벤트 최적화를 위한 threshold 설정
