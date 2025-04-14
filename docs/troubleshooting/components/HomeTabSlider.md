# HomeTab 슬라이더 UI 트러블슈팅

## UI 구현 결과

<img src="https://github.com/user-attachments/assets/2c8c06bc-2b4c-42f3-8188-eb01ec5f6f2c" width="300" height="50" alt="HomeTab Slider UI" />

## 문제 상황

- 슬라이더의 위치가 정확하게 계산되지 않음
- 초기 렌더링 시 ref.current가 null로 나타남
- 탭 변경 시 슬라이더 위치가 부정확하게 이동

## 원인 분석

1. **ref 접근 시점 문제**

   - Next.js의 서버 사이드 렌더링(SSR) 환경에서 컴포넌트가 마운트되기 전에 ref에 접근 시도
   - 클라이언트 사이드 하이드레이션 전에 DOM 요소에 접근하려고 함

2. **위치 계산 로직 문제**
   - 이전 탭의 너비만 고려하여 계산
   - gap 값과 padding이 계산에 반영되지 않음
   - 부모 요소의 위치를 기준으로 한 상대적 위치 계산 미흡

## 해결 방법

1. **useEffect를 활용한 마운트 후 접근**

```typescript
useEffect(() => {
  if (ref.current) {
    const reactSelectedTab = ref.current.children[selectedIndex];
    const selectedTabWidth = reactSelectedTab?.clientWidth;
    const selectedTabLeft = reactSelectedTab?.getBoundingClientRect().left ?? 0;
    const parentClientLeft = ref.current.getBoundingClientRect().left ?? 0;

    setSliderProps({
      width: selectedTabWidth ?? 0,
      left: selectedTabLeft - parentClientLeft,
    });
  }
}, [selectedIndex, router.query.tab]);
```

2. **위치 계산 로직 상세 설명**

   - **선택된 탭의 너비 계산**

     ```typescript
     const selectedTabWidth = reactSelectedTab?.clientWidth;
     ```

     - `clientWidth`: 선택된 탭 요소의 실제 너비 (padding 포함, margin/border 불포함)
     - 선택된 탭이 없을 경우를 대비해 옵셔널 체이닝 사용

   - **절대 위치 계산**

     ```typescript
     const selectedTabLeft =
       reactSelectedTab?.getBoundingClientRect().left ?? 0;
     const parentClientLeft = ref.current.getBoundingClientRect().left ?? 0;
     ```

     - `getBoundingClientRect()`: 뷰포트 기준의 요소 위치와 크기 정보 반환
     - `left`: 뷰포트 왼쪽 경계로부터의 거리
     - 부모 요소의 left 값을 빼서 상대적 위치 계산

   - **상대적 위치 계산**
     ```typescript
     left: selectedTabLeft - parentClientLeft;
     ```
     - 선택된 탭의 절대 위치에서 부모 요소의 절대 위치를 빼서 상대적 위치 계산
     - 이렇게 하면 부모 요소 내에서의 정확한 상대적 위치를 얻을 수 있음

3. **태그 구조**

```tsx
<HomeTabContainer>
  <HomeTabWrapper>
    <HomeTabGroup ref={ref}>
      {TAB_LIST.map(tab => (
        <TabItem
          key={tab.id}
          info={tab}
          isSelected={selectedTab === tab.id}
          onClick={() => handleTabClick(tab.id)}
        />
      ))}
      <Slider width={sliderProps.width} left={sliderProps.left} />
    </HomeTabGroup>
  </HomeTabWrapper>
</HomeTabContainer>
```

4. **CSS 스타일링**

````typescript
const HomeTabContainer = styled.div`
  position: sticky;
  top: 64px;
  width: 100%;
  z-index: 100;
  pointer-events: none;
  display: flex;
  justify-content: center;
`;

const HomeTabWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const HomeTabGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 500px;
  background-color: #17171c;
  pointer-events: all;
  box-shadow: rgba(2, 9, 19, 0.91) 0px 2px 30px 0px;
`;

const Slider = styled.div<{ width: number; left: number }>`
  position: absolute;
  height: 36px;
  border-radius: 700px;
  background-color: #2c2d33;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  left: ${({ left }) => `${left}px`};
  width: ${({ width }) => `${width}px`};
`;

const HomeTabItem = styled.button<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  border-radius: 400px;
  padding: 0 14px;
  color: ${({ selected }) => (selected ? '#FFFFFF' : '#9DA3B3')};
  gap: 6px;
  background-color: transparent;
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  z-index: 1;

  &:hover {
    color: #ffffff;
  }
`;

5. **상태 관리 개선**

```typescript
const [sliderProps, setSliderProps] = useState({ width: 0, left: 0 });
````
